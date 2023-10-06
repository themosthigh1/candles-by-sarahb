import React from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const PagePlaceHolder = () => {
  return (
    <>
      <div className='px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black flex justify-center'>
          <h2 className="text-xl font-semibold">Content coming soon.</h2>
      </div>
      <LoadingSpinner/>
    </>
  )
}

export default PagePlaceHolder