import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "motion/react";
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
      <div className="flex items-center justify-center w-screen h-screen text-3xl">
        <motion.h1 initial={{ opacity: 0 }} animate={{ y: -30, opacity: 1 }}>
          Homepage
        </motion.h1>
      </div>
    </Layout>
  );
}
