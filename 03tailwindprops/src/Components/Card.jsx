import React from 'react'

function Card({username,btnText="Know More"}) {
    console.log(username);
    console.log(btnText);
    
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src="https://images.pexels.com/photos/32346392/pexels-photo-32346392/free-photo-of-woman-taking-photo-in-a-modern-elevator.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2 pb-4">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title 
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div >
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="inline-flex items-center justify-center w-full px-6 py-3 mt-6 font-semibold tracking-wide text-black transition-colors duration-200 transform bg-indigo-950 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
            {btnText}
        </button>
      </div >
  )
}

export default Card