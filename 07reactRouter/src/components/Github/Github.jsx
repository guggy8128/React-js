import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { data } from 'react-router-dom'

function Github() {
    const data = useLoaderData()



    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/guggy8128')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // })

  return (
    <div className='text-3xl p-4 text-white bg-gray-600 text-center'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='Git picture ' className='rounded' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/guggy8128')
    return response.json()
}