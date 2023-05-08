import React from "react";

import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CollectionList from '../components/CollectionList'
import RecentCollection from '../components/RecentCollection'
import News from '../components/News'


export default function Home() {
  return (
    <GalaxyBackground>
      <Navbar />
      <Banner />
      <CollectionList />
      <RecentCollection />
      <News />
      <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
    </GalaxyBackground>
  );
}
