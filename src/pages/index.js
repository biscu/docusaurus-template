import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "motion/react";
import Preload from "@site/src/components/Preload";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Preload />
      <div className="flex items-center justify-center w-[700px] h-screen mx-auto text-center text-balance	">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ y: -30, opacity: 1 }}
          className="text-6xl"
        >
          Postnord app source of truth
        </motion.h1>
      </div>
    </Layout>
  );
}
