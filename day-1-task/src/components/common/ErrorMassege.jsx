import React from 'react'

function ErrorMessage({error,onRetry}) {
  return (
     <div className="error-container mx-auto text-center ">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={onRetry}>Try Again</button>
      </div>
  )
}

export default ErrorMessage