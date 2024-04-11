import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'

function Fash() {
  return (
    <>
      <div className='max-h-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'> We are delighted to have you <span className='text-pink-500'>Here! :) </span> </h1>

          <p className='mt-12 font-[600]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero, exercitationem illum optio minima nisi ea voluptatibus praesentium. Unde facere beatae saepe. Corrupti facilis, praesentium qui iste quam recusandae mollitia!
            Eveniet, possimus. Quis corporis cupiditate quia perferendis minima vel, recusandae labore magnam iste beatae dicta totam officia vitae eum ea error possimus, non placeat tempora nesciunt. Possimus facilis ex doloribus?
          </p>
        </div>

        <div className='flex flex-wrap md:ml-[80px] gap-16 mt-10'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Fash