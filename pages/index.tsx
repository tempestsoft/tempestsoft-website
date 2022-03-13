import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SocialLinks from "../components/social-links";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <p className="mb-2 font-weight-bold">iOS Software Organisation</p>

        <SocialLinks />

        <p className={utilStyles.openingPara}>
          Creating fun and practical iOS apps!
        </p>
      </section>
    </Layout>
  );
}
