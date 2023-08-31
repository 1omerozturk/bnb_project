import axios from 'axios'
import { toast } from 'react-toastify'

export const getNftsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:5000/getNfts')
    //console.log(data)
    await dispatch({ type: 'GET_NFTS', payload: data })
  } catch (error) {
    toast(error.response.data.msg, {
      position: 'top-right',
      autoClose: 5000,
    })
  }
}

export const createNftAction = (nftData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'http://localhost:5000/createNft',
      nftData,
    )

    dispatch({ type: 'CREATE_NFT', payload: data })
  } catch (error) {
    toast(error.response.data.msg, {
      position: 'top-right',
      autoClose: 5000,
    })
  }
}

export const getNftAction = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getNft?id=${id}`)
    dispatch({ type: 'GET_NFT', payload: response.data })
  } catch (error) {
    toast(error.response.data.msg, {
      position: 'top-right',
      autoClose: 5000,
    })
  }
}

export const deleteNftAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/deleteNft/${id}`)

    dispatch({ type: 'DELETE_NFT', payload: id })
  } catch (error) {
    toast(error.response.data.msg, {
      position: 'top-right',
      autoClose: 5000,
    })
  }
}
