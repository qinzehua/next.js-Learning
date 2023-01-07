import Head from "next/head";
import Link from "next/link";
import React from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "qinzehua";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  console.log("--------", router.route);

  console.log("router.locale: ", router.locale);
  console.log("router.locales : ", router.locales);
  console.log("router.defaultLocale : ", router.defaultLocale);
  const changeLanguage = (lang: string) => {
    Cookies.set("NEXT_LOCALE", lang);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpeg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <div style={{ display: "flex" }}>
          <Link href="/" className={utilStyles.colorInherit}>
            <h2 className={utilStyles.headingLg}>Home</h2>
          </Link>
          <div style={{ padding: 10 }}></div>
          <Link href="/about" className={utilStyles.colorInherit}>
            <h2 className={utilStyles.headingLg}>About</h2>
          </Link>{" "}
          <div style={{ padding: 10 }}></div>
          <Link href="/pss/first" className={utilStyles.colorInherit}>
            <h2 className={utilStyles.headingLg}>Pss</h2>
          </Link>
        </div>
        <div>
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={"en"}
            legacyBehavior
          >
            en
          </Link>
          /
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={"fr"}
            legacyBehavior
          >
            fr
          </Link>
          /
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={"nl-NL"}
            legacyBehavior
          >
            nl-NL
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  return { props: { age: 10 } };
}
