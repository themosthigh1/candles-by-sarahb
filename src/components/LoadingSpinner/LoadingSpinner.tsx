"use client";

import { RiseLoader } from "react-spinners"



const LoadingSpinner = () => {
  return (
    <section className={loadingSpinnerClasses.section}>
      <div className="m-auto">
        <div className="text-center">
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
  section: 'flex h-1/2',

}

