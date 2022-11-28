import * as React from "react";
import Blob from "../components/blob";
import Card from "../components/ProjectCard";
import Profile from "../components/profile";
import ProductCard from "../components/card";

export default function App() {
  return (
    <div>
      <Blob></Blob>
      <Card></Card>
      <ProductCard></ProductCard>
      <Profile></Profile>
    </div>
  );
}
