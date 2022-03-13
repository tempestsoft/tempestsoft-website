import Head from "next/head";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout, { siteTitle } from "../components/layout";
import SocialLinks from "../components/social-links";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function WorkShowcase() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <SocialLinks />
        <h1 className="mb-4 mt-3 font-weight-bold">Our Work</h1>
        <Container>
          <Row>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Coming Soon!</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Examples of our work will be coming soon!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
