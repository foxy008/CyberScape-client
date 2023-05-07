import Room from "./Room";
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
    localStorage.access_token ? dispatch(fetchUser()) : null;
  }, [])
  const [cameraY, setCameraY] = useState(1.6);
  const elevatorRef = useRef(null);

  function handleElevatorClick() {
    setCameraY(3.0);
  }
  return <>
    {
      !rooms ? null : console.log(rooms)
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
      <a-camera position={`-20 ${cameraY} 20`} >
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>
      <a-sphere
        className="clickable"
        ref={elevatorRef}
        position="5 2 25"
        width="0.3"
        height="1"
        scale="0.1 0.1 0.1"
        events={{ click: handleElevatorClick }}
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
