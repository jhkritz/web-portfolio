import { Navbar } from "@nextui-org/react";
import "./navbar.module.css";

export default function Nav() {
  return (
    <Navbar
      isBordered
      variant="static"
      disableShadow
      css={{
        $$backgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
        paddingBottom: "10vw",
      }}
    >
      <Navbar.Content
        variant={"underline-rounded"}
        hideIn="xs"
        css={{
          color: "White",
          paddingLeft: "68vw",
          paddingTop: "10vw",
        }}
      >
        <Navbar.Link href="#">WORK</Navbar.Link>
        <Navbar.Link href="#">ABOUT</Navbar.Link>
        <Navbar.Link href="#">CONTACT</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
