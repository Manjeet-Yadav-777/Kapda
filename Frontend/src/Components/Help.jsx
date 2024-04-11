import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form"

function Help() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data);
  return (
    <>

        <Navbar/>

         <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='text-center h-screen w-full'>
                <div className='flex flex-col justify-center align-middle w-full'>
                <h1 className='text-6xl font-semibold mt-20'>How can We <span className='text-pink-500'>Help You</span></h1>
                <p className='text-xl mt-6'>Here You Can Put Your Query WE will Solve It as soon as possible</p>
                
                </div>
                
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <div className='w-[400px] md:w-[1250px] h-[300px]  flex flex-col items-center justify-center mt-5'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="email" {...register("email", { required: true })} className="grow w-[300px] md:w-[500px]" placeholder="Email" />
                </label><br /><br />

                <label className="input input-bordered flex ">
                    <input type="textarea" {...register("textarea", { required: true })} className="grow w-[300px] md:w-[500px]" placeholder="message" />
                </label>


                <div className='flex mt-5 justify-start gap-3'>
                <input type="submit" value="Send" className="btn hover:bg-pink-400 bg-pink-500 text-white"/> &nbsp;
                <input type="reset" value="Reset" className="btn" />

                </div>




                </div>
                </form>
            </div>
         </div>
    </>
  )
}

export default Help