// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   AiOutlineShoppingCart,
//   AiFillCloseCircle,
//   AiFillPlusCircle,
//   AiFillMinusCircle,
// } from "react-icons/ai";
// import Head from "next/head";
// import Script from "next/script";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { connect } from "mongoose";
// const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [address, setAddress] = useState("");
//   const [disabled, setDisabled] = useState(true);
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [user, setUser] = useState({ value: null });
//   useEffect(() => {
//     const myuser = JSON.parse(localStorage.getItem("myuser"));
//     // if (user) {
//     //   setUser({ value: myuser.token, email: myuser.email });
//     // }
//     if (myuser && myuser.token) {
//       setUser(myuser);
//       setEmail(myuser.email);
//       fetchData(myuser.token);
//     }
//   }, []);

//   useEffect(() => {
//     if (name && email && address && phone && pincode) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   }, [name, email, address, phone, pincode]);
//   const fetchData = async (token) => {
//     let data = { token: token };
//     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     let res = await a.json();
//     setName(res.name);
//     setAddress(res.address);
//     setPhone(res.phone);
//     setPincode(res.pincode);
//     getPincode(res.pincode);
//   };
//   const getPincode = async (pin) => {
//     let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
//     let pinJson = await pins.json();
//     if (Object.keys(pinJson).includes(pin)) {
//       setState(pinJson[pin][1]);
//       setCity(pinJson[pin][0]);
//     } else {
//       setState("");
//       setCity("");
//     }
//   };
//   const handleChange = async (e) => {
//     if (e.target.name == "name") {
//       setName(e.target.value);
//     } else if (e.target.name == "email") {
//       setEmail(e.target.value);
//     } else if (e.target.name == "address") {
//       setAddress(e.target.value);
//     } else if (e.target.name == "phone") {
//       setPhone(e.target.value);
//     } else if (e.target.name == "pincode") {
//       setPincode(e.target.value);
//       if (e.target.value.length == 6) {
//         getPincode(e.target.value);
//       }
//     } else {
//       setState("");
//       setCity("");
//     }
//     // setTimeout(() => {

//     // }, 100);
//   };
//   const initiatePayment = async () => {
//     let oid = Math.floor(Math.random() * Date.now());
//     const data = { cart, subTotal, oid, email, name, address, pincode, phone };
//     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     let txnRes = await a.json();
//     if (txnRes.success) {
//       let txnToken = txnRes.txnToken;

