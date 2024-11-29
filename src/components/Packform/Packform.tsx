import React from "react";
import Divider from "../Divider";
import { Packformstyles } from "./Packform.style";

export default function Packform() {
  return (
    <Packformstyles>
      <div>
        Packform is the{" "}
        <span>technology connecting suppliers, dealers and customers</span>, for
        USA’s largest Packaging distribution network. The platform streamlines
        the packaging procurement process, enabling Packform dealerships to
        provide <span>quick quotes through its global supplier network</span>,
        while allowing customers to{" "}
        <span>easily approve, manage, and track deliveries</span>. Powering the
        USA’s <span>largest B2B distribution network</span> (without owning a
        single truck or warehouse), Packform is transforming the way businesses
        procure goods.
      </div>

      <Divider />

      <h3>For Customers</h3>
      <p>
        Helping packaging clients access industry best prices and solutions,
        with real time visibility over their orders.
      </p>
      <h3>For Dealerships</h3>
      <p>
        Helping sales professionals build their own packaging distribution
        businesses, focused on customers, not admin.
      </p>

      <h3>For Suppliers</h3>
      <p>
        Helping manufacturers and distributors win more business, by providing
        feedback on every quote.
      </p>
    </Packformstyles>
  );
}
