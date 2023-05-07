import { Entity, Scene } from "aframe-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { getAllRooms } from "../actions/roomsCreators";

export default function HomePage() {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.rooms);
    const profile = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getAllRooms())
        localStorage.access_token ? dispatch(fetchUser()) : null;
    }, [])

    return <>
        {
          !rooms ? null : console.log(rooms)
          // Buat cek apakah rooms dapet di fetch, uncomment kalo ngak mau console
        }

        <Scene>
        <a-assets>
          <a-asset-item id="my-model" src="/car/scene.gltf"></a-asset-item>
          <a-asset-item id="car-model" src="/cybercar/scene.gltf"></a-asset-item>
          <img
            id="skyTexture"
            src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" />
          <img
            id="groundTexture"
            src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" />
        </a-assets>
        <a-plane src="#groundTexture" rotation="-90 0 0" width="1000" height="1000"></a-plane>
        <a-plane position="0 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-plane position="2 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-plane position="-2 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-sky src="#skyTexture"></a-sky>
        <a-box position="0 1 0" scale="10 5 0.1" color="red"></a-box>
        <a-box position="0 1 10" scale="10 5 0.1" color="red"></a-box>
        <a-box position="5 1 5" scale="10 5 0.1" color="red" rotation="0 90 0"></a-box>
        <a-box position="-5 1 5" scale="10 5 0.1" color="red" rotation="0 90 0"></a-box>
        <a-light type="point" distance="5" color="white" position="0 2.2 -14" angle="-100" intensity="0.8"></a-light>
        <a-light type="point" distance="5" color="white" position="2 2.2 -14" angle="120" intensity="0.5"></a-light>
        <a-cone position="0 0 -3" color="tomato" radius-bottom="2" radius-top="0.5"></a-cone>
        {/* <a-light type="point" color="white" position="0 2 -14"></a-light>
        <a-light type="point" color="white" position="0 2 -14"></a-light> */}
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "blue" }}
          position={{ x: 0, y: 1, z: -5 }}
          scale="10 5 0.1"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "white" }}
          position={{ x: 0, y: 1, z: -15 }}
          scale="10 5 0.1"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "white" }}
          position={{ x: -5, y: 1, z: -10 }}
          scale="10 5 0.1"
          rotation="0 90 0"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "white" }}
          position={{ x: 5, y: 1, z: -10 }}
          scale="10 5 0.1"
          rotation="0 90 0"
        />
        <Entity camera position={{ x: 0, y: 1.6, z: 0 }} />
      </Scene>
    </>
}
