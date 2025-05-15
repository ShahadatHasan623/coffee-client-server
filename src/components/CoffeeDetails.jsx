import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeDetails =useLoaderData()
    console.log("coffee details",coffeeDetails)
    return (
        <div>
            
        </div>
    );
};

export default CoffeeDetails;