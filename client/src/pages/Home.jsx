import React from "react";

import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CollectionList from '../components/CollectionList'


export default function Home() {
  return (
    <GalaxyBackground>
      <Navbar />
      <Banner />
      <CollectionList />
      <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
    </GalaxyBackground>
  );
}
