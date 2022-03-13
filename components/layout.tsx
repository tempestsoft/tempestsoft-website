import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "TempestSoft";
export const siteTitle = "TempestSoft";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TempestSoft is a New Zealand based software organisation specialising in iOS apps."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="keywords"
          content="ios developer, developer, mobile apps, auckland mobile developer, ios app, new zealand mobile developer, app developer, nz, auckland"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="TempestSoft" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
      </Head>

      {home ? (
        <header className={styles.header}>
          <Image
            priority
            src="/images/logo.webp"
            className={utilStyles.borderCircle}
            height={100}
            width={100}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      ) : (
        <header className={styles.headerAbout}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/logo.webp"
                className={utilStyles.borderCircle}
                height={100}
                width={100}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>← &nbsp;&nbsp;{name}</a>
            </Link>
          </h2>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
