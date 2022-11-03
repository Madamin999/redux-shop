import React from 'react';
import {data} from "../../utils/Data";
import Categories from "../categories/Categories";
import Products from "./products/Products";



const Home = () => {
    return (
        <div>

            <Categories/>
            <div className="flex justify-between flex-wrap ">
                {data.products.map((el,idx) => (

                    <Products key={idx} idx={idx} el={el}/>

                ))}
            </div>

        </div>
    );
};

export default Home;