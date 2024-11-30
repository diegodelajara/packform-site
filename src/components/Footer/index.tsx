import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Links from "./Links";
import { Footerstyles } from "./Footer.style";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const body: React.ReactNode = (
  <>
    <Logo />
    <section>
      <Container
        title="Packform"
        body={
          <Footerstyles>
            <Links links={["About us", "Team", "Media"]} />
          </Footerstyles>
        }
        bgcolor={"#000"}
      />
      <Container
        title="Spend Less"
        body={
          <Footerstyles>
            <Links links={["Customers", "Find Delearship"]} />
          </Footerstyles>
        }
        bgcolor={"#000"}
      />
      <Container
        title="Earn More"
        body={
          <Footerstyles>
            <Links links={["Suppliers", "Dealers"]} />
          </Footerstyles>
        }
        bgcolor={"#000"}
      />
      <Container
        title="Follow us"
        body={
          <Footerstyles>
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
          </Footerstyles>
        }
        bgcolor={"#000"}
      />
    </section>
  </>
);

export default function Footer() {
  return <Container body={body} bgcolor={"#000"} textColor="#fff" />;
}
