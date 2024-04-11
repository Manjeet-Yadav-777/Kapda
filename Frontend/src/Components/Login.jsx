import React from 'react'
import { useForm } from "react-hook-form"

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit= (data) => console.log(data);
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
         <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href="/">✕</a>
                </button>
                <h3 className='text-xl font-bold'>Login</h3> <br />

                <input type="email" name="Email" id="email" {...register("email", { required: true })} placeholder='Email' className='border-gray-900 w-[100%] p-2 rounded-md border' /><br /><br /> 


                <input type="password" name="password" id="pass" {...register("password", { required: true })} placeholder='Password' className='border-gray-900 w-[100%] p-2 border rounded-md' /><br /><br />


                <input type="submit" value="Login" className="btn hover:bg-pink-400 bg-pink-500 text-white"/> &nbsp;
                <input type="reset" value="Reset" className="btn" />



                <p className=' md:inline md:ml-24 mt-5'>Not registered ? <a href="/signup" className='text-blue-900 underline '>Sign Up</a></p>
            </form>

         </div>
        </dialog>
    </div>
  )
}

export default Login