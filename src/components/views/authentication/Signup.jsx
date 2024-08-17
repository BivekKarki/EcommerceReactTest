import React, { useState } from 'react'
import Button from '../../utilities/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
    agree_terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleDataChange = (e) => {
    const { name, value} = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = 'First name is required.';
    if (!formData.last_name) newErrors.last_name = 'Last name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone_number) {
      newErrors.phone_number = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone number must be 10 digits long.';
    }
    if (!formData.password) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
    
    if (!formData.confirm_password) newErrors.confirm_password = 'Password is required.';
    else if (formData.confirm_password.length < 6) newErrors.confirm_password = 'Password must be at least 6 characters long.';

    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match.';
    }

    if (!formData.agree_terms) {
      newErrors.agree_terms = 'You must agree to the terms and conditions.';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(errors);
    if (validate()) {
      // Form is valid, proceed with submission
      console.log(formData);
    }else{
      console.log("Somethings wrong")
    }
  };


  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-y-scroll h-dvh w-full">
        <div className="hidden md:flex md:w-1/2 bg-cover bg-gray-400 h-dvh justify-center items-center ">
          <img src='./images/signupImg.png' className='w-5/6 ' alt='image'/>
        </div>
        <div className="w-full p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-gray-900 text-2xl font-semibold ">Sign up</h1>
          <p className="opacity-80 text-[#303030] text-sm font-normal ">Let’s get you all set up so you can access your personal account.</p>
          
          <form onSubmit={handleSignupSubmit}>
            <div className="mt-4 flex sm:justify-between flex-col sm:flex-row gap-4">
              
              <div className="relative sm:w-1/2">
              <input
                  type="text"
                  id="first"
                  name='first_name'
                  value={formData.first_name}
                  onChange={handleDataChange}
                  className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                />
                <label
                  htmlFor="first"
                  className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                >
                  Firstname
                </label>
                <div className="h-1">
                  {errors?.first_name && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.first_name}
                    </p>
                  )}
                </div>
              </div>
              
                <div className="relative sm:w-1/2">
                <input
                    type="text"
                    id="lastname"
                    name='last_name'
                    value={formData.last_name}
                  onChange={handleDataChange}
                    className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                  >
                    Lastname
                  </label>
                  <div className="h-1">
                  {errors?.last_name && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.last_name}
                    </p>
                  )}
                </div>
                </div>
              </div>

            <div className="mt-4 ">
              <div className="relative w-full">
                <input
                    type="text"
                    id="phone"
                    name='phone_number'
                    value={formData.phone_number}
                    onChange={handleDataChange}
                    className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                  >
                    Phone number
                  </label>
                  <div className="h-1">
                  {errors?.phone_number && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
            </div>    
            
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
            
            <div className="mt-4 flex sm:justify-between flex-col sm:flex-row gap-4">
              
              <div className="relative sm:w-1/2">
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
              
                <div className="relative sm:w-1/2">
                <input
                    type="password"
                    id="confirm_password"
                    name='confirm_password'
                    value={formData.confirm_password}
                    onChange={handleDataChange}
                    className="peer border border-gray-600 rounded-sm w-full  mt-2 p-2  transition-all duration-300 active:outline-1 outline-black "
                  />
                  <label
                    htmlFor="confirm_password"
                    className="absolute -top-0.5 left-4 px-1 text-sm text-gray-600 bg-white transition-all duration-300 pointer-events-none peer-active:text-black peer-focus:text-black"
                  >
                    Confirm_password
                  </label>
                  <div className="h-1">
                  {errors?.confirm_password && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.confirm_password}
                    </p>
                  )}
                </div>
                </div>
            </div>

            <div className="mt-6 flex gap-1 text-zinc-900 text-sm">
                <input type="checkbox" className="accent-emerald-500" name="agree_terms" id='agree_terms' />
                <label htmlFor="agree_terms" className='text-[#303030] text-sm font-medium'>I agree to all the <a>Terms</a> and <a>Privacy Policies</a></label>
            </div>
            <div className="h-1">
                  {errors?.agree_terms && (
                    <p className="text-xs text-red-500 p-0">
                      {errors.agree_terms}
                    </p>
                  )}
                </div>
            
            

            <Button type='submit' children="create account" className="mt-6 w-full hover:bg-[#223a6c]"/>
          </form>

          <div className="mt-4 flex gap-1 text-zinc-900 text-sm justify-center">
            <p className='text-[#303030] text-sm font-medium'>Already have an account?<button onClick={()=>navigate("/login")}>Login</button> </p>  
          </div>

          <div className="mt-4 text-center">
            <div class="relative flex items-center my-4">
              <div class="flex-grow border-t border-gray-300"></div>
              <p class="text-center font-bold mx-3 mb-0 text-gray-500">OR Signup with</p>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2">
                Facebook
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2">
                Google
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
