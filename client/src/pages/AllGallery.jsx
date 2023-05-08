// import { Entity, Scene } from "aframe-react";
// import Room from "./Room";
// import { useRef, useState } from "react";

// export default function Gallery() {
//   const [cameraY, setCameraY] = useState(1.6);
//   const elevatorRef = useRef(null);

//   function handleElevatorClick() {
//     setCameraY(3.0);
//   }
//   return (
//     <>
//       <a-scene>
//         <a-assets>
//           <img
//             id="skyTexture"
//             src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" />
//           <img
//             id="groundTexture"
//             src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" />
//           <img
//             id="wallTexture"
//             src="/assets/output.jpg" />
//         </a-assets>
//         <a-camera position={`-20 ${cameraY} 20`} >
//           <a-cursor raycaster="objects: .clickable"></a-cursor>
//         </a-camera>
//         <a-sphere
//           className="clickable"
//           ref={elevatorRef}
//           position="5 2 25"
//           width="0.3"
//           height="1"
//           scale="0.1 0.1 0.1"
//           events={{ click: handleElevatorClick }}
//         ></a-sphere>
//         <a-box position="5 0 0" width="0.5" height="" depth="3"></a-box>
//         <a-box position="5 0 10" width="0.5" height="" depth="3"></a-box>
//         <a-box position="5 0 20" width="0.5" height="" depth="3"></a-box>
//         <a-box position="5 0 30" width="0.5" height="" depth="3"></a-box>
//         <a-box position="5 0 40" width="0.5" height="" depth="3"></a-box>
//         <Room position="-2 0 0" />
//         <Room position="12 0 0" />
//         <Room position="-2 0 10" />
//         <Room position="12 0 10" />
//         <Room position="-2 0 20" />
//         <Room position="12 0 20" />
//         <Room position="-2 0 30" />
//         <Room position="12 0 30" />
//         <Room position="-2 0 40" />
//         <Room position="12 0 40" />
//         <Room position="-2 5 0" />
//         <Room position="12 5 0" />
//         <Room position="-2 5 10" />
//         <Room position="12 5 10" />
//         <Room position="-2 5 20" />
//         <Room position="12 5 20" />
//         <Room position="-2 5 30" />
//         <Room position="12 5 30" />
//         <Room position="-2 5 40" />
//         <Room position="12 5 40" />
//         <a-entity environment="preset: tron; dressingAmount: 50; seed: 9; playArea: 4"></a-entity>
//       </a-scene>

//     </>
//   )
// }

