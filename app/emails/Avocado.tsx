import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const AvocadoEmail = () => (
  <Html>
    <Head />
    <Preview>
      A fine-grained personal access token has been added to your account
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>
          <strong>Avacado Blog</strong>
        </Text>

        <Section style={section}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Img
              src={`https://i.icanvas.com/RCI15?d=3&sh=s&s=xl&p=1&bg=g`}
              width="170"
              height="145"
              alt="V"
              className="my-0 mx-auto"
            />
            <Text style={articleText}>
              <strong>Appreciate your signup! Discover more of my work.</strong>
            </Text>
          </div>

          <Text style={text}>
            I would greatly appreciate it if you could take a moment to explore
            my other projects or works.
          </Text>

          <Button style={button} href="https://hubertle.online/">
            Check out my website!
          </Button>
        </Section>

        <Text style={footer}>
          The Avacado © ・ Digest inspiration for your next design ・San
          Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

export default AvocadoEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
  flex: "1",
};

const section = {
  padding: "24px",
  border: "solid 1px black",
  borderTop: "4px solid #90BB3F",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const articleText = {
  fontSize: "24px",
  margin: "0 0 10px 0",
  textAlign: "left" as const,
  padding: "0 28px",
};

const text = {
  margin: "20px 0 20px 0",
  textAlign: "left" as const,
  padding: "0 28px",
};

const button = {
  fontSize: "14px",
  backgroundColor: "#90BB3F",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
  fontWeight: "bold",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "10px",
};

const linktext = {
  fontSize: "12px",
  color: "#444",
  padding: "20px 0px 0 0 ",
};
