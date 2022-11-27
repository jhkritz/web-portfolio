import * as React from "react";
import { Grid } from "@nextui-org/react";
import Blob from "../components/blob";
import Card from "../components/ProjectCard";
import Profile from "../components/profile";
import NavBlob from "../components/navbarblob";

export default function App() {
  return (
    <div>
      {/* <NavBlob></NavBlob> */}

      <Blob></Blob>
      <Card></Card>
      <Profile></Profile>
      {/* <Card5></Card5> */}
    </div>
  );
}
