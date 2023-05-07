
export default function Room({ position }) {
  return (
    <>
      <a-entity position={position}>
        <a-box src="#wallTexture" position="0 1 -5" width="10" height="5" depth="0.1">
            <a-plane position="0 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1.5" height="2"></a-plane>
            <a-plane position="-3 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="1.5" height="2"></a-plane>
            <a-plane position="3 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1.5" height="2"></a-plane>
          <a-light type="point" color="blue" position="0 0.5 1" intensity="0.1"></a-light>
          <a-light type="point" color="red" position="3 0.5 1" intensity="0.05"></a-light>
          <a-light type="point" color="blue" position="-3 0.5 1" intensity="0.1"></a-light>
        </a-box>
        <a-box src="#wallTexture" position="0 1 5" width="10" height="5" depth="0.1" rotation="0 180 0">
          <a-plane position="0 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1.5" height="2"></a-plane>
          <a-plane position="-3 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VemkxUkpNY0RWeERGUkY4WVVIclc3elpieEZHQUdBeWFLZEU0bUg4M1BERA==" rotation="0 0 0" width="1.5" height="2"></a-plane>
          <a-plane position="3 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1.5" height="2"></a-plane>

          <a-light type="ambient" color="white" position="0 1 1" intensity="0.01"></a-light>
        </a-box>
        <a-box src="#wallTexture" position="5 1 0" width="5" height="5" depth="0.1" rotation="0 -90 0">
          <a-plane position="-1.5 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1.5" height="2"></a-plane>
          <a-plane position="1.5 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1.5" height="2"></a-plane>
        </a-box>
        <a-box src="#wallTexture" position="-5 1 0" width="5" height="5" depth="0.1" rotation="0 90 0">
          <a-plane position="-1.5 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hU3QxbnZTcTh5Wjd1VmpMZFFvZzhvTVd0RG56djNRS1FidmtKTlppRDk0aQ==" rotation="0 0 0" width="1.5" height="2"></a-plane>
          <a-plane position="1.5 0.5 0.1" src="https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1WM0VIZHFiZ2FhV2dwamRVZGFaNTIyck5mOTJyZ2s0OVRXd1ViSzk0cGRGbg==" rotation="0 0 0" width="1.5" height="2"></a-plane>
        </a-box>
        <a-box color="white" position="0 3.5 0" width="10" height="10" depth="0.1" rotation="90 0 0">
        </a-box>

      </a-entity>
    </>
  )
}