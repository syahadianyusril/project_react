import React, { Component } from "react";
import Slider from "./home/Slider.js";
import ContentHome from "./home/Content.js";
import ContentCalender from "./kalender/Content.js";
import Footer from "./component/Footer.js";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "./Store";
import foto from "./assets/img/propil.jpg";

class App extends Component {
  state = {
    listEvents: []
  };
  componentDidMount = () => {
    this.props.getEvents().then(() => {
      console.log("ini hasil events", this);
      this.setState({
        listEvents: this.props.listEvents
      });
    });
  };
  handleClick = e => {
    this.props.history.replace("/readmore");
  };

  render() {
    // console.log("stateeeee", this.state.listEvents);
    console.log("login status", this.props.is_login);
    console.log("prooopppssss", this.props.listEvents);
    const { listEvents } = this.state;
    // console.log("this state list event", listEvents);
    // console.log('ayolah', listEvents.event[0].all_day);
    return (
      <div>
        <Slider />
        <div class="container-fluid">
          <div class="container-fluid">
            <hr />
            <div class="row">
              {listEvents.map((item, key) => {
                var created = item.created;
                var created1 = created.slice(0, 10);
                var time = item.start_time;
                var date = time.slice(0, 10);
                var hour = time.slice(11, 19);
                return (
                  <ContentHome
                    key={key}
                    title={item.title}
                    join={item.url}
                    venue={item.city_name}
                    date={date}
                    hour={hour}
                    desc={item.description}
                    created={created1}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, listEvents",
  actions
)(withRouter(App));
