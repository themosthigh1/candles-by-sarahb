import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle title={'About'}/>
      <div className={pageClassNames.pageSection}>
        <div className={pageClassNames.pageContainer}>

        </div>
      </div> 
    </div>
  )
}

export default page

const pageClassNames = {
  pageSection: 'text-white',
  pageContainer: 'flex items-center justify-center my-24',
}