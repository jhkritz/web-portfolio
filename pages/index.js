import * as React from "react";
import Blob from "../components/blob";
import Profile from "../components/profile";
import ProductCard from "../components/card";
import Carousel from "../components/carousel";
import Contact from "../components/contact";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      <Blob></Blob>
      <ProductCard></ProductCard>
      <Profile></Profile>
      <Carousel></Carousel>
      <Contact></Contact>
      <Analytics />
    </div>
  );
}
