import Head from "next/head";
import Header from "@/components/Header";
import "../styles/Home.module.css";
import Container from "@/components/Container";
import Buttons from "@/components/Buttons";
import Packform from "@/components/Packform/Packform";

export default function Home() {
  return (
    <>
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
        <Header />
        <Container
          title="How we built USA’s largest distribution network"
          bgcolor={"#000"}
          body={<h3>Without owning a single warehouse or a truck.</h3>}
        />
        <Container bgcolor={"#fff"} body={<Buttons />} />
        <Container
          title="What is Packform?"
          bgcolor={"#fff"}
          textColor="#333"
          body={<Packform />}
        />
      </section>
    </>
  );
}
