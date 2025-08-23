"use client";

import React from 'react';
import Swal from 'sweetalert2';

const page = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const newMeal = Object.fromEntries(formData.entries());
        
        console.log(newMeal);

        if(!newMeal.description) {
           return alert('enter the description')
        }
        if(!newMeal.meal_title){
            return alert('enter the meal title')
        }
        if(!newMeal.meal_category){
            return alert('enter the category')
        }
        if(!newMeal.price){
            return alert('enter the price')
        }
        if(!newMeal.ingredients){
            return alert('enter the ingredients')
        }
        if(!newMeal.photo_url) {
            return alert('enter the Photo Url')
        }

        // send data to the server
        fetch('https://shopping-hub-server-lovat.vercel.app/meals',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newMeal)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'You have Created a new group successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
                });
            }
            location.reload();
        })
        
    }


    return (
        <div className="container mx-auto sm:px-12 px-4 pb-10">
      <div className="bg-gradient-to-br from-lime-200 via-green-300 to-emerald-200 mt-10 sm:px-12 px-6 py-9 rounded-3xl shadow-2xl">
        <div>
          <p className="font-bold text-5xl text-[#331A15] text-center">
            Add Meal
          </p>
          
        </div>

        <form 
        onSubmit={handleSubmit}
        >
          <div className="sm:flex gap-4 ">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Meal Title</label>
              <input
                name="meal_title"
                type="text"
                placeholder="Enter the meal title"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className=" sm:w-[50%] mt-4">
              <label className="text-xl">Meal Category</label>
              <select
                name="meal_category"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 mt-1.5"
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>snacks </option>
                <option>Drinks</option>
              </select>
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Description</label>
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Ingredients</label>
              <input
                name="ingredients"
                type="text"
                placeholder="Enter the ingredients"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Price</label>
              <input
                name="price"
                type="text"
                placeholder="Enter the price"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Photo</label>
              <input
                name="photo_url"
                type="text"
                placeholder="Enter the Photo Url"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">User Name</label>
              <input
                placeholder="Enter the Photo Url"
                name="user_name"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Email address</label>
              <input
                
                name="email_address"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
          </div>
          
          
          <div>
            <button
              type="submit"
              className="w-full btn bg-emerald-500 hover:bg-emerald-600 mt-3 text-[16px]"
            >
              Add meal
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default page;