import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "motion/react";
import im1 from "@site/static/img/placeholder_cover.svg";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <img className="hidden" src="./img/placeholder_cover_dark.svg" alt="preload" />
      <img className="hidden" src="./img/placeholder_cover_light.svg" alt="preload" />
      
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
