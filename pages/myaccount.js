import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Myaccount = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState({ value: null });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("myuser"));

    if (user && user.token) {
      setUser(user);
      setEmail(user.email);
    }
  }, []);
  useEffect(() => {
    if (name && email && address && phone && pincode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, address, phone, pincode]);

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token);
    }
  }, [router.query]);
  const fetchData = async (token) => {
    let data = { token: token };
    console.log(data);
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
    setName(res.name);
    setAddress(res.address);
    setPhone(res.phone);
    setPincode(res.pincode);
  };
  const handleUserSubmit = async () => {
    let data = { token: user.token, address, name, pincode, phone };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    toast.success("Successfully Updated!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handlePasswordSubmit = async () => {
    let data = { token: user.token, password, npassword, cpassword };
    let res;
    if (npassword == cpassword) {
      let a = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      res = await a.json();
    } else {
      res = { success: false };
    }
    if (res.success) {
      toast.success("Successfully Updated Password!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Password Mismatch!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setPassword("");
    setCpassword("");
    setNpassword("");
  };

  const handleChange = async (e) => {
    console.log(user);
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
      console.log(setPhone);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    } else if (e.target.name == "npassword") {
      setNpassword(e.target.value);
    }
    // setTimeout(() => {

    // }, 100);
  };
  return (
    <>
      <div className="container ">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h1 className="text-3xl text-center font-bold my-8">
          Update Your Account
        </h1>
        <div className="mx-20 flex my-4 ">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email (Cant Updated)
              </label>
              {user && user.token ? (
                <input
                  readOnly
                  value={user.email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              ) : (
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              )}
            </div>
          </div>
        </div>

        <div className="px-2 w-1/2 mx-20">
          <div className=" mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              onChange={handleChange}
              value={address}
              cols={30}
              rows={2}
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-20 flex my-4 ">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                onChange={handleChange}
                value={phone}
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                onChange={handleChange}
                value={pincode}
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleUserSubmit}
          className="ml-20 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
        >
          Submit
        </button>
        <div>
          <h1 className="text-3xl text-center font-bold my-8">
            Change Password
          </h1>
          <div className="mx-20 flex my-4 ">
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="npassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  New Password
                </label>
                <input
                  onChange={handleChange}
                  value={npassword}
                  type="password"
                  id="npassword"
                  name="npassword"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="cpassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm New Password
                </label>
                <input
                  onChange={handleChange}
                  value={cpassword}
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePasswordSubmit}
          className="ml-20 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Myaccount;
