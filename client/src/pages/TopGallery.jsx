// import building from '../assets/3D-assets/scene.gltf'

export default function TopGallery({ nfts }) {
    return (

        <a-scene>
            <a-assets>
                <a-asset-item id="my-model" src='/assets/3D-assets/scene.gltf'></a-asset-item>
            </a-assets>
            {/* <a-entity gltf-model='#my-model'></a-entity> */}
            <a-entity position="0 1.6 0">
                <a-camera></a-camera>
            </a-entity>
            <a-gltf-model src='#my-model' scale="0.5 0.5 0.5"></a-gltf-model>
            <a-sky color="#222"></a-sky>
            <a-plane position="0 1 0" color="#555" height="10" width="10" rotation="-90 0 0"></a-plane>
            {/* <a-entity environment="preset: forest; dressingAmount: 50; seed: 300; playArea: 5"></a-entity> */}
        </a-scene>

    )
}
