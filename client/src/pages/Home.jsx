
export default function HomePage() {
    <>
        <a-scene fog stats>
            <a-assets>
                <a-asset-item id="my-model" src="./assets/laundry_props/scene.gltf"></a-asset-item>
                <a-asset-item id="my-car" src="./assets/car/scene.gltf"></a-asset-item>
                <img
                    id="skyTexture"
                    src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />
                <img
                    id="groundTexture"
                    src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
            </a-assets>
            <a-sky src="#skyTexture"></a-sky>
            <a-plane src="#groundTexture" rotation="-90 0 0" width="1000" height="1000"></a-plane>
            <a-entity gltf-model="#my-model" scale="1 1 1" position="0 0 -30" rotation="0 -90 0"></a-entity>
            <a-entity gltf-model="#my-car" scale="1 1 1" position="0 0 0" rotation="0 0 0"></a-entity>
        </a-scene>
    </>
}
