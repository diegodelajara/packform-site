import React from "react";
import { Containerstyles } from "./Container.style";

type ContainerProps = {
  title?: string | undefined;
  body: React.ReactNode;
  bgcolor: string;
  textColor?: string;
};

export default function Container({
  title,
  bgcolor,
  body,
  textColor,
}: ContainerProps) {
  return (
    <Containerstyles bgcolor={bgcolor} textColor={textColor}>
      {title && <h2>{title}</h2>}
      {body}
    </Containerstyles>
  );
}
