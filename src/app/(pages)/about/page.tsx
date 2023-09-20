import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle title={'About'}/>
      <div className={pageClassNames.pageSection}>
        <div className={pageClassNames.div1}>
          Div 1
        </div>
        <div className={pageClassNames.div2}>
          Div 2
        </div>
      </div>
    </div>
  )
}

export default page

const pageClassNames = {
  pageSection: 'text-white',
  div1: 'bg-red-500 p-6 m-2',
  div2: 'bg-blue-500 p-6',
}