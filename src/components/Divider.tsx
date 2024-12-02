import React from "react";

export default function Divider() {
  return (
    <span
      style={{
        borderBottom: "var(--border-base)",
        width: "100%",
        display: "block",
        marginBottom: "calc(var( --gutter) * 2)",
      }}
    ></span>
  );
}
