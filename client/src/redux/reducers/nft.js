const initialState = {
  nfts: [],
  nft: [],
}

const nftReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NFTS':
      return {
        ...state,
        nfts: action.payload,
      }
    case 'CREATE_NFT':
      return {
        nfts: [...state.nfts, action.payload],
      }
    case 'GET_NFT':
      return {
        ...state,
        nft: action.payload,
      }
    case 'DELETE_NFT':
      return {
        nfts: [state.posts.filter((post) => post.id !== action.payload)],
      }

    default:
      return state
  }
}

export default nftReducer
