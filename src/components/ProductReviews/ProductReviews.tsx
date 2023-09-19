'use client'

const ProductReviews = () => {

  const blockquoteText = [
   {text: 
      '"I bought the Sweet Honey B candle and loved it! I will definitely be ordering more!"',
    person: '-Donna M.'
    },
   {text: 
      '“I loved the free sample I got and ordered one of each scent. Four words: I Love Them All!”',
    person: ''
   },
   {text: 
      '“Will definitely be buying frequently from them.”',
    person: ''
   },
  ]
  return (
    <section className={reviewClassNames.reviewSection}>
        {blockquoteText.map((blocktext, i ) => (
          i < 1 ? (
            <div key={i} className={reviewClassNames.sectionContainer}>
              <blockquote className={reviewClassNames.reviewText}>
                {blocktext.text}
              </blockquote>
              <h3 className="flex justify-end font-semibold mt-2">
                {blocktext.person}
              </h3>
            </div>):("")
        ))}
    </section>
  )
}

export default ProductReviews

const reviewClassNames = {
  reviewSection: 'flex justify-center mx-auto py-6 text-black bg-yellow-300',
  sectionContainer: 'container, py-6 px-6',
  reviewText: 'text-2xl text-gray-900  mx-auto',

}
  

