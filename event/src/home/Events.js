import React, { Component } from 'react';
import axios from 'axios';
import ContentHome from './Content';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {Redirect, withRouter} from "react-router-dom";


class Events extends Component {
    componentDidMount = () => {
        this.props.getEvents().then(
            () => {
                console.log("hasil ini",this)
            }
        )
    };

    render() {
        const {listEvents} = this.props;
            return (
                // console.log("hasil movies",listEvents)
                <div>
                    {listEvents.map((item, key) => {
                        return <ContentHome key={key} title={item.Title}  />
                        })
                    }
                </div>
                    
                )
    }
}
    

// export default News;
export default connect(
    "listEvents",
    actions
)(withRouter(Events));