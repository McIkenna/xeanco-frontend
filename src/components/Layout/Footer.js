import React, { Component } from 'react'
import styles from "./Footer.module.css"
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { logout } from '../../actions/UserAction'

export class Footer extends Component {
	logout(){
		this.props.logout();
		window.location.href = "/"
	}
	
    render() {
		const {validToken, user} = this.props.security;
		let securityLinks;

        if(validToken&&user){
            securityLinks = <div>
			<li ><Link onClick={this.logout.bind(this)} to="/">Logout</Link></li>
			<li><Link to="/register">Register</Link></li>
			</div>
        }else{
            securityLinks =  <div>
			<li><Link to="/login">Login</Link></li>
			
		</div>;;
        }
	
        return (
			
            <div>
          <footer>
	<div className={styles.content}>
		<div className={styles.top}>
			<div className={styles.media_icons}>
				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-instagram"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-youtube"></i></a>
			</div>
		</div>
		<div className={styles.link_boxes}>
			<ul className={styles.box}>
				<li className={styles.link_name}>Links</li>
				<li> <Link aria-current="page" to="#">Home</Link></li>
				{securityLinks}
				<li><a href="#">Contact</a></li>
				<li><Link aria-current="page" to="/about">About</Link></li>
				
			
			</ul>
			<ul className={styles.box}>
				<li className={styles.link_name}>Services</li>
				<li><a href="#">App Design</a></li>
				<li><a href="#">Web Design</a></li>
				<li><a href="#">Logo Design</a></li>
				<li><a href="#">Banner Design</a></li>
			
			</ul>
            <ul className={styles.box}>
				<li className={styles.link_name}>Other services</li>
				<li><a href="#">SEO</a></li>
				<li><a href="#">Content Marketing</a></li>
				<li><a href="#">Prints</a></li>
				<li><a href="#">Social Media</a></li>
			
			</ul>
			<ul  className={styles.box}>
				<li className={styles.link_name}>Contact</li>
				<li><a href="#">+91 8879887262</a></li>
				<li><a href="#">+91 8879887262</a></li>
				<li><a href="#">xeancointernationalltd@gmail.com</a></li>
				
			
			</ul>
			
	
	
	
		</div>
	</div>
	    <div className={styles.bottom_details}>
      <div className={styles.bottom_text}>
        <span className={styles.copyright_text}>Copyright © 2021 <a href="/">Xeanco.</a></span>
        <span className={styles.policy_terms}>
          <a href="#">Privacy policy</a>
          
        </span>
      </div>
    </div>
</footer>
            </div>
        )
    }
}

Footer.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps =state => ({
    security: state.security
})
export default connect(mapStateToProps, {logout})(Footer)
