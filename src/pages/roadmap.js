import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Button from "../components/Button/button";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import MockLight from "../../static/img/header-mock-light.png";
import MockDark from "../../static/img/header-mock-dark.png";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

function HomepageHeader() {
  CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");
  useGSAP(() => {
    gsap.from(`.${styles.headerInfo}`, {
      opacity: 0,
      y: 50,
      ease: "animate-in",
      duration: 1,
    });
    gsap.from(`.${styles.homeTitleLarge}`, {
      opacity: 0,
      y: 30,
      ease: "animate-in",
      duration: 1,
    });
    gsap.from(`.${styles.heroSubTitle}`, {
      opacity: 0,
      y: 30,
      ease: "animate-in",
      duration: 1,
      delay: 0.2,
    });
    gsap.from(`.${styles.headerMock}`, {
      opacity: 0,
      y: 30,
      ease: "animate-in",
      duration: 1,
      delay: 0.3,
    });
    gsap.from(`.${styles.Mock}`, {
      opacity: 0,
      y: 30,
      ease: "animate-in",
      duration: 1,
      delay: 0.4,
    });
  });

  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeSection}>
          <div className={styles.homeCard}>
            <Heading as="h1" className={styles.homeTitleLarge}>
              Roadmap
            </Heading>
            <p className={styles.heroSubTitle}>
              The present and the future of Rally is written here.
            </p>
            {/* <Button /> */}
          </div>
        </div>
      </div>
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
