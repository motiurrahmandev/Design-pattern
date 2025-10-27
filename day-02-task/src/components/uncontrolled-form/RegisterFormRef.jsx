import { useRef } from "react";

function RegisterFormRef() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    

    const selectedRole = formRef.current.elements.role.value;
    const role = selectedRole || 'user';
    
   

    if (!firstName) {
      firstNameRef.current.focus();
      return
    }
    if (!lastName) {
      lastNameRef.current.focus();
      return
    }
    if (!email) {
      emailRef.current.focus();
      return
    }
    if (!password) {
      passwordRef.current.focus();
      return
    }

    console.log('Form submitted',{firstName,lastName,email,password,role});
    
    e.target.reset()

  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-gradient-to-br from-[#F7DDCC] via-[#F5ECE7] ">
      <div className="  bg-[#FFFFFF] rounded-2xl p-10 space-y-3 ">
        <div className="text-center bg-[#F6EDE8] p-2  ">
          <h1 className="font-semibold text-2xl ">Registration Form</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="space-y-3" ref={formRef}>
          <div className="flex gap-5 space-y-3 ">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-xl font-semibold">
                First Name
              </label>
              <input
                id="firstName"
                ref={firstNameRef}
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
                ref={lastNameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
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
              defaultChecked
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
  );
}

export default RegisterFormRef;
