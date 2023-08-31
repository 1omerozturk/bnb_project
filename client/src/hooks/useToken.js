import React, { useEffect } from 'react'

const useToken = () => {
    const [token, setToken] = React.useState("")

    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem('auth')))
    },[])
  return [token]
}

export default useToken

