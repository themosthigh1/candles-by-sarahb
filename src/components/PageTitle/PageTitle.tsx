import React, { FC } from 'react'


interface PageTitleProps {
    title: string
}

const PageTitle:FC<PageTitleProps> = (props) => {
const {title} = props

  return (
    <section className={sectionClassNames.section}>
        <div className={sectionClassNames.trending}>
            <h2 className={sectionClassNames.trendingTitle}>
                {title}
            </h2>
        </div>
    </section>
  )
}

export default PageTitle

const sectionClassNames = {
    section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-black mt-20",
    trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
    trendingTitle: "text-2xl md:text-4xl mb-3 md:mb-5",
  };

