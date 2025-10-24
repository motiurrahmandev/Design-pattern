import React from 'react'

function Loading({message}) {
  return (
     <div className="loading-container mx-auto text-center mt-20">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
  )
}

export default Loading