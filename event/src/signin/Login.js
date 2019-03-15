import React, {Component} from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            console.log(localStorage)
            this.props.history.replace("/profil");
        });
    };
    
    render(){
        console.log("signin props", this.props);
        return (
            <div className="row">
                <div className="col-md-6 col-sm-6"></div>
                <div className="col-md-6 col-sm-6">
                    <section className="content signin">
                        <form onSubmit={e => e.preventDefault()}>
                            <br/><br/>
                            <h4>SignIn</h4>
                            <div>
                                <input 
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={e => this.props.setField(e)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={e => this.props.setField(e)}
                                />
                            </div>
                            <button onClick={() => this.doLogin()}>SignIn</button>
                            <button type="reset">Reset</button>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
};

export default connect (
    "is_login,email,full_name",
    actions
) (withRouter (SignIn));