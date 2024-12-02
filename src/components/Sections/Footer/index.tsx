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
      <Container
        title="Packform"
        body={
          <>
            <Links links={["About us", "Team", "Media"]} />
          </>
        }
        bgcolor={"#000"}
      />
    </div>
    <div className="spend-less">
      <Container
        title="Spend Less"
        body={
          <>
            <Links links={["Customers", "Find Delearship"]} />
          </>
        }
        bgcolor={"#000"}
      />
    </div>
    <div className="earn-more">
      <Container
        title="Earn More"
        body={
          <>
            <Links links={["Suppliers", "Dealers"]} />
          </>
        }
        bgcolor={"#000"}
      />
    </div>
    <div className="follow-us">
      <Container
        title="Follow us"
        body={
          <>
            <section>
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
            </section>
            <ul>
              <li>© 2024 Packform Pty Ltd</li>
              <li>Privacy Policy</li>
              <li>© 2024 Packform Pty Ltd</li>
            </ul>
          </>
        }
        bgcolor={"#000"}
      />
    </div>
  </Footerstyles>
);

export default function Footer() {
  return <Container body={body} bgcolor={"#000"} textColor="#fff" />;
}
