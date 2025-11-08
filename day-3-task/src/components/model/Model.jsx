import React from 'react'

function Card({children}) {

 

  return (
    
      <div className=" relative w-70 h-96 bg-gray-300 p-6 space-y-3">
        {children}
        
      </div>
    
  )
}


function CardImage ({children}){
  return <div className="w-full ">
    {children}
  </div>
}

function CardHeader ({children}){
  return <div className="text-4xl">{children}</div>
}

function CardBody ({children}){
  return <div className="text-sm">{children}</div>
}
function CardFooter ({children}){
  return <div className="flex items-center justify-center gap-2">{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage


export default Card


