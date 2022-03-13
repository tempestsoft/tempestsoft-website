import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <ButtonToolbar
      aria-label="Toolbar with links"
      className="justify-content-center mt-4 mb-4"
    >
      <ButtonGroup aria-label="Site Links" className="me-2">
        <Link href="/work-showcase">
          <Button variant="primary">Our work</Button>
        </Link>
      </ButtonGroup>

      <ButtonGroup aria-label="Social Links" className="me-2 ml-1">
        <Button
          variant="dark"
          aria-label="Email"
          href="mailto:hello@tempestsoft.com"
        >
          <FontAwesomeIcon icon="envelope" className={utilStyles.socialIcon} />
        </Button>
        <Button
          variant="dark"
          aria-label="GitHub Profile"
          href="https://github.com/tempestsoft"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={utilStyles.socialIcon}
          />
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
