// import building from '../assets/3D-assets/scene.gltf'

export default function TopGallery({ nfts }) {
    return (
        <div style={{ width: 'fit', height: '480px', margin: '100px' }}>
            <a-scene embedded>
                <a-assets>
                    <a-asset-item id="my-model" src='/assets/3D-assets/gallery_minimalis/scene.gltf'></a-asset-item>
                </a-assets>
                {/* <a-entity gltf-model='#my-model'></a-entity> */}
                <a-entity position="0 0 0">
                    <a-camera position={`0 1.7 0`} rotation="0 -90 0" wasd-controls-enabled="false"></a-camera>
                </a-entity>
                <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
                <a-light type="ambient" color="white" position="0 0 0" intensity="0.3"></a-light>
                <a-gltf-model src='#my-model' position='0 0.2 0' scale="1 1 1">
                    <a-plane position="0 1.5 -4.9" src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/0x4556b73bd51256c0fba5445cb4afcbf19dbbe89006e005500b2a4805fb822652/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="3 1.5 -4.9" src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xed5af388653567af2f388e6224dc7c4b3241c544/0xbd5ff52855373e29084893644a108850c0f6a4b7a43258f67b7d24add3a29ef0/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="-3 1.5 -4.9" src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xd774557b647330c91bf44cfeab205095f7e6c367/0x6b67124658c21ac24a5ee464c6502cc6ff1232ecb91d30cab46f425b69a5b421/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>

                    <a-plane position="-4.9 1.5 0" rotation='0 90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x8821bee2ba0df28761afff119d66390d594cd280/0x2eed9f9d4ed49fb5d7646f6abf8626b62069e6f8998a65d0cb7a87b2c92d8bac/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="-4.9 1.5 3" rotation='0 90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x8821bee2ba0df28761afff119d66390d594cd280/0xfa74267fde5026f94ad395a03486ac76782754c491d84da20d6bf3b41b368426/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="-4.9 1.5 -3" rotation='0 90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x8821bee2ba0df28761afff119d66390d594cd280/0x55305db6a94940dd6aa06dde8c8e131ea2c9ba544580e80dc623e4cefa2ec41e/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>

                    <a-plane position="4.9 1.5 0" rotation='0 -90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/0x8f6f1e06ab519099634be24f32e4ab9ccd2b28259017a1228b0a4b400da74a60/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="4.9 1.5 3" rotation='0 -90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/0x82ae677c74d8a66ee01e4fb24a2bae83620fad3fef298e200223c14fd56b89f2/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>
                    <a-plane position="4.9 1.5 -3" rotation='0 -90 0' src={`http://localhost:8080/https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/0x7350075ebb406e40b7fa6fd5ddafdb6aa9311a8a66616904afd3211b3db73a38/medium.png`} width="1.5" height="2" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                        animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
                        <a-box position='0 0 -0.03' color='black' width='1.55' height='2.05' depth='0.05'>
                        </a-box>
                    </a-plane>


                </a-gltf-model>
                <a-sky color="#222"></a-sky>
                {/* <a-plane position="0 3 0" color="#555" height="10" width="10" rotation="-90 0 0"></a-plane> */}
                <a-entity environment="preset: forest; dressingAmount: 50; seed: 300; playArea: 5"></a-entity>
            </a-scene>

        </div>

    )
}
