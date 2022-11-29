import * as React from "react";
import Blob from "../components/blob";
import Card from "../components/ProjectCard";
import Profile from "../components/profile";
import ProductCard from "../components/card";
import Snip from "../components/codesnip";

export default function App() {
  return (
    <div>
      <Blob></Blob>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <Profile></Profile>
      <Snip></Snip>
    </div>
  );
}
