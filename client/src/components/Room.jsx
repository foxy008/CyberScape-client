
export default function Room({ position, rotation, nfts }) {
  console.log(nfts?.roomNFTs);
  return (
    <>
      <a-entity position={position} rotation={rotation}>
        <a-box src="#wallTexture" position="0 3.5 -8" width="22" height="7" depth="0.1"></a-box>
        <a-box src="#wallTexture" position="0 3.5 8" width="22" height="7" depth="0.1"></a-box>
        <a-box material="opacity: 0.5" rotation="0 90 0" position="-11 3.5 0" width="16" height="7" depth="0.1"></a-box>
        
        <a-box color="black" rotation="0 90 0" position="11 2.5 0" width="4" height="5" depth="0.1">
          <a-plane src="/assets/cyberscape-logo-black.png" position="0 0 0.08" width="4" height="5">

          </a-plane>
        </a-box>
        <a-box src="#wallTexture" position="0 7 0" width="22" height="16" depth="0.1" rotation="90 0 0">
        </a-box>
        <a-box src="" position="0 2.5 -7.5" width="13" height="4" depth="0.1">
          <a-plane position="0 0 0.1" src='' rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="-4 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="4 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-light type="point" color="blue" position="0 0.5 1" intensity="0.1"></a-light>
          <a-light type="point" color="red" position="3 0.5 1" intensity="0.05"></a-light>
          <a-light type="point" color="blue" position="-3 0.5 1" intensity="0.4"></a-light>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>
        <a-box src="" position="0 2.5 7.5" width="13" height="4" depth="0.1" rotation="0 180 0">
          <a-plane position="0 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="-4 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="4 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-light type="ambient" color="white" position="0 1 1" intensity="0.1"></a-light>
        </a-box>
        <a-box position="5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="0 0 -0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 180 0" width="2.4" height="3"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>
        <a-box src="" position="-5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="2.4" height="3"></a-plane>
          <a-plane position="0 0 -0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 180 0" width="2.4" height="3"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>


      </a-entity>
    </>
  )
}