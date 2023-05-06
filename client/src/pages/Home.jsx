import { Entity, Scene } from "aframe-react";

export default function HomePage() {
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
        <Entity
          gltf-model="#my-model"
          scale={{ x: 1, y: 1, z: 1 }}
          position={{ x: 0, y: -0.1, z: -10 }}
        />
        <Entity
          gltf-model="#my-model"
          scale={{ x: 1, y: 1, z: 1 }}
          position={{ x: 0, y: -0.1, z: -10 }}
        />
        <a-entity gltf-model="#car-model"></a-entity>
        <a-plane src="#groundTexture" rotation="-90 0 0" width="1000" height="1000"></a-plane>
        <a-plane position="0 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-plane position="2 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-plane position="-2 2 -14.9" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1" height="1.5"></a-plane>
        <a-sky src="#skyTexture"></a-sky>
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "white" }}
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
}
