import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = ({passdata}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [hearAbout, setHearAbout] = useState([]);
  // const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    hearAbout: "",
    state: "",
    city: "",
  });

  const stateValues = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleSave = () => {
    setUserData({
      name: name,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
      hearAbout: hearAbout,
      state: states,
      city: selectedCity,
    });
  };

  useEffect(()=>{
    passdata(userData,"signup");
  },[userData])
 


  async function getCitiesInState(country, state) {
    const url = "https://countriesnow.space/api/v0.1/countries/state/cities";
    const data = {
      country,
      state,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
        // Request failed with status: ${response.status},
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const fetchCities = async (country, state) => {
    try {
      const response = await getCitiesInState(country, state);

      if (!response.error) {
        setCities(response.data);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (states) {
      fetchCities("India", states);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states]);

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = stateValues?.filter((state) =>
      state.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (value) => {
    setStates(value);
    setInputValue(value);
    setSuggestions([]);
  };

  const handlecity=(e)=>{
    console.log(e.target.value);
  }

  return (
   <div className="h-screen flex items-center">
     <div className="w-[50%] px-8 mx-auto bg-slate-600 py-10 rounded-lg">
      <form>
        <div className="flex gap-x-4 justify-center">
          <div className="mb-4 w-1/2">
          <label className="text-white space-y-4 font-mabry">
         Name
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/2">
          <label className="text-white space-y-4 font-mabry">
          Phone
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-x-4 justify-center">
          <div className="mb-4 w-1/2">
          <label className="text-white space-y-4 font-mabry">
          Email
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/2">
          <label className="text-white space-y-4 font-mabry">
          Password
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
        <label className="text-white space-y-4 font-mabry">
Gender            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
          <div className="flex gap-x-6">
            <div>
              <input
                type="radio"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <label className="ml-2" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <label className="ml-2" htmlFor="female">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="others"
                value="others"
                checked={gender === "others"}
                onChange={() => setGender("others")}
              />
              <label className="ml-2" htmlFor="others">
                Others
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
       
          <label className="text-white space-y-4 font-mabry">
          How did you hear about this?
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
          <div className="flex gap-x-4 ">
            <div>
              <input
                type="checkbox"
                id="linkedin"
                value="linkedin"
                checked={hearAbout.includes("linkedin")}
                onChange={() => setHearAbout((prev) => [...prev, "linkedin"])}
              />
              <label className="ml-2" htmlFor="linkedin">
                LinkedIn
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="friends"
                value="friends"
                checked={hearAbout.includes("friends")}
                onChange={() => setHearAbout((prev) => [...prev, "friends"])}
              />
              <label className="ml-2" htmlFor="friends">
                Friends
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jobPortal"
                value="jobPortal"
                checked={hearAbout.includes("jobPortal")}
                onChange={() => setHearAbout((prev) => [...prev, "jobPortal"])}
              />
              <label className="ml-2" htmlFor="jobPortal">
                Job Portal
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="otherscb"
                value="others"
                checked={hearAbout.includes("others")}
                onChange={() => setHearAbout((prev) => [...prev, "others"])}
              />
              <label className="ml-2" htmlFor="others">
                Others
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-x-4 justify-center">
        <div className="w-1/2">
          <label className="text-white space-y-4 font-mabry">
            State
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type to search..."
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
            />

            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-[200px] overflow-y-scroll rounded">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="w-1/2 font-mabry">
          <label className="text-white space-y-4 font-mabry">
            Cities
            <span className="text-red-500 m-2 font-mabry">*</span>
          </label>
          <select
            className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
            id="country-district"
            name="district"
            onChange={(e)=>setSelectedCity(e.target.value) }
          >
            <option value="" className="w-1/2" disabled selected>
              Select district
            </option>
            {cities.map((name, index) => (
              <option className="w-1/2" key={index} value={name} 
              >
                {name}
              </option>
            ))}
          </select>
        </div>
        </div>



        <div className="mb-4 text-center">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave}
          >
           Register
          </button>
        </div>
        <div className="text-center">
          <h4 className="text-white font-mabry font-semibold">Alerady an account? <Link to="/login" className="text-blue-500">Log-In</Link></h4>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Signup;