const DataNFT = [
  {
      "id": 1,
      "name": "Top Collection",
      "address": "-",
      "cursor": null,
      "ArtistId": null,
      "createdAt": "2023-05-07T07:15:35.044Z",
      "updatedAt": "2023-05-07T07:15:35.044Z",
      "RoomNFTs": [
          {
              "id": 1,
              "posX": 10,
              "posY": 4,
              "posZ": -8,
              "RoomId": 1,
              "NFTId": 1,
              "createdAt": "2023-05-07T07:15:35.151Z",
              "updatedAt": "2023-05-07T07:15:35.151Z",
              "NFT": {
                  "id": 1,
                  "token": "1001",
                  "title": "The Garden of Earthly Delights",
                  "description": "A triptych painting by Hieronymus Bosch depicting a lush and surreal landscape populated with fantastic creatures and vivid symbolism.",
                  "imageUrl": "https://www.example.com/images/1001.jpg",
                  "averageRating": null,
                  "ratingLength": null,
                  "createdAt": "2023-05-07T07:15:35.064Z",
                  "updatedAt": "2023-05-07T07:15:35.064Z"
              }
          },
          {
              "id": 2,
              "posX": -2,
              "posY": 5,
              "posZ": 12,
              "RoomId": 1,
              "NFTId": 2,
              "createdAt": "2023-05-07T07:15:35.151Z",
              "updatedAt": "2023-05-07T07:15:35.151Z",
              "NFT": {
                  "id": 2,
                  "token": "1002",
                  "title": "Starry Night",
                  "description": "A painting by Vincent van Gogh featuring a swirling sky and a sleepy town below.",
                  "imageUrl": "https://www.example.com/images/1002.jpg",
                  "averageRating": null,
                  "ratingLength": null,
                  "createdAt": "2023-05-07T07:15:35.064Z",
                  "updatedAt": "2023-05-07T07:15:35.064Z"
              }
          },
          {
              "id": 3,
              "posX": 7,
              "posY": -1,
              "posZ": 5,
              "RoomId": 1,
              "NFTId": 3,
              "createdAt": "2023-05-07T07:15:35.151Z",
              "updatedAt": "2023-05-07T07:15:35.151Z",
              "NFT": {
                  "id": 3,
                  "token": "1003",
                  "title": "The Persistence of Memory",
                  "description": "A surrealist painting by Salvador Dali featuring melting clocks in a desert landscape.",
                  "imageUrl": "https://www.example.com/images/1003.jpg",
                  "averageRating": null,
                  "ratingLength": null,
                  "createdAt": "2023-05-07T07:15:35.064Z",
                  "updatedAt": "2023-05-07T07:15:35.064Z"
              }
          }
      ]
  },
  {
      "id": 2,
      "name": "All Collection",
      "address": "-",
      "cursor": null,
      "ArtistId": null,
      "createdAt": "2023-05-07T07:15:35.044Z",
      "updatedAt": "2023-05-07T07:15:35.044Z",
      "RoomNFTs": [
          {
              "id": 4,
              "posX": -6,
              "posY": 3,
              "posZ": -3,
              "RoomId": 2,
              "NFTId": 4,
              "createdAt": "2023-05-07T07:15:35.151Z",
              "updatedAt": "2023-05-07T07:15:35.151Z",
              "NFT": {
                  "id": 4,
                  "token": "1004",
                  "title": "Les Demoiselles d'Avignon",
                  "description": "A cubist painting by Pablo Picasso depicting five nude women in a brothel.",
                  "imageUrl": "https://www.example.com/images/1004.jpg",
                  "averageRating": null,
                  "ratingLength": null,
                  "createdAt": "2023-05-07T07:15:35.064Z",
                  "updatedAt": "2023-05-07T07:15:35.064Z"
              }
          },
          {
              "id": 5,
              "posX": 0,
              "posY": 0,
              "posZ": 0,
              "RoomId": 2,
              "NFTId": 5,
              "createdAt": "2023-05-07T07:15:35.151Z",
              "updatedAt": "2023-05-07T07:15:35.151Z",
              "NFT": {
                  "id": 5,
                  "token": "1005",
                  "title": "The Scream",
                  "description": "A painting by Edvard Munch featuring a figure with an agonized expression against a blood-red sky.",
                  "imageUrl": "https://www.example.com/images/1005.jpg",
                  "averageRating": null,
                  "ratingLength": null,
                  "createdAt": "2023-05-07T07:15:35.064Z",
                  "updatedAt": "2023-05-07T07:15:35.064Z"
              }
          }
      ]
  },
  {
      "id": 3,
      "name": "CRYPTOPUNKS (Ͼ) - 1",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxLCJrZXkiOiJmZmJiNGU4ZmM2MWRlMzU3ZjQ2MWQ0ZDkwMmEzNjMyZSIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.AKrd0bdl0vnLUeI5cHvJM8dJb7sM9f__BrFKC4P3unE",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:26:51.286Z",
      "updatedAt": "2023-05-07T08:26:51.286Z",
      "RoomNFTs": [
          {
              "id": 6,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 6,
              "createdAt": "2023-05-07T08:27:10.862Z",
              "updatedAt": "2023-05-07T08:27:10.862Z",
              "NFT": {
                  "id": 6,
                  "token": "fffdaced3ddfb220d9124289a518bb97",
                  "title": "CryptoPunk 9082",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9082.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.859Z",
                  "updatedAt": "2023-05-07T08:27:10.859Z"
              }
          },
          {
              "id": 7,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 7,
              "createdAt": "2023-05-07T08:27:10.871Z",
              "updatedAt": "2023-05-07T08:27:10.871Z",
              "NFT": {
                  "id": 7,
                  "token": "fff8ff007820e85a75c545389d5a88d4",
                  "title": "CryptoPunk 4799",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4799.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.868Z",
                  "updatedAt": "2023-05-07T08:27:10.868Z"
              }
          },
          {
              "id": 8,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 8,
              "createdAt": "2023-05-07T08:27:10.877Z",
              "updatedAt": "2023-05-07T08:27:10.877Z",
              "NFT": {
                  "id": 8,
                  "token": "fff3657368693f145d0ad29453f6cd4d",
                  "title": "CryptoPunk 047",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk047.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.874Z",
                  "updatedAt": "2023-05-07T08:27:10.874Z"
              }
          },
          {
              "id": 9,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 9,
              "createdAt": "2023-05-07T08:27:10.883Z",
              "updatedAt": "2023-05-07T08:27:10.883Z",
              "NFT": {
                  "id": 9,
                  "token": "ffeb1216404897e010e7b625589feb9b",
                  "title": "CryptoPunk 517",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk517.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.880Z",
                  "updatedAt": "2023-05-07T08:27:10.880Z"
              }
          },
          {
              "id": 10,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 10,
              "createdAt": "2023-05-07T08:27:10.891Z",
              "updatedAt": "2023-05-07T08:27:10.891Z",
              "NFT": {
                  "id": 10,
                  "token": "ffe4c815ef99738e5d168bda5443238e",
                  "title": "CryptoPunk 9970",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9970.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.887Z",
                  "updatedAt": "2023-05-07T08:27:10.887Z"
              }
          },
          {
              "id": 11,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 11,
              "createdAt": "2023-05-07T08:27:10.900Z",
              "updatedAt": "2023-05-07T08:27:10.900Z",
              "NFT": {
                  "id": 11,
                  "token": "ffd3589f009753208d4c9fa0c1fa1917",
                  "title": "CryptoPunk 9826",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9826.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.896Z",
                  "updatedAt": "2023-05-07T08:27:10.896Z"
              }
          },
          {
              "id": 12,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 12,
              "createdAt": "2023-05-07T08:27:10.908Z",
              "updatedAt": "2023-05-07T08:27:10.908Z",
              "NFT": {
                  "id": 12,
                  "token": "ffcfb493e07883402039f5a92f08fced",
                  "title": "CryptoPunk 3554",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3554.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.904Z",
                  "updatedAt": "2023-05-07T08:27:10.904Z"
              }
          },
          {
              "id": 13,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 13,
              "createdAt": "2023-05-07T08:27:10.915Z",
              "updatedAt": "2023-05-07T08:27:10.915Z",
              "NFT": {
                  "id": 13,
                  "token": "ffc306596dc74d2f4865a6e44ad521c1",
                  "title": "CryptoPunk 8673",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8673.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.912Z",
                  "updatedAt": "2023-05-07T08:27:10.912Z"
              }
          },
          {
              "id": 14,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 14,
              "createdAt": "2023-05-07T08:27:10.923Z",
              "updatedAt": "2023-05-07T08:27:10.923Z",
              "NFT": {
                  "id": 14,
                  "token": "ffbed63df87d08a61397f2a3f6fd73f4",
                  "title": "CryptoPunk 7800",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7800.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.919Z",
                  "updatedAt": "2023-05-07T08:27:10.919Z"
              }
          },
          {
              "id": 15,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 3,
              "NFTId": 15,
              "createdAt": "2023-05-07T08:27:10.931Z",
              "updatedAt": "2023-05-07T08:27:10.931Z",
              "NFT": {
                  "id": 15,
                  "token": "ffbb4e8fc61de357f461d4d902a3632e",
                  "title": "CryptoPunk 2649",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2649.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.927Z",
                  "updatedAt": "2023-05-07T08:27:10.927Z"
              }
          }
      ]
  },
  {
      "id": 4,
      "name": "CRYPTOPUNKS (Ͼ) - 2",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoyLCJrZXkiOiJmZjkzMTQxMzI1ZmE0NWNkYzcxZWZkNmFlOWRjMzFhZCIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.DQt3nI3S-KMaaNxvw2umhLvYrNi8iNY0wIHWBhy9tSE",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:26:51.925Z",
      "updatedAt": "2023-05-07T08:26:51.925Z",
      "RoomNFTs": [
          {
              "id": 16,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 16,
              "createdAt": "2023-05-07T08:27:10.936Z",
              "updatedAt": "2023-05-07T08:27:10.936Z",
              "NFT": {
                  "id": 16,
                  "token": "ffb93ff1af8e787c7d5532c1c1999142",
                  "title": "CryptoPunk 6964",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6964.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.933Z",
                  "updatedAt": "2023-05-07T08:27:10.933Z"
              }
          },
          {
              "id": 17,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 17,
              "createdAt": "2023-05-07T08:27:10.952Z",
              "updatedAt": "2023-05-07T08:27:10.952Z",
              "NFT": {
                  "id": 17,
                  "token": "ffb34bdb5f3182c30f867dd9fd1af709",
                  "title": "CryptoPunk 6760",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6760.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.945Z",
                  "updatedAt": "2023-05-07T08:27:10.945Z"
              }
          },
          {
              "id": 18,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 18,
              "createdAt": "2023-05-07T08:27:10.961Z",
              "updatedAt": "2023-05-07T08:27:10.961Z",
              "NFT": {
                  "id": 18,
                  "token": "ffaeadd27ccbac595741265fe45ed9a7",
                  "title": "CryptoPunk 2147",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2147.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.957Z",
                  "updatedAt": "2023-05-07T08:27:10.957Z"
              }
          },
          {
              "id": 19,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 19,
              "createdAt": "2023-05-07T08:27:10.970Z",
              "updatedAt": "2023-05-07T08:27:10.970Z",
              "NFT": {
                  "id": 19,
                  "token": "ffab68c89e793ca0141b88566b687ef4",
                  "title": "CryptoPunk 7361",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7361.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.967Z",
                  "updatedAt": "2023-05-07T08:27:10.967Z"
              }
          },
          {
              "id": 20,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 20,
              "createdAt": "2023-05-07T08:27:10.977Z",
              "updatedAt": "2023-05-07T08:27:10.977Z",
              "NFT": {
                  "id": 20,
                  "token": "ffa52c240ccf00cc6972fd6228cc5f63",
                  "title": "CryptoPunk 4601",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4601.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.973Z",
                  "updatedAt": "2023-05-07T08:27:10.973Z"
              }
          },
          {
              "id": 21,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 21,
              "createdAt": "2023-05-07T08:27:10.986Z",
              "updatedAt": "2023-05-07T08:27:10.986Z",
              "NFT": {
                  "id": 21,
                  "token": "ffa46e5c798f369466b3aee43e5ef037",
                  "title": "CryptoPunk 8215",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8215.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.982Z",
                  "updatedAt": "2023-05-07T08:27:10.982Z"
              }
          },
          {
              "id": 22,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 22,
              "createdAt": "2023-05-07T08:27:10.990Z",
              "updatedAt": "2023-05-07T08:27:10.990Z",
              "NFT": {
                  "id": 22,
                  "token": "ffa3ddcbda30bccbd2b67ea76a5079e8",
                  "title": "CryptoPunk 2891",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2891.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.988Z",
                  "updatedAt": "2023-05-07T08:27:10.988Z"
              }
          },
          {
              "id": 23,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 23,
              "createdAt": "2023-05-07T08:27:10.995Z",
              "updatedAt": "2023-05-07T08:27:10.995Z",
              "NFT": {
                  "id": 23,
                  "token": "ffa222aeb05d5d4040922f7f4d62f2c6",
                  "title": "CryptoPunk 8288",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8288.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.993Z",
                  "updatedAt": "2023-05-07T08:27:10.993Z"
              }
          },
          {
              "id": 24,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 24,
              "createdAt": "2023-05-07T08:27:11.001Z",
              "updatedAt": "2023-05-07T08:27:11.001Z",
              "NFT": {
                  "id": 24,
                  "token": "ff9ea8abc43c59c81664594e471908f9",
                  "title": "CryptoPunk 7136",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7136.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:10.998Z",
                  "updatedAt": "2023-05-07T08:27:10.998Z"
              }
          },
          {
              "id": 25,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 4,
              "NFTId": 25,
              "createdAt": "2023-05-07T08:27:11.006Z",
              "updatedAt": "2023-05-07T08:27:11.006Z",
              "NFT": {
                  "id": 25,
                  "token": "ff93141325fa45cdc71efd6ae9dc31ad",
                  "title": "CryptoPunk 6982",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6982.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.004Z",
                  "updatedAt": "2023-05-07T08:27:11.004Z"
              }
          }
      ]
  },
  {
      "id": 5,
      "name": "CRYPTOPUNKS (Ͼ) - 3",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjozLCJrZXkiOiJmZjMwYzI3MWFjYTI4YWFiNDYwOTJjZTBiNzJlNTFiMyIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9._Ds_FuJS7wslVhAX8e2TdEpbKJ8eTs7UQCDkAx0ss7c",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:26:52.415Z",
      "updatedAt": "2023-05-07T08:26:52.415Z",
      "RoomNFTs": [
          {
              "id": 26,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 26,
              "createdAt": "2023-05-07T08:27:11.012Z",
              "updatedAt": "2023-05-07T08:27:11.012Z",
              "NFT": {
                  "id": 26,
                  "token": "ff7ada7407bb66ffa123fca6dc3a9357",
                  "title": "CryptoPunk 7710",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7710.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.010Z",
                  "updatedAt": "2023-05-07T08:27:11.010Z"
              }
          },
          {
              "id": 27,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 27,
              "createdAt": "2023-05-07T08:27:11.017Z",
              "updatedAt": "2023-05-07T08:27:11.017Z",
              "NFT": {
                  "id": 27,
                  "token": "ff6b552d7edf95372184551b86ced5ba",
                  "title": "CryptoPunk 923",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk923.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.015Z",
                  "updatedAt": "2023-05-07T08:27:11.015Z"
              }
          },
          {
              "id": 28,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 28,
              "createdAt": "2023-05-07T08:27:11.024Z",
              "updatedAt": "2023-05-07T08:27:11.024Z",
              "NFT": {
                  "id": 28,
                  "token": "ff67569d1489d30089317f92d676e59b",
                  "title": "CryptoPunk 8758",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8758.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.020Z",
                  "updatedAt": "2023-05-07T08:27:11.020Z"
              }
          },
          {
              "id": 29,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 29,
              "createdAt": "2023-05-07T08:27:11.029Z",
              "updatedAt": "2023-05-07T08:27:11.029Z",
              "NFT": {
                  "id": 29,
                  "token": "ff62b256e21b3a0c1fe1e91619c80a7c",
                  "title": "CryptoPunk 3878",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3878.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.027Z",
                  "updatedAt": "2023-05-07T08:27:11.027Z"
              }
          },
          {
              "id": 30,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 30,
              "createdAt": "2023-05-07T08:27:11.033Z",
              "updatedAt": "2023-05-07T08:27:11.033Z",
              "NFT": {
                  "id": 30,
                  "token": "ff607f7844b9e2a1c837fa644e966897",
                  "title": "CryptoPunk 9102",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9102.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.031Z",
                  "updatedAt": "2023-05-07T08:27:11.031Z"
              }
          },
          {
              "id": 31,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 31,
              "createdAt": "2023-05-07T08:27:11.039Z",
              "updatedAt": "2023-05-07T08:27:11.039Z",
              "NFT": {
                  "id": 31,
                  "token": "ff5ebda2e2d1df1c2b72a432621f51a3",
                  "title": "CryptoPunk 1467",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1467.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.036Z",
                  "updatedAt": "2023-05-07T08:27:11.036Z"
              }
          },
          {
              "id": 32,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 32,
              "createdAt": "2023-05-07T08:27:11.044Z",
              "updatedAt": "2023-05-07T08:27:11.044Z",
              "NFT": {
                  "id": 32,
                  "token": "ff57746cf6eebc8a8673833aa4cb544a",
                  "title": "CryptoPunk 6608",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6608.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.042Z",
                  "updatedAt": "2023-05-07T08:27:11.042Z"
              }
          },
          {
              "id": 33,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 33,
              "createdAt": "2023-05-07T08:27:11.048Z",
              "updatedAt": "2023-05-07T08:27:11.048Z",
              "NFT": {
                  "id": 33,
                  "token": "ff5149a19290f5a032e404f5893d7912",
                  "title": "CryptoPunk 9477",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9477.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.046Z",
                  "updatedAt": "2023-05-07T08:27:11.046Z"
              }
          },
          {
              "id": 34,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 34,
              "createdAt": "2023-05-07T08:27:11.054Z",
              "updatedAt": "2023-05-07T08:27:11.054Z",
              "NFT": {
                  "id": 34,
                  "token": "ff3fb99f520e72122bde020fada72f69",
                  "title": "CryptoPunk 4273",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4273.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.052Z",
                  "updatedAt": "2023-05-07T08:27:11.052Z"
              }
          },
          {
              "id": 35,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 5,
              "NFTId": 35,
              "createdAt": "2023-05-07T08:27:11.059Z",
              "updatedAt": "2023-05-07T08:27:11.059Z",
              "NFT": {
                  "id": 35,
                  "token": "ff30c271aca28aab46092ce0b72e51b3",
                  "title": "CryptoPunk 7610",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7610.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.057Z",
                  "updatedAt": "2023-05-07T08:27:11.057Z"
              }
          }
      ]
  },
  {
      "id": 6,
      "name": "CRYPTOPUNKS (Ͼ) - 4",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo0LCJrZXkiOiJmZjA3NjY4NzM5MTMyNDMwYjJmMzI2ODViZTUwMjUxMCIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.GRzTUSzpXo-ms08N8o8fjXyzFlD7Sqz3BF1kkoDUEFE",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:26:56.385Z",
      "updatedAt": "2023-05-07T08:26:56.385Z",
      "RoomNFTs": [
          {
              "id": 36,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 36,
              "createdAt": "2023-05-07T08:27:11.063Z",
              "updatedAt": "2023-05-07T08:27:11.063Z",
              "NFT": {
                  "id": 36,
                  "token": "ff2f44e2e66b23e8fd6239a36a298856",
                  "title": "CryptoPunk 6272",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6272.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.061Z",
                  "updatedAt": "2023-05-07T08:27:11.061Z"
              }
          },
          {
              "id": 37,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 37,
              "createdAt": "2023-05-07T08:27:11.074Z",
              "updatedAt": "2023-05-07T08:27:11.074Z",
              "NFT": {
                  "id": 37,
                  "token": "ff2eebf2297d8db45378006e7104f2b2",
                  "title": "CryptoPunk 4430",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4430.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.071Z",
                  "updatedAt": "2023-05-07T08:27:11.071Z"
              }
          },
          {
              "id": 38,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 38,
              "createdAt": "2023-05-07T08:27:11.080Z",
              "updatedAt": "2023-05-07T08:27:11.080Z",
              "NFT": {
                  "id": 38,
                  "token": "ff1d17993f56351c5a3a6b387cd917f8",
                  "title": "CryptoPunk 8194",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8194.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.077Z",
                  "updatedAt": "2023-05-07T08:27:11.077Z"
              }
          },
          {
              "id": 39,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 39,
              "createdAt": "2023-05-07T08:27:11.086Z",
              "updatedAt": "2023-05-07T08:27:11.086Z",
              "NFT": {
                  "id": 39,
                  "token": "ff1921aec96a3352f80911ac5154d679",
                  "title": "CryptoPunk 6206",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6206.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.082Z",
                  "updatedAt": "2023-05-07T08:27:11.082Z"
              }
          },
          {
              "id": 40,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 40,
              "createdAt": "2023-05-07T08:27:11.093Z",
              "updatedAt": "2023-05-07T08:27:11.093Z",
              "NFT": {
                  "id": 40,
                  "token": "ff135dc00b3755ee9a4a86ad7af2854f",
                  "title": "CryptoPunk 3861",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3861.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.089Z",
                  "updatedAt": "2023-05-07T08:27:11.089Z"
              }
          },
          {
              "id": 41,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 41,
              "createdAt": "2023-05-07T08:27:11.105Z",
              "updatedAt": "2023-05-07T08:27:11.105Z",
              "NFT": {
                  "id": 41,
                  "token": "ff12673e90a665c8663561ccdd142d3e",
                  "title": "CryptoPunk 3201",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3201.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.099Z",
                  "updatedAt": "2023-05-07T08:27:11.099Z"
              }
          },
          {
              "id": 42,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 42,
              "createdAt": "2023-05-07T08:27:11.114Z",
              "updatedAt": "2023-05-07T08:27:11.114Z",
              "NFT": {
                  "id": 42,
                  "token": "ff0a4bbef597d8100bf27dcd02eeadd9",
                  "title": "CryptoPunk 5460",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5460.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.110Z",
                  "updatedAt": "2023-05-07T08:27:11.110Z"
              }
          },
          {
              "id": 43,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 43,
              "createdAt": "2023-05-07T08:27:11.123Z",
              "updatedAt": "2023-05-07T08:27:11.123Z",
              "NFT": {
                  "id": 43,
                  "token": "ff08c35d359ea743a6ddc5e6889cbd6a",
                  "title": "CryptoPunk 6011",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6011.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.120Z",
                  "updatedAt": "2023-05-07T08:27:11.120Z"
              }
          },
          {
              "id": 44,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 44,
              "createdAt": "2023-05-07T08:27:11.128Z",
              "updatedAt": "2023-05-07T08:27:11.128Z",
              "NFT": {
                  "id": 44,
                  "token": "ff07c210453daebec0da740c7d5d4e89",
                  "title": "CryptoPunk 7106",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7106.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.125Z",
                  "updatedAt": "2023-05-07T08:27:11.125Z"
              }
          },
          {
              "id": 45,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 6,
              "NFTId": 45,
              "createdAt": "2023-05-07T08:27:11.136Z",
              "updatedAt": "2023-05-07T08:27:11.136Z",
              "NFT": {
                  "id": 45,
                  "token": "ff07668739132430b2f32685be502510",
                  "title": "CryptoPunk 2897",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2897.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.131Z",
                  "updatedAt": "2023-05-07T08:27:11.131Z"
              }
          }
      ]
  },
  {
      "id": 7,
      "name": "CRYPTOPUNKS (Ͼ) - 5",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo1LCJrZXkiOiJmZWNlMjFmOTY1MTU0M2NhMGFmNDcwN2RkODliMWFjMyIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.7yuLCbjOxptQjgv7x-jgyxgi_WPX97CxWuY9O90k700",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:01.607Z",
      "updatedAt": "2023-05-07T08:27:01.607Z",
      "RoomNFTs": [
          {
              "id": 46,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 46,
              "createdAt": "2023-05-07T08:27:11.144Z",
              "updatedAt": "2023-05-07T08:27:11.144Z",
              "NFT": {
                  "id": 46,
                  "token": "ff017a2611336ef7854b1cef1729aa46",
                  "title": "CryptoPunk 7310",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7310.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.141Z",
                  "updatedAt": "2023-05-07T08:27:11.141Z"
              }
          },
          {
              "id": 47,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 47,
              "createdAt": "2023-05-07T08:27:11.150Z",
              "updatedAt": "2023-05-07T08:27:11.150Z",
              "NFT": {
                  "id": 47,
                  "token": "fefee71efe17f5a345cd703df129dde5",
                  "title": "CryptoPunk 2034",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2034.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.146Z",
                  "updatedAt": "2023-05-07T08:27:11.146Z"
              }
          },
          {
              "id": 48,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 48,
              "createdAt": "2023-05-07T08:27:11.157Z",
              "updatedAt": "2023-05-07T08:27:11.157Z",
              "NFT": {
                  "id": 48,
                  "token": "fee9d48373d2962a8b2a46b54fe0f0dc",
                  "title": "CryptoPunk 3240",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3240.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.154Z",
                  "updatedAt": "2023-05-07T08:27:11.154Z"
              }
          },
          {
              "id": 49,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 49,
              "createdAt": "2023-05-07T08:27:11.164Z",
              "updatedAt": "2023-05-07T08:27:11.164Z",
              "NFT": {
                  "id": 49,
                  "token": "fee9ae10beb507d888997c582e40f48a",
                  "title": "CryptoPunk 484",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk484.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.161Z",
                  "updatedAt": "2023-05-07T08:27:11.161Z"
              }
          },
          {
              "id": 50,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 50,
              "createdAt": "2023-05-07T08:27:11.173Z",
              "updatedAt": "2023-05-07T08:27:11.173Z",
              "NFT": {
                  "id": 50,
                  "token": "fee53d2b52f64259bc2e5df7d98a907c",
                  "title": "CryptoPunk 5699",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5699.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.169Z",
                  "updatedAt": "2023-05-07T08:27:11.169Z"
              }
          },
          {
              "id": 51,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 51,
              "createdAt": "2023-05-07T08:27:11.180Z",
              "updatedAt": "2023-05-07T08:27:11.180Z",
              "NFT": {
                  "id": 51,
                  "token": "fee1e5fdf2667c80cb4643eb2f6d18d4",
                  "title": "CryptoPunk 1965",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1965.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.176Z",
                  "updatedAt": "2023-05-07T08:27:11.176Z"
              }
          },
          {
              "id": 52,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 52,
              "createdAt": "2023-05-07T08:27:11.189Z",
              "updatedAt": "2023-05-07T08:27:11.189Z",
              "NFT": {
                  "id": 52,
                  "token": "fed36ab386f8d088757c7ff8f149f23a",
                  "title": "CryptoPunk 2497",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2497.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.185Z",
                  "updatedAt": "2023-05-07T08:27:11.185Z"
              }
          },
          {
              "id": 53,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 53,
              "createdAt": "2023-05-07T08:27:11.197Z",
              "updatedAt": "2023-05-07T08:27:11.197Z",
              "NFT": {
                  "id": 53,
                  "token": "fece84758bcaa9b561d7e80357dc873a",
                  "title": "CryptoPunk 8790",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8790.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.193Z",
                  "updatedAt": "2023-05-07T08:27:11.193Z"
              }
          },
          {
              "id": 54,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 54,
              "createdAt": "2023-05-07T08:27:11.204Z",
              "updatedAt": "2023-05-07T08:27:11.204Z",
              "NFT": {
                  "id": 54,
                  "token": "fece2e2dcb2f4311b61d3d3e4ffeff6d",
                  "title": "CryptoPunk 4517",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4517.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.201Z",
                  "updatedAt": "2023-05-07T08:27:11.201Z"
              }
          },
          {
              "id": 55,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 7,
              "NFTId": 55,
              "createdAt": "2023-05-07T08:27:11.209Z",
              "updatedAt": "2023-05-07T08:27:11.209Z",
              "NFT": {
                  "id": 55,
                  "token": "fece21f9651543ca0af4707dd89b1ac3",
                  "title": "CryptoPunk 373",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk373.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.207Z",
                  "updatedAt": "2023-05-07T08:27:11.207Z"
              }
          }
      ]
  },
  {
      "id": 8,
      "name": "CRYPTOPUNKS (Ͼ) - 6",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo2LCJrZXkiOiJmZTk1ZDc1YzJhMTVlYWZlYTVjNWRmMWE3MzAxNmJlNiIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.VWVrCsBQGe5roqfsUSvK8CBEfuYd4EeGRwZ5EctN3vo",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:02.522Z",
      "updatedAt": "2023-05-07T08:27:02.522Z",
      "RoomNFTs": [
          {
              "id": 56,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 56,
              "createdAt": "2023-05-07T08:27:11.214Z",
              "updatedAt": "2023-05-07T08:27:11.214Z",
              "NFT": {
                  "id": 56,
                  "token": "fece138cd91fe5f69afb4c8c96b3c200",
                  "title": "CryptoPunk 7752",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7752.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.212Z",
                  "updatedAt": "2023-05-07T08:27:11.212Z"
              }
          },
          {
              "id": 57,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 57,
              "createdAt": "2023-05-07T08:27:11.219Z",
              "updatedAt": "2023-05-07T08:27:11.219Z",
              "NFT": {
                  "id": 57,
                  "token": "fecbb496c4e7277fb23aa3be4d2f7760",
                  "title": "CryptoPunk 247",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk247.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.216Z",
                  "updatedAt": "2023-05-07T08:27:11.216Z"
              }
          },
          {
              "id": 58,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 58,
              "createdAt": "2023-05-07T08:27:11.224Z",
              "updatedAt": "2023-05-07T08:27:11.224Z",
              "NFT": {
                  "id": 58,
                  "token": "fec7f76b2c17d85611d263e5c8c66f44",
                  "title": "CryptoPunk 5351",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5351.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.222Z",
                  "updatedAt": "2023-05-07T08:27:11.222Z"
              }
          },
          {
              "id": 59,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 59,
              "createdAt": "2023-05-07T08:27:11.229Z",
              "updatedAt": "2023-05-07T08:27:11.229Z",
              "NFT": {
                  "id": 59,
                  "token": "fec09e33e69cd2460d68e9d4724cd579",
                  "title": "CryptoPunk 2832",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2832.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.226Z",
                  "updatedAt": "2023-05-07T08:27:11.226Z"
              }
          },
          {
              "id": 60,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 60,
              "createdAt": "2023-05-07T08:27:11.234Z",
              "updatedAt": "2023-05-07T08:27:11.234Z",
              "NFT": {
                  "id": 60,
                  "token": "febca33fe24bcea0f4d0fb5b52864cde",
                  "title": "CryptoPunk 5479",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5479.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.231Z",
                  "updatedAt": "2023-05-07T08:27:11.231Z"
              }
          },
          {
              "id": 61,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 61,
              "createdAt": "2023-05-07T08:27:11.241Z",
              "updatedAt": "2023-05-07T08:27:11.241Z",
              "NFT": {
                  "id": 61,
                  "token": "feb8f0ea97e77158fa40933d891d1f0f",
                  "title": "CryptoPunk 2041",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2041.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.237Z",
                  "updatedAt": "2023-05-07T08:27:11.237Z"
              }
          },
          {
              "id": 62,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 62,
              "createdAt": "2023-05-07T08:27:11.246Z",
              "updatedAt": "2023-05-07T08:27:11.246Z",
              "NFT": {
                  "id": 62,
                  "token": "feb469a07cddb87bc9e2e81d9b56d51a",
                  "title": "CryptoPunk 1913",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1913.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.243Z",
                  "updatedAt": "2023-05-07T08:27:11.243Z"
              }
          },
          {
              "id": 63,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 63,
              "createdAt": "2023-05-07T08:27:11.251Z",
              "updatedAt": "2023-05-07T08:27:11.251Z",
              "NFT": {
                  "id": 63,
                  "token": "fea233ceb241b9261a5ecb0e84b9bca1",
                  "title": "CryptoPunk 7885",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7885.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.248Z",
                  "updatedAt": "2023-05-07T08:27:11.248Z"
              }
          },
          {
              "id": 64,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 64,
              "createdAt": "2023-05-07T08:27:11.258Z",
              "updatedAt": "2023-05-07T08:27:11.258Z",
              "NFT": {
                  "id": 64,
                  "token": "fe979d7e43fe5f16bf7ed9ce94e22aea",
                  "title": "CryptoPunk 5436",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5436.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.256Z",
                  "updatedAt": "2023-05-07T08:27:11.256Z"
              }
          },
          {
              "id": 65,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 8,
              "NFTId": 65,
              "createdAt": "2023-05-07T08:27:11.263Z",
              "updatedAt": "2023-05-07T08:27:11.263Z",
              "NFT": {
                  "id": 65,
                  "token": "fe95d75c2a15eafea5c5df1a73016be6",
                  "title": "CryptoPunk 1579",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1579.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.261Z",
                  "updatedAt": "2023-05-07T08:27:11.261Z"
              }
          }
      ]
  },
  {
      "id": 9,
      "name": "CRYPTOPUNKS (Ͼ) - 7",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo3LCJrZXkiOiJmZTU3Y2I3OTkyMmY1N2Q1NjZhMmE3YTkwOGY2ODAzZiIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.VJLb6p-dryh8FGMS3Sq1-K-HN91Y0DHiI4v9tqhE_Fg",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:05.880Z",
      "updatedAt": "2023-05-07T08:27:05.880Z",
      "RoomNFTs": [
          {
              "id": 66,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 66,
              "createdAt": "2023-05-07T08:27:11.268Z",
              "updatedAt": "2023-05-07T08:27:11.268Z",
              "NFT": {
                  "id": 66,
                  "token": "fe9065b8aed296be762897063d36a492",
                  "title": "CryptoPunk 1387",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1387.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.265Z",
                  "updatedAt": "2023-05-07T08:27:11.265Z"
              }
          },
          {
              "id": 67,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 67,
              "createdAt": "2023-05-07T08:27:11.273Z",
              "updatedAt": "2023-05-07T08:27:11.273Z",
              "NFT": {
                  "id": 67,
                  "token": "fe8f15a763abf7690f76a9aec403090e",
                  "title": "CryptoPunk 8530",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8530.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.270Z",
                  "updatedAt": "2023-05-07T08:27:11.270Z"
              }
          },
          {
              "id": 68,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 68,
              "createdAt": "2023-05-07T08:27:11.277Z",
              "updatedAt": "2023-05-07T08:27:11.277Z",
              "NFT": {
                  "id": 68,
                  "token": "fe8751ffe9ba491b264b4171460b4031",
                  "title": "CryptoPunk 2005",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2005.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.275Z",
                  "updatedAt": "2023-05-07T08:27:11.275Z"
              }
          },
          {
              "id": 69,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 69,
              "createdAt": "2023-05-07T08:27:11.284Z",
              "updatedAt": "2023-05-07T08:27:11.284Z",
              "NFT": {
                  "id": 69,
                  "token": "fe7fd21a706e3d3a82d6f0e7e418c0a8",
                  "title": "CryptoPunk 2564",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2564.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.280Z",
                  "updatedAt": "2023-05-07T08:27:11.280Z"
              }
          },
          {
              "id": 70,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 70,
              "createdAt": "2023-05-07T08:27:11.291Z",
              "updatedAt": "2023-05-07T08:27:11.291Z",
              "NFT": {
                  "id": 70,
                  "token": "fe79fa81594e8fb43dff3a7ffee30f1c",
                  "title": "CryptoPunk 7038",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7038.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.287Z",
                  "updatedAt": "2023-05-07T08:27:11.287Z"
              }
          },
          {
              "id": 71,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 71,
              "createdAt": "2023-05-07T08:27:11.298Z",
              "updatedAt": "2023-05-07T08:27:11.298Z",
              "NFT": {
                  "id": 71,
                  "token": "fe73a0e5f38ea5916da2f22b7fe1e707",
                  "title": "CryptoPunk 9658",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9658.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.295Z",
                  "updatedAt": "2023-05-07T08:27:11.295Z"
              }
          },
          {
              "id": 72,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 72,
              "createdAt": "2023-05-07T08:27:11.306Z",
              "updatedAt": "2023-05-07T08:27:11.306Z",
              "NFT": {
                  "id": 72,
                  "token": "fe6d3f372fc9e5b85723cc89b20ce75f",
                  "title": "CryptoPunk 6856",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6856.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.303Z",
                  "updatedAt": "2023-05-07T08:27:11.303Z"
              }
          },
          {
              "id": 73,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 73,
              "createdAt": "2023-05-07T08:27:11.314Z",
              "updatedAt": "2023-05-07T08:27:11.314Z",
              "NFT": {
                  "id": 73,
                  "token": "fe682d3c091e6d3789bce60664fd3a89",
                  "title": "CryptoPunk 7719",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7719.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.311Z",
                  "updatedAt": "2023-05-07T08:27:11.311Z"
              }
          },
          {
              "id": 74,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 74,
              "createdAt": "2023-05-07T08:27:11.322Z",
              "updatedAt": "2023-05-07T08:27:11.322Z",
              "NFT": {
                  "id": 74,
                  "token": "fe5abb66d02f16d9631f9a24d786ec63",
                  "title": "CryptoPunk 6692",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6692.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.318Z",
                  "updatedAt": "2023-05-07T08:27:11.318Z"
              }
          },
          {
              "id": 75,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 9,
              "NFTId": 75,
              "createdAt": "2023-05-07T08:27:11.330Z",
              "updatedAt": "2023-05-07T08:27:11.330Z",
              "NFT": {
                  "id": 75,
                  "token": "fe57cb79922f57d566a2a7a908f6803f",
                  "title": "CryptoPunk 7554",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7554.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.326Z",
                  "updatedAt": "2023-05-07T08:27:11.326Z"
              }
          }
      ]
  },
  {
      "id": 10,
      "name": "CRYPTOPUNKS (Ͼ) - 8",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo4LCJrZXkiOiJmZTE2YTRiOGE3MjkxNjhkYjBlNWE5ZjZhMzZjNTgzNiIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.xMkIdoD1swyOBm4eAQ8fmXMjHBE_zMlgyy4ifABrVfk",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:06.630Z",
      "updatedAt": "2023-05-07T08:27:06.630Z",
      "RoomNFTs": [
          {
              "id": 76,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 76,
              "createdAt": "2023-05-07T08:27:11.336Z",
              "updatedAt": "2023-05-07T08:27:11.336Z",
              "NFT": {
                  "id": 76,
                  "token": "fe4e6fa19d73d193235b771317334866",
                  "title": "CryptoPunk 7785",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7785.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.333Z",
                  "updatedAt": "2023-05-07T08:27:11.333Z"
              }
          },
          {
              "id": 77,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 77,
              "createdAt": "2023-05-07T08:27:11.342Z",
              "updatedAt": "2023-05-07T08:27:11.342Z",
              "NFT": {
                  "id": 77,
                  "token": "fe4da07aee8c917f66fd51a6e0152a29",
                  "title": "CryptoPunk 7039",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7039.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.339Z",
                  "updatedAt": "2023-05-07T08:27:11.339Z"
              }
          },
          {
              "id": 78,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 78,
              "createdAt": "2023-05-07T08:27:11.347Z",
              "updatedAt": "2023-05-07T08:27:11.347Z",
              "NFT": {
                  "id": 78,
                  "token": "fe4aa403b72d3c9f09d6cfc507869e28",
                  "title": "CryptoPunk 9216",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk9216.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.344Z",
                  "updatedAt": "2023-05-07T08:27:11.344Z"
              }
          },
          {
              "id": 79,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 79,
              "createdAt": "2023-05-07T08:27:11.352Z",
              "updatedAt": "2023-05-07T08:27:11.352Z",
              "NFT": {
                  "id": 79,
                  "token": "fe376aecbe5bed80823f76133dff7aba",
                  "title": "CryptoPunk 8991",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8991.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.349Z",
                  "updatedAt": "2023-05-07T08:27:11.349Z"
              }
          },
          {
              "id": 80,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 80,
              "createdAt": "2023-05-07T08:27:11.357Z",
              "updatedAt": "2023-05-07T08:27:11.357Z",
              "NFT": {
                  "id": 80,
                  "token": "fe2f29179d44fd9ae770205082987e3f",
                  "title": "CryptoPunk 577",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk577.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.355Z",
                  "updatedAt": "2023-05-07T08:27:11.355Z"
              }
          },
          {
              "id": 81,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 81,
              "createdAt": "2023-05-07T08:27:11.362Z",
              "updatedAt": "2023-05-07T08:27:11.362Z",
              "NFT": {
                  "id": 81,
                  "token": "fe23b1067343a5138ed5f92eefbb0593",
                  "title": "CryptoPunk 3864",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3864.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.359Z",
                  "updatedAt": "2023-05-07T08:27:11.359Z"
              }
          },
          {
              "id": 82,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 82,
              "createdAt": "2023-05-07T08:27:11.368Z",
              "updatedAt": "2023-05-07T08:27:11.368Z",
              "NFT": {
                  "id": 82,
                  "token": "fe22b9ff275415a8bfae6eda22707030",
                  "title": "CryptoPunk 2128",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2128.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.365Z",
                  "updatedAt": "2023-05-07T08:27:11.365Z"
              }
          },
          {
              "id": 83,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 83,
              "createdAt": "2023-05-07T08:27:11.379Z",
              "updatedAt": "2023-05-07T08:27:11.379Z",
              "NFT": {
                  "id": 83,
                  "token": "fe1ac570c88000eb29ebf5d5c776ea21",
                  "title": "CryptoPunk 3493",
                  "description": "Zombie",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3493.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.376Z",
                  "updatedAt": "2023-05-07T08:27:11.376Z"
              }
          },
          {
              "id": 84,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 84,
              "createdAt": "2023-05-07T08:27:11.388Z",
              "updatedAt": "2023-05-07T08:27:11.388Z",
              "NFT": {
                  "id": 84,
                  "token": "fe1a4ef42a24c289bb437626a6a75a1c",
                  "title": "CryptoPunk 1583",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1583.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.384Z",
                  "updatedAt": "2023-05-07T08:27:11.384Z"
              }
          },
          {
              "id": 85,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 10,
              "NFTId": 85,
              "createdAt": "2023-05-07T08:27:11.401Z",
              "updatedAt": "2023-05-07T08:27:11.401Z",
              "NFT": {
                  "id": 85,
                  "token": "fe16a4b8a729168db0e5a9f6a36c5836",
                  "title": "CryptoPunk 2246",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk2246.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.394Z",
                  "updatedAt": "2023-05-07T08:27:11.394Z"
              }
          }
      ]
  },
  {
      "id": 11,
      "name": "CRYPTOPUNKS (Ͼ) - 9",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo5LCJrZXkiOiJmZGUyMjIxMTE1NGM0M2NkYmI3ODgwNDQ2NzIwZDFjMyIsInRvdGFsIjo5OTk0LCJpYXQiOjE2ODM0NDgwMTF9.jwYES6GlOnFTrsKQLjsyexVybkTYpoKEGKuxduHOtjg",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:08.247Z",
      "updatedAt": "2023-05-07T08:27:08.247Z",
      "RoomNFTs": [
          {
              "id": 86,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 86,
              "createdAt": "2023-05-07T08:27:11.410Z",
              "updatedAt": "2023-05-07T08:27:11.410Z",
              "NFT": {
                  "id": 86,
                  "token": "fe152bf67b7193f9738eaf155c9606e4",
                  "title": "CryptoPunk 5374",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5374.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.405Z",
                  "updatedAt": "2023-05-07T08:27:11.405Z"
              }
          },
          {
              "id": 87,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 87,
              "createdAt": "2023-05-07T08:27:11.416Z",
              "updatedAt": "2023-05-07T08:27:11.416Z",
              "NFT": {
                  "id": 87,
                  "token": "fe1196c3a9eeffbb1cfb5b18c89b8743",
                  "title": "CryptoPunk 7101",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7101.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.413Z",
                  "updatedAt": "2023-05-07T08:27:11.413Z"
              }
          },
          {
              "id": 88,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 88,
              "createdAt": "2023-05-07T08:27:11.428Z",
              "updatedAt": "2023-05-07T08:27:11.428Z",
              "NFT": {
                  "id": 88,
                  "token": "fe0f9720790fe163db4dc2f2ed8a2eef",
                  "title": "CryptoPunk 4449",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4449.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.425Z",
                  "updatedAt": "2023-05-07T08:27:11.425Z"
              }
          },
          {
              "id": 89,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 89,
              "createdAt": "2023-05-07T08:27:11.433Z",
              "updatedAt": "2023-05-07T08:27:11.433Z",
              "NFT": {
                  "id": 89,
                  "token": "fe099a28d0cc8ee5ab0d4689dc2110a9",
                  "title": "CryptoPunk 4436",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4436.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.430Z",
                  "updatedAt": "2023-05-07T08:27:11.430Z"
              }
          },
          {
              "id": 90,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 90,
              "createdAt": "2023-05-07T08:27:11.441Z",
              "updatedAt": "2023-05-07T08:27:11.441Z",
              "NFT": {
                  "id": 90,
                  "token": "fe031a9c141c9086e041efb982df7265",
                  "title": "CryptoPunk 4611",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4611.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.438Z",
                  "updatedAt": "2023-05-07T08:27:11.438Z"
              }
          },
          {
              "id": 91,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 91,
              "createdAt": "2023-05-07T08:27:11.445Z",
              "updatedAt": "2023-05-07T08:27:11.445Z",
              "NFT": {
                  "id": 91,
                  "token": "fe00b65f0f9ab6006e539f618d115ca0",
                  "title": "CryptoPunk 3119",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3119.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.443Z",
                  "updatedAt": "2023-05-07T08:27:11.443Z"
              }
          },
          {
              "id": 92,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 92,
              "createdAt": "2023-05-07T08:27:11.451Z",
              "updatedAt": "2023-05-07T08:27:11.451Z",
              "NFT": {
                  "id": 92,
                  "token": "fdfd3f979331f8d239d1249a93826fdf",
                  "title": "CryptoPunk 7161",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk7161.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.448Z",
                  "updatedAt": "2023-05-07T08:27:11.448Z"
              }
          },
          {
              "id": 93,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 93,
              "createdAt": "2023-05-07T08:27:11.457Z",
              "updatedAt": "2023-05-07T08:27:11.457Z",
              "NFT": {
                  "id": 93,
                  "token": "fdf9dab0140a53d51bb05f5e9559ed25",
                  "title": "CryptoPunk 8320",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8320.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.454Z",
                  "updatedAt": "2023-05-07T08:27:11.454Z"
              }
          },
          {
              "id": 94,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 94,
              "createdAt": "2023-05-07T08:27:11.463Z",
              "updatedAt": "2023-05-07T08:27:11.463Z",
              "NFT": {
                  "id": 94,
                  "token": "fdf13d08c45897343662b75f732671db",
                  "title": "CryptoPunk 934",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk934.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.460Z",
                  "updatedAt": "2023-05-07T08:27:11.460Z"
              }
          },
          {
              "id": 95,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 11,
              "NFTId": 95,
              "createdAt": "2023-05-07T08:27:11.476Z",
              "updatedAt": "2023-05-07T08:27:11.476Z",
              "NFT": {
                  "id": 95,
                  "token": "fde22211154c43cdbb7880446720d1c3",
                  "title": "CryptoPunk 5883",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5883.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.472Z",
                  "updatedAt": "2023-05-07T08:27:11.472Z"
              }
          }
      ]
  },
  {
      "id": 12,
      "name": "CRYPTOPUNKS (Ͼ) - 10",
      "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxMCwia2V5IjoiZmQ5MmE0ODg3MmE4NjIwZTFlNmU0NTk3ODZkMTExYWYiLCJ0b3RhbCI6OTk5NCwiaWF0IjoxNjgzNDQ4MDExfQ.Np82xV2rEv6nYdk5lwePaK15OMpoVn1mVGeprvTDV0U",
      "ArtistId": 1,
      "createdAt": "2023-05-07T08:27:10.847Z",
      "updatedAt": "2023-05-07T08:27:10.847Z",
      "RoomNFTs": [
          {
              "id": 96,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 96,
              "createdAt": "2023-05-07T08:27:11.484Z",
              "updatedAt": "2023-05-07T08:27:11.484Z",
              "NFT": {
                  "id": 96,
                  "token": "fde15659252d318edab5b1b553fe71fb",
                  "title": "CryptoPunk 4792",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk4792.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.479Z",
                  "updatedAt": "2023-05-07T08:27:11.479Z"
              }
          },
          {
              "id": 97,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 97,
              "createdAt": "2023-05-07T08:27:11.495Z",
              "updatedAt": "2023-05-07T08:27:11.495Z",
              "NFT": {
                  "id": 97,
                  "token": "fddad23ac46eee688521b842c4c62feb",
                  "title": "CryptoPunk 8467",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk8467.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.490Z",
                  "updatedAt": "2023-05-07T08:27:11.490Z"
              }
          },
          {
              "id": 98,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 98,
              "createdAt": "2023-05-07T08:27:11.509Z",
              "updatedAt": "2023-05-07T08:27:11.509Z",
              "NFT": {
                  "id": 98,
                  "token": "fdd642ff229c472c123e282a0569d431",
                  "title": "CryptoPunk 1066",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1066.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.502Z",
                  "updatedAt": "2023-05-07T08:27:11.502Z"
              }
          },
          {
              "id": 99,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 99,
              "createdAt": "2023-05-07T08:27:11.522Z",
              "updatedAt": "2023-05-07T08:27:11.522Z",
              "NFT": {
                  "id": 99,
                  "token": "fdcff2aa0edac657600a33f0c602ea3a",
                  "title": "CryptoPunk 1779",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk1779.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.514Z",
                  "updatedAt": "2023-05-07T08:27:11.514Z"
              }
          },
          {
              "id": 100,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 100,
              "createdAt": "2023-05-07T08:27:11.536Z",
              "updatedAt": "2023-05-07T08:27:11.536Z",
              "NFT": {
                  "id": 100,
                  "token": "fdc695e5e3257361ff2179186ae62dea",
                  "title": "CryptoPunk 6508",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6508.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.529Z",
                  "updatedAt": "2023-05-07T08:27:11.529Z"
              }
          },
          {
              "id": 101,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 101,
              "createdAt": "2023-05-07T08:27:11.546Z",
              "updatedAt": "2023-05-07T08:27:11.546Z",
              "NFT": {
                  "id": 101,
                  "token": "fdbe8054fb3b34df8bcfb5fc3fb2247b",
                  "title": "CryptoPunk 3516",
                  "description": "Male",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3516.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.540Z",
                  "updatedAt": "2023-05-07T08:27:11.540Z"
              }
          },
          {
              "id": 102,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 102,
              "createdAt": "2023-05-07T08:27:11.568Z",
              "updatedAt": "2023-05-07T08:27:11.568Z",
              "NFT": {
                  "id": 102,
                  "token": "fdbb7cff9a7a9066a793d515017f3812",
                  "title": "CryptoPunk 6823",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6823.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.552Z",
                  "updatedAt": "2023-05-07T08:27:11.552Z"
              }
          },
          {
              "id": 103,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 103,
              "createdAt": "2023-05-07T08:27:11.574Z",
              "updatedAt": "2023-05-07T08:27:11.574Z",
              "NFT": {
                  "id": 103,
                  "token": "fd9fcf687a8c6414ac9dadee26a0e7e5",
                  "title": "CryptoPunk 3969",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk3969.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.571Z",
                  "updatedAt": "2023-05-07T08:27:11.571Z"
              }
          },
          {
              "id": 104,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 104,
              "createdAt": "2023-05-07T08:27:11.579Z",
              "updatedAt": "2023-05-07T08:27:11.579Z",
              "NFT": {
                  "id": 104,
                  "token": "fd9d32ae0da0bbba4eeaa0d5c6b6a136",
                  "title": "CryptoPunk 5171",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk5171.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.577Z",
                  "updatedAt": "2023-05-07T08:27:11.577Z"
              }
          },
          {
              "id": 105,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 12,
              "NFTId": 105,
              "createdAt": "2023-05-07T08:27:11.585Z",
              "updatedAt": "2023-05-07T08:27:11.585Z",
              "NFT": {
                  "id": 105,
                  "token": "fd92a48872a8620e1e6e459786d111af",
                  "title": "CryptoPunk 6811",
                  "description": "Female",
                  "imageUrl": "https://www.larvalabs.com/cryptopunks/cryptopunk6811.png",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:27:11.582Z",
                  "updatedAt": "2023-05-07T08:27:11.582Z"
              }
          }
      ]
  },
  {
      "id": 13,
      "name": "BoredApeYachtClub (BAYC) - 1",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxLCJrZXkiOiJmZmJlMDllMjE1NGE0OGFmZGVmYjAzZjlkYmI0MTc1MCIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.9hdkCvpYMHf0MjVmxOHDrmrTY67UNTbPdNxV_YgOWNg",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:50.767Z",
      "updatedAt": "2023-05-07T08:35:50.767Z",
      "RoomNFTs": [
          {
              "id": 106,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 106,
              "createdAt": "2023-05-07T08:35:54.073Z",
              "updatedAt": "2023-05-07T08:35:54.073Z",
              "NFT": {
                  "id": 106,
                  "token": "fffadc852b4f47c75f65838ba2870ab1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmWX3Kx2NX3AK8WxTQwktVYLMFHX3pHm77ThynhgmU8dP8",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.069Z",
                  "updatedAt": "2023-05-07T08:35:54.069Z"
              }
          },
          {
              "id": 107,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 107,
              "createdAt": "2023-05-07T08:35:54.080Z",
              "updatedAt": "2023-05-07T08:35:54.080Z",
              "NFT": {
                  "id": 107,
                  "token": "fff9f1cd1c3e3c3d16fcadad545b1a8f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVP1tqb9jf6XCkZZXkqGfTAtS8KwXHKHvkePh62zyL65n",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.078Z",
                  "updatedAt": "2023-05-07T08:35:54.078Z"
              }
          },
          {
              "id": 108,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 108,
              "createdAt": "2023-05-07T08:35:54.086Z",
              "updatedAt": "2023-05-07T08:35:54.086Z",
              "NFT": {
                  "id": 108,
                  "token": "fff1ee52e869e6d806fc6f18a7483e21",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmcCBVydFzmuuQfTm4oXPNyvumnku3QHffHmYEQw4oGriD",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.084Z",
                  "updatedAt": "2023-05-07T08:35:54.084Z"
              }
          },
          {
              "id": 109,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 109,
              "createdAt": "2023-05-07T08:35:54.092Z",
              "updatedAt": "2023-05-07T08:35:54.092Z",
              "NFT": {
                  "id": 109,
                  "token": "ffedf09407efead26382273f2d43a795",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmbFBUR8y9Xhwv7nQdiy1Xafyxu3i8BaFThts2UyxM73Ge",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.090Z",
                  "updatedAt": "2023-05-07T08:35:54.090Z"
              }
          },
          {
              "id": 110,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 110,
              "createdAt": "2023-05-07T08:35:54.098Z",
              "updatedAt": "2023-05-07T08:35:54.098Z",
              "NFT": {
                  "id": 110,
                  "token": "ffe43a69d44c1b2a8c5aa4e1ca2f0e8e",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmafPcQ54nBUXqNf9hH761r957tcabATj9uHPQ7KzeRvnd",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.095Z",
                  "updatedAt": "2023-05-07T08:35:54.095Z"
              }
          },
          {
              "id": 111,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 111,
              "createdAt": "2023-05-07T08:35:54.103Z",
              "updatedAt": "2023-05-07T08:35:54.103Z",
              "NFT": {
                  "id": 111,
                  "token": "ffd1a9b7022b24da483a4e77a67182a6",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZGRQejsuuY7TjeSq4n1nF4YZjks1VtyqUYQEhFCbVYaZ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.100Z",
                  "updatedAt": "2023-05-07T08:35:54.100Z"
              }
          },
          {
              "id": 112,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 112,
              "createdAt": "2023-05-07T08:35:54.108Z",
              "updatedAt": "2023-05-07T08:35:54.108Z",
              "NFT": {
                  "id": 112,
                  "token": "ffc31f590745a933685983b6f185fb90",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmNqQwxZvLMdr7EQpzCwP5uVZdvrDgtZTsRvtJfajTyDnm",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.106Z",
                  "updatedAt": "2023-05-07T08:35:54.106Z"
              }
          },
          {
              "id": 113,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 113,
              "createdAt": "2023-05-07T08:35:54.113Z",
              "updatedAt": "2023-05-07T08:35:54.113Z",
              "NFT": {
                  "id": 113,
                  "token": "ffc0cb33c4ae99854ecf0bb4341c614d",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQZPEHGRcNUUQ2BSZwriuCJ17ga1Dt634LPErcXFRHzYH",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.111Z",
                  "updatedAt": "2023-05-07T08:35:54.111Z"
              }
          },
          {
              "id": 114,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 114,
              "createdAt": "2023-05-07T08:35:54.117Z",
              "updatedAt": "2023-05-07T08:35:54.117Z",
              "NFT": {
                  "id": 114,
                  "token": "ffbf4ff4f38566aba9db63e264f3d545",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmchjX8GZq11GnB7rNE5kpqe1r2Kc7SXkXyPzhUZPXLGrt",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.115Z",
                  "updatedAt": "2023-05-07T08:35:54.115Z"
              }
          },
          {
              "id": 115,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 13,
              "NFTId": 115,
              "createdAt": "2023-05-07T08:35:54.123Z",
              "updatedAt": "2023-05-07T08:35:54.123Z",
              "NFT": {
                  "id": 115,
                  "token": "ffbe09e2154a48afdefb03f9dbb41750",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmfUAzna3N5rVwUmjFfym9VBqfyPsVbvfgfV6QW6Trq1T6",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.120Z",
                  "updatedAt": "2023-05-07T08:35:54.120Z"
              }
          }
      ]
  },
  {
      "id": 14,
      "name": "BoredApeYachtClub (BAYC) - 2",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoyLCJrZXkiOiJmZjc0Y2NhNDRkODhhMjk5ZjYzMDRkNjk0ZWYzYTAxYyIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.5Bom4ynaHpS3K_qCs-NtIFn3GZK5JvumGHcOveLvcL8",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:51.216Z",
      "updatedAt": "2023-05-07T08:35:51.216Z",
      "RoomNFTs": [
          {
              "id": 116,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 116,
              "createdAt": "2023-05-07T08:35:54.127Z",
              "updatedAt": "2023-05-07T08:35:54.127Z",
              "NFT": {
                  "id": 116,
                  "token": "ffb9b28c4063b25b66c55bc280299bad",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVb1n7vGzuVcGDXojSu6vRmi9wgszz8i5CvFud8AkngCF",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.125Z",
                  "updatedAt": "2023-05-07T08:35:54.125Z"
              }
          },
          {
              "id": 117,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 117,
              "createdAt": "2023-05-07T08:35:54.132Z",
              "updatedAt": "2023-05-07T08:35:54.132Z",
              "NFT": {
                  "id": 117,
                  "token": "ffb065b281207d6d82a6738946955065",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZ73BEq4kYGztD9X6B4e71McCfnpaRSPDTsXdhcd4MWoB",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.130Z",
                  "updatedAt": "2023-05-07T08:35:54.130Z"
              }
          },
          {
              "id": 118,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 118,
              "createdAt": "2023-05-07T08:35:54.138Z",
              "updatedAt": "2023-05-07T08:35:54.138Z",
              "NFT": {
                  "id": 118,
                  "token": "ffaaf470841f7a0559f331e01f8ac3c7",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmby2VYo7NGTy592ZWUV52W73L5cV99didxuKemf4GRBEq",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.135Z",
                  "updatedAt": "2023-05-07T08:35:54.135Z"
              }
          },
          {
              "id": 119,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 119,
              "createdAt": "2023-05-07T08:35:54.145Z",
              "updatedAt": "2023-05-07T08:35:54.145Z",
              "NFT": {
                  "id": 119,
                  "token": "ffa3aa737c3f195fa03eb93a040ee5eb",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRSK7kUkWAbrgZ4XXFQi8UJc9sbpBwNwPzsFTUWK1oZP9",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.142Z",
                  "updatedAt": "2023-05-07T08:35:54.142Z"
              }
          },
          {
              "id": 120,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 120,
              "createdAt": "2023-05-07T08:35:54.149Z",
              "updatedAt": "2023-05-07T08:35:54.149Z",
              "NFT": {
                  "id": 120,
                  "token": "ff9f0d97a70c5643f814dd338334d669",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmWcSxYKHuCZ3dCstpbSK8tB6cEP982bPhzrx76KcYdJwk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.147Z",
                  "updatedAt": "2023-05-07T08:35:54.147Z"
              }
          },
          {
              "id": 121,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 121,
              "createdAt": "2023-05-07T08:35:54.156Z",
              "updatedAt": "2023-05-07T08:35:54.156Z",
              "NFT": {
                  "id": 121,
                  "token": "ff972e2ec5909867a7957b75935ac345",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmY4Ro1gcaDFQLB1Fxw7Ju59CyaTqgspsxrcUKmQT4uFSt",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.153Z",
                  "updatedAt": "2023-05-07T08:35:54.153Z"
              }
          },
          {
              "id": 122,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 122,
              "createdAt": "2023-05-07T08:35:54.161Z",
              "updatedAt": "2023-05-07T08:35:54.161Z",
              "NFT": {
                  "id": 122,
                  "token": "ff8d359cbd20b84b3425f3512a36fa68",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUkaZLACdzTUxmcQaggHC37MpFMNS3fHpJZPGtLLDEABj",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.159Z",
                  "updatedAt": "2023-05-07T08:35:54.159Z"
              }
          },
          {
              "id": 123,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 123,
              "createdAt": "2023-05-07T08:35:54.165Z",
              "updatedAt": "2023-05-07T08:35:54.165Z",
              "NFT": {
                  "id": 123,
                  "token": "ff8401d012e36ad4a0f3e130b5a5ea25",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVBd6PNaeicc6BPYMRw6vMqK2CtEaoBrrE4qjUqvToTMT",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.163Z",
                  "updatedAt": "2023-05-07T08:35:54.163Z"
              }
          },
          {
              "id": 124,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 124,
              "createdAt": "2023-05-07T08:35:54.171Z",
              "updatedAt": "2023-05-07T08:35:54.171Z",
              "NFT": {
                  "id": 124,
                  "token": "ff7724db6dec62b8840d253b7caba157",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPAjFkZiGSUfHkg7WCbkAZDpHa57QcEMwTe8fQzKemsAk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.167Z",
                  "updatedAt": "2023-05-07T08:35:54.167Z"
              }
          },
          {
              "id": 125,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 14,
              "NFTId": 125,
              "createdAt": "2023-05-07T08:35:54.178Z",
              "updatedAt": "2023-05-07T08:35:54.178Z",
              "NFT": {
                  "id": 125,
                  "token": "ff74cca44d88a299f6304d694ef3a01c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZ6LQCa1pvyW2fcQA9qLTjuSKShqCgJj6nPtvCyALYdX2",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.174Z",
                  "updatedAt": "2023-05-07T08:35:54.174Z"
              }
          }
      ]
  },
  {
      "id": 15,
      "name": "BoredApeYachtClub (BAYC) - 3",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjozLCJrZXkiOiJmZjJhMmEzYTQ5ZTUyN2NmMzI3ODU0NWEwYTExNjYyYSIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.K9kUncCKvvTkH_8LzOOik4W63pCQH5H8msN0tEHlMdo",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:51.588Z",
      "updatedAt": "2023-05-07T08:35:51.588Z",
      "RoomNFTs": [
          {
              "id": 126,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 126,
              "createdAt": "2023-05-07T08:35:54.185Z",
              "updatedAt": "2023-05-07T08:35:54.185Z",
              "NFT": {
                  "id": 126,
                  "token": "ff5d531a40961f0b59040a0fc869889e",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmSvJW7FhSiU38mJzQsns6nsczduBEp8z5ajoG6mdoHCSL",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.182Z",
                  "updatedAt": "2023-05-07T08:35:54.182Z"
              }
          },
          {
              "id": 127,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 127,
              "createdAt": "2023-05-07T08:35:54.192Z",
              "updatedAt": "2023-05-07T08:35:54.192Z",
              "NFT": {
                  "id": 127,
                  "token": "ff59d2f0ec60ddc769398c935195bd1f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmfQxJFaaPhbswvRdCMoXXLVVKGzTjee3LmFALw3P6T5wc",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.189Z",
                  "updatedAt": "2023-05-07T08:35:54.189Z"
              }
          },
          {
              "id": 128,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 128,
              "createdAt": "2023-05-07T08:35:54.199Z",
              "updatedAt": "2023-05-07T08:35:54.199Z",
              "NFT": {
                  "id": 128,
                  "token": "ff515cf88a4d64e8339104f180babbb1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmY7k9FnyLrZaQma7ZqPthMBsm51BLrfYLN6FZVbdXEYBJ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.195Z",
                  "updatedAt": "2023-05-07T08:35:54.195Z"
              }
          },
          {
              "id": 129,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 129,
              "createdAt": "2023-05-07T08:35:54.207Z",
              "updatedAt": "2023-05-07T08:35:54.207Z",
              "NFT": {
                  "id": 129,
                  "token": "ff3aee4efddfbef462986e9964b9c1d1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPHfVmoZC4tARn9u2edDcw4VQ3gNSa2bXqVG8HPtwTwwu",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.203Z",
                  "updatedAt": "2023-05-07T08:35:54.203Z"
              }
          },
          {
              "id": 130,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 130,
              "createdAt": "2023-05-07T08:35:54.215Z",
              "updatedAt": "2023-05-07T08:35:54.215Z",
              "NFT": {
                  "id": 130,
                  "token": "ff39aff01c5c8dff187bc309627ccebe",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeVUuWPGiZSGxFWnuBD5ap7gXEGs4URDANbpVBkC8ymPM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.210Z",
                  "updatedAt": "2023-05-07T08:35:54.210Z"
              }
          },
          {
              "id": 131,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 131,
              "createdAt": "2023-05-07T08:35:54.224Z",
              "updatedAt": "2023-05-07T08:35:54.224Z",
              "NFT": {
                  "id": 131,
                  "token": "ff2f5d249a3552c6ddb6b7d8f18684c8",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPuQVhR1xvrcd17742zwJGqAyGQi2Jsd5DU6N1ZSw3auq",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.219Z",
                  "updatedAt": "2023-05-07T08:35:54.219Z"
              }
          },
          {
              "id": 132,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 132,
              "createdAt": "2023-05-07T08:35:54.231Z",
              "updatedAt": "2023-05-07T08:35:54.231Z",
              "NFT": {
                  "id": 132,
                  "token": "ff2dfad4bfe0d7b7418f603ccb7ef1d8",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmd4wZ8JCNchF19evS5fbJssJP3nPsEHshg6zu28v2GFx2",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.228Z",
                  "updatedAt": "2023-05-07T08:35:54.228Z"
              }
          },
          {
              "id": 133,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 133,
              "createdAt": "2023-05-07T08:35:54.237Z",
              "updatedAt": "2023-05-07T08:35:54.237Z",
              "NFT": {
                  "id": 133,
                  "token": "ff2adaaf49c6004c533c1cba09a61384",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPNzBbyinjqq6WUMzmWBrowvNSLX9tdiFaPZjSXX52CCk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.234Z",
                  "updatedAt": "2023-05-07T08:35:54.234Z"
              }
          },
          {
              "id": 134,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 134,
              "createdAt": "2023-05-07T08:35:54.244Z",
              "updatedAt": "2023-05-07T08:35:54.244Z",
              "NFT": {
                  "id": 134,
                  "token": "ff2a8da1b495f1c4200863208724df23",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZByozUZ2vkafu2FPe5ZXMW2b8Nvy9csVxRKoUE9Vq2hn",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.241Z",
                  "updatedAt": "2023-05-07T08:35:54.241Z"
              }
          },
          {
              "id": 135,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 15,
              "NFTId": 135,
              "createdAt": "2023-05-07T08:35:54.256Z",
              "updatedAt": "2023-05-07T08:35:54.256Z",
              "NFT": {
                  "id": 135,
                  "token": "ff2a2a3a49e527cf3278545a0a11662a",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmT66kfHw9SDwqWM8g4rp1NVbgWFarC2ooNvsm59WzQ4YA",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.249Z",
                  "updatedAt": "2023-05-07T08:35:54.249Z"
              }
          }
      ]
  },
  {
      "id": 16,
      "name": "BoredApeYachtClub (BAYC) - 4",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo0LCJrZXkiOiJmZWZhMWFhNDdhNTViZGEzOWZjMDBmOWZiMzE2N2Q0NSIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.VLtdvtrHwFjb70KGI_tlCmp4I-LssB9jrlS_o41C_M8",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:51.967Z",
      "updatedAt": "2023-05-07T08:35:51.967Z",
      "RoomNFTs": [
          {
              "id": 136,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 136,
              "createdAt": "2023-05-07T08:35:54.273Z",
              "updatedAt": "2023-05-07T08:35:54.273Z",
              "NFT": {
                  "id": 136,
                  "token": "ff243cbd5f50b0d692aebb18a1edcbbe",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmYrzV5gQZxUjDVRgLmwA75eZJ5KeoDpuaKf5TkEUNVmLZ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.260Z",
                  "updatedAt": "2023-05-07T08:35:54.260Z"
              }
          },
          {
              "id": 137,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 137,
              "createdAt": "2023-05-07T08:35:54.280Z",
              "updatedAt": "2023-05-07T08:35:54.280Z",
              "NFT": {
                  "id": 137,
                  "token": "ff21e397e9430308d1ac54d6214d7906",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVk1qiuChfcu35EM7z8jw9MK8tSTvMt65zVa5h7JjdT2w",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.277Z",
                  "updatedAt": "2023-05-07T08:35:54.277Z"
              }
          },
          {
              "id": 138,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 138,
              "createdAt": "2023-05-07T08:35:54.287Z",
              "updatedAt": "2023-05-07T08:35:54.287Z",
              "NFT": {
                  "id": 138,
                  "token": "ff1a2a714e48f64d198a1f5efa7ec57f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmdCPd2HDC6cwbBSi4kH7gxakmSP9Hyur5f9ajKuJc8w1c",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.283Z",
                  "updatedAt": "2023-05-07T08:35:54.283Z"
              }
          },
          {
              "id": 139,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 139,
              "createdAt": "2023-05-07T08:35:54.293Z",
              "updatedAt": "2023-05-07T08:35:54.293Z",
              "NFT": {
                  "id": 139,
                  "token": "ff1213bfdfab7949d3a081b3218e3203",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qme7atLUTsFQkzYVRYXRomXCEPkCzXJBJXoHZbuXatRfBj",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.290Z",
                  "updatedAt": "2023-05-07T08:35:54.290Z"
              }
          },
          {
              "id": 140,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 140,
              "createdAt": "2023-05-07T08:35:54.298Z",
              "updatedAt": "2023-05-07T08:35:54.298Z",
              "NFT": {
                  "id": 140,
                  "token": "ff11b90143ab84089a629fbe21e82d29",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmf9H4XB6gRKuapGKkKeeTDfZPPGA8imystqGQvUmjk4ca",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.296Z",
                  "updatedAt": "2023-05-07T08:35:54.296Z"
              }
          },
          {
              "id": 141,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 141,
              "createdAt": "2023-05-07T08:35:54.302Z",
              "updatedAt": "2023-05-07T08:35:54.302Z",
              "NFT": {
                  "id": 141,
                  "token": "ff0c779ffc859559eb4c81bd037e5c6d",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUAPb4eHK76KkCEm3oRxTTDT1ZwyQtcWGwbYAHeAKM1ef",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.300Z",
                  "updatedAt": "2023-05-07T08:35:54.300Z"
              }
          },
          {
              "id": 142,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 142,
              "createdAt": "2023-05-07T08:35:54.309Z",
              "updatedAt": "2023-05-07T08:35:54.309Z",
              "NFT": {
                  "id": 142,
                  "token": "ff0a89e44cd7fbb87b27b69c8be2060c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmcW7XE2ZEucyYKyRqLYdcKLu4xjH6edbnJhJmuSFPBwJE",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.306Z",
                  "updatedAt": "2023-05-07T08:35:54.306Z"
              }
          },
          {
              "id": 143,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 143,
              "createdAt": "2023-05-07T08:35:54.313Z",
              "updatedAt": "2023-05-07T08:35:54.313Z",
              "NFT": {
                  "id": 143,
                  "token": "ff08f7928cde2c4c1e7197623c37cedc",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRafUHYfKL6ZpDuZcDLz955XBUPPNTjbeZM6oswxSK93M",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.311Z",
                  "updatedAt": "2023-05-07T08:35:54.311Z"
              }
          },
          {
              "id": 144,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 144,
              "createdAt": "2023-05-07T08:35:54.318Z",
              "updatedAt": "2023-05-07T08:35:54.318Z",
              "NFT": {
                  "id": 144,
                  "token": "fefaa3a96ef2f2e2693deec80075fd46",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmY2mMXgMz7zcSPg932fP2avn4qnLUqmahyT3QqSnaqBCW",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.316Z",
                  "updatedAt": "2023-05-07T08:35:54.316Z"
              }
          },
          {
              "id": 145,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 16,
              "NFTId": 145,
              "createdAt": "2023-05-07T08:35:54.324Z",
              "updatedAt": "2023-05-07T08:35:54.324Z",
              "NFT": {
                  "id": 145,
                  "token": "fefa1aa47a55bda39fc00f9fb3167d45",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUsBhLZTQHChk3SifhNRQNMJwDGRvywAjpfrreg56sCz5",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.321Z",
                  "updatedAt": "2023-05-07T08:35:54.321Z"
              }
          }
      ]
  },
  {
      "id": 17,
      "name": "BoredApeYachtClub (BAYC) - 5",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo1LCJrZXkiOiJmZWNlY2RkNjYxZmY1YTc1YmM4ZDUxMzgwNDAyMjRhYyIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.W2ktA608qfN2rTrkjIAZngoppzHVABtXTxDbKIo4Bvk",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:52.323Z",
      "updatedAt": "2023-05-07T08:35:52.323Z",
      "RoomNFTs": [
          {
              "id": 146,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 146,
              "createdAt": "2023-05-07T08:35:54.329Z",
              "updatedAt": "2023-05-07T08:35:54.329Z",
              "NFT": {
                  "id": 146,
                  "token": "fef477d15dbb6fc362ebcbe1a4fa5832",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmdZ1Tz21phd3gFR4T8PFCskKPWZUQApYnWYVY1Dm4A26m",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.327Z",
                  "updatedAt": "2023-05-07T08:35:54.327Z"
              }
          },
          {
              "id": 147,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 147,
              "createdAt": "2023-05-07T08:35:54.334Z",
              "updatedAt": "2023-05-07T08:35:54.334Z",
              "NFT": {
                  "id": 147,
                  "token": "fef1056a2e53c654d0fb115af231d890",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPHveR7wBrnzo1UgKSeeesbeFCEYcgEMQzVwY3Z9gFdgo",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.332Z",
                  "updatedAt": "2023-05-07T08:35:54.332Z"
              }
          },
          {
              "id": 148,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 148,
              "createdAt": "2023-05-07T08:35:54.339Z",
              "updatedAt": "2023-05-07T08:35:54.339Z",
              "NFT": {
                  "id": 148,
                  "token": "feed9f78be1e91a04046859f76531194",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmY9BtbrzF8sQr2vzghvGeJpDWkgTzMfxpu6YD4L4LH9Mi",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.337Z",
                  "updatedAt": "2023-05-07T08:35:54.337Z"
              }
          },
          {
              "id": 149,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 149,
              "createdAt": "2023-05-07T08:35:54.344Z",
              "updatedAt": "2023-05-07T08:35:54.344Z",
              "NFT": {
                  "id": 149,
                  "token": "fee4956e4beeca81640725e7fefec98d",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmPpcjnPTUNTvAhvoA2TrLKi2kaDPeTmznHcs1dFkjv2gj",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.341Z",
                  "updatedAt": "2023-05-07T08:35:54.341Z"
              }
          },
          {
              "id": 150,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 150,
              "createdAt": "2023-05-07T08:35:54.349Z",
              "updatedAt": "2023-05-07T08:35:54.349Z",
              "NFT": {
                  "id": 150,
                  "token": "fee0135a007fb5f02610185a078ce4bf",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmcpyV2k5aBPfGusAaSFKqqr4u59t7PgwwXhaVeYt97GdD",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.346Z",
                  "updatedAt": "2023-05-07T08:35:54.346Z"
              }
          },
          {
              "id": 151,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 151,
              "createdAt": "2023-05-07T08:35:54.355Z",
              "updatedAt": "2023-05-07T08:35:54.355Z",
              "NFT": {
                  "id": 151,
                  "token": "fedab31c32a7f882f9c09fb668b8c043",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUTDZJiDKYgb3JqGNndonWE7pSomFQa9wtkJRoPDQbj4b",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.351Z",
                  "updatedAt": "2023-05-07T08:35:54.351Z"
              }
          },
          {
              "id": 152,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 152,
              "createdAt": "2023-05-07T08:35:54.360Z",
              "updatedAt": "2023-05-07T08:35:54.360Z",
              "NFT": {
                  "id": 152,
                  "token": "fed61c0516ef24b18a7957c5093edf20",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeeCUH4amJz3qAMpeCh6VSUUBsGXKcZn71uA5UFfQpM4A",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.358Z",
                  "updatedAt": "2023-05-07T08:35:54.358Z"
              }
          },
          {
              "id": 153,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 153,
              "createdAt": "2023-05-07T08:35:54.366Z",
              "updatedAt": "2023-05-07T08:35:54.366Z",
              "NFT": {
                  "id": 153,
                  "token": "fed418496e839176e7aa18865b23f310",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmU25AFYRFry9BDeo7A4jgA6SLC9CwcMgbExWHY1NRHJqP",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.364Z",
                  "updatedAt": "2023-05-07T08:35:54.364Z"
              }
          },
          {
              "id": 154,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 154,
              "createdAt": "2023-05-07T08:35:54.371Z",
              "updatedAt": "2023-05-07T08:35:54.371Z",
              "NFT": {
                  "id": 154,
                  "token": "fed159285bb555987760f7c56110c70c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeWAheGvF6GPFzRwVfAWhBGsnwxHpMfQvs9GS1zSTAQxP",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.368Z",
                  "updatedAt": "2023-05-07T08:35:54.368Z"
              }
          },
          {
              "id": 155,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 17,
              "NFTId": 155,
              "createdAt": "2023-05-07T08:35:54.378Z",
              "updatedAt": "2023-05-07T08:35:54.378Z",
              "NFT": {
                  "id": 155,
                  "token": "fececdd661ff5a75bc8d5138040224ac",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRSS1rKph8xCdScyPNRcSeUYaAKvTbtBA7kTh4BXW9vvK",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.375Z",
                  "updatedAt": "2023-05-07T08:35:54.375Z"
              }
          }
      ]
  },
  {
      "id": 18,
      "name": "BoredApeYachtClub (BAYC) - 6",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo2LCJrZXkiOiJmZTdmNDcxOTIwOTliMWZmMGY3OWNkMjk2NjEzMzRlMSIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.0RtvZp8cQunkpDapDPfx3sHKgK69W65YMi3a_vPtS64",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:52.705Z",
      "updatedAt": "2023-05-07T08:35:52.705Z",
      "RoomNFTs": [
          {
              "id": 156,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 156,
              "createdAt": "2023-05-07T08:35:54.385Z",
              "updatedAt": "2023-05-07T08:35:54.385Z",
              "NFT": {
                  "id": 156,
                  "token": "fecd868775926d52f23172946ff5093a",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRYrU9jfaonwxzLaTyWy1LtNGSLivpUykW57Xar8v4d7H",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.382Z",
                  "updatedAt": "2023-05-07T08:35:54.382Z"
              }
          },
          {
              "id": 157,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 157,
              "createdAt": "2023-05-07T08:35:54.392Z",
              "updatedAt": "2023-05-07T08:35:54.392Z",
              "NFT": {
                  "id": 157,
                  "token": "fecd553e3c95bbfb8dc836c490f6db34",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQ5YZAL1eHSEd5CL663wutt1LAoMTcbmBNP6oHLmTPHPE",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.389Z",
                  "updatedAt": "2023-05-07T08:35:54.389Z"
              }
          },
          {
              "id": 158,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 158,
              "createdAt": "2023-05-07T08:35:54.400Z",
              "updatedAt": "2023-05-07T08:35:54.400Z",
              "NFT": {
                  "id": 158,
                  "token": "fec45fe62358a5c6b0b6e31ef8d24efd",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmYoMhMsCjcn4UAhHc3HcAo6tuSdL6Sz2NcCCZWzwmX4x3",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.396Z",
                  "updatedAt": "2023-05-07T08:35:54.396Z"
              }
          },
          {
              "id": 159,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 159,
              "createdAt": "2023-05-07T08:35:54.405Z",
              "updatedAt": "2023-05-07T08:35:54.405Z",
              "NFT": {
                  "id": 159,
                  "token": "fead1504bc9469efb7f4f0ab2401fb6c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeXcym6d7RoYk16U1znoKmP6EguhJRaADxDkc7MEqnNyt",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.402Z",
                  "updatedAt": "2023-05-07T08:35:54.402Z"
              }
          },
          {
              "id": 160,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 160,
              "createdAt": "2023-05-07T08:35:54.410Z",
              "updatedAt": "2023-05-07T08:35:54.410Z",
              "NFT": {
                  "id": 160,
                  "token": "feab3af6ec510d123f20ba5bae48ee08",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmXtEueNbtqUKWy2ToKWUfTULT3ZynBQ6LQrXb5Ey484Gw",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.407Z",
                  "updatedAt": "2023-05-07T08:35:54.407Z"
              }
          },
          {
              "id": 161,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 161,
              "createdAt": "2023-05-07T08:35:54.416Z",
              "updatedAt": "2023-05-07T08:35:54.416Z",
              "NFT": {
                  "id": 161,
                  "token": "fea2233c3d1d466540e5470db560136d",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQ8VY7oZkBsgYEfQWNAsPHejKAq1288Zj2s4JpCGAAWk1",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.413Z",
                  "updatedAt": "2023-05-07T08:35:54.413Z"
              }
          },
          {
              "id": 162,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 162,
              "createdAt": "2023-05-07T08:35:54.422Z",
              "updatedAt": "2023-05-07T08:35:54.422Z",
              "NFT": {
                  "id": 162,
                  "token": "fe97ce02dd9e23432b484d11bc9b61e8",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZnAZ1HuLWVh1m1vPa7U4LjGRCoUd5dkgZiBxVRzcfsJ3",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.419Z",
                  "updatedAt": "2023-05-07T08:35:54.419Z"
              }
          },
          {
              "id": 163,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 163,
              "createdAt": "2023-05-07T08:35:54.426Z",
              "updatedAt": "2023-05-07T08:35:54.426Z",
              "NFT": {
                  "id": 163,
                  "token": "fe8ded6a8291c6f68b8696522a11f37a",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmNhzA6tw6G23xMKuXbuyMa7bgoJvsYqHk1114fSKkxztm",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.424Z",
                  "updatedAt": "2023-05-07T08:35:54.424Z"
              }
          },
          {
              "id": 164,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 164,
              "createdAt": "2023-05-07T08:35:54.432Z",
              "updatedAt": "2023-05-07T08:35:54.432Z",
              "NFT": {
                  "id": 164,
                  "token": "fe8d8a572c3de13bf445f166a0e65916",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmTZtS7TebzGF4ZKCrB38MvTGRCWPTP3w6Sr9aytGqDhfh",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.429Z",
                  "updatedAt": "2023-05-07T08:35:54.429Z"
              }
          },
          {
              "id": 165,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 18,
              "NFTId": 165,
              "createdAt": "2023-05-07T08:35:54.439Z",
              "updatedAt": "2023-05-07T08:35:54.439Z",
              "NFT": {
                  "id": 165,
                  "token": "fe7f47192099b1ff0f79cd29661334e1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmbPjxtPU9BT7XZXXkEJczNr9k8sytGdMvRQUg2uB7p3AJ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.434Z",
                  "updatedAt": "2023-05-07T08:35:54.434Z"
              }
          }
      ]
  },
  {
      "id": 19,
      "name": "BoredApeYachtClub (BAYC) - 7",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo3LCJrZXkiOiJmZTJlZTMzZWRiOTVjZGI2MGY1MGQ4MDIzMTIzODYzMCIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.8GAysUyxNRQHW2xEXJzs6GtgI0OLlrEMqVQ2ajtUun8",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:53.026Z",
      "updatedAt": "2023-05-07T08:35:53.026Z",
      "RoomNFTs": [
          {
              "id": 166,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 166,
              "createdAt": "2023-05-07T08:35:54.448Z",
              "updatedAt": "2023-05-07T08:35:54.448Z",
              "NFT": {
                  "id": 166,
                  "token": "fe7f27e2e16b5061ef8fd4328859dce9",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmXbVy4PV1WSyK6aquSN1JhrdjBYodcR2Z168795azjSaP",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.443Z",
                  "updatedAt": "2023-05-07T08:35:54.443Z"
              }
          },
          {
              "id": 167,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 167,
              "createdAt": "2023-05-07T08:35:54.457Z",
              "updatedAt": "2023-05-07T08:35:54.457Z",
              "NFT": {
                  "id": 167,
                  "token": "fe7a10b61fff2b7c8ce926d1e377185f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeBWeZuhKCA3rMivp5HDBrZwAJpCgBqAbJtHkuDhw3EnX",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.452Z",
                  "updatedAt": "2023-05-07T08:35:54.452Z"
              }
          },
          {
              "id": 168,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 168,
              "createdAt": "2023-05-07T08:35:54.466Z",
              "updatedAt": "2023-05-07T08:35:54.466Z",
              "NFT": {
                  "id": 168,
                  "token": "fe77795ab2216de1edf66d4fd743f654",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmee3UQwNgkqoUoduABwiPAEJyggiqvw4WfGjE8Rayy5NR",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.461Z",
                  "updatedAt": "2023-05-07T08:35:54.461Z"
              }
          },
          {
              "id": 169,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 169,
              "createdAt": "2023-05-07T08:35:54.475Z",
              "updatedAt": "2023-05-07T08:35:54.475Z",
              "NFT": {
                  "id": 169,
                  "token": "fe639d68c42ef90eb7674a9dbb99322c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmaLn2T25fj5CVYeqX3WZ7See34dKJGbEtr4oJn16CNpjE",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.470Z",
                  "updatedAt": "2023-05-07T08:35:54.470Z"
              }
          },
          {
              "id": 170,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 170,
              "createdAt": "2023-05-07T08:35:54.487Z",
              "updatedAt": "2023-05-07T08:35:54.487Z",
              "NFT": {
                  "id": 170,
                  "token": "fe56a60d2359f1bb24588ceaf3fae8b1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVkFSQDWJdXdWjWwewuAHC967Luowva41AqAibWztbAB5",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.479Z",
                  "updatedAt": "2023-05-07T08:35:54.479Z"
              }
          },
          {
              "id": 171,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 171,
              "createdAt": "2023-05-07T08:35:54.500Z",
              "updatedAt": "2023-05-07T08:35:54.500Z",
              "NFT": {
                  "id": 171,
                  "token": "fe53579f283306590e3bebe83b5fad56",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQUPwcPHuCEEshX1HkonbcMMtpE7Ktv1KkJu9ZciJxqAb",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.493Z",
                  "updatedAt": "2023-05-07T08:35:54.493Z"
              }
          },
          {
              "id": 172,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 172,
              "createdAt": "2023-05-07T08:35:54.514Z",
              "updatedAt": "2023-05-07T08:35:54.514Z",
              "NFT": {
                  "id": 172,
                  "token": "fe42019f33530177f2ddba1bc376540f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUfNrk5vmvrW4tYnQAhPLYPjwCsdECBzHBkPDr4K5Pr4d",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.507Z",
                  "updatedAt": "2023-05-07T08:35:54.507Z"
              }
          },
          {
              "id": 173,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 173,
              "createdAt": "2023-05-07T08:35:54.525Z",
              "updatedAt": "2023-05-07T08:35:54.525Z",
              "NFT": {
                  "id": 173,
                  "token": "fe396f1bb5ee6d66359adac33cd99c69",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmYLstZ5zcgetq3k4obkDxrQjY4cVioGRczqM6beBgy8Jz",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.518Z",
                  "updatedAt": "2023-05-07T08:35:54.518Z"
              }
          },
          {
              "id": 174,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 174,
              "createdAt": "2023-05-07T08:35:54.538Z",
              "updatedAt": "2023-05-07T08:35:54.538Z",
              "NFT": {
                  "id": 174,
                  "token": "fe2facc2553286b57a42cbfc50916029",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeqxafJrxKjfScwaaHR8GKNAPwgcFB3Hxo1zf9pP7hJgz",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.531Z",
                  "updatedAt": "2023-05-07T08:35:54.531Z"
              }
          },
          {
              "id": 175,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 19,
              "NFTId": 175,
              "createdAt": "2023-05-07T08:35:54.547Z",
              "updatedAt": "2023-05-07T08:35:54.547Z",
              "NFT": {
                  "id": 175,
                  "token": "fe2ee33edb95cdb60f50d80231238630",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmWZzVqUNbsPaXSz5mbr5g2ZrxPauxc6ZpP9w9xW3Zfotc",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.543Z",
                  "updatedAt": "2023-05-07T08:35:54.543Z"
              }
          }
      ]
  },
  {
      "id": 20,
      "name": "BoredApeYachtClub (BAYC) - 8",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo4LCJrZXkiOiJmZGY4MzdmNjAwOGExYWI0NDk4NmQ2YmE2YmZhNDI1NCIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.AJQpdsxGpI8D6k7KxqI0I62dubtGHRhiIZ5Xlru0gfw",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:53.372Z",
      "updatedAt": "2023-05-07T08:35:53.372Z",
      "RoomNFTs": [
          {
              "id": 176,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 176,
              "createdAt": "2023-05-07T08:35:54.557Z",
              "updatedAt": "2023-05-07T08:35:54.557Z",
              "NFT": {
                  "id": 176,
                  "token": "fe27bd7a8aa59345ecb3c29b05adfda9",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmNUqFtyFm2hQfHGrUaJiVaCpNCAD2xfRyQvkYhMN1JARV",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.551Z",
                  "updatedAt": "2023-05-07T08:35:54.551Z"
              }
          },
          {
              "id": 177,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 177,
              "createdAt": "2023-05-07T08:35:54.577Z",
              "updatedAt": "2023-05-07T08:35:54.577Z",
              "NFT": {
                  "id": 177,
                  "token": "fe2794ee8202736e4fe8b85cdd33533b",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmUpgSF83ahdysGjYLXAkjQ1fmZ5BQs41oVWXUAzXr8NTF",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.561Z",
                  "updatedAt": "2023-05-07T08:35:54.561Z"
              }
          },
          {
              "id": 178,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 178,
              "createdAt": "2023-05-07T08:35:54.582Z",
              "updatedAt": "2023-05-07T08:35:54.582Z",
              "NFT": {
                  "id": 178,
                  "token": "fe1e439d4735dd4eeb3536412619103c",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmWU4QErckzQnkFdciUog9nMdteEZsqbHoLHToq4Y9dPrt",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.580Z",
                  "updatedAt": "2023-05-07T08:35:54.580Z"
              }
          },
          {
              "id": 179,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 179,
              "createdAt": "2023-05-07T08:35:54.588Z",
              "updatedAt": "2023-05-07T08:35:54.588Z",
              "NFT": {
                  "id": 179,
                  "token": "fe0e7729df21363b8aeaef7197010ea4",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmWLhqRaGpdTFg2Y27BZPGx3xPPrm5T4kStZkHvYQWS3h6",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.584Z",
                  "updatedAt": "2023-05-07T08:35:54.584Z"
              }
          },
          {
              "id": 180,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 180,
              "createdAt": "2023-05-07T08:35:54.592Z",
              "updatedAt": "2023-05-07T08:35:54.592Z",
              "NFT": {
                  "id": 180,
                  "token": "fe0d76a65d680d9e4f0625665336e3ed",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmXgx7o51fe33ADnUa52wdh42h9QfsJBJTwShW82ASiK6j",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.590Z",
                  "updatedAt": "2023-05-07T08:35:54.590Z"
              }
          },
          {
              "id": 181,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 181,
              "createdAt": "2023-05-07T08:35:54.596Z",
              "updatedAt": "2023-05-07T08:35:54.596Z",
              "NFT": {
                  "id": 181,
                  "token": "fe0bc62e530e1a69f5559d0f6c6ebf66",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmS9qZPywnXiK6mhXt7AR57ruW8fPtLPYpYbUSJKKH1tNy",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.594Z",
                  "updatedAt": "2023-05-07T08:35:54.594Z"
              }
          },
          {
              "id": 182,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 182,
              "createdAt": "2023-05-07T08:35:54.602Z",
              "updatedAt": "2023-05-07T08:35:54.602Z",
              "NFT": {
                  "id": 182,
                  "token": "fe02e87af0466675c1292727a65ed0fc",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmXKY2daWz9yA9LYWCFAT3btueywjx69xPnkqn5BhQthXk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.599Z",
                  "updatedAt": "2023-05-07T08:35:54.599Z"
              }
          },
          {
              "id": 183,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 183,
              "createdAt": "2023-05-07T08:35:54.608Z",
              "updatedAt": "2023-05-07T08:35:54.608Z",
              "NFT": {
                  "id": 183,
                  "token": "fdffdfe8062058984a4e14bf94b367aa",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmeMVKqKKwFKdz6bmtJoWNTgna6UpSWRnwBbb1qefEdvyr",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.606Z",
                  "updatedAt": "2023-05-07T08:35:54.606Z"
              }
          },
          {
              "id": 184,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 184,
              "createdAt": "2023-05-07T08:35:54.614Z",
              "updatedAt": "2023-05-07T08:35:54.614Z",
              "NFT": {
                  "id": 184,
                  "token": "fdfa078a8d9b42e797467e428ef75d4e",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRjxsKRdCbLqrohHnqoVwif8vqyp18WkN9AcgLikddjuR",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.611Z",
                  "updatedAt": "2023-05-07T08:35:54.611Z"
              }
          },
          {
              "id": 185,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 20,
              "NFTId": 185,
              "createdAt": "2023-05-07T08:35:54.620Z",
              "updatedAt": "2023-05-07T08:35:54.620Z",
              "NFT": {
                  "id": 185,
                  "token": "fdf837f6008a1ab44986d6ba6bfa4254",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmW65qnwdLBQLuqD4xVyguKqAyAJE39qJJeKVwYLfNSfqG",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.617Z",
                  "updatedAt": "2023-05-07T08:35:54.617Z"
              }
          }
      ]
  },
  {
      "id": 21,
      "name": "BoredApeYachtClub (BAYC) - 9",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo5LCJrZXkiOiJmZGM4ZTMwZGIxZGIyMGFiNWRhYmU4NTRjOTNiNGQ1YSIsInRvdGFsIjoxMDAwMCwiaWF0IjoxNjgzNDQ4NTUwfQ.nnZSKljnTgUNk3Dkuqu14XY6ktW6MkO96k7p9IHHN10",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:53.706Z",
      "updatedAt": "2023-05-07T08:35:53.706Z",
      "RoomNFTs": [
          {
              "id": 186,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 186,
              "createdAt": "2023-05-07T08:35:54.625Z",
              "updatedAt": "2023-05-07T08:35:54.625Z",
              "NFT": {
                  "id": 186,
                  "token": "fdf4bae246708b7e116bcc1682dd8fdb",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmc2Zy2ma6rv6EcYNksuujHu7Gc3mJEyUWSKhGnsxUrG3w",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.623Z",
                  "updatedAt": "2023-05-07T08:35:54.623Z"
              }
          },
          {
              "id": 187,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 187,
              "createdAt": "2023-05-07T08:35:54.641Z",
              "updatedAt": "2023-05-07T08:35:54.641Z",
              "NFT": {
                  "id": 187,
                  "token": "fdeec2f6538c08e91838fe24e355ef09",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmfZNDtnHJADjqoe8JCfR3cH5TmPzgx4uhwjaGUAH9aGKw",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.631Z",
                  "updatedAt": "2023-05-07T08:35:54.631Z"
              }
          },
          {
              "id": 188,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 188,
              "createdAt": "2023-05-07T08:35:54.650Z",
              "updatedAt": "2023-05-07T08:35:54.650Z",
              "NFT": {
                  "id": 188,
                  "token": "fde7ad558b62b69a26c7c5c1ec32a58b",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmYf8Uw5uW8RyD1tzVmsCgv2he3eDAKBZvhN2uxNjQnAMG",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.645Z",
                  "updatedAt": "2023-05-07T08:35:54.645Z"
              }
          },
          {
              "id": 189,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 189,
              "createdAt": "2023-05-07T08:35:54.660Z",
              "updatedAt": "2023-05-07T08:35:54.660Z",
              "NFT": {
                  "id": 189,
                  "token": "fdde5da6b97f1970c6e9f4e10862849a",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQ9TYcQwcu2dzEKrUHwTonTHCeVAXgb9LsJyMa8Sm2sfM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.656Z",
                  "updatedAt": "2023-05-07T08:35:54.656Z"
              }
          },
          {
              "id": 190,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 190,
              "createdAt": "2023-05-07T08:35:54.667Z",
              "updatedAt": "2023-05-07T08:35:54.667Z",
              "NFT": {
                  "id": 190,
                  "token": "fddd116c43a73063d5f619176e3b16aa",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmcpzG5hByXUC867QWUc9hgcDoNbRedg9MpWHHYphGhfyB",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.664Z",
                  "updatedAt": "2023-05-07T08:35:54.664Z"
              }
          },
          {
              "id": 191,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 191,
              "createdAt": "2023-05-07T08:35:54.675Z",
              "updatedAt": "2023-05-07T08:35:54.675Z",
              "NFT": {
                  "id": 191,
                  "token": "fdcf7a09094a05da11d603436c346aa1",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://Qmf2FaWVRf58139bbJ7obAYCkQbiVkomXsRNTRc3nGSsmE",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.671Z",
                  "updatedAt": "2023-05-07T08:35:54.671Z"
              }
          },
          {
              "id": 192,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 192,
              "createdAt": "2023-05-07T08:35:54.682Z",
              "updatedAt": "2023-05-07T08:35:54.682Z",
              "NFT": {
                  "id": 192,
                  "token": "fdcd2c8c9edf5676d1224d77cf2eecc5",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmU6CGkKHAUUNLQfufbmnRj666ZhJc2tBKrmbgCxpFMyp4",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.678Z",
                  "updatedAt": "2023-05-07T08:35:54.678Z"
              }
          },
          {
              "id": 193,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 193,
              "createdAt": "2023-05-07T08:35:54.689Z",
              "updatedAt": "2023-05-07T08:35:54.689Z",
              "NFT": {
                  "id": 193,
                  "token": "fdcc493d4961661a5ee50ee40f2f5e49",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmegY4CB6EwjTK8kFFJwdNafNq58B8vH34diaQz4W9W6Bn",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.686Z",
                  "updatedAt": "2023-05-07T08:35:54.686Z"
              }
          },
          {
              "id": 194,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 194,
              "createdAt": "2023-05-07T08:35:54.694Z",
              "updatedAt": "2023-05-07T08:35:54.694Z",
              "NFT": {
                  "id": 194,
                  "token": "fdcb9f4f661a19c8401855347f02639f",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmcWnfRBHLnASSkauiwAWRRha6gCDTFEQY8ygsEaYxj4Hw",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.692Z",
                  "updatedAt": "2023-05-07T08:35:54.692Z"
              }
          },
          {
              "id": 195,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 21,
              "NFTId": 195,
              "createdAt": "2023-05-07T08:35:54.699Z",
              "updatedAt": "2023-05-07T08:35:54.699Z",
              "NFT": {
                  "id": 195,
                  "token": "fdc8e30db1db20ab5dabe854c93b4d5a",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmQU8LohLGTbG8KRUN57mk3c6bMdmRSMUVxv8T22WTjaaj",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.696Z",
                  "updatedAt": "2023-05-07T08:35:54.696Z"
              }
          }
      ]
  },
  {
      "id": 22,
      "name": "BoredApeYachtClub (BAYC) - 10",
      "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIn0sInRva2VuX2FkZHJlc3MiOiIweGJjNGNhMGVkYTc2NDdhOGFiN2MyMDYxYzJlMTE4YTE4YTkzNmYxM2QiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxMCwia2V5IjoiZmQ4ZmIxZTkxYTk2YjllOTA0Yzc4MjRiMWRhODA3NzMiLCJ0b3RhbCI6MTAwMDAsImlhdCI6MTY4MzQ0ODU1MH0.5Lgrpkih65XSM7hIRb98aOskxAkBYfaglQpGHDay3uU",
      "ArtistId": 2,
      "createdAt": "2023-05-07T08:35:54.062Z",
      "updatedAt": "2023-05-07T08:35:54.062Z",
      "RoomNFTs": [
          {
              "id": 196,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 196,
              "createdAt": "2023-05-07T08:35:54.705Z",
              "updatedAt": "2023-05-07T08:35:54.705Z",
              "NFT": {
                  "id": 196,
                  "token": "fdc6f8cea4aa22558457dd8c9115e7ab",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZCGyigaBCLphLiXLCKGJCa69zjLFJjuojjybD9xe6aG4",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.702Z",
                  "updatedAt": "2023-05-07T08:35:54.702Z"
              }
          },
          {
              "id": 197,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 197,
              "createdAt": "2023-05-07T08:35:54.712Z",
              "updatedAt": "2023-05-07T08:35:54.712Z",
              "NFT": {
                  "id": 197,
                  "token": "fdbdd38b7baae99921c979c1dcb51bf3",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmSoMispwvikrzvG5nEyfjLZAkJFNtYGhSXBwaTXuDh5BC",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.709Z",
                  "updatedAt": "2023-05-07T08:35:54.709Z"
              }
          },
          {
              "id": 198,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 198,
              "createdAt": "2023-05-07T08:35:54.717Z",
              "updatedAt": "2023-05-07T08:35:54.717Z",
              "NFT": {
                  "id": 198,
                  "token": "fdbd825cf7179e5573f3e2eadc891683",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmVn6Xs5pJfF24KBg5Q7QJTvC2YmYTAhh8MJ3oH4kiPo6N",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.715Z",
                  "updatedAt": "2023-05-07T08:35:54.715Z"
              }
          },
          {
              "id": 199,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 199,
              "createdAt": "2023-05-07T08:35:54.724Z",
              "updatedAt": "2023-05-07T08:35:54.724Z",
              "NFT": {
                  "id": 199,
                  "token": "fdbc34b61bd2c3274e83ce6b034a2bb6",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmTnuT964LTGGTZgjwpuP3hFkfhUmYycBxqUUg7sF8BiMM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.720Z",
                  "updatedAt": "2023-05-07T08:35:54.720Z"
              }
          },
          {
              "id": 200,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 200,
              "createdAt": "2023-05-07T08:35:54.729Z",
              "updatedAt": "2023-05-07T08:35:54.729Z",
              "NFT": {
                  "id": 200,
                  "token": "fdb033bf77a32f8139b90c11693c45ca",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRsWTqaMa7PgT7z87iWZGPnbxxjJhturkbrUWUsbqH71c",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.727Z",
                  "updatedAt": "2023-05-07T08:35:54.727Z"
              }
          },
          {
              "id": 201,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 201,
              "createdAt": "2023-05-07T08:35:54.733Z",
              "updatedAt": "2023-05-07T08:35:54.733Z",
              "NFT": {
                  "id": 201,
                  "token": "fdaa707423b094a591b04fc39029cc11",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmZ7q6XNRX9cbq6iDvqAq194wEwNkKFycqhKvPVGHvueZx",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.731Z",
                  "updatedAt": "2023-05-07T08:35:54.731Z"
              }
          },
          {
              "id": 202,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 202,
              "createdAt": "2023-05-07T08:35:54.743Z",
              "updatedAt": "2023-05-07T08:35:54.743Z",
              "NFT": {
                  "id": 202,
                  "token": "fd9996197f201fab19779dbb9c817d79",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmRixhzz7vuF7Lq1h9XrH8rCyL7kGBZRf3i79ArqDmk7eN",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.739Z",
                  "updatedAt": "2023-05-07T08:35:54.739Z"
              }
          },
          {
              "id": 203,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 203,
              "createdAt": "2023-05-07T08:35:54.750Z",
              "updatedAt": "2023-05-07T08:35:54.750Z",
              "NFT": {
                  "id": 203,
                  "token": "fd99240b7c402a86b310818fd74ef0c6",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmNcybL5vbYuRKDq37a1yVhKpf6ZALx8ZhFc4qwAagLtuE",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.747Z",
                  "updatedAt": "2023-05-07T08:35:54.747Z"
              }
          },
          {
              "id": 204,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 204,
              "createdAt": "2023-05-07T08:35:54.759Z",
              "updatedAt": "2023-05-07T08:35:54.759Z",
              "NFT": {
                  "id": 204,
                  "token": "fd960bbc7cb9f8c2ced5a95f34641919",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmciVmDTGKiWUHVfxBskZix6pQVQ4FsuzhCBjdQCdCg7Z8",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.755Z",
                  "updatedAt": "2023-05-07T08:35:54.755Z"
              }
          },
          {
              "id": 205,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 22,
              "NFTId": 205,
              "createdAt": "2023-05-07T08:35:54.766Z",
              "updatedAt": "2023-05-07T08:35:54.766Z",
              "NFT": {
                  "id": 205,
                  "token": "fd8fb1e91a96b9e904c7824b1da80773",
                  "title": null,
                  "description": null,
                  "imageUrl": "ipfs://QmYEcSzC36uxKK4f1aV91KP2juLdKwqSonUUfEaoJRBk89",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:35:54.763Z",
                  "updatedAt": "2023-05-07T08:35:54.763Z"
              }
          }
      ]
  },
  {
      "id": 23,
      "name": "MutantApeYachtClub (MAYC) - 1",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxLCJrZXkiOiJmZmU3YTJiMjg4ODZlYTMxNTA5ZGFhYjFhYmI4NGZiOSIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.zVnpEQQiFwWjkd1L6T03dasqDs4x9ScD1BecnF9gXUg",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:35.600Z",
      "updatedAt": "2023-05-07T08:38:35.600Z",
      "RoomNFTs": [
          {
              "id": 206,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 206,
              "createdAt": "2023-05-07T08:38:39.991Z",
              "updatedAt": "2023-05-07T08:38:39.991Z",
              "NFT": {
                  "id": 206,
                  "token": "fffebfd091b3ed4694319cafc6a76faf",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmUbxHXtWWrhD7rs9eUhDssF6E4f5NqyndneCZEemgjmF6",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:39.986Z",
                  "updatedAt": "2023-05-07T08:38:39.986Z"
              }
          },
          {
              "id": 207,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 207,
              "createdAt": "2023-05-07T08:38:40.001Z",
              "updatedAt": "2023-05-07T08:38:40.001Z",
              "NFT": {
                  "id": 207,
                  "token": "fffe82acc9b38a9c3b4418122ed33141",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQxBBLyGJhbcnx8QbSEqjhYKeUPBJkjzCbG8GLrJJXc48",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:39.998Z",
                  "updatedAt": "2023-05-07T08:38:39.998Z"
              }
          },
          {
              "id": 208,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 208,
              "createdAt": "2023-05-07T08:38:40.009Z",
              "updatedAt": "2023-05-07T08:38:40.009Z",
              "NFT": {
                  "id": 208,
                  "token": "fffcf725a1288fa0b2d897d2d694234b",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRHt2SkUC8xtU6R6TD5QwYbFnDbk4CdaFo3dzcjnxkjsV",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.006Z",
                  "updatedAt": "2023-05-07T08:38:40.006Z"
              }
          },
          {
              "id": 209,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 209,
              "createdAt": "2023-05-07T08:38:40.016Z",
              "updatedAt": "2023-05-07T08:38:40.016Z",
              "NFT": {
                  "id": 209,
                  "token": "fffade2d1a10852262aadfb19a6d40bc",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmPb3dSVekpJWdNJxyKkpLwvWCZ7WXAKbpZUYt16B3cNpg",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.014Z",
                  "updatedAt": "2023-05-07T08:38:40.014Z"
              }
          },
          {
              "id": 210,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 210,
              "createdAt": "2023-05-07T08:38:40.024Z",
              "updatedAt": "2023-05-07T08:38:40.024Z",
              "NFT": {
                  "id": 210,
                  "token": "fff10a411a913972e5ffa0bb18935869",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRVoe81ZFjbBXxPqwkTqtwVnnCos5jxPsgG4u7umbhxVJ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.021Z",
                  "updatedAt": "2023-05-07T08:38:40.021Z"
              }
          },
          {
              "id": 211,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 211,
              "createdAt": "2023-05-07T08:38:40.029Z",
              "updatedAt": "2023-05-07T08:38:40.029Z",
              "NFT": {
                  "id": 211,
                  "token": "fff00ba09b215243c68c3a9cf7028ba1",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmYMwUHGZCCQGHUzFSLD7y4DJU1sSa5kNuwydyirpri1MK",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.027Z",
                  "updatedAt": "2023-05-07T08:38:40.027Z"
              }
          },
          {
              "id": 212,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 212,
              "createdAt": "2023-05-07T08:38:40.033Z",
              "updatedAt": "2023-05-07T08:38:40.033Z",
              "NFT": {
                  "id": 212,
                  "token": "ffef5ce6fed8eaab121fff80db1fe4ec",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmVA8xgMDe2gMm7yczD3SZGAmFrqCL7DbhhAKmyt7xGK2K",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.031Z",
                  "updatedAt": "2023-05-07T08:38:40.031Z"
              }
          },
          {
              "id": 213,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 213,
              "createdAt": "2023-05-07T08:38:40.038Z",
              "updatedAt": "2023-05-07T08:38:40.038Z",
              "NFT": {
                  "id": 213,
                  "token": "ffeeab9264753576b4afb2ebf95fcb57",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmdtWYyKMufvEN4P6ejUzzcySRmmUYryRjNFPtCaM5ekbn",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.035Z",
                  "updatedAt": "2023-05-07T08:38:40.035Z"
              }
          },
          {
              "id": 214,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 214,
              "createdAt": "2023-05-07T08:38:40.043Z",
              "updatedAt": "2023-05-07T08:38:40.043Z",
              "NFT": {
                  "id": 214,
                  "token": "ffed74c5af7911ddc20059bceee2e750",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmXUkYQw4U4FgNEXyNcrcuom9ks2M1fq8ZHZQ7KgVTgzSK",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.040Z",
                  "updatedAt": "2023-05-07T08:38:40.040Z"
              }
          },
          {
              "id": 215,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 23,
              "NFTId": 215,
              "createdAt": "2023-05-07T08:38:40.047Z",
              "updatedAt": "2023-05-07T08:38:40.047Z",
              "NFT": {
                  "id": 215,
                  "token": "ffe7a2b28886ea31509daab1abb84fb9",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmeNSEUiM3qsBxbbfgZADx2k6AgiyofDrg4RwcPhrtLm5G",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.045Z",
                  "updatedAt": "2023-05-07T08:38:40.045Z"
              }
          }
      ]
  },
  {
      "id": 24,
      "name": "MutantApeYachtClub (MAYC) - 2",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoyLCJrZXkiOiJmZmQ0ZTgyMTg1MDcyM2RhZmMyYWM3YzdmNDZjZWU1YyIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.zRibtM714EejdL3JehA_8hxfR_BGThUpQkREomeTJYg",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:35.958Z",
      "updatedAt": "2023-05-07T08:38:35.958Z",
      "RoomNFTs": [
          {
              "id": 216,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 216,
              "createdAt": "2023-05-07T08:38:40.051Z",
              "updatedAt": "2023-05-07T08:38:40.051Z",
              "NFT": {
                  "id": 216,
                  "token": "ffe702cc39459e0554dca83acb7e9461",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRZDGJ5kCeJ5eRVSoaL7Aos9zMog1vqJ1EPGEMSxMpapG",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.049Z",
                  "updatedAt": "2023-05-07T08:38:40.049Z"
              }
          },
          {
              "id": 217,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 217,
              "createdAt": "2023-05-07T08:38:40.058Z",
              "updatedAt": "2023-05-07T08:38:40.058Z",
              "NFT": {
                  "id": 217,
                  "token": "ffe6b033ff7556954ca2f19ddbda48a7",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNeaUPDr489hbDvJvL4gNpDJ1sQYKhghnSFtvU7pCjTx4",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.055Z",
                  "updatedAt": "2023-05-07T08:38:40.055Z"
              }
          },
          {
              "id": 218,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 218,
              "createdAt": "2023-05-07T08:38:40.063Z",
              "updatedAt": "2023-05-07T08:38:40.063Z",
              "NFT": {
                  "id": 218,
                  "token": "ffe63e06e5e9ac64f634caa1d75d91db",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmPD22gmNnuDJRZgHdDq6W2DvdczTJr9WeStirGGBAxWNn",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.060Z",
                  "updatedAt": "2023-05-07T08:38:40.060Z"
              }
          },
          {
              "id": 219,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 219,
              "createdAt": "2023-05-07T08:38:40.069Z",
              "updatedAt": "2023-05-07T08:38:40.069Z",
              "NFT": {
                  "id": 219,
                  "token": "ffe3d1c959f30037f554b17c03a82f09",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTU7gJmgjj2K6GKf7MmLJTp5vo1Wy8aq52iwmPDcBSyA1",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.067Z",
                  "updatedAt": "2023-05-07T08:38:40.067Z"
              }
          },
          {
              "id": 220,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 220,
              "createdAt": "2023-05-07T08:38:40.076Z",
              "updatedAt": "2023-05-07T08:38:40.076Z",
              "NFT": {
                  "id": 220,
                  "token": "ffe0e33b94bdab1a3b4945f083a22298",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNx85MjVpoRBsQDSiWdXraX19QEt2Qf4ssv4PmBRnB3d3",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.073Z",
                  "updatedAt": "2023-05-07T08:38:40.073Z"
              }
          },
          {
              "id": 221,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 221,
              "createdAt": "2023-05-07T08:38:40.081Z",
              "updatedAt": "2023-05-07T08:38:40.081Z",
              "NFT": {
                  "id": 221,
                  "token": "ffdf308256814d64f25a18cd2d03e688",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmZxUYkVuAN5vJgJMNE7G8MKuASojBo7yqjneLmkfpVBwm",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.079Z",
                  "updatedAt": "2023-05-07T08:38:40.079Z"
              }
          },
          {
              "id": 222,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 222,
              "createdAt": "2023-05-07T08:38:40.087Z",
              "updatedAt": "2023-05-07T08:38:40.087Z",
              "NFT": {
                  "id": 222,
                  "token": "ffde07154f92786f195259c8fb1e448b",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmaTcqaCFRN9G4sjMae2oFFxUAZJcmh2ua9DiUWS7vAxR2",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.084Z",
                  "updatedAt": "2023-05-07T08:38:40.084Z"
              }
          },
          {
              "id": 223,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 223,
              "createdAt": "2023-05-07T08:38:40.092Z",
              "updatedAt": "2023-05-07T08:38:40.092Z",
              "NFT": {
                  "id": 223,
                  "token": "ffd94eff791808f0aa699fe114faa503",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmeNWo7FM1pnxCn3JAxGYRmxRuEsTzrqCkH3mBqAwUQNPX",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.089Z",
                  "updatedAt": "2023-05-07T08:38:40.089Z"
              }
          },
          {
              "id": 224,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 224,
              "createdAt": "2023-05-07T08:38:40.096Z",
              "updatedAt": "2023-05-07T08:38:40.096Z",
              "NFT": {
                  "id": 224,
                  "token": "ffd614a34debaf58dd2234e64bf2cfe7",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmSgjZ7hkHBuTxi3MJEs1a6YzDvTK9vrzDjZw51Xp2jUWv",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.094Z",
                  "updatedAt": "2023-05-07T08:38:40.094Z"
              }
          },
          {
              "id": 225,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 24,
              "NFTId": 225,
              "createdAt": "2023-05-07T08:38:40.101Z",
              "updatedAt": "2023-05-07T08:38:40.101Z",
              "NFT": {
                  "id": 225,
                  "token": "ffd4e821850723dafc2ac7c7f46cee5c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmYpQff5mmsp7YoxF1VkezKLQmUQoh9FNLa3SXepoYdJ9P",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.098Z",
                  "updatedAt": "2023-05-07T08:38:40.098Z"
              }
          }
      ]
  },
  {
      "id": 25,
      "name": "MutantApeYachtClub (MAYC) - 3",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjozLCJrZXkiOiJmZmJmNTBkNDVkM2IyNTc5Yzk0OTNkMDkxZmU1YTFkZCIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.NUhqB0DtzMEg07G_DVdYmO9h4p4i8uU1NuOMqE9akwc",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:36.293Z",
      "updatedAt": "2023-05-07T08:38:36.293Z",
      "RoomNFTs": [
          {
              "id": 226,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 226,
              "createdAt": "2023-05-07T08:38:40.106Z",
              "updatedAt": "2023-05-07T08:38:40.106Z",
              "NFT": {
                  "id": 226,
                  "token": "ffd1b8226eff1c98f1d7c652b97eefb8",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmZVa4gBVeopkCnkc5e9zSAdL9Bh4Pyqk8YVi6nan2EXx6",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.104Z",
                  "updatedAt": "2023-05-07T08:38:40.104Z"
              }
          },
          {
              "id": 227,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 227,
              "createdAt": "2023-05-07T08:38:40.112Z",
              "updatedAt": "2023-05-07T08:38:40.112Z",
              "NFT": {
                  "id": 227,
                  "token": "ffca44c0566eecbde01a46d9cecf5617",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQawE8oKtMdZjYpJbtJMdazt7jtXySMvDrL9pSTyZUjy1",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.109Z",
                  "updatedAt": "2023-05-07T08:38:40.109Z"
              }
          },
          {
              "id": 228,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 228,
              "createdAt": "2023-05-07T08:38:40.119Z",
              "updatedAt": "2023-05-07T08:38:40.119Z",
              "NFT": {
                  "id": 228,
                  "token": "ffc900f72fffbb95616c6e15718508f5",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNnimpcsyAX43TYZLoEw7UtjpLznv9kqL8wtTHqm8dXnC",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.115Z",
                  "updatedAt": "2023-05-07T08:38:40.115Z"
              }
          },
          {
              "id": 229,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 229,
              "createdAt": "2023-05-07T08:38:40.128Z",
              "updatedAt": "2023-05-07T08:38:40.128Z",
              "NFT": {
                  "id": 229,
                  "token": "ffc8b87398b092e9d926b6db2c69aa7c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcSYc8THLpeS9HqujTpG13iVhDpgWpAL6rz6svoVn4ikM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.124Z",
                  "updatedAt": "2023-05-07T08:38:40.124Z"
              }
          },
          {
              "id": 230,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 230,
              "createdAt": "2023-05-07T08:38:40.134Z",
              "updatedAt": "2023-05-07T08:38:40.134Z",
              "NFT": {
                  "id": 230,
                  "token": "ffc862f90da5d0f5dc68d49c2578cf47",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmaDKU7LLS8nxoMCjNs4Hm1msYVxxmiLDhQrsfHWCJ5Sov",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.131Z",
                  "updatedAt": "2023-05-07T08:38:40.131Z"
              }
          },
          {
              "id": 231,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 231,
              "createdAt": "2023-05-07T08:38:40.142Z",
              "updatedAt": "2023-05-07T08:38:40.142Z",
              "NFT": {
                  "id": 231,
                  "token": "ffc7cd9186cc1c6e6c61b967baa64134",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmVzZxoSxQrx5LrGpyQEczwrgFYA3Q2YberhxZRYd1zbiT",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.138Z",
                  "updatedAt": "2023-05-07T08:38:40.138Z"
              }
          },
          {
              "id": 232,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 232,
              "createdAt": "2023-05-07T08:38:40.149Z",
              "updatedAt": "2023-05-07T08:38:40.149Z",
              "NFT": {
                  "id": 232,
                  "token": "ffc6dc833926f6d29e5d10df57b9a88e",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmehUrm1R68Wfwqu3iAMEFqHWFTfdoTS9qafna5ZL1NzZA",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.146Z",
                  "updatedAt": "2023-05-07T08:38:40.146Z"
              }
          },
          {
              "id": 233,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 233,
              "createdAt": "2023-05-07T08:38:40.154Z",
              "updatedAt": "2023-05-07T08:38:40.154Z",
              "NFT": {
                  "id": 233,
                  "token": "ffc16b1cc1c57376ba70093d7f240943",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTq3hARzFwWf53tpG3utbWCz9iwVVoWMqLQ2i1VAuKWZx",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.151Z",
                  "updatedAt": "2023-05-07T08:38:40.151Z"
              }
          },
          {
              "id": 234,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 234,
              "createdAt": "2023-05-07T08:38:40.159Z",
              "updatedAt": "2023-05-07T08:38:40.159Z",
              "NFT": {
                  "id": 234,
                  "token": "ffc04d96d816510ff4a6f7489223575d",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmVUxU5VuJfyjqjfAUjWC8UBB9SRn5b185GtEiXPs6ddAy",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.157Z",
                  "updatedAt": "2023-05-07T08:38:40.157Z"
              }
          },
          {
              "id": 235,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 25,
              "NFTId": 235,
              "createdAt": "2023-05-07T08:38:40.166Z",
              "updatedAt": "2023-05-07T08:38:40.166Z",
              "NFT": {
                  "id": 235,
                  "token": "ffbf50d45d3b2579c9493d091fe5a1dd",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmZJ4jQsbUvB3XndGggH1aB5S6fmLi8vogt2FkS1w1XGGn",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.163Z",
                  "updatedAt": "2023-05-07T08:38:40.163Z"
              }
          }
      ]
  },
  {
      "id": 26,
      "name": "MutantApeYachtClub (MAYC) - 4",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo0LCJrZXkiOiJmZmE4MjkwOWY2NTU0Nzc5NzY0NWIwMDcwYzQ1NTIxMSIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.MWIWHEEvnHZDsLKI5SY6KvztntiF2SnZjFDbrniEKHA",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:36.660Z",
      "updatedAt": "2023-05-07T08:38:36.660Z",
      "RoomNFTs": [
          {
              "id": 236,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 236,
              "createdAt": "2023-05-07T08:38:40.178Z",
              "updatedAt": "2023-05-07T08:38:40.178Z",
              "NFT": {
                  "id": 236,
                  "token": "ffb65cc8d9f0b4e1cbae446d0a183658",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmU2AS4dTbtzj3yryqjUwBY1BUrUwRrtoRqXUZ9BsHwT7F",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.170Z",
                  "updatedAt": "2023-05-07T08:38:40.170Z"
              }
          },
          {
              "id": 237,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 237,
              "createdAt": "2023-05-07T08:38:40.183Z",
              "updatedAt": "2023-05-07T08:38:40.183Z",
              "NFT": {
                  "id": 237,
                  "token": "ffb657ca2101f8210404f9580d512489",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQu9x2LUJSo6KkK2xPXzbV6m4sNKMd98ovHBozZqnSEjk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.180Z",
                  "updatedAt": "2023-05-07T08:38:40.180Z"
              }
          },
          {
              "id": 238,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 238,
              "createdAt": "2023-05-07T08:38:40.188Z",
              "updatedAt": "2023-05-07T08:38:40.188Z",
              "NFT": {
                  "id": 238,
                  "token": "ffb56335b63cd878465aa9cf2fb88ff5",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmSJBVAwLxu9UZXmfwN3YsojW5Ro3v1tG7gBKrbjt3Z2Y9",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.186Z",
                  "updatedAt": "2023-05-07T08:38:40.186Z"
              }
          },
          {
              "id": 239,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 239,
              "createdAt": "2023-05-07T08:38:40.193Z",
              "updatedAt": "2023-05-07T08:38:40.193Z",
              "NFT": {
                  "id": 239,
                  "token": "ffb47c6f190064749a9b6fd9781d458a",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmafJHRuNJHiiXHbA7Z46drBgPz4PTdrof88oCWHp62WJh",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.191Z",
                  "updatedAt": "2023-05-07T08:38:40.191Z"
              }
          },
          {
              "id": 240,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 240,
              "createdAt": "2023-05-07T08:38:40.205Z",
              "updatedAt": "2023-05-07T08:38:40.205Z",
              "NFT": {
                  "id": 240,
                  "token": "ffafa8cc3978b81b9a9b3654ba8d008a",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRoxuRe2h5gjXHWrcTt6VrmH6ZiPMKoR2M3muWAEuhD6h",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.200Z",
                  "updatedAt": "2023-05-07T08:38:40.200Z"
              }
          },
          {
              "id": 241,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 241,
              "createdAt": "2023-05-07T08:38:40.216Z",
              "updatedAt": "2023-05-07T08:38:40.216Z",
              "NFT": {
                  "id": 241,
                  "token": "ffad6c43c0fd926fc9300acad061d810",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmaoifRsKZaNBX5d66xSint7ZUA3t3bGYTkRUT4AX7paY6",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.209Z",
                  "updatedAt": "2023-05-07T08:38:40.209Z"
              }
          },
          {
              "id": 242,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 242,
              "createdAt": "2023-05-07T08:38:40.230Z",
              "updatedAt": "2023-05-07T08:38:40.230Z",
              "NFT": {
                  "id": 242,
                  "token": "ffaad35ff9d65e8216ed005e2c14ad7a",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmVLM5C7yzUa2LKpeAsPsnbDnmg2WzTyUgjYGNTjqhTb14",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.222Z",
                  "updatedAt": "2023-05-07T08:38:40.222Z"
              }
          },
          {
              "id": 243,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 243,
              "createdAt": "2023-05-07T08:38:40.246Z",
              "updatedAt": "2023-05-07T08:38:40.246Z",
              "NFT": {
                  "id": 243,
                  "token": "ffaa68c9176928a76d18d9e74b731c99",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTzJ8qdriPuNcAT6vZAhuCPXNR4J9verprYuwdftReDuH",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.238Z",
                  "updatedAt": "2023-05-07T08:38:40.238Z"
              }
          },
          {
              "id": 244,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 244,
              "createdAt": "2023-05-07T08:38:40.256Z",
              "updatedAt": "2023-05-07T08:38:40.256Z",
              "NFT": {
                  "id": 244,
                  "token": "ffa9523385e6a29e6872245773e88e64",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcR1KSmmK9FQaddcABa3awN2kwEyqU4XEnwETdE3x2Qap",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.250Z",
                  "updatedAt": "2023-05-07T08:38:40.250Z"
              }
          },
          {
              "id": 245,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 26,
              "NFTId": 245,
              "createdAt": "2023-05-07T08:38:40.265Z",
              "updatedAt": "2023-05-07T08:38:40.265Z",
              "NFT": {
                  "id": 245,
                  "token": "ffa82909f65547797645b0070c455211",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcVybUWpqTt8dsnqBjrRV5cLKnFu1T8McNnbkJKhAC9wA",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.261Z",
                  "updatedAt": "2023-05-07T08:38:40.261Z"
              }
          }
      ]
  },
  {
      "id": 27,
      "name": "MutantApeYachtClub (MAYC) - 5",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo1LCJrZXkiOiJmZjk3Y2U5MDhjODBjNGI5YzM4OGNhMzgyNjE0NjNiNyIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.wqxjXY8wJdWxx6Tb-xqrA-5HooaZ_koL1cReaEUdRtY",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:37.023Z",
      "updatedAt": "2023-05-07T08:38:37.023Z",
      "RoomNFTs": [
          {
              "id": 246,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 246,
              "createdAt": "2023-05-07T08:38:40.274Z",
              "updatedAt": "2023-05-07T08:38:40.274Z",
              "NFT": {
                  "id": 246,
                  "token": "ffa5faf98ace392eeec1fb63192a86a7",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmS3vQvsPZwznxstw69RD3sK3EH3qaYt6eFYFWP8RZcwjN",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.268Z",
                  "updatedAt": "2023-05-07T08:38:40.268Z"
              }
          },
          {
              "id": 247,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 247,
              "createdAt": "2023-05-07T08:38:40.283Z",
              "updatedAt": "2023-05-07T08:38:40.283Z",
              "NFT": {
                  "id": 247,
                  "token": "ffa2f22dfa6d77f5c2056e266c291c82",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmeAdDj6dtdhDKR4kE4suC2zXAE9vVxtrat1TKdcK8S8zG",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.279Z",
                  "updatedAt": "2023-05-07T08:38:40.279Z"
              }
          },
          {
              "id": 248,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 248,
              "createdAt": "2023-05-07T08:38:40.292Z",
              "updatedAt": "2023-05-07T08:38:40.292Z",
              "NFT": {
                  "id": 248,
                  "token": "ff9fd4ad4bda0ee2a084e8d098b77b8c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmUXoxCGVoybNns8oYE8NsXZ37v4oF9HmVNCktyrS2sewN",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.287Z",
                  "updatedAt": "2023-05-07T08:38:40.287Z"
              }
          },
          {
              "id": 249,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 249,
              "createdAt": "2023-05-07T08:38:40.300Z",
              "updatedAt": "2023-05-07T08:38:40.300Z",
              "NFT": {
                  "id": 249,
                  "token": "ff9fa760fbb2e70140fb4515fe0fef94",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmYNpgcZc8LrwD6yt1dQkTPW9miCjXzLNUwdBQgCWsf89c",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.296Z",
                  "updatedAt": "2023-05-07T08:38:40.296Z"
              }
          },
          {
              "id": 250,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 250,
              "createdAt": "2023-05-07T08:38:40.310Z",
              "updatedAt": "2023-05-07T08:38:40.310Z",
              "NFT": {
                  "id": 250,
                  "token": "ff9f4f7ad3f0d94776cc1a5097bd6342",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmPJEmmtVUF8dVnH2s4LKAwV45bVtJF3SaMGoQEHwqUJDX",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.304Z",
                  "updatedAt": "2023-05-07T08:38:40.304Z"
              }
          },
          {
              "id": 251,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 251,
              "createdAt": "2023-05-07T08:38:40.324Z",
              "updatedAt": "2023-05-07T08:38:40.324Z",
              "NFT": {
                  "id": 251,
                  "token": "ff9e7df946141281f77f36e77bfacec8",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmW29tQZkWYAAPhhvWN1fex139J34ShtVGk6rTPdGNSRmk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.321Z",
                  "updatedAt": "2023-05-07T08:38:40.321Z"
              }
          },
          {
              "id": 252,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 252,
              "createdAt": "2023-05-07T08:38:40.330Z",
              "updatedAt": "2023-05-07T08:38:40.330Z",
              "NFT": {
                  "id": 252,
                  "token": "ff9bb7bc7427c377c927a075611432ee",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmd8oqac7zikkWSrL9q6kF1PiwfvYLozQRMTMtNszmiY6F",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.328Z",
                  "updatedAt": "2023-05-07T08:38:40.328Z"
              }
          },
          {
              "id": 253,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 253,
              "createdAt": "2023-05-07T08:38:40.337Z",
              "updatedAt": "2023-05-07T08:38:40.337Z",
              "NFT": {
                  "id": 253,
                  "token": "ff9b2f163439a67421984d27f3345db1",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmPoJGGNrPwqdgbuCyUYEzdaRnH5UBLDgQmqiL94vBuM2N",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.334Z",
                  "updatedAt": "2023-05-07T08:38:40.334Z"
              }
          },
          {
              "id": 254,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 254,
              "createdAt": "2023-05-07T08:38:40.342Z",
              "updatedAt": "2023-05-07T08:38:40.342Z",
              "NFT": {
                  "id": 254,
                  "token": "ff9a2ee985d7eddc6ae30d0f48ba8b62",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRUjnSwnuvWSmxQ8GHSLrztPdoSXy7vRJg4SrN6Xm9BD2",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.339Z",
                  "updatedAt": "2023-05-07T08:38:40.339Z"
              }
          },
          {
              "id": 255,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 27,
              "NFTId": 255,
              "createdAt": "2023-05-07T08:38:40.347Z",
              "updatedAt": "2023-05-07T08:38:40.347Z",
              "NFT": {
                  "id": 255,
                  "token": "ff97ce908c80c4b9c388ca38261463b7",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmT5MiDj6sGu8gMynKP2iP9tz4UEXCrc247Qov8JYhG66A",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.344Z",
                  "updatedAt": "2023-05-07T08:38:40.344Z"
              }
          }
      ]
  },
  {
      "id": 28,
      "name": "MutantApeYachtClub (MAYC) - 6",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo2LCJrZXkiOiJmZjdiNGJlNGJhZGZiZDQzODNlNWQ0OTNjM2E2YzI1NCIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.HH6aP-6hueTcRQdacYGr8Ds-Ebnv831cCDA28Vy8FXI",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:38.599Z",
      "updatedAt": "2023-05-07T08:38:38.599Z",
      "RoomNFTs": [
          {
              "id": 256,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 256,
              "createdAt": "2023-05-07T08:38:40.354Z",
              "updatedAt": "2023-05-07T08:38:40.354Z",
              "NFT": {
                  "id": 256,
                  "token": "ff93e60640f98dd1e5e26db71217fc3a",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcL1Bb8QTGxuEy5chEk3scqdfsX7S71WmvFBVidZ7Y9Xa",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.350Z",
                  "updatedAt": "2023-05-07T08:38:40.350Z"
              }
          },
          {
              "id": 257,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 257,
              "createdAt": "2023-05-07T08:38:40.360Z",
              "updatedAt": "2023-05-07T08:38:40.360Z",
              "NFT": {
                  "id": 257,
                  "token": "ff929e58afe2a883fdbb213b2eb9bbf4",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTpBebSvJwDooC25ogfiHn7tGH68Qay5Ke5uxXC8Vd8kq",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.358Z",
                  "updatedAt": "2023-05-07T08:38:40.358Z"
              }
          },
          {
              "id": 258,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 258,
              "createdAt": "2023-05-07T08:38:40.367Z",
              "updatedAt": "2023-05-07T08:38:40.367Z",
              "NFT": {
                  "id": 258,
                  "token": "ff8a16cf532b97104d0df9835819a0ba",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmeWVsQAP5bp276ui5Bd8gLudrN7HaPjr6Q3ZpupQKp6Zk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.364Z",
                  "updatedAt": "2023-05-07T08:38:40.364Z"
              }
          },
          {
              "id": 259,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 259,
              "createdAt": "2023-05-07T08:38:40.374Z",
              "updatedAt": "2023-05-07T08:38:40.374Z",
              "NFT": {
                  "id": 259,
                  "token": "ff884d29ebddf20e41744984d5ed64b2",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmW2YoxXoxvdZ1sow19crzZWLJJyA4Ww7FJS15UKCwvy63",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.371Z",
                  "updatedAt": "2023-05-07T08:38:40.371Z"
              }
          },
          {
              "id": 260,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 260,
              "createdAt": "2023-05-07T08:38:40.378Z",
              "updatedAt": "2023-05-07T08:38:40.378Z",
              "NFT": {
                  "id": 260,
                  "token": "ff87512fde9195cc117e556d8cc20d14",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRuFYxFU829iArebzC3DkmaRAQdwp91nMmhxPVDs51jtB",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.376Z",
                  "updatedAt": "2023-05-07T08:38:40.376Z"
              }
          },
          {
              "id": 261,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 261,
              "createdAt": "2023-05-07T08:38:40.383Z",
              "updatedAt": "2023-05-07T08:38:40.383Z",
              "NFT": {
                  "id": 261,
                  "token": "ff841ec520edfe38478c482d0887a0dc",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmaoqETNt8aZUw7ZbxQBoYcpyHD2RXM86dAuyA96ENEMBa",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.381Z",
                  "updatedAt": "2023-05-07T08:38:40.381Z"
              }
          },
          {
              "id": 262,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 262,
              "createdAt": "2023-05-07T08:38:40.391Z",
              "updatedAt": "2023-05-07T08:38:40.391Z",
              "NFT": {
                  "id": 262,
                  "token": "ff818caa59593e4e16fb2e7bb137338f",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWQiFTVuVf1EVkQ42qEYHkn93BVrfzdVqsupPk12QRwMk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.387Z",
                  "updatedAt": "2023-05-07T08:38:40.387Z"
              }
          },
          {
              "id": 263,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 263,
              "createdAt": "2023-05-07T08:38:40.396Z",
              "updatedAt": "2023-05-07T08:38:40.396Z",
              "NFT": {
                  "id": 263,
                  "token": "ff804103ba610c131f18b174674ead6e",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qme1vGUHBk6gU7c87MxrVuDnAYsMxXAogkrrushqv67SsQ",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.394Z",
                  "updatedAt": "2023-05-07T08:38:40.394Z"
              }
          },
          {
              "id": 264,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 264,
              "createdAt": "2023-05-07T08:38:40.402Z",
              "updatedAt": "2023-05-07T08:38:40.402Z",
              "NFT": {
                  "id": 264,
                  "token": "ff7c0338db65c8e7f6f0f908f7dbff45",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQ6Uf36NrwV9QFf1mSzVg5ZRGuyyyufU4xarGB3RcVf75",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.399Z",
                  "updatedAt": "2023-05-07T08:38:40.399Z"
              }
          },
          {
              "id": 265,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 28,
              "NFTId": 265,
              "createdAt": "2023-05-07T08:38:40.408Z",
              "updatedAt": "2023-05-07T08:38:40.408Z",
              "NFT": {
                  "id": 265,
                  "token": "ff7b4be4badfbd4383e5d493c3a6c254",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmc7uPzSbqXUSiin2S2BaRCUjxf4mLAX2mUrgtAfxrR3u9",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.405Z",
                  "updatedAt": "2023-05-07T08:38:40.405Z"
              }
          }
      ]
  },
  {
      "id": 29,
      "name": "MutantApeYachtClub (MAYC) - 7",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo3LCJrZXkiOiJmZjVlOGIxZTYxMWIzMGNlODU5Zjc4MzNiZjE2NmVhNCIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.RW3ETF1tdengj3XSv2to4hZAdbz1XL6v8Bez2koaOlo",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:38.949Z",
      "updatedAt": "2023-05-07T08:38:38.949Z",
      "RoomNFTs": [
          {
              "id": 266,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 266,
              "createdAt": "2023-05-07T08:38:40.412Z",
              "updatedAt": "2023-05-07T08:38:40.412Z",
              "NFT": {
                  "id": 266,
                  "token": "ff7622819a22518475f3c46ce6d1e3cb",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmbPZJa7eUg3zHM4r7EsYQjxYoTrh6H1ZQJEXrozhjF7zK",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.410Z",
                  "updatedAt": "2023-05-07T08:38:40.410Z"
              }
          },
          {
              "id": 267,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 267,
              "createdAt": "2023-05-07T08:38:40.416Z",
              "updatedAt": "2023-05-07T08:38:40.416Z",
              "NFT": {
                  "id": 267,
                  "token": "ff75ffbaad1e27d3ba219ecb7e866db2",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmebBwSVe8uKtmJwxWgjyQWg6NraeUFnCWcSUS8SzBKScs",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.414Z",
                  "updatedAt": "2023-05-07T08:38:40.414Z"
              }
          },
          {
              "id": 268,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 268,
              "createdAt": "2023-05-07T08:38:40.421Z",
              "updatedAt": "2023-05-07T08:38:40.421Z",
              "NFT": {
                  "id": 268,
                  "token": "ff729f776b11e5f5949615ac84637d6e",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmUMsrPNiPnGGcDdjvfYY362hxTppMRRCgA3mnTJP7Go6G",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.418Z",
                  "updatedAt": "2023-05-07T08:38:40.418Z"
              }
          },
          {
              "id": 269,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 269,
              "createdAt": "2023-05-07T08:38:40.425Z",
              "updatedAt": "2023-05-07T08:38:40.425Z",
              "NFT": {
                  "id": 269,
                  "token": "ff71cf808fac8bec289fb6ab1071ac11",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmdTnVzotcqGEtyf95STM6WNzNErwbGJ7QmYhRS8iiH8R3",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.423Z",
                  "updatedAt": "2023-05-07T08:38:40.423Z"
              }
          },
          {
              "id": 270,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 270,
              "createdAt": "2023-05-07T08:38:40.429Z",
              "updatedAt": "2023-05-07T08:38:40.429Z",
              "NFT": {
                  "id": 270,
                  "token": "ff6e84ad7b02d7fcc72730d868484478",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWHCr2XNjsa3M2KzbaVTDYh9RTWW7N6jWTbACbjbtnaBq",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.427Z",
                  "updatedAt": "2023-05-07T08:38:40.427Z"
              }
          },
          {
              "id": 271,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 271,
              "createdAt": "2023-05-07T08:38:40.434Z",
              "updatedAt": "2023-05-07T08:38:40.434Z",
              "NFT": {
                  "id": 271,
                  "token": "ff6e1d210acb4615b4a144c29a7539eb",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmfWjTpx3dnyD2jVskVSgMZq5aB635z24pc7gk9Wi3z3qy",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.431Z",
                  "updatedAt": "2023-05-07T08:38:40.431Z"
              }
          },
          {
              "id": 272,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 272,
              "createdAt": "2023-05-07T08:38:40.440Z",
              "updatedAt": "2023-05-07T08:38:40.440Z",
              "NFT": {
                  "id": 272,
                  "token": "ff6aa1dc641939d750e5262ab144e849",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmVihB4ak8GrndY5LruztPdwGDCtgABGyXmBapPGhrPfQt",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.437Z",
                  "updatedAt": "2023-05-07T08:38:40.437Z"
              }
          },
          {
              "id": 273,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 273,
              "createdAt": "2023-05-07T08:38:40.444Z",
              "updatedAt": "2023-05-07T08:38:40.444Z",
              "NFT": {
                  "id": 273,
                  "token": "ff66724ef93e9a6c22711ee1b1acba82",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNswg19g5J1JMaMSg7q9eQC1piv6LCpQ5j55Y2kg2vkR3",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.442Z",
                  "updatedAt": "2023-05-07T08:38:40.442Z"
              }
          },
          {
              "id": 274,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 274,
              "createdAt": "2023-05-07T08:38:40.450Z",
              "updatedAt": "2023-05-07T08:38:40.450Z",
              "NFT": {
                  "id": 274,
                  "token": "ff6188d19145a157ed1f4ecbc2e0bbdd",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmUCB7ovi4AbkySdjrpDFpS1nfZphM7oke3T4RxmT3mAyg",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.447Z",
                  "updatedAt": "2023-05-07T08:38:40.447Z"
              }
          },
          {
              "id": 275,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 29,
              "NFTId": 275,
              "createdAt": "2023-05-07T08:38:40.457Z",
              "updatedAt": "2023-05-07T08:38:40.457Z",
              "NFT": {
                  "id": 275,
                  "token": "ff5e8b1e611b30ce859f7833bf166ea4",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qme22JbpM96YZbmwo7zwV14ZSryq7QAPER9uqj1XV1q54D",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.454Z",
                  "updatedAt": "2023-05-07T08:38:40.454Z"
              }
          }
      ]
  },
  {
      "id": 30,
      "name": "MutantApeYachtClub (MAYC) - 8",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo4LCJrZXkiOiJmZjMzYzdlODU3MjRjMzkwZDBiMGVlYTU4MTY5YTM2YyIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.ekCV-lsDBEQ3fsQ82B4AWG18nfe7RJZZWts97tX9blM",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:39.277Z",
      "updatedAt": "2023-05-07T08:38:39.277Z",
      "RoomNFTs": [
          {
              "id": 276,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 276,
              "createdAt": "2023-05-07T08:38:40.463Z",
              "updatedAt": "2023-05-07T08:38:40.463Z",
              "NFT": {
                  "id": 276,
                  "token": "ff5992d3e08e2d1f910d3f972eaf8ea7",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmdyxc3wtXVKSC3aaVMRECzbdnPcVUzaW6oKk5CuGMbJVk",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.460Z",
                  "updatedAt": "2023-05-07T08:38:40.460Z"
              }
          },
          {
              "id": 277,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 277,
              "createdAt": "2023-05-07T08:38:40.470Z",
              "updatedAt": "2023-05-07T08:38:40.470Z",
              "NFT": {
                  "id": 277,
                  "token": "ff5877be153e5d05decb5a484b845dfd",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTyRYCcdreZdgdBFxXVnuErksgYKteBgUuN5C65QPKN9R",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.467Z",
                  "updatedAt": "2023-05-07T08:38:40.467Z"
              }
          },
          {
              "id": 278,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 278,
              "createdAt": "2023-05-07T08:38:40.476Z",
              "updatedAt": "2023-05-07T08:38:40.476Z",
              "NFT": {
                  "id": 278,
                  "token": "ff540d46714536df43b610edbbd3cdcd",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmapJkBzV7sabTHJajdcTPCCAbvqSBdSQu6Qwy8Xznk12X",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.474Z",
                  "updatedAt": "2023-05-07T08:38:40.474Z"
              }
          },
          {
              "id": 279,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 279,
              "createdAt": "2023-05-07T08:38:40.483Z",
              "updatedAt": "2023-05-07T08:38:40.483Z",
              "NFT": {
                  "id": 279,
                  "token": "ff4ecdb2f3f818f63ec11ad6da238e19",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQvS6df3aW7KBxzn1jLaj3RDU3s75uSpynqZhm53ymJzf",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.479Z",
                  "updatedAt": "2023-05-07T08:38:40.479Z"
              }
          },
          {
              "id": 280,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 280,
              "createdAt": "2023-05-07T08:38:40.490Z",
              "updatedAt": "2023-05-07T08:38:40.490Z",
              "NFT": {
                  "id": 280,
                  "token": "ff49d3e3c82e5a768960ad539860afb9",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQrj3bEBFwh1kyEpymSiKSvXC5NnhhX9UVnMf8DSP7Yqe",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.487Z",
                  "updatedAt": "2023-05-07T08:38:40.487Z"
              }
          },
          {
              "id": 281,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 281,
              "createdAt": "2023-05-07T08:38:40.496Z",
              "updatedAt": "2023-05-07T08:38:40.496Z",
              "NFT": {
                  "id": 281,
                  "token": "ff48d5c75f37aff404fd7620952a9391",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmRfJLxR2rRB1cm4XeRT6yooJcLvuX6bTreQZxU749J5Vp",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.493Z",
                  "updatedAt": "2023-05-07T08:38:40.493Z"
              }
          },
          {
              "id": 282,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 282,
              "createdAt": "2023-05-07T08:38:40.501Z",
              "updatedAt": "2023-05-07T08:38:40.501Z",
              "NFT": {
                  "id": 282,
                  "token": "ff467b82ccd7958e29eb755eeb0f99ff",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQXRNK4sTUHWwavV8zpqqbzWQMaYY7MTDQhMG24bsMrvR",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.499Z",
                  "updatedAt": "2023-05-07T08:38:40.499Z"
              }
          },
          {
              "id": 283,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 283,
              "createdAt": "2023-05-07T08:38:40.508Z",
              "updatedAt": "2023-05-07T08:38:40.508Z",
              "NFT": {
                  "id": 283,
                  "token": "ff4222a7de9d9b8a3f1925322fcf989d",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNRLGhxx27GQucXMBmqAcAF8ge97TYzKwZcWVEXVt27JM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.505Z",
                  "updatedAt": "2023-05-07T08:38:40.505Z"
              }
          },
          {
              "id": 284,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 284,
              "createdAt": "2023-05-07T08:38:40.513Z",
              "updatedAt": "2023-05-07T08:38:40.513Z",
              "NFT": {
                  "id": 284,
                  "token": "ff3d396cb5aa75dc56b68bff2be1276c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmNorHUFc5E1cucy9ByDngKJjvB1RCQqgmoi1yon59AfMy",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.510Z",
                  "updatedAt": "2023-05-07T08:38:40.510Z"
              }
          },
          {
              "id": 285,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 30,
              "NFTId": 285,
              "createdAt": "2023-05-07T08:38:40.522Z",
              "updatedAt": "2023-05-07T08:38:40.522Z",
              "NFT": {
                  "id": 285,
                  "token": "ff33c7e85724c390d0b0eea58169a36c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmc5M4MFFpwuCgvZfCi9w8e73qYcQACDwqug5qRvsjkrNj",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.518Z",
                  "updatedAt": "2023-05-07T08:38:40.518Z"
              }
          }
      ]
  },
  {
      "id": 31,
      "name": "MutantApeYachtClub (MAYC) - 9",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjo5LCJrZXkiOiJmZjIzM2U1MWEzNTFmNDkzNzM1ZGU0YzdlMzg5NzM4MCIsInRvdGFsIjoxOTQ2OSwiaWF0IjoxNjgzNDQ4NzE1fQ.gkLQUFvRYgdaV2UsgzJKY_wxylOT1REDjyEagkuZuaA",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:39.637Z",
      "updatedAt": "2023-05-07T08:38:39.637Z",
      "RoomNFTs": [
          {
              "id": 286,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 286,
              "createdAt": "2023-05-07T08:38:40.529Z",
              "updatedAt": "2023-05-07T08:38:40.529Z",
              "NFT": {
                  "id": 286,
                  "token": "ff30912e6c96b2ff80019c9390e1b19a",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmY6jhJ9WW8sKFdsA5KL4q7V64zzh3PeTz3NK8urYFnspw",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.526Z",
                  "updatedAt": "2023-05-07T08:38:40.526Z"
              }
          },
          {
              "id": 287,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 287,
              "createdAt": "2023-05-07T08:38:40.546Z",
              "updatedAt": "2023-05-07T08:38:40.546Z",
              "NFT": {
                  "id": 287,
                  "token": "ff2ee8f95e309d3b21d1e05316db9dc5",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmYpDPECFXeRpwGU8P8qBZUKnnexgHLzjXR66qtTkE4yeT",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.535Z",
                  "updatedAt": "2023-05-07T08:38:40.535Z"
              }
          },
          {
              "id": 288,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 288,
              "createdAt": "2023-05-07T08:38:40.551Z",
              "updatedAt": "2023-05-07T08:38:40.551Z",
              "NFT": {
                  "id": 288,
                  "token": "ff2bf7eb8e1aa9ed7b134c9102f24dec",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmd2pLj9s9FS42wFua7rSwSjDnekoEy58YGvj6M4Dpg6zX",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.549Z",
                  "updatedAt": "2023-05-07T08:38:40.549Z"
              }
          },
          {
              "id": 289,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 289,
              "createdAt": "2023-05-07T08:38:40.560Z",
              "updatedAt": "2023-05-07T08:38:40.560Z",
              "NFT": {
                  "id": 289,
                  "token": "ff2b9164952860eb23bdd12d0e4a6381",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmaeLf32DpWgZS6WsZ58kGGeNQSDPshxTp4iutowY9emyg",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.555Z",
                  "updatedAt": "2023-05-07T08:38:40.555Z"
              }
          },
          {
              "id": 290,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 290,
              "createdAt": "2023-05-07T08:38:40.567Z",
              "updatedAt": "2023-05-07T08:38:40.567Z",
              "NFT": {
                  "id": 290,
                  "token": "ff2b4f39e14103d7ab013dc1200783dc",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcQBLsMsdxTVMMZbcE3HTK9SrZtM1qFBsSfUbELkcwy6t",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.564Z",
                  "updatedAt": "2023-05-07T08:38:40.564Z"
              }
          },
          {
              "id": 291,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 291,
              "createdAt": "2023-05-07T08:38:40.575Z",
              "updatedAt": "2023-05-07T08:38:40.575Z",
              "NFT": {
                  "id": 291,
                  "token": "ff2a382c4eb1c5f2e93997192aefad43",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmcCpS3Krnej7Z33h9q9vHQaGjFb6XvHKnUPwvtXLLVAtv",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.572Z",
                  "updatedAt": "2023-05-07T08:38:40.572Z"
              }
          },
          {
              "id": 292,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 292,
              "createdAt": "2023-05-07T08:38:40.581Z",
              "updatedAt": "2023-05-07T08:38:40.581Z",
              "NFT": {
                  "id": 292,
                  "token": "ff26137d0c9da8f3fa92c81a380e6e52",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmds47BkmCXvgPXBp7PkBSXTHt8uq25LXyxrxgnz1dz7Wv",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.578Z",
                  "updatedAt": "2023-05-07T08:38:40.578Z"
              }
          },
          {
              "id": 293,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 293,
              "createdAt": "2023-05-07T08:38:40.588Z",
              "updatedAt": "2023-05-07T08:38:40.588Z",
              "NFT": {
                  "id": 293,
                  "token": "ff23b0dbcad970f010cb387dea9afb20",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmTWm68bEUJdUBV1Q3w1LocuUp4H39eSCpARbESAQmcthF",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.584Z",
                  "updatedAt": "2023-05-07T08:38:40.584Z"
              }
          },
          {
              "id": 294,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 294,
              "createdAt": "2023-05-07T08:38:40.594Z",
              "updatedAt": "2023-05-07T08:38:40.594Z",
              "NFT": {
                  "id": 294,
                  "token": "ff234db1772db848d563864e176e28db",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/Qmbt9iRdZW9DDqgF69kpSCEeoD9AZ58mVeKFHUpa4NNTp2",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.591Z",
                  "updatedAt": "2023-05-07T08:38:40.591Z"
              }
          },
          {
              "id": 295,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 31,
              "NFTId": 295,
              "createdAt": "2023-05-07T08:38:40.599Z",
              "updatedAt": "2023-05-07T08:38:40.599Z",
              "NFT": {
                  "id": 295,
                  "token": "ff233e51a351f493735de4c7e3897380",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmYVyWN8y2ggh9URwRUEkeU3wLR4roPoKqKWaCn3LiFqJ7",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.596Z",
                  "updatedAt": "2023-05-07T08:38:40.596Z"
              }
          }
      ]
  },
  {
      "id": 32,
      "name": "MutantApeYachtClub (MAYC) - 10",
      "address": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg2MGU0ZDc4NjYyOGZlYTY0NzhmNzg1YTZkN2U3MDQ3NzdjODZhN2M2In0sInRva2VuX2FkZHJlc3MiOiIweDYwZTRkNzg2NjI4ZmVhNjQ3OGY3ODVhNmQ3ZTcwNDc3N2M4NmE3YzYiLCJsaW1pdCI6MTAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJwYWdlIjoxMCwia2V5IjoiZmYwNDJlNzBmNzMxZDZjMjMzNmE0YzM1NzE0MzIyOTAiLCJ0b3RhbCI6MTk0NjksImlhdCI6MTY4MzQ0ODcxNX0.61Dw5KY74zLYmN9d3QhU3kWIP_sFhQCYwmtNVHrAZUY",
      "ArtistId": 3,
      "createdAt": "2023-05-07T08:38:39.976Z",
      "updatedAt": "2023-05-07T08:38:39.976Z",
      "RoomNFTs": [
          {
              "id": 296,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 296,
              "createdAt": "2023-05-07T08:38:40.604Z",
              "updatedAt": "2023-05-07T08:38:40.604Z",
              "NFT": {
                  "id": 296,
                  "token": "ff218777fd61bc946d2ac64d7eb2eb76",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWjUsKT4i5tXKuZBiL31aREe1VF6qaTTUiTujduorf95K",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.601Z",
                  "updatedAt": "2023-05-07T08:38:40.601Z"
              }
          },
          {
              "id": 297,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 297,
              "createdAt": "2023-05-07T08:38:40.611Z",
              "updatedAt": "2023-05-07T08:38:40.611Z",
              "NFT": {
                  "id": 297,
                  "token": "ff1f54e349b82f5c587337ec54c904f4",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmdDvDQBN3YBvZr1fda7cm7uuCxu4A9qWiyVH9UCww4XsM",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.609Z",
                  "updatedAt": "2023-05-07T08:38:40.609Z"
              }
          },
          {
              "id": 298,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 298,
              "createdAt": "2023-05-07T08:38:40.616Z",
              "updatedAt": "2023-05-07T08:38:40.616Z",
              "NFT": {
                  "id": 298,
                  "token": "ff1b791a56a06db7e691d81ceb8e1b6c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmdBn7nptnEVSZJs2ZChKqbxKY6iJPrtd2YLKU789ZcH7C",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.613Z",
                  "updatedAt": "2023-05-07T08:38:40.613Z"
              }
          },
          {
              "id": 299,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 299,
              "createdAt": "2023-05-07T08:38:40.623Z",
              "updatedAt": "2023-05-07T08:38:40.623Z",
              "NFT": {
                  "id": 299,
                  "token": "ff10ac0ca47e98d857425f9359fc816d",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQxHb2Tpjfyh35RSMw6Gw1wjT7y3ZxzR1xnq4u26VZmhY",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.619Z",
                  "updatedAt": "2023-05-07T08:38:40.619Z"
              }
          },
          {
              "id": 300,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 300,
              "createdAt": "2023-05-07T08:38:40.628Z",
              "updatedAt": "2023-05-07T08:38:40.628Z",
              "NFT": {
                  "id": 300,
                  "token": "ff104164f2a5508eaf1fb71fec8d52ac",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQoFtbFGDN98G9JzrGRzmn1o9yFDQUGxBmuZu2XVTL28y",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.626Z",
                  "updatedAt": "2023-05-07T08:38:40.626Z"
              }
          },
          {
              "id": 301,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 301,
              "createdAt": "2023-05-07T08:38:40.632Z",
              "updatedAt": "2023-05-07T08:38:40.632Z",
              "NFT": {
                  "id": 301,
                  "token": "ff081f8f7a24727547330f5eafb0257c",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmPrUqFUUzyEs48nJUPG28kfmzpb3hzPhqyR1dH3wy2RSc",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.630Z",
                  "updatedAt": "2023-05-07T08:38:40.630Z"
              }
          },
          {
              "id": 302,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 302,
              "createdAt": "2023-05-07T08:38:40.638Z",
              "updatedAt": "2023-05-07T08:38:40.638Z",
              "NFT": {
                  "id": 302,
                  "token": "ff07ec5567319ab5fe7f99ab36b3c8bc",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmQ9GwbUAaVrcBBx5RjomLWhLLjb88ph3hXHCgfVez8Dgf",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.635Z",
                  "updatedAt": "2023-05-07T08:38:40.635Z"
              }
          },
          {
              "id": 303,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 303,
              "createdAt": "2023-05-07T08:38:40.644Z",
              "updatedAt": "2023-05-07T08:38:40.644Z",
              "NFT": {
                  "id": 303,
                  "token": "ff06f439bce207cd0d9d0a5410b39699",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWKAz6CzR8oC8Vn77ufL9JGKpRvPdfJyeewjTVaoUjS2K",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.641Z",
                  "updatedAt": "2023-05-07T08:38:40.641Z"
              }
          },
          {
              "id": 304,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 304,
              "createdAt": "2023-05-07T08:38:40.648Z",
              "updatedAt": "2023-05-07T08:38:40.648Z",
              "NFT": {
                  "id": 304,
                  "token": "ff067f35301d25673a6f337e7ff28784",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWxRxzeckA7zaKsaXkCR4ZQ5mPieuYGqcrhfhPZC1rdVp",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.646Z",
                  "updatedAt": "2023-05-07T08:38:40.646Z"
              }
          },
          {
              "id": 305,
              "posX": null,
              "posY": null,
              "posZ": null,
              "RoomId": 32,
              "NFTId": 305,
              "createdAt": "2023-05-07T08:38:40.656Z",
              "updatedAt": "2023-05-07T08:38:40.656Z",
              "NFT": {
                  "id": 305,
                  "token": "ff042e70f731d6c2336a4c3571432290",
                  "title": null,
                  "description": null,
                  "imageUrl": "https://ipfs.io/ipfs/QmWfYwrA3YR4kHqFYe9zMNqcYnQz7no13ffnenAfBJ4P57",
                  "averageRating": 0,
                  "ratingLength": 0,
                  "createdAt": "2023-05-07T08:38:40.652Z",
                  "updatedAt": "2023-05-07T08:38:40.652Z"
              }
          }
      ]
  }
]

export default DataNFT