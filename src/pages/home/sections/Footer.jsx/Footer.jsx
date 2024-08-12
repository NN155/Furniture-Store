import React from "react";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { Logo } from "../../../../assets/images";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaPinterestSquare } from "react-icons/fa";
export function Footer() {
  return (
    <footer>
      <div className="footer-top ff-roboto">
        <div className="container">
          <div className="row">
            <div className="left-side col-lg-5 col-sm-12">
              <img src={Logo} alt="Logo m-2" />
              <p className="fz-22 color-black mt-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo
                eiusmod tempor incdididunt ut labore et dolore magna aliqua.
                Ut enim ad minzim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="social-media d-flex gap-2">
                <Link to="#"><FaFacebookSquare className="fz-40 color-black" /></Link>
                <Link to="#"><FaInstagramSquare className="fz-40 color-black" /></Link>
                <Link to="#"><FaLinkedin className="fz-40 color-black" /></Link>
                <Link to="#"><FaTwitterSquare className="fz-40 color-black" /></Link>
                <Link to="#"><FaPinterestSquare className="fz-40 color-black" /></Link>
              </div>
            </div>
            <div className="right-side col-lg-5 col-sm-12 ff-montserrat color-black ms-auto">
              <div class="container d-flex gap-5">
                <div class="column">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link to="#">HOME</Link></li>
                    <li><Link to="#">ABOUT US</Link></li>
                    <li><Link to="#">BLOG</Link></li>
                    <li><Link to="#">PRODUCTS</Link></li>
                  </ul>
                </div>
                <div class="column">
                  <h3>Support</h3>
                  <ul>
                    <li><Link to="#">HELP</Link></li>
                    <li><Link to="#">CONTACT</Link></li>
                    <li><Link to="#">POLICY</Link></li>
                    <li><Link to="#">SERVICE</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom gap-1">
        <FaRegCopyright />
        <p className="mb-0 ff-roboto">All Rights Reserved</p>
      </div>
    </footer>
  );
}