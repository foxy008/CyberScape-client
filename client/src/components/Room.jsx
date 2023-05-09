
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Room({ position, nfts }) {
  console.log(nfts);

  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms);
  const profile = useSelector(state => state.user);


  return (
    <>
      <a-entity position={position}>
        <a-box src="#wallTexture" position="0 3.5 -8" width="22" height="7" depth="0.3"></a-box>
        <a-box src="#wallTexture" position="0 3.5 8" width="22" height="7" depth="0.3"></a-box>
        <a-box material="opacity: 0.5" rotation="0 90 0" position="-11 3.5 0" width="16" height="7" depth="0.1"></a-box>

        <a-box color="black" rotation="0 90 0" position="11 2.5 0" width="4" height="5" depth="0.3">
          <a-box src={nfts?.Artist.avatarUrl} position="-1 1 0.2" width="1" height="1" depth="0.1">
          </a-box>
          <a-text
            value={nfts?.Artist.name}
            color="white"
            position="-1.6 0 0.2"
            scale="1 1 1"
          ></a-text>
        </a-box>
        <a-box src="#wallTexture" position="0 7 0" width="22" height="16" depth="0.1" rotation="90 0 0">
        </a-box>
        <a-box src="" position="0 2.5 -7.5" width="13" height="4" depth="0.1">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[0].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
          ><a-text
            onMouseEnter={() => {
              this.el.setAttribute("visible", true);
            }}
            onMouseLeave={() => {
              this.el.setAttribute("visible", false);
            }}
            visible="true"
            value={`by ${nfts?.Artist.name}`}
            color="white"
            position="-1.6 -1 0.2"
            scale="1 1 1"
          ></a-text>
          </a-plane>
          <a-plane position="-4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[1].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[2].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-light type="directional" color="purple" position="0 0.5 1" intensity="0.4">
          </a-light>
          <a-light type="directional" color="red" position="3 0.5 1" intensity="0.04"></a-light>
          <a-light type="directional" color="blue" position="-3 0.5 1" intensity="0.4"></a-light>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>

        <a-box src="" position="0 2.5 7.5" width="13" height="4" depth="0.1" rotation="0 180 0">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[3].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="-4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[4].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[5].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-light type="ambient" color="white" position="0 1 1" intensity="0.05"></a-light>
        </a-box>

        <a-box position="5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[6].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="0 0 -0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[7].NFT.imageUrl}`} rotation="0 180 0" width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>

        <a-box src="" position="-5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[8].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="0 0 -0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[9].NFT.imageUrl}`} rotation="0 180 0" width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>


      </a-entity>
      

    </>
  )
}