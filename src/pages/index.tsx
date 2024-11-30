import Head from "next/head";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Buttons from "@/components/Buttons";
import Packform from "@/components/Packform/Packform";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import useGetDimensions from "@/hooks/useGetDimensions";
import { Homestyles } from "@/styles/Home.module";

export default function Home() {
  const { isDesktop } = useGetDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Homestyles isDesktop={isDesktop}>
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
            <>
              How we built USA’s largest distribution network
              <h3>Without owning a single warehouse or a truck.</h3>
            </>
          }
          bgcolor={"#000"}
          body={
            <aside>
              {isDesktop ? (
                <nav
                  className={`menu ${isMenuOpen && !isDesktop ? "open" : ""}`}
                >
                  <ul>
                    <li>
                      <a href="#home">Customer catalog</a>
                    </li>
                    <li>
                      <a href="#services">Team</a>
                    </li>
                    <li>
                      <a href="#contact">Media</a>
                    </li>
                  </ul>
                  <div className="buttons-container">
                    <button>Sing up</button>
                    <button>
                      <FaUser size={15} color={"white"} /> Login
                    </button>
                  </div>
                </nav>
              ) : null}
            </aside>
          }
        />
        <Container
          isMenuOpen={isMenuOpen}
          bgcolor={"#fff"}
          body={<Buttons />}
        />
        <Container
          isMenuOpen={isMenuOpen}
          title="What is Packform?"
          bgcolor={"#fff"}
          textColor="#333"
          body={<Packform />}
        />
        <Footer />
      </section>
    </Homestyles>
  );
}
