import { useState } from "react";
import React, { FunctionComponent} from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: React.ReactNode;
  onClick: (num:number) => void;
//   onClick: () => number;
//   onClick: () => string;
  // children: any;
}
const Card: FunctionComponent<CardProps> = ({
  width,
  height,
  variant,
  onClick,
  children,
}) => {
    const[state,setState]=useState(0)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "2px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={()=>onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
