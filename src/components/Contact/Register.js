import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./contact.module.css"
import PropTypes from "prop-types"
import { createUser } from '../../actions/UserAction'

export class Register extends Component {

    constructor(){
        super()
        this.state = {
            name : "",
            username : "",
            password : "",
            confirmPassword: "",
            role : "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidUpdate(prevProps, prevState){
        if(prevProps.error){
            this.setState({errors: prevProps.error})
        }
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            name : this.state.name,
            username : this.state.username,
            password : this.state.password,
            confirmPassword: this.state.confirmPassword,
            role : this.state.role,
            errors: {}
        }
        this.props.createUser(newUser, this.props.history)

    }

    render() {
        return (
            
            <div className={styles.reg_cover}>
                

            <div className="container">
                <div className="row">
                <div className="col-md-6 col-sm-8"></div>
                <div className="col-md-6 col-sm-8">
                <div className={styles.reg_header}><h1>REGISTER NEW ADMIN</h1></div>
                   
                <form action="create-profile.html" onSubmit={this.onSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                </div>
               
                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
</div>     
            </div>
            </div>
            </div>
        )
    }
}

Register.propTypes ={
createUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {createUser})(Register)
