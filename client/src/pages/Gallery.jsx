import Room from "../components/Room";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { getAllRooms } from "../actions/roomsCreators";

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

  const handleElevatorClick = (view) => {
    setCameraY(view === "up" ? 8.6 : 1.6);
  };

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

  const walls_positions = [
    { x: 23, y: 7, z: 16, rotation: "0 90 0", width: 80, height: 14, depth: 0.1 },
    { x: 15, y: 7.5, z: 37, rotation: "0 90 0", width: 38, height: 1, depth: 0.1 },
    { x: 15, y: 7.5, z: -5, rotation: "0 90 0", width: 38, height: 1, depth: 0.1 },
    { x: 17, y: 7, z: -24, rotation: "0 0 0", width: 12, height: 14, depth: 0.1 },
    { x: 17, y: 7, z: 56, rotation: "0 0 0", width: 12, height: 14, depth: 0.1 },
    { x: 17.5, y: 7.5, z: 18, rotation: "0 0 0", width: 5, height: 1, depth: 0.1 },
    { x: 17.5, y: 7.5, z: 14, rotation: "0 0 0", width: 5, height: 1, depth: 0.1 },
    { x: 21.5, y: 7, z: 18, rotation: "0 0 0", width: 3, height: 14, depth: 0.1 },
    { x: 21.5, y: 7, z: 14, rotation: "0 0 0", width: 3, height: 14, depth: 0.1 },
    { x: 20, y: 5, z: 16, rotation: "0 90 0", width: 4, height: 4, depth: 0.1 }
  ];

  
  
  function handleElevatorClick(view) {
    if (view === "up") {
      setCameraY(5.2);
    }

    if (view === "down") {
      setCameraY(1.6)
    }
  }

  useEffect(() => {
  function handleKeyDown(event) {
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
}, []);

  return <>
    {
      !rooms ? null : (!rooms[2] ? null : console.log(rooms[2].RoomNFTs, '<-- rooms'))
      // Buat cek apakah rooms dapet di fetch, uncomment kalo ngak mau console
    }
    <a-scene >
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
      <a-camera position={`-20 ${cameraY} 30`}>
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>
      <a-sphere
        className="clickable"
        ref={elevatorRef}
        position="5 2 25"
        width="0.3"
        height="1"
        scale="1 1 1"
        events={{ onclick: ()=> {handleElevatorClick} }}
      ></a-sphere>
      <a-box position="5 0 0" width="0.5" height="" depth="3"></a-box>
      <a-box position="5 0 10" width="0.5" height="" depth="3"></a-box>
      <a-box position="5 0 20" width="0.5" height="" depth="3"></a-box>
      <a-box position="5 0 30" width="0.5" height="" depth="3"></a-box>
      <a-box position="5 0 40" width="0.5" height="" depth="3"></a-box>
      <Room position="-2 0 0" />
      <Room position="12 0 0" />
      <Room position="-2 0 10" />
      <Room position="12 0 10" />
      <Room position="-2 0 20" />
      <Room position="12 0 20" />
      <Room position="-2 0 30" />
      <Room position="12 0 30" />
      <Room position="-2 0 40" />
      <Room position="12 0 40" />
      <Room position="-2 5 0" />
      <Room position="12 5 0" />
      <Room position="-2 5 10" />
      <Room position="12 5 10" />
      <Room position="-2 5 20" />
      <Room position="12 5 20" />
      <Room position="-2 5 30" />
      <Room position="12 5 30" />
      <Room position="-2 5 40" />
      <Room position="12 5 40" />
      <a-entity environment="preset: tron; dressingAmount: 50; seed: 9; playArea: 4"></a-entity>
    </a-scene>
  </>
}
