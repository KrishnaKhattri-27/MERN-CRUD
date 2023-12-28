import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [sources, setSources] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSave = () => {
    // Implement logic to save data to the API
  };

  return (
    // <div>
    //   <label>Name</label>
    //   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

    //   <label>Email</label>
    //   <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

    //   <label>Phone</label>
    //   <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

    //   {/* Add radio buttons and checkboxes here */}

    //   <button onClick={handleSave}>Save</button>
    // </div>

    // <div className="h-screen flex items-center flex-col justify-center">
    //   <h1 className="text-white font-bold text-3xl mb-10">Sign Up</h1>
    //   <form class=" mx-auto w-[75%] sm:w-[50%]">
    //     <div class="grid md:grid-cols-2 md:gap-6">
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="floating_first_name"
    //           id="floating_first_name"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_first_name"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           First name
    //         </label>
    //       </div>
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="email"
    //           name="floating_email"
    //           id="floating_email"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_email"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Email address
    //         </label>
    //       </div>
    //     </div>
    //     <div class="grid md:grid-cols-2 md:gap-6">
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="tel"
    //           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //           name="floating_phone"
    //           id="floating_phone"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_phone"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Phone number (123-456-7890)
    //         </label>
    //       </div>

    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="password"
    //           name="floating_password"
    //           id="floating_password"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_password"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Password
    //         </label>
    //       </div>
    //     </div>

    //     <div>
    //       <div className="flex gap-x-8">
    //         <div class="flex items-center mb-4">
    //           <input
    //             id="country-option-1"
    //             type="radio"
    //             name="countries"
    //             value="USA"
    //             class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
    //             checked
    //           />
    //           <label
    //             for="country-option-1"
    //             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Male
    //           </label>
    //         </div>
    //         <div class="flex items-center mb-4">
    //           <input
    //             id="country-option-1"
    //             type="radio"
    //             name="countries"
    //             value="USA"
    //             class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
    //             checked
    //           />
    //           <label
    //             for="country-option-1"
    //             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Female
    //           </label>
    //         </div>
    //         <div class="flex items-center mb-4">
    //           <input
    //             id="country-option-1"
    //             type="radio"
    //             name="countries"
    //             value="USA"
    //             class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
    //             checked
    //           />
    //           <label
    //             for="country-option-1"
    //             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Others
    //           </label>
    //         </div>
    //       </div>
    //     </div>



        

    //     <div class="grid md:grid-cols-2 md:gap-6">
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="floating_company"
    //           id="floating_company"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_company"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Company (Ex. Google)
    //         </label>
    //       </div>
    //     </div>



    //     <button
    //       type="submit"
    //       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>





    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
    <form action="#" method="post">

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" pattern="[A-Za-z ]+" required />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" pattern="[A-Za-z0-9@._]+" required />
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
        <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded-md" pattern="[0-9]+" required />
      </div>

      {/* Gender Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Gender:</label>
        <div className="flex">
          <label className="mr-4">
            <input type="radio" name="gender" value="male" className="mr-2" required /> Male
          </label>
          <label className="mr-4">
            <input type="radio" name="gender" value="female" className="mr-2" required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="others" className="mr-2" required /> Others
          </label>
        </div>
      </div>

      {/* How did you hear about this? Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">How did you hear about this?</label>
        <div className="flex">
          <label className="mr-4">
            <input type="checkbox" name="source[]" value="linkedin" className="mr-2" /> LinkedIn
          </label>
          <label className="mr-4">
            <input type="checkbox" name="source[]" value="friends" className="mr-2" /> Friends
          </label>
          <label className="mr-4">
            <input type="checkbox" name="source[]" value="job_portal" className="mr-2" /> Job Portal
          </label>
          <label>
            <input type="checkbox" name="source[]" value="others" className="mr-2" /> Others
          </label>
        </div>
      </div>

      {/* City Field */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City:</label>
        <select id="city" name="city" className="w-full p-2 border border-gray-300 rounded-md">
          <option value="mumbai">Mumbai</option>
          <option value="pune">Pune</option>
          <option value="ahmedabad">Ahmedabad</option>
        </select>
      </div>

      {/* State Field */}
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State:</label>
        <input type="text" id="state" name="state" className="w-full p-2 border border-gray-300 rounded-md" list="stateList" required />
        <datalist id="stateList">
          <option value="Gujarat" />
          <option value="Maharashtra" />
          <option value="Karnataka" />
        </datalist>
      </div>

      {/* Save Button */}
      <div className="mb-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Save</button>
      </div>

    </form>
  </div>

  );
};

export default Signup;
