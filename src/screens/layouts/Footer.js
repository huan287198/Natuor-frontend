import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="footer__logo"><img src="/img/logo-green.png" alt="Natour logo" /></div>
            <ul className="footer__nav">
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Download apps</Link></li>
                <li><Link to="#">Become a guide</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <p className="footer__copyright">&copy; by Huan. Feel free to use this project for your own purposes, EXCEPT producing your own course or tutorials!</p>
        </footer>
    )
  }
}

export default Footer;