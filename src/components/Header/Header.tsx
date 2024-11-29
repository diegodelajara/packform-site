import React from "react";
import { Headerstyles } from "./Header.style";

export default function Header() {
  return (
    <Headerstyles>
      <h1>How we built USA’s largest distribution network</h1>
      <div className="subtitle">
        Without owning a single warehouse or a truck.
      </div>
      <article>
        <img src={"/images/map.png"} alt="" />
      </article>
    </Headerstyles>
  );
}
