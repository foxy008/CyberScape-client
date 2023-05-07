import fetchTopNFTs from '../helpers/nftsMethods'

export default function getTopNFTs() {
    return function(dispatch) {
        fetchTopNFTs()
        .then(payload => {
            dispatch({
                type: 'nfts/fetch',
                payload: payload.data
            })
        })
        .then(() => console.log('running getNFTs'))
    }
}
