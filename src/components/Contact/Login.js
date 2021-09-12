import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./contact.module.css"
export class Login extends Component {
    render() {
        return (
            <div className={styles.login_cover}>
                

            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-sm-8">
                <div className={styles.reg_header}><h1>LOGIN PAGE</h1></div>
                   
                <form action="create-profile.html">
                
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
              </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
    </div>     
<div className="col-lg-6 col-sm-4"></div>
            </div>
           
            </div>
            </div>
        )
    }
}

export default Login
