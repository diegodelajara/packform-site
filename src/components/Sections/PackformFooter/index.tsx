import React from "react";
import { PackformsFootertyles } from "./PackformFooter.style";
import Divider from "@/components/Divider";

export default function PackformFooter() {
  return (
    <PackformsFootertyles>
      <Divider />
      <section>
        <article>
          <h3>For Customers</h3>
          <p>
            Helping packaging clients access industry best prices and solutions,
            with real time visibility over their orders.
          </p>
        </article>
        <article>
          <h3>For Dealerships</h3>
          <p>
            Helping sales professionals build their own packaging distribution
            businesses, focused on customers, not admin.
          </p>
        </article>
        <article>
          <h3>For Suppliers</h3>
          <p>
            Helping manufacturers and distributors win more business, by
            providing feedback on every quote.
          </p>
        </article>
      </section>
    </PackformsFootertyles>
  );
}
