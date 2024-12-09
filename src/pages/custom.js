import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div>Other Custom Page</div>
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
      <div className="flex items-center justify-center w-screen h-screen text-3xl">
        Other Custom Page
      </div>
    </Layout>
  );
}
