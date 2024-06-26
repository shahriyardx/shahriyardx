import React from "react"
import {
  Body,
  Container,
  Head,
  Row,
  Html,
  Img,
  Section,
  Text,
  Column,
  Link,
  Tailwind,
} from "@react-email/components"
import { Markdown } from "@react-email/markdown"

type Classes = {
  body: string
  message: string
  profile: {
    title: string
  }
  socialIcons: string
}

const classes: Classes = {
  body: "bg-white dark:bg-zinc-900",
  message:
    "text-black p-7 rounded-xl bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200",
  profile: {
    title: "m-0 mt-5 text-3xl font-semibold text-black dark:text-white",
  },
  socialIcons: "dark:invert",
}

const PH = ({ content = "demo" }: { content: string }) => {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXTAUTH_URL
      : ""
  console.log(BASE_URL)
  return (
    <Tailwind>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
      </Head>

      <Html>
        <Body style={{ ...main }} className={classes.body}>
          <Container className="p-5">
            <Section className={classes.message}>
              <Markdown
                markdownContainerStyles={{ margin: 0, padding: 0 }}
                markdownCustomStyles={markdownStyles}
              >
                {content}
              </Markdown>
            </Section>

            <Section className="p-5 mt-10 text-center shadow-md">
              <Img
                src={`${BASE_URL}/static/profile-pic.png`}
                className="w-[150px] h-[150px] mx-auto"
                alt="Md Shahriyar Alam"
              />

              <Text className={classes.profile.title}>Md Shahriyar Alam</Text>
              <Text className="m-0 text-zinc-400">
                Web instructor @ <b>Programming Hero</b>
              </Text>

              <Section style={{ width: "98px", marginTop: 10 }}>
                <Row style={{ width: "98px", float: "left", margin: "0 auto" }}>
                  <Column>
                    <Link href="https://facebook.com/shahriyardx">
                      <Img
                        src={`${BASE_URL}/static/socials/facebook.png`}
                        width={30}
                        height={30}
                        style={{ paddingRight: 4 }}
                        className={classes.socialIcons}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://linkedin.com/devshahriyar">
                      <Img
                        src={`${BASE_URL}/static/socials/linkedin.png`}
                        width={30}
                        height={30}
                        style={{ paddingRight: 4 }}
                        className={classes.socialIcons}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://github.com/shahriyardx">
                      <Img
                        src={`${BASE_URL}/static/socials/github.png`}
                        width={30}
                        height={30}
                        className={classes.socialIcons}
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

// Styles
const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const markdownStyles = {
  h1: {
    margin: 0,
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  h2: {
    margin: 0,
    padding: 0,
    marginTop: 8,
    marginBottom: 8,
  },
  h3: {
    margin: 0,
    padding: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  h4: {
    margin: 0,
    padding: 0,
    marginTop: 3,
    marginBottom: 3,
  },
  p: {
    margin: 0,
  },
}

export default PH
