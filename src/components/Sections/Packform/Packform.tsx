import React from "react";
import Divider from "../../Divider";
import { Packformstyles } from "./Packform.style";

export default function Packform() {
  return (
    <Packformstyles>
      <section>
        <article>
          Packform is the{" "}
          <span>technology connecting suppliers, dealers and customers</span>,
          for USA’s largest Packaging distribution network.
        </article>
        <article>
          The platform streamlines the packaging procurement process, enabling
          Packform dealerships to provide{" "}
          <span>quick quotes through its global supplier network</span>, while
          allowing customers to{" "}
          <span>easily approve, manage, and track deliveries</span>.
        </article>
        <article>
          Powering the USA’s <span>largest B2B distribution network</span>{" "}
          (without owning a single truck or warehouse), Packform is transforming
          the way businesses procure goods.
        </article>
      </section>
    </Packformstyles>
  );
}
