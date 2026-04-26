import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRef } from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";
const Navbar = ({
  user,
  logout,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let exempted = ["/checkout", "/order", "/orders", "/myaccount"];
    if (exempted.includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  const toggleCart = () => {
    setSidebar(!sidebar);
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  const ref = useRef();
  return (
    <div
      className={`bg-white h-20   pb-2 shadow-xl sticky top-0 z-50 flex flex-col justify-center items-center md:flex-row md:justify-start  lg:p-3 ${
        !sidebar && "overflow-hidden"
      }}`}
    >
      <div className="logo mr-auto   md:mx-5">
        {/* <Link href={"/"}>
          <Image
            className="cursor-pointer"
            src="/codeswear.webp"
            alt="logo"
            width={160}
      height={50}
          />
        </Link> */}
        <Link href={"/"}>
<div className="text-pink-600">CODESWEAR</div>
        </Link>
        
      </div>
      <div className="nav">
        <ul className="flex  items-center space-x-3 font-bold md:text-md">
          <Link href="/tshirt">
            <li className="hover:text-pink-600">Tshirts</li>
          </Link>
          <Link href="/hoddies">
            <li className="hover:text-pink-600">Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li className="hover:text-pink-600">Mugs</li>
          </Link>
          <Link href="/stickers">
            <li className="hover:text-pink-600">Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute items-center right-0 mx-5 pb-6 md:pb-0 flex space-x-4">
        <span
          onMouseOver={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
        >
          {dropDown && (
            <div
              onMouseOver={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
              className="absolute bg-white shadow-lg border  top-4 py-4 right-8 rounded-md px-5 w-32"
            >
              <ul>
                <Link href="myaccount">
                  <li className="font-bold py-1 hover:text-pink-600  text-sm">
                    My Account
                  </li>
                </Link>
                <Link href="orders">
                  <li className="font-bold py-1 hover:text-pink-600  text-sm">
                    Orders
                  </li>
                </Link>
                <a>
                  <li
                    onClick={logout}
                    className="font-bold py-1 hover:text-pink-600  text-sm"
                  >
                    Logout
                  </li>
                </a>
              </ul>
            </div>
          )}
          {user.value && <MdAccountCircle className="text-xl md:text-2xl" />}
        </span>
        {!user.value && (
          <Link href={"/login"}>
            <button className="bg-pink-600 px-2 py-1 rounded-lg text-sm text-white">
              Login
            </button>
          </Link>
        )}

        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-3xl "
        />
      </div>
      <div
        ref={ref}
        // className={`sidecart w-72 h-[100vh] overflow-y-scroll  absolute top-0 right-0 bg-pink-300 p-10 transform transition-transform
        // ${
        //   Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full "
        // }
        //  `}
        className={`sidecart  w-72 h-[100vh] overflow-y-scroll  absolute top-0  bg-pink-300 p-10 transition-all
        ${sidebar ? "right-0" : "-right-96"}
         `}
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          onClick={toggleCart}
          className="cursor-pointer absolute top-4 right-4"
        >
          <AiFillCloseCircle className="text-xl text-pink-500" />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-bold">Yours cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3  font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3  flex items-center justify-center text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-500"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="total font-bold">SubTotal : ₹{subTotal} </div>

        <div className="flex">
          <Link href={"/checkout"}>
            <button
              disabled={Object.keys(cart).length === 0}
              className=" disabled:bg-pink-300 flex mr-2   text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              <MdAccountCircle className="m-1" /> Check Out
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length === 0}
            onClick={clearCart}
            className="flex mr-2 disabled:bg-pink-300   text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
