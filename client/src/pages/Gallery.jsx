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
    function handleKeyDown(event) {
      localStorage.access_token ? dispatch(fetchUser()) : null;
      if (event.code === "Space" && !localStorage.getItem("camera")) {
        handleElevatorClick("up")
        localStorage.setItem("camera", "up")
      }
      else if (event.code === "Space" && localStorage.getItem("camera")) {
        handleElevatorClick("down")
        localStorage.removeItem("camera")
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [])

  function handleElevatorClick(view) {
    if (view === "up") {
      setCameraY(8.6);
    }

    if (view === "down") {
      setCameraY(1.6)
    }
  }

  const [cameraY, setCameraY] = useState(1.6);
  const elevatorRef = useRef(null);
  const positions = [
    "0 0 -16"
    , "0 0 0"
    , "0 0 16"
    , "0 0 32"
    , "0 0 48"
    , "0 7 -16"
    , "0 7 0"
    , "0 7 16"
    , "0 7 32"
    , "0 7 48"]

  return <>
    {
      !rooms ? null : (!rooms[2] ? null : console.log(rooms[2].RoomNFTs, '<-- rooms'))
      // Buat cek apakah rooms dapet di fetch, uncomment kalo ngak mau console
    }
    {
      !profile ? null : console.log(profile, '<-- profile')
      // Buat cek apakah profile dapet di fetch, uncomment kalo ngak mau keliatan di console
    }
    <div style={{ width: 'fit', height: '480px', margin: '100px' }}>
      <a-scene stats debug loading-screen="dotsColor: red; backgroundColor: black">
        <a-assets>
          <img
            id="wallTexture"
            src="/assets/output.jpg" />
        </a-assets>
        <a-camera position={`22 ${cameraY} 16`} rotation="45 90 0" >
          {/* <a-entity cursor raycaster="objects: .raycastable"></a-entity> */}
          <a-entity position="0 0 -1" geometry="primitive: sphere; radius: 0.01" material="color: #000000; shader: flat; opacity: 0.5">
          </a-entity>
        </a-camera>
        <a-entity id="mouseCursor" cursor="rayOrigin: mouse" ></a-entity>
        <a-entity environment="preset: tron; fog: 0.9; dressingAmount: 50; seed: 300; playArea: 5"></a-entity>

        <a-box material="opacity: 0.5" rotation="0 90 0" position="23 7 16" width="80" height="14" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 90 0" position="15 7.5 37" width="38" height="1" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 90 0" position="15 7.5 -5" width="38" height="1" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 0 0" position="17 7 -24" width="12" height="14" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 0 0" position="17 7 56" width="12" height="14" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 0 0" position="17.5 7.5 18" width="5" height="1" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 0 0" position="17.5 7.5 14" width="5" height="1" depth="0.1"></a-box>
        <a-box material="opacity: 0.9" rotation="0 0 0" position="21.5 7 18" width="3" height="14" depth="0.1"></a-box>
        <a-box material="opacity: 0.9" rotation="0 0 0" position="21.5 7 14" width="3" height="14" depth="0.1"></a-box>
        <a-box material="opacity: 0.9" rotation="0 90 0" position="20 5 16" width="4" height="4" depth="0.1"></a-box>

        <a-box animation__1="property: position; to: 20 1.5 17.5; dur: 3000; easing: linear; startEvents: mouseleave;"
          animation__2="property: position; to: 20 1.5 16.5; dur: 3000; easing: linear; startEvents: animationcomplete__1;" rotation="0 90 0" position="20 1.5 16.5" width="1" height="3" depth="0.1"></a-box>
        <a-box animation__1="property: position; to: 20 1.5 14.5; dur: 3000; easing: linear; startEvents: mouseleave;"
          animation__2="property: position; to: 20 1.5 15.5; dur: 3000; easing: linear; startEvents: animationcomplete__1;" rotation="0 90 0" position="20 1.5 15.5" width="1" height="3" depth="0.1"></a-box>

        <a-box src="#wallTexture" rotation="90 0 90" position="18 14 16" width="84" height="14" depth="0.1"></a-box>
        <a-box src="#wallTexture" rotation="90 0 90" position="13 7 16" width="80" height="4" depth="0.1"></a-box>
        <a-box src="#wallTexture" rotation="90 0 90" position="17.5 7 16" width="4" height="5" depth="0.1"></a-box>

        <a-box color="black" position="18 0 0" width="0.5" height="" depth="3"></a-box>
        <a-box position="18 0 32" width="0.5" height="" depth="3"></a-box>
        <a-box position="18 0 48" width="0.5" height="" depth="3"></a-box>
        <a-box position="18 0 -16" width="0.5" height="" depth="3"></a-box>

        {rooms.map((el, i) => {
          if (i < 10) {
            return <Room position={positions[i]} nfts={rooms[i + 2]} ></Room>
          }
        })}

      </a-scene>

    </div>

  </>

}