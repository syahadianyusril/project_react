import React, { Component } from "react";
import Slider from "./home/Slider.js";
import ContentHome from "./home/Content.js";
import Footer from "./component/Footer.js";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "./Store";

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

  render() {
    console.log("stateeeee", this.state.listEvents);
    console.log("prooopppssss", this.props.listEvents);
    const { listEvents } = this.state;
    console.log("this state list event", listEvents);
    // console.log('ayolah', listEvents.event[0].all_day);
    return (
      <div>
        <Slider />
        <div class="container-fluid">
          <div class="container-fluid">
            <hr />
            <div class="row">
              {listEvents.map((item, key) => {
                // const src_img = event.city_name
                // // const content = event[key].city_name
                return <ContentHome key={key} title={item.olson_path} />;
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
