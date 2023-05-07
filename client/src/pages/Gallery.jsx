
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { getAllRooms } from "../actions/roomsCreators";
import Room from "../components/Room";

export default function Gallery() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms);
  const profile = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getAllRooms())
    localStorage.access_token ? dispatch(fetchUser()) : null;
  }, [])
  const [cameraY, setCameraY] = useState(1.6);
  const elevatorRef = useRef(null);

  function handleElevatorClick() {
    setCameraY(9.6);
  }

  return <>
    {
      !rooms ? null : console.log(rooms[2]?.RoomNFTs[0].NFT.imageUrl)
      // Buat cek apakah rooms dapet di fetch, uncomment kalo ngak mau console
    }
    <a-scene>
      <a-assets>
        <img
          id="skyTexture"
          src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" />
        <img
          id="groundTexture"
          src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" />
        <img
          id="wallTexture"
          src="/assets/output.jpg" />
      </a-assets>
      <a-camera position={`22 ${cameraY} 16`} >
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>
      <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>

      <a-entity rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
        <a-sphere position="18 9 0" color="mediumseagreen"></a-sphere>
</a-entity>
    
      <a-box material="opacity: 0.5" rotation="0 90 0" position="23 7 16" width="80" height="14" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 90 0" position="15 7.5 37" width="38" height="1" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 90 0" position="15 7.5 -5" width="38" height="1" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 0 0" position="17 7 -24" width="12" height="14" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 0 0" position="17 7 56" width="12" height="14" depth="0.1"></a-box>
      <a-box material="opacity: 0.9" rotation="0 0 0" position="21.5 7 18" width="3" height="14" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 0 0" position="17.5 7.5 18" width="5" height="1" depth="0.1"></a-box>
      <a-box material="opacity: 0.5" rotation="0 0 0" position="17.5 7.5 14" width="5" height="1" depth="0.1"></a-box>
      <a-box material="opacity: 0.9" rotation="0 0 0" position="21.5 7 14" width="3" height="14" depth="0.1"></a-box>
      <a-box animation="property: position; to: 20 1 14.5; dur: 2000; easing: linear; startEvents: mouseenter;" material="opacity: 1" rotation="0 90 0" position="20 1 15.5" width="1" height="3" depth="0.1"></a-box>
      <a-box animation="property: position; to: 20 1 17.5; dur: 2000; easing: linear; startEvents: mouseenter;" material="opacity: 1" rotation="0 90 0" position="20 1 16.5" width="1" height="3" depth="0.1"></a-box>
      <a-box src="#wallTexture" rotation="90 0 90" position="18 14 16" width="84" height="14" depth="0.1"></a-box>
      <a-box src="#wallTexture" rotation="90 0 90" position="13 7 16" width="80" height="4" depth="0.1"></a-box>
      <a-box src="#wallTexture" rotation="90 0 90" position="17.5 7 16" width="4" height="5" depth="0.1"></a-box>

      <a-box position="18 0 0" width="0.5" height="" depth="3"></a-box>
      <a-box position="18 0 32" width="0.5" height="" depth="3"></a-box>
      <a-box position="18 0 48" width="0.5" height="" depth="3"></a-box>
      <a-box position="18 0 -16" width="0.5" height="" depth="3"></a-box>
      <Room position="0 0 -16" nfts={rooms[2]}/>
      <Room position="0 0 0" />
      <Room position="0 0 16" />
      <Room position="0 0 32" />
      <Room position="0 0 48" />
      <Room position="0 7 -16" />
      <Room position="0 7 0" />
      <Room position="0 7 16" />
      <Room position="0 7 32" />
      <Room position="0 7 48" />
      <a-entity environment="preset: tron; fog: 0.8; dressingAmount: 50; seed: 300; playArea: 5"></a-entity>
    </a-scene>

  </>

}
