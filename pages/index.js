import * as React from "react";
import { Grid } from "@nextui-org/react";
import Head from "next/head";
import Nav from "../components/navbar";
import { Card5 } from "../components/ProjectCard";

export default function App() {
  return (
    <div>
      <Nav></Nav>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={7}>
          <Card5 />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={7}>
          <Card5 />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={7}>
          <Card5 />
        </Grid>
      </Grid.Container>
    </div>
  );
}
