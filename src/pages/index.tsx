import Layout from "../components/Layout";
import RunText from "../components/RunText";
import SidePanel from "../components/SidePanel";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="grid">
        <div className="container">
          <SidePanel />
          <div>
            <h1>
              Hi, We're Next.js & Netlify<span className="fancy">.</span>
            </h1>
            <span className="handle">@nextjs-netlify-blog</span>
            <h2>A blog template with Next.js and Netlify.</h2>
            <SocialList />
          </div>
        </div>
      <RunText />
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          margin: 0;
          padding: 0;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
      `}</style>
    </Layout>
  );
}
