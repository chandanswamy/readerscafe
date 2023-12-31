import React from 'react';
import logo from "../../assets/images/app_logo_rc.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaSquarePinterest, FaAmazon } from "react-icons/fa6";
import './index.css';

const Footer = () => {


  return (
    <footer className='footer' id='footerPage'>
        <div className='footer-content'>
            <div className='part-one'>
                <img src={logo} alt="Readers Cafe" width="135"/>
                <h3>Readers Cafe | A World of Stories</h3>
                <div>
                    <p>123 DLF Street, Hyderabad, India</p>
                    <p>Phone : (+91) 9848-22-0176</p>
                    <p>Email : readerscafe@abcbooks.org</p>
                </div>            
            </div>
            <div className='part-two'>
                <div className='icon'><FaFacebookSquare /></div>
                <div className='icon'><FaXTwitter /></div>
                <div className='icon'><FaInstagram /></div>
                <div className='icon'><FaSquarePinterest /></div>
                <div className='icon'><FaAmazon  /></div>
                <div className='icon'><FaLinkedin /></div>                
            </div>

            <div className='part-three'>
                <ul className='footer-list'> 
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>How to Listen</li>
                    <li>Listening Apps</li>
                    <li>Mobile Site</li>
                    <li>Hindi Audiobooks</li>
                    <li>Free Shows & Audiobooks</li>
                    <li>Learn more about membership</li>
                    
                </ul>
                <ul className='footer-list'>
                    <li>Best Sellers</li>
                    <li>New Releases</li>
                    <li>Indian Listens</li>
                    <li>Mysteries & Thrillers</li>
                    <li>Romance</li>
                    <li>Fiction</li>
                    <li>Sci-Fi & Fantasy</li>
                    <li>Self Development</li>
                </ul> 
            </div>            

            <p className='footer-text'>Stay Updated! Subscribe to our newsletter for the latest updates and exclusive offers.</p>

            <div className='part-four'>            
                <p>Copyright 2023 Readers Cafe, Inc</p>                
                <p>Conditions of Use</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
                <p>Recurring Payment Terms</p>
                <p>India (En)</p>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer