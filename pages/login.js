// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";

// const Login = () => {
//   const router = useRouter("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   useEffect(() => {
//     if (localStorage.getItem("myuser")) {
//       router.push("/");
//     }
//   }, []);

//   const handlerChange = (e) => {
//     if (e.target.name == "email") {
//       setEmail(e.target.value);
//     } else if (e.target.name == "password") {
//       setPassword(e.target.value);
//     }
//   };
//   const handlerSubmit = async (e) => {
//     e.preventDefault();
//     const data = { email, password };
//     let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     let response = await res.json();
//     setEmail("");
//     setPassword("");
//     if (response.success) {
//       localStorage.setItem(
//         "myuser",
//         JSON.stringify({
//           token: response.token,
//           email: response.email,
//         })
//       );

//       toast.success("Your are succcessfully logged in", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       setTimeout(() => {
//         router.push(`${process.env.NEXT_PUBLIC_HOST}`);
//       }, 1000);
//     } else {
//       toast.error(response.error, {
//         position: "top-right",
//         autoClose: 2000,
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
//     <>
//       <div className="flex min-h-screen items-start justify-center py-24 px-4 sm:px-6 lg:px-8">
//         <ToastContainer
//           position="top-right"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <div className="w-full max-w-md space-y-8">
//           <div>
//             <Image
//               className="mx-auto h-12 w-auto"
//               src="/codes.png"
//               alt="Your Company"
//               height={200}
//               width={200}
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//               <Link href={"/signup"}>Sign in to your account</Link>
//             </h2>
//           </div>
//           <form
//             onSubmit={handlerSubmit}
//             className="mt-8 space-y-6"
//             action="#"
//             method="POST"
//           >
//             <input type="hidden" name="remember" value="true" />
//             <div className="-space-y-px rounded-md shadow-sm">
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   value={email}
//                   onChange={handlerChange}
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   value={password}
//                   onChange={handlerChange}
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="text-sm">
//                 {/* <a className="font-medium text-indigo-600 hover:text-indigo-500"> */}
//                 <Link href={"/forgot"}>Forgot your password?</Link>
//                 {/* </a> */}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <svg
//                     className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect to home if already logged in
  useEffect(() => {
    if (localStorage.getItem("myuser")) {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const response = await res.json();

    if (response.success) {
      localStorage.setItem(
        "myuser",
        JSON.stringify({ token: response.token, email: response.email })
      );

      toast.success("You are successfully logged in!", {
        position: "top-right",
        autoClose: 2000,
      });

      setFormData({ email: "", password: "" });

      // Redirect after short delay to show toast
      setTimeout(() => router.push("/"), 2200);
    } else {
      toast.error(response.error || "Invalid credentials", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <Image
            className="mx-auto"
            src="/codes.png"
            alt="Codeswear Logo"
            height={100}
            width={100}
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link href="/signup">
              <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                create an account
              </span>
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link href="/forgot">
              <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Forgot your password?
              </span>
            </Link>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
