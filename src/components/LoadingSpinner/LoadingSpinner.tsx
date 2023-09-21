"use client";

import { RiseLoader } from "react-spinners"



const LoadingSpinner = () => {
  return (
    <section className={loadingSpinnerClasses.section}>
      <div>
        <div>
          <RiseLoader 
              color="#fde047"
              loading
          />
        </div>
      </div>
    </section>
  )
}

export default LoadingSpinner

const loadingSpinnerClasses = {
  section: 'flex justify-center mt-56',

}

