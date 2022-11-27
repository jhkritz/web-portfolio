import * as React from "react";
import { Grid } from "@nextui-org/react";
import Blob from "../components/blob";
import Card from "../components/ProjectCard";
import NavBlob from "../components/navbarblob";

export default function App() {
  return (
    <div>
      {/* <NavBlob></NavBlob> */}

      <Blob></Blob>
      <Card></Card>
      {/* <Card5></Card5> */}
    </div>
  );
}
