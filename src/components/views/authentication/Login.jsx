
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../utilities/Button';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =useState({
    email: '',
    password: '',
    remember_me: false,
  });

  const handleDataChange = (e)=> {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({});

  const validateForm = ()=> {
    const newErrors = {};
    if(!formData.email) newErrors.email = "Email cannot be empty";
    if(!formData.password) newErrors.password = "Password cannot be empty";

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const handleLoginSubmit = (e)=> {
    e.preventDefault();

    if(validateForm()){
      console.log("submitted data",formData);
    }else {
      console.log("errors", errors);
    }
    
  }
  
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-y-scroll h-dvh w-full">
        <div className="hidden md:flex md:w-1/2 bg-cover bg-gray-100 h-dvh justify-center items-center ">
          <img src='./images/login.svg' className='w-5/6 ' alt='image'/>
        </div>
        <div className="w-full px-8 sm:px-16  lg:px-28 md:w-1/2 flex flex-col justify-center sm:py-8 pt-32 ">
          <h1 className="text-gray-900 text-2xl font-semibold ">Login</h1>
          <p className="opacity-80 text-[#303030] text-sm font-normal ">Login to access your account</p>
          
          <form onSubmit={handleLoginSubmit}>   
            
            <div className="mt-4 ">
              <div className="relative w-full">
                <input
                    type="text"
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={handleDataChange}
                    className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                  />
                  <label
                    htmlFor="email"
                    className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                  >
                    Email
                  </label>
                  <div className="h-1">
                  {errors?.email && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>    
            
            <div className="mt-4 ">
              <div className="relative w-full">
              <input
                  type="password"
                  id="password"
                  name='password'
                  value={formData.password}
                  onChange={handleDataChange}
                  className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                />
                <label
                  htmlFor="password"
                  className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                >
                  Password
                </label>
                <div className="h-1">
                  {errors?.password && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
            </div>    

            <div className="mt-4 ">
              <div className='relative flex justify-between'>
                <div className="flex gap-1 items-center text-zinc-900 text-sm">
                  <input type="checkbox" className="accent-emerald-500" name="remember_me" id='remember_me' />
                  <label htmlFor="remember_me" className='text-[#303030] text-sm font-medium'>Remember me</label>
                </div>

                <div className=" text-zinc-900 text-sm">
                  <Button className='border-0 bg-transparent text-[#204080]' onClick={()=>handleDataChange}>
                    Forget password
                  </Button>
                </div>
              </div>
            </div>


            <Button type='submit' children="create account" className="mt-6 w-full hover:bg-[#223a6c]"/>
          </form>

          <div className="mt-4 flex gap-1 text-zinc-900 text-sm justify-center">
            <p className='text-[#303030] text-sm font-medium'>Don't have an account?<button onClick={()=>navigate("/login")}>Signup</button> </p>  
          </div>

          <div className="mt-4 text-center pb-8">
            <div className="relative flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="text-center font-bold mx-3 mb-0 text-gray-500">OR Login with</p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-2  mt-8 w-full">
              <Button className="bg-transparent text-white px-4 py-2 rounded-sm  w-full sm:w-1/2 border border-black">
                <img src='./images/facebook.svg' alt='' className='w-full h-6' />
              </Button>
              <Button className="bg-transparent text-white px-4 py-2 rounded-sm  w-full sm:w-1/2 border border-black">
                <img src='./images/google.svg' alt='' className='w-full h-6'/>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login