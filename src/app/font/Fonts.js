import { Roboto } from "next/font/google";
const RbootoFont = Roboto({
  weight: "100",
  subsets: ["latin"],
});
import React from "react";
//next js uses caching for font saving
const Fonts = () => {
  return <div className={RbootoFont.className}>Font with next js feature</div>;
};

export default Fonts;
