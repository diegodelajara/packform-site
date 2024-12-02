import React from "react";
import Links from "./Links";
import { Footerstyles } from "./Footer.style";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

const body: React.ReactNode = (
  <Footerstyles>
    <div className="logo">
      <Logo />
    </div>
    <div className="packform">
      <section>
        Packform
        <Links links={["About us", "Team", "Media"]} />
      </section>
    </div>
    <div className="spend-less">
      <section>
        Spend Less
        <Links links={["Customers", "Find Delearship"]} />
      </section>
    </div>
    <div className="earn-more">
      <section>
        Earn More
        <Links links={["Suppliers", "Dealers"]} />
      </section>
    </div>
    <div className="follow-us">
      <section>
        Follow us
        <div>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </section>
    </div>
    <div className="privacy-text">
      <ul>
        <li>© 2024 Packform Pty Ltd</li>
        <li>Privacy Policy</li>
        <li>© 2024 Packform Pty Ltd</li>
      </ul>
    </div>
  </Footerstyles>
);

export default function Footer() {
  return <Container body={body} bgcolor={"#000"} textColor="#fff" />;
}
