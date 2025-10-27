import { useState,useRef } from "react";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });

  const firstNameRef= useRef()
  const lastNameRef= useRef()
  const emailRef= useRef()
  const passwordRef= useRef()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.firstName){
      firstNameRef.current.focus()
      return
    }
    if(!form.lastName){
      lastNameRef.current.focus()
      return
    }
    if(!form.email){
      emailRef.current.focus()
      return
    }
    if(!form.password){
      passwordRef.current.focus()
      return
    }
   
    console.log(form);
    setForm({ firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",})
  };

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
                ref={firstNameRef}
                onChange={handleChange}
                name="firstName"
                type="text"
                className="border  p-2 rounded-sm "
                placeholder="First Name"
                value={form.firstName}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="text-xl font-semibold">
                Last Name
              </label>
              <input
                name="lastName"
                ref={lastNameRef}
                id="lastName"
                type="text"
                className="border  p-2 rounded-sm "
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
            ref={emailRef}
              name="email"
              id="email"
              type="text"
              className="border  p-2 rounded-sm "
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-xl font-semibold">
              Password
            </label>
            <input
            ref={passwordRef}
              type="text"
              name="password"
              id="password"
              className="border  p-2 rounded-sm "
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold mb-5">Select Your Role</h3>

            <input
              type="radio"
              id="user"
              name="role"
              onChange={handleChange}
              checked={form.role === 'user'}
              value="user"
            />
            <label htmlFor="user">User</label>
            <input
              type="radio"
              id="admin"
              onChange={handleChange}
              checked={form.role === 'admin'}
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
  );
}

export default Signup;


