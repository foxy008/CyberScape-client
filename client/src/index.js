import Moralis from "moralis"

const runApp = async () => {
  await Moralis.start({
    apiKey: "nY5PSNx0D8GICxfaUK0sELWqirrd2y1iK4nS3KUiJTJE0FwReDIAzyW0nEKHbdPx",
  });

  const address = "0x1234567890abcdef1234567890abcdef12345678";

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
  });

  const nfts = response.toJSON();

  for (const nft of nfts) {
    const metadata = JSON.parse(nft.metadata);

    if (metadata && metadata.creator) {
      console.log(`Artist's name: ${metadata.creator}`);
    } else {
      console.log("Artist's name not found in metadata.");
    }
  }
};

runApp();