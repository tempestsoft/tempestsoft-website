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
        <h1 className="mb-4 mt-3 font-weight-bold">
          ScoreKeeper App Privacy Policy
        </h1>
        <Container>
          <Row>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Privacy Policy</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Bradley Windybank built the ScoreKeeper app as a Free app.
                    This SERVICE is provided by Bradley Windybank at no cost and
                    is intended for use as is. This page is used to inform
                    visitors regarding my policies with the collection, use, and
                    disclosure of Personal Information if anyone decided to use
                    my Service. If you choose to use my Service, then you agree
                    to the collection and use of information in relation to this
                    policy. The Personal Information that I collect is used for
                    providing and improving the Service. I will not use or share
                    your information with anyone except as described in this
                    Privacy Policy. The terms used in this Privacy Policy have
                    the same meanings as in our Terms and Conditions, which are
                    accessible at ScoreKeeper unless otherwise defined in this
                    Privacy Policy.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Information Collection and Use</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    For a better experience, while using our Service, I may
                    require you to provide us with certain personally
                    identifiable information, including but not limited to none.
                    The information that I request will be retained on your
                    device and is not collected by me in any way. The app does
                    use third-party services that may collect information used
                    to identify you. Links to the privacy policy of third-party
                    service providers used by the app:
                    <br></br>
                    <a
                      href="https://firebase.google.com/policies/analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics for Firebase
                    </a>
                    <br></br>
                    <a
                      href="https://firebase.google.com/support/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Firebase Crashlytics
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Log Data</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    I want to inform you that whenever you use my Service, in a
                    case of an error in the app I collect data and information
                    (through third-party products) on your phone called Log
                    Data. This Log Data may include information such as your
                    device Internet Protocol (“IP”) address, device name,
                    operating system version, the configuration of the app when
                    utilizing my Service, the time and date of your use of the
                    Service, and other statistics.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Cookies</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device's internal memory. This Service
                    does not use these “cookies” explicitly. However, the app
                    may use third-party code and libraries that use “cookies” to
                    collect information and improve their services. You have the
                    option to either accept or refuse these cookies and know
                    when a cookie is being sent to your device. If you choose to
                    refuse our cookies, you may not be able to use some portions
                    of this Service.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Service Providers</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    I may employ third-party companies and individuals due to
                    the following reasons: To facilitate our Service; To provide
                    the Service on our behalf; To perform Service-related
                    services; or To assist us in analyzing how our Service is
                    used. I want to inform users of this Service that these
                    third parties have access to their Personal Information. The
                    reason is to perform the tasks assigned to them on our
                    behalf. However, they are obligated not to disclose or use
                    the information for any other purpose.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Security</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    I value your trust in providing us your Personal
                    Information, thus we are striving to use commercially
                    acceptable means of protecting it. But remember that no
                    method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and I cannot
                    guarantee its absolute security.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Changes</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    I may update our Privacy Policy from time to time. Thus, you
                    are advised to review this page periodically for any
                    changes. I will notify you of any changes by posting the new
                    Privacy Policy on this page. This policy is effective as of
                    2022-03-31
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="bg-dark text-left mb-4">
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    If you have any questions or suggestions about my Privacy
                    Policy, do not hesitate to contact me at
                    hello@tempestsoft.com. This privacy policy page was created
                    at privacypolicytemplate.net and modified/generated by App
                    Privacy Policy Generator
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
