import React from 'react';

const page = async({params}) => {
    const p = await params;
    const res = await fetch("https://shopping-hub-server-lovat.vercel.app/meals");
  const meals = await res.json();
    const machDetails = meals.find((meal) => meal._id === p.id);
    console.log(machDetails);
    console.log(p);
    return (
        <div className='mt-10 mb-10 mx-auto px-3 lg:px-20 sm:px-12 md:px-16'>
            <p className="text-4xl text-center font-bold">{machDetails.meal_title}</p>
      <p className="text-center text-[#0000009f] mt-3">
        {machDetails.description}
      </p>
      <div className="  mt-5">
        <div className="p-4 bg-white rounded-3xl">
          <img className="rounded-3xl w-full" src={machDetails.photo_url} />
        </div>
      </div>

      <div className="h-[370px]  bg-white rounded-2xl mt-10 flex gap-4 pr-2">
        <div className="h-[310px] w-[300px]">
          <img
            className="h-[310px] w-[300px] ml-5 mt-5 rounded-3xl"
            src={machDetails.photo_url}
          />
        </div>
        <div className="md:ml-7 ml-5 mt-5 ">
          <p className="md:text-3xl sm:text-xl text-[17px] font-bold">
            {machDetails.meal_title}
          </p>

          <p className="md:text-2xl sm:text-xl text-[16px] font-bold mt-1">
            Category : {machDetails.meal_category}
          </p>
          <p className="text-[#00000086] font-bold mt-4">
            Meal Price : {machDetails.price}
          </p>
          <div className="border-t-1 border-t-[#00000095] border-dashed sm:mt-5 mt-2 md:w-full w-[100px]">
            <hr />
          </div>
          <div className="flex gap-1 items-center mt-3">
            <p className="font-bold sm:text-xl text-[16px]">
              Distributor :{" "}
              <span className="ml-1 font-bold">{machDetails.user_name}</span>
            </p>
          </div>
          <div className="border-t-1 border-dashed border-t-[#00000095] sm:mt-5 mt-2 md:w-full w-[100px]">
            <hr />
          </div>

          <div className="flex gap-2 mt-3">
            <p className="font-bold text-[14px] md:text-xl">Ingredients :</p>
            <p className=" md:text-[18px] text-[14px] font-bold">
              {machDetails.ingredients}
            </p>
          </div>
          <div className="flex gap-6 mt-6">
            
            <button
              className='btn bg-blue-800 text-white'
            >
              Meal Request
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default page;