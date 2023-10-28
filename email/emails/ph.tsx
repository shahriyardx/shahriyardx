import {
  Body,
  Container,
  Head,
  Row,
  Html,
  Img,
  Section,
  Text,
  Tailwind,
  Column,
  Link,
} from "@react-email/components"
import { Markdown } from "@react-email/markdown"
import React from "react"

const md = `
## Dear Students
Hello developers \n
কি অবস্থা তোমাদের ফুলস্ট্যাক জার্নির? এই মাইলস্টোন এ কিন্তু আগের জিনিস গুলাই আবার রিক্যাপ করা হচ্ছে। ব্যাকএন্ড এ পাকা হতে চাইলে কিন্তু CRUD অপেরেশন ভালোভাবে শেখার কোনো বিকল্প নেই। তাই আজকে তোমাদের আবার CRUD অপারেশন এর কনসেপ্টগুলো দেখানো হবে এবং তার সাথে কিভাবে JWT দিয়ে API সিকিউর করা যাই তা দেখানো হঁবে। আজকের সেশনটি খুবই ইন্টারেষ্টিং। তাই দেরি না করে জয়েন করে ফেলো নিচের লিংকে ঠিক রাত ৯.০০ টাই আজকের সেশন দেখার জন্য। আজকের সেশনটি নিবেন আমাদের ইন্সট্রাক্টর জিহাদ ভাই।
</br></br>

__Topic__: Conceptual Session</br>
__Time__: Oct 27, 2023 09:00 PM. </br></br>
__Join Zoom Meeting__: [Click Here](https://us02web.zoom.us/j/5678589533?pwd=UTlsZm9PTE1LSEJOVDlrdUhUMkxzdz09)


__Meeting ID__: 567 858 9533 </br>
__Passcode__: 1234

<p style="font-size:20px;font-weight:700;margin:0; margin-top:20px;">Best Regards</p>
Team Programming Hero
`

type AllClasses = {
  dark: Classes
  default: Classes
}
type Classes = {
  body: string
  message: string
  profile: {
    title: string
  }
  socialIcons: string
}

const allClasses: AllClasses = {
  dark: {
    body: "bg-zinc-900",
    message: "p-7 rounded-xl bg-zinc-800 text-zinc-200",
    profile: {
      title: "m-0 mt-5 text-3xl font-semibold text-white",
    },
    socialIcons: "invert",
  },
  default: {
    body: "bg-white dark:bg-zinc-900",
    message:
      "text-black p-7 rounded-xl bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200",
    profile: {
      title: "m-0 mt-5 text-3xl font-semibold text-black dark:text-white",
    },
    socialIcons: "dark:invert",
  },
}

const mode: string = "dark"
const classes: Classes = mode === "dark" ? allClasses.dark : allClasses.default

const PH = ({ content = md }: { content: string }) => {
  const BASE_URL =
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://shahriyar.dev"

  return (
    <Tailwind>
      <Html>
        <Head>
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
        </Head>
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
                className="w-[200px] h-[200px] mx-auto"
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
