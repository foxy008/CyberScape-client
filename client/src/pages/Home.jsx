import React from "react";

import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";

export default function Home() {
  return (
    <GalaxyBackground>
      <ShareButtons title="Just discovered this amazing NFT on CyberScape by [artist name]. I'm in love with this unique and creative artwork! Check it out and add it to your collection today. #NFT #cryptoart #digitalart #blockchainart [insert NFT link or image]" url="https://google.com/nft1" />
    </GalaxyBackground>
  );
}
