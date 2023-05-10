import fetchTopNFTs from '../helpers/nftsMethods'

export default function getTopNFTs(query) {
    return function(dispatch) {
        fetchTopNFTs(query)
        .then(payload => {
            console.log(payload.data);
            dispatch({
                type: 'nfts/fetch',
                payload: payload.data
            })
        })
        // .then(() => console.log('running getNFTs'))
    }
}
