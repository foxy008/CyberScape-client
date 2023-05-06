import React from "react";

import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";

export default function Home() {
  return (
    <GalaxyBackground>
      <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
    </GalaxyBackground>
  );
}
