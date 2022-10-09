import React from 'react'
import QuoteModal from 'new_component/Quotation/QuoteModal'

const QuoteCard = ({quote}:any) => {
  return (
    <div className='block flex gap-6 px-4 py-2  bg-gray-200 sjadpw-md rounded-lg'>
      
       <div className=''>From {quote.from_port}</div>
       <div className=''>To {quote.to_port}</div>
       <span className='font-bold'>USD {quote.sum_sell }</span >
    </div>
  )
}

export default QuoteCard