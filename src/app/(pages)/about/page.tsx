import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle title={'About'}/>
      <LoadingSpinner/>
    </div>
  )
}

export default page
