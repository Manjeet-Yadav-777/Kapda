import React from 'react'

function Cards({item}) {
  return (
    <>
        <div className=''>
            <div className="card w-[400px] h-[500px] bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure><img src={item.image} alt="Shoes" /></figure>
                 <div className="card-body">
                    <h2 className="card-title">
                            {item.name}
                        <div className="badge badge-secondary">{item.categroy}</div>
                     </h2>
                     <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions flex justify-between align-bottom">
                        <div className="p-6 font-bold"><strike>{item.origional}₹ &nbsp;</strike> {item.Price}₹</div> 
                        <button className="btn btn-secondary mt-6">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards