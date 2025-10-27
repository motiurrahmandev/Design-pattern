import React from 'react'

function RegisterFormNoRef() {

  const handleSubmit= (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)
  
    const data = Object.fromEntries(formData.entries())

    console.log(data);
    
    e.target.reset();
    

  }

  return (
     <div className="w-full flex items-center justify-center h-screen bg-gradient-to-br from-[#F7DDCC] via-[#F5ECE7] ">
      <div className="  bg-[#FFFFFF] rounded-2xl p-10 space-y-3 ">
        <div className="text-center bg-[#F6EDE8] p-2  ">
          <h1 className="font-semibold text-2xl ">Registration Form</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-5 space-y-3 ">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-xl font-semibold">
                First Name
              </label>
              <input
                id="firstName"
              
                name="firstName"
                type="text"
                className="border  p-2 rounded-sm "
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="text-xl font-semibold">
                Last Name
              </label>
              <input
                name="lastName"
              
                id="lastName"
                type="text"
                className="border  p-2 rounded-sm "
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              
              name="email"
              id="email"
              type="text"
              className="border  p-2 rounded-sm "
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-xl font-semibold">
              Password
            </label>
            <input
             
              type="text"
              name="password"
              id="password"
              className="border  p-2 rounded-sm "
              placeholder="Password"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold mb-5">Select Your Role</h3>

            <input
              type="radio"
              id="user"
              name="role"
             
              value="user"
            />
            <label htmlFor="user">User</label>
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              className="ml-5"
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className=" text-center  hover">
            <button
              type="submit"
              className="text-center bg-[#E59F6E] text-xl px-30 mt-10 rounded-xl py-2"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterFormNoRef