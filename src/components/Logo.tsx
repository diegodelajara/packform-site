import React from "react";
import Image from "next/image";

type LogoProps = {
  alt?: string;
  width?: number;
  height?: number;
};

export default function Logo({
  alt = "Logo",
  width = 184,
  height = 32,
}: LogoProps) {
  return (
    <Image
      src={"/images/packform-logo.png"}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
