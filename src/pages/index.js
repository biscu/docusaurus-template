import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Button from "../components/Button/button";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import MockLight from "../../static/img/header-mock-light.png";
import MockDark from "../../static/img/header-mock-dark.png";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div>Homepage</div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
