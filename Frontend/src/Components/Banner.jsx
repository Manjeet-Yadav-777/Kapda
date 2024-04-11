import React from 'react'
import banner from '../../public/banner.jpg'

function Banner() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
                <div className='space-y-8'>
                    <h1 className='text-4xl font-bold'>Fahion is the armor to survive the reality of <span className='text-pink-500'>everyday life!!!</span></h1>

                    <p className='text-xl'>Fashion is a form of self-expression and personal style, allowing individuals to showcase their personality, creativity, and cultural influences through their clothing choices</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <button className="btn btn-secondary mt-6">Send Your Gmail</button>

            </div>


            <div className='pt-[50px] flex justify-center  order-1 md:order2 w-full md:w-1/2 '>
                <img src= "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8580.jpg?t=st=1712749090~exp=1712752690~hmac=9c93a4cf99f486448f7b71e47a86bb626836cdb0c2631f05849fbd3cb329fa4a&w=740" className='h-92 w-92 ' alt="banner" />
            </div>
        </div>
    </>
)
}

export default Banner