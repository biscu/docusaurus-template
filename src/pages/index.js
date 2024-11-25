import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Button from "../components/Button/button";
import Heading from "@theme/Heading";
import MockLight from "../../static/img/header-mock-light.png";
import MockDark from "../../static/img/header-mock-dark.png";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="text-3xl flex justify-center items-center h-screen w-screen">
        Homepage
      </div>
    </Layout>
  );
}