//       var config = {
//         root: "",
//         flow: "DEFAULT",
//         data: {
//           orderId: oid /* update order id */,
//           token: txnToken /* update token value */,
//           tokenType: "TXN_TOKEN",
//           amount: subTotal /* update amount */,
//         },
//         handler: {
//           notifyMerchant: function (eventName, data1) {
//             console.log("notify Merchant handler function called");
//             console.log("eventName => ", eventName);
//             console.log("data => ", data);
//           },
//         },
//       };
//       window.Paytm.CheckoutJS.init(config)
//         .then(function onSuccess() {
//           window.Paytm.CheckoutJS.invoke();
//         })
//         .catch(function onError(error) {
//           console.log("error => ", error);
//         });
//     } else {
//       console.log(txnRes.error);
//       if (txnRes.clearCart) {
//         clearCart();
//       }
//       toast.error(txnRes.error, {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };
//   return (
//     <div className="container m-auto ">
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width,:height=device-height, initial-scale=1.0, maximum-scale=1.0"
//         />
//       </Head>
//       <Script
//         type="application/javascript"
//         crossorigin="anonymous"
//         src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
//       />
//       <h1 className="font-bold text-3xl my-8 text-center ">Checkout</h1>
//       <h2 className="font-bold text-xl mx-20">1. Delivery Details</h2>
//       <div className="mx-20 flex my-4 ">
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//               Name
//             </label>
//             <input
//               onChange={handleChange}
//               value={name}
//               type="text"
//               id="name"
//               name="name"
//               className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//               Email
//             </label>
//             {user && user.token ? (
//               <input
//                 readOnly
//                 value={user.email}
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             ) : (
//               <input
//                 onChange={handleChange}
//                 value={email}
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="px-2 w-1/2 mx-20">
//         <div className=" mb-4">
//           <label htmlFor="address" className="leading-7 text-sm text-gray-600">
//             Address
//           </label>
//           <textarea
//             onChange={handleChange}
//             value={address}
//             cols={30}
//             rows={2}
//             type="text"
//             id="address"
//             name="address"
//             className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           ></textarea>
//         </div>
//       </div>
//       <div className="mx-20 flex my-4 ">
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
//               Phone
//             </label>
//             <input
//               onChange={handleChange}
//               value={phone}
//               type="text"
//               id="phone"
//               name="phone"
//               className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label
//               htmlFor="pincode"
//               className="leading-7 text-sm text-gray-600"
//             >
//               Pincode
//             </label>
//             <input
//               onChange={handleChange}
//               value={pincode}
//               type="text"
//               id="pincode"
//               name="pincode"
//               className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mx-20 flex my-4 ">
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label htmlFor="state" className="leading-7 text-sm text-gray-600">
//               State
//             </label>
//             <input
//               onChange={handleChange}
//               value={state}
//               type="text"
//               id="state"
//               name="state"
//               className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <div className="px-2 w-1/2">
//           <div className=" mb-4">
//             <label htmlFor="city" className="leading-7 text-sm text-gray-600">
//               District
//             </label>
//             <input
//               onChange={handleChange}
//               value={city}
//               type="text"
//               id="city"
//               name="city"
//               className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//       </div>
//       <h2 className="font-semibold text-xl mx-20">
//         2. Review Cart Items & Pay
//       </h2>
//       <div className="sidecart   overflow-y-scroll    p-10 mx-20 ">
//         <ol className="list-decimal font-semibold">
//           {Object.keys(cart).length == 0 && (
//             <div className="my-4 font-bold">Yours cart is empty</div>
//           )}
//           {Object.keys(cart).map((k) => {
//             return (
//               <li key={k}>
//                 <div className="item flex my-5">
//                   <div className="  font-semibold">
//                     {cart[k].name}({cart[k].size}/{cart[k].variant})
//                   </div>
//                   <div className="w-1/3  flex items-center justify-center text-lg">
//                     <AiFillMinusCircle
//                       onClick={() => {
//                         removeFromCart(
//                           k,
//                           1,
//                           cart[k].price,
//                           cart[k].name,
//                           cart[k].size,
//                           cart[k].variant
//                         );
//                       }}
//                       className="cursor-pointer text-pink-500"
//                     />
//                     <span className="mx-2">{cart[k].qty}</span>
//                     <AiFillPlusCircle
//                       onClick={() => {
//                         addToCart(
//                           k,
//                           1,
//                           cart[k].price,
//                           cart[k].name,
//                           cart[k].size,
//                           cart[k].variant
//                         );
//                       }}
//                       className="cursor-pointer text-pink-500"
//                     />
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//           <span className="total font-bold">SubTotal ₹{subTotal} </span>
//           <div className="mx-4">
//             <Link href={"/checkout"}>
//               <button
//                 disabled={disabled}
//                 onClick={initiatePayment}
//                 className="disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
//               >
//                 Pay ₹{subTotal}
//               </button>
//             </Link>
//           </div>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState({ value: null });

  const [paytmLoaded, setPaytmLoaded] = useState(false);

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchUserData(myuser.token);
    }
  }, []);

  useEffect(() => {
    if (name && email && address && phone && pincode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, address, phone, pincode]);

  const fetchUserData = async (token) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      setName(data.name);
      setAddress(data.address);
      setPhone(data.phone);
      setPincode(data.pincode);
      fetchPincode(data.pincode);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPincode = async (pin) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
      const pinData = await res.json();
      if (pinData[pin]) {
        setState(pinData[pin][1]);
        setCity(pinData[pin][0]);
      } else {
        setState("");
        setCity("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "address") setAddress(value);
    else if (name === "phone") setPhone(value);
    else if (name === "pincode") {
      setPincode(value);
      if (value.length === 6) fetchPincode(value);
    }
  };

  const initiatePayment = async () => {
    if (!paytmLoaded) {
      toast.error("Paytm not loaded yet. Please wait a few seconds.");
      return;
    }

    const oid = Math.floor(Math.random() * Date.now());
    const data = { cart, subTotal, oid, email, name, address, pincode, phone };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const txnRes = await res.json();

      if (!txnRes.success) {
        toast.error(txnRes.error || "Payment initiation failed.");
        if (txnRes.clearCart) clearCart();
        return;
      }

      const txnToken = txnRes.txnToken;
      const config = {
        root: "",
        flow: "DEFAULT",
        data: {
          orderId: oid,
          token: txnToken,
          tokenType: "TXN_TOKEN",
          amount: subTotal,
        },
        handler: {
          notifyMerchant: function (eventName, data) {
            console.log("Paytm notifyMerchant:", eventName, data);
          },
        },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(() => window.Paytm.CheckoutJS.invoke())
        .catch((err) => console.error("Paytm CheckoutJS error:", err));

    } catch (err) {
      console.error(err);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container m-auto">
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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <Script
  type="application/javascript"
  crossorigin="anonymous"
  src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
  onLoad={() => {
    // wait a tiny bit to ensure CheckoutJS is ready
    const checkInterval = setInterval(() => {
      if (window.Paytm && window.Paytm.CheckoutJS) {
        setPaytmLoaded(true);
        clearInterval(checkInterval);
      }
    }, 50);
  }}
  onError={() => toast.error("Paytm SDK failed to load")}
/>


      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>

      {/* Delivery Details */}
      <h2 className="font-bold text-xl mx-20">1. Delivery Details</h2>
      <div className="mx-20 flex my-4">
        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
          />
        </div>

        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">Email</label>
          {user && user.token ? (
            <input
              value={user.email}
              readOnly
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
            />
          ) : (
            <input
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
            />
          )}
        </div>
      </div>

      <div className="mx-20 my-4">
        <label className="leading-7 text-sm text-gray-600">Address</label>
        <textarea
          name="address"
          value={address}
          onChange={handleChange}
          rows={2}
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
        />
      </div>

      <div className="mx-20 flex my-4">
        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">Phone</label>
          <input
            name="phone"
            value={phone}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
          />
        </div>

        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">Pincode</label>
          <input
            name="pincode"
            value={pincode}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
          />
        </div>
      </div>

      <div className="mx-20 flex my-4">
        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">City</label>
          <input
            name="state"
            value={state}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
          />
        </div>
        <div className="px-2 w-1/2">
          <label className="leading-7 text-sm text-gray-600">District</label>
          <input
            name="city"
            value={city}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 py-1 px-3"
          />
        </div>
      </div>

      {/* Cart & Pay */}
      <h2 className="font-semibold text-xl mx-20">2. Review Cart Items & Pay</h2>
      <div className="sidecart overflow-y-scroll p-10 mx-20">
        {Object.keys(cart).length === 0 ? (
          <div className="my-4 font-bold">Your cart is empty</div>
        ) : (
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).map((k) => (
              <li key={k} className="flex my-5 justify-between items-center">
                <span>{cart[k].name} ({cart[k].size}/{cart[k].variant})</span>
                <div className="flex items-center">
                  <AiFillMinusCircle
                    className="cursor-pointer text-pink-500"
                    onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                  />
                  <span className="mx-2">{cart[k].qty}</span>
                  <AiFillPlusCircle
                    className="cursor-pointer text-pink-500"
                    onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                  />
                </div>
              </li>
            ))}
          </ol>
        )}

        <div className="font-bold mt-4">SubTotal ₹{subTotal}</div>
        <button
  disabled={disabled || Object.keys(cart).length === 0 || !paytmLoaded}
  onClick={initiatePayment}
  className="mt-4 text-white bg-pink-500 disabled:bg-pink-300 py-2 px-6 rounded hover:bg-pink-600"
>
  {!paytmLoaded && <div className="text-center text-pink-500 my-2">Loading payment gateway...</div>}

</button>

      </div>
    </div>
  );
};

export default Checkout;
