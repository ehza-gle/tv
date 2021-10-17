import Layout from "../components/Layout";
import RunText from "../components/RunText";
import Products from "../components/Products";
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
      <div className="grid grid-row-2">
        <div className="w-full flex">
          <SidePanel />
          <Products />
        </div>
        <RunText />
      </div>
      <style jsx>{`
        
      `}</style>
    </Layout>
  );
}
