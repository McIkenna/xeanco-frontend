import React, { Component } from 'react'
import styles from "./Footer.module.css"
import {Link} from "react-router-dom"

export class Footer extends Component {
    render() {
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
				<li> <Link aria-current="page" to="/">Home</Link></li>
				<li><a href="/login">Login</a></li>
				<li><Link to="/register">Register</Link></li>
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

export default Footer
