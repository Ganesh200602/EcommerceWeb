import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";
import Product from "../models/Product";
import connectDb from "../middleware/conn";
import mongoose from "mongoose";
import { stringify } from "postcss";
const Stickers = ({ products }) => {
  // console.log(products);
  return (
    <section className="text-gray-400 body-font min-h-full">
      <div className="container px-5 py-24 mx-auto  ">
        <div className="flex flex-wrap -m-4 justify-center  mx-5  ">
          {Object.keys(products).length === 0 && (
            <p>
              Sorry All The hoodies are out of stock .Now stock coming soon stay
              tune
            </p>
          )}
          {Object.keys(products).map((item) => {
            return (
              <div
                key={products[item]._id}
                className=" lg:w-1/5 md:w-1/2 p-4  w-full cursor-pointer shadow-lg m-5"
              >
                <div className="block relative  rounded overflow-hidden">
                  {/* <a className="block relative  rounded overflow-hidden"> */}
                  <Link
                    passHref={true}
                    href={`/product/${products[item].slug}`}
                  >
                    <Image
                      alt="ecommerce"
                      className=" h-[36vh] block  border-2  m-auto hover:scale-150"
                      src={products[item].img}
                      height={100}
                      width={100}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </Link>
                  {/* </a> */}
                </div>
                <div className="mt-4 text-center ">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {products[item].hoodies}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  {/* <p className="mt-1">{products[item].size}</p> */}
                  <div className="mt-1">
                    {products[item].size.includes("S") && (
                      <span className="border px-1 mx-1 border-gray-400">
                        S
                      </span>
                    )}
                    {products[item].size.includes("M") && (
                      <span className="border px-1 mx-1 border-gray-400">
                        M
                      </span>
                    )}
                    {products[item].size.includes("L") && (
                      <span className="border px-1 mx-1 border-gray-400">
                        L
                      </span>
                    )}
                    {products[item].size.includes("XL") && (
                      <span className="border px-1 mx-1 border-gray-400">
                        XL
                      </span>
                    )}
                    {products[item].size.includes("XXL") && (
                      <span className="border px-1 mx-1 border-gray-400">
                        XXL
                      </span>
                    )}
                  </div>
                  <div>
                    {products[item].color.includes("red") && (
                      <button className="border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("blue") && (
                      <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("black") && (
                      <button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("green") && (
                      <button className="border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("yellow") && (
                      <button className="border-2 border-gray-300 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "stickers" });
  let hoodies = {};
  for (let item of products) {
    if (item.title in hoodies) {
      if (!hoodies[item.title].color.includes(item.color) && item.avaQty > 0) {
        hoodies[item.title].color.push(item.color);
      }
      if (!hoodies[item.title].size.includes(item.size) && item.avaQty > 0) {
        hoodies[item.title].size.push(item.size);
      }
    } else {
      hoodies[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avaQty > 0) {
        hoodies[item.title].color = [item.color];
        hoodies[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) }, // will be passed to the page component as props
  };
}

export default Stickers;
