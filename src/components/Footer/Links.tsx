import React from "react";

type LinksContainerProps = {
  links: Array<string>;
};

export default function Links({ links }: LinksContainerProps) {
  return (
    <ul>
      {links.map((link, key) => (
        <li key={key}>{link}</li>
      ))}
    </ul>
  );
}
