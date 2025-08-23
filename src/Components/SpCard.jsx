"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const SpCard = ({meals}) => {
    const router = useRouter();
    return (
        <div className="mt-12 mb-8 px-4 sm:px-7 md:px-10 lg:px-16">
        <p className="text-3xl font-bold">Special Meals</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-9">
        {meals.map((meal) => (
          <div onClick={()=>router.push("/products")} className="bg-[#d5ead2]  rounded-xl px-4 py-4 shadow-2xl cursor-pointer">
            <img
              className="h-[200px] w-full rounded-2xl"
              src={meal.photo_url}
            />

            <p className="text-2xl mt-4">{meal.meal_title}</p>
            
          </div>
        ))}
      </div>
    </div>
    );
};

export default SpCard;