import Head from "next/head";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Buttons from "@/components/Sections/Buttons";
import Packform from "@/components/Sections/Packform/Packform";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import useGetDimensions from "@/hooks/useGetDimensions";
import { Homestyles } from "@/styles/Home.style";
import { breakpoints } from "@/utils/responsive";
import GMap from "@/components/GoogleMap";
import Footer from "@/components/Sections/Footer";
import PackformFooter from "@/components/Sections/PackformFooter";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  const { isDesktop } = useGetDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Homestyles breakpoints={breakpoints}>
      <Head>
        <title>An Intelligent Procurement Marketplace | Packform</title>
        <meta
          name="description"
          content="The fastest and the cheapest way to buy and sell packaging. Place an order in minutes. Always get the best price. Have it delivered to your warehouse with efficiency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Container
          isMenuOpen={isMenuOpen}
          title={
            <div className="title">
              <div>How we built USA’s largest distribution network</div>
              <div>Without owning a single warehouse or a truck.</div>
            </div>
          }
          bgcolor={"#000"}
          body={<GMap />}
        />
        <Container
          isMenuOpen={isMenuOpen}
          bgcolor={"#fff"}
          body={<Buttons />}
        />
        <Container
          isMenuOpen={isMenuOpen}
          title={<div className="title">What is Packform?</div>}
          bgcolor={"#fff"}
          textColor="#333"
          body={<Packform />}
        />
        <Container
          bgcolor={"#fff"}
          textColor="#333"
          body={<PackformFooter />}
        />
        <Footer />
        <FloatingButton />
      </section>
    </Homestyles>
  );
}
