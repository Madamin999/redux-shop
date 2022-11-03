import React from 'react';
import {Cart, Heart} from "../../../assets/Icons";

const Products = ({el, idx}) => {
    return (

            <div  className="flex m-4 w-[20%] relative productBlock">
                <div className=" absolute z-40 right-3 bottom-9 iconsBlock">
                    <div className="icons bg-white rounded-full p-2 opacity-70 hover:bg-gray-500"> <Cart /></div>
                    <div className="icons bg-white rounded-full p-2 opacity-70 hover:bg-gray-500">  <Heart /></div>

                </div>
                <div className=" rounded p-1.5 relative">
                    <img className="w-[300px]" src={el.image} alt="title"/>

                    <div className="flex justify-between">
                        <h1 className="text-sm text-black hover:underline">{el.name}</h1>
                        <p className="text-black">{el.price}$</p>
                    </div>

                </div>

                <div>

                </div>

            </div>

    );
};

export default Products;