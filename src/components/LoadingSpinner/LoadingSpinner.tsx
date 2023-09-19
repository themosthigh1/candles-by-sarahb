"use client";

import { RiseLoader } from "react-spinners"



const LoadingSpinner = () => {
  return (
    <section className={loadingSpinnerClasses.section}>
        <RiseLoader 
            color="#fde047"
            loading
        />
    </section>
  )
}

export default LoadingSpinner

const loadingSpinnerClasses = {
  section: 'container, bg-black'
}

