import { Card, Col, Row, Button, Text, Grid, Link } from "@nextui-org/react";

// export const Card5 = () => (
//   <Card css={{ w: "100%", h: "400px" }}>
//     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//       <Col>
//         <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
//           Your day your way
//         </Text>
//         <Text h3 color="white">
//           Your checklist for better sleep
//         </Text>
//       </Col>
//     </Card.Header>
//     <Card.Body css={{ p: 0 }}>
//       <Card.Image
//         src="https://nextui.org/images/card-example-5.jpeg"
//         objectFit="cover"
//         width="100%"
//         height="100%"
//         alt="Relaxing app background"
//       />
//     </Card.Body>
//     <Card.Footer
//       isBlurred
//       css={{
//         position: "absolute",
//         bgBlur: "#0f111466",
//         borderTop: "$borderWeights$light solid $gray800",
//         bottom: 0,
//         zIndex: 1,
//       }}
//     >
//       <Row>
//         <Col>
//           <Row>
//             <Col span={3}>
//               <Card.Image
//                 src="https://nextui.org/images/breathing-app-icon.jpeg"
//                 css={{ bg: "black", br: "50%" }}
//                 height={40}
//                 width={40}
//                 alt="Breathing app icon"
//               />
//             </Col>
//             <Col>
//               <Text color="#d1d1d1" size={12}>
//                 Breathing App
//               </Text>
//               <Text color="#d1d1d1" size={12}>
//                 Get a good night's sleep.
//               </Text>
//             </Col>
//           </Row>
//         </Col>
//         <Col>
//           <Row justify="flex-end">
//             <Button
//               flat
//               auto
//               rounded
//               css={{ color: "#94f9f0", bg: "#94f9f026" }}
//             >
//               <Text
//                 css={{ color: "inherit" }}
//                 size={12}
//                 weight="bold"
//                 transform="uppercase"
//               >
//                 Get App
//               </Text>
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Card.Footer>
//   </Card>
// );
export const Card5 = () => (
  <Card
    css={{
      p: "$20",
      mw: "90rem",
      height: "35rem",
      width: "90rem",
      alignSelf: "center",
      justifyItems: "left",
    }}
  >
    <Card.Header>
      <img
        alt="nextui logo"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width="34px"
        height="34px"
      />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
            Next UI
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>nextui.org</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body css={{ py: "$2" }}>
      <Text>Make beautiful websites regardless of your design experience.</Text>
    </Card.Body>
    <Card.Footer>
      <Link
        icon
        color="primary"
        target="_blank"
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </Card.Footer>
  </Card>
);
