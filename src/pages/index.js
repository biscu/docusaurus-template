import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "motion/react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="flex justify-center items-center w-screen h-screen text-3xl">
        <motion.h1 initial={{ opacity: 0 }} animate={{ y: -30, opacity: 1 }}>
          Homepage
        </motion.h1>
      </div>
    </Layout>
  );
}
