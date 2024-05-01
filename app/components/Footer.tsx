import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="footer justify-around p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Find a Store</a>
          <a className="link link-hover">Store Services</a>
          <a className="link link-hover">List of Brands</a>
          <a className="link link-hover">For the Professional</a>
          <a className="link link-hover">Find a Repair Shop</a>
          <a className="link link-hover">Coupons & Promotions</a>
        </nav>
        {/* <form> */}
        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Returns & Exchanges</a>
          <a className="link link-hover">Special Orders</a>
          <a className="link link-hover">Shipping and Delivery</a>
          <a className="link link-hover">Warranties</a>
          <a className="link link-hover">Professional Catalogs</a>
        </nav>

        {/* <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset> */}
        {/* </form> */}
      </div>
      <div className="px-32 text-sm pb-8">
            PROFESSIONAL PARTPEOPLE <br/>
            <span>Copyright 2024 Afripoint Consult Limited</span>
      </div>
    </footer>
  );
};

export default Footer;
