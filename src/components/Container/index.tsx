import React from "react";
import { Containerstyles } from "./Container.style";

type ContainerProps = {
  bgcolor: string;
  textColor?: string;
  isMenuOpen?: boolean;
  body: React.ReactNode;
  title?: string | React.ReactNode;
};

export default function Container({
  body,
  title,
  bgcolor,
  textColor,
  isMenuOpen,
}: ContainerProps) {
  return (
    <Containerstyles
      bgcolor={bgcolor}
      textColor={textColor}
      isMenuOpen={isMenuOpen || false}
    >
      {title && <h2>{title}</h2>}
      {body}
    </Containerstyles>
  );
}
