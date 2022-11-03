import React from 'react';

const Categories = () => {
    return (
        <div>
            <h1 className="gTitle font-bold py-4 text-2xl text-center">For him</h1>
            <div className=" flex items-center justify-center my-5">
                <button className="m-2 uppercase cursor-pointer">Jacket</button>
                <button className="m-2 uppercase cursor-pointer">Shirt</button>
                <button className="m-2 uppercase cursor-pointer">T-Shirt</button>
                <button className="m-2 uppercase cursor-pointer">Trouses</button>
                <button className="m-2 uppercase cursor-pointer">Hats</button>
            </div>
        </div>
    );
};

export default Categories;