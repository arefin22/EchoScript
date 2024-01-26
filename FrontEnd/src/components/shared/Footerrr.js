import Image from 'next/image';
import React from 'react';
import logo from "./../../assets/img/logo.png";

const Footer = () => {

    return (
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <Image src={logo} alt="Logo" className="w-48" />
            <p>Empowering Voices, Enriching Minds.</p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Research</a>
            <a className="link link-hover">Publication</a>
            <a className="link link-hover">Marketing</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;