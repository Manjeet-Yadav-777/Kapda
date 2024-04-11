import React from 'react'
import { useForm } from "react-hook-form"

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data);
  return (
    <div className='flex h-screen justify-center items-center'>
        <div id="my_modal_3" className="border p-10 shadow-2xl rounded-md">
         <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                <button href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href="/">✕</a>
                </button>
                <h3 className='text-lg font-bold'>Sign Up</h3> <br />

                <input type="text" name="Name" id="name" {...register("name", { required: true })} placeholder='Name' className='border-gray-900 w-[100%] p-2 rounded-md border' /><br /><br /> 

                <input type="email" name="Email" id="email" {...register("email", { required: true })} placeholder='Email' className='border-gray-900 w-[100%] p-2 rounded-md border' /><br /><br /> 


                <input type="password" name="password" {...register("password", { required: true })} id="pass" placeholder='Password' className='border-gray-900 w-[100%] p-2 border rounded-md' /><br /><br />

                <input type="submit" value="Sign Up" className="btn hover:bg-pink-400 bg-pink-500 text-white"/> &nbsp;
                <input type="reset" value="Reset" className="btn" />



                <p className=' md:inline md:ml-24 mt-5'>Have an account ? <a href="/" className='text-blue-900 underline '>Login</a></p>
            </form>

         </div>
        </div>
    </div>
  )
}

export default Signup