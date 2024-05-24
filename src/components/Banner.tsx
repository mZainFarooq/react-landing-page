import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className='bg-green-200 w-screen mt-12 font-semibold p-4  flex justify-around items-center'>
      <div>
        <h1 className='text-2xl  '>
            Product Name
        </h1>
        <p className='text-sm'>Product decription</p>
        <h2 className='text-lg'>$ <del>900</del></h2>
        <Button/>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Banner
