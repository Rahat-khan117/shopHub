import React from "react";

const page = async () => {
  const res = await fetch("https://shopping-hub-server-lovat.vercel.app/meals");
  const meals = await res.json();
  return (
    <div className="mt-6">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 px-4 sm:px-7 md:px-10 lg:px-16">
        {meals.map((meal) => (
          <div className="bg-[#d5ead2] h-[480px] rounded-xl px-4 py-4 shadow-2xl">
            <img
              className="h-[200px] w-full rounded-2xl"
              src={meal.photo_url}
            />

            <p className="text-2xl mt-4">{meal.meal_title}</p>
            <p className="mt-3">{meal.description}</p>
            <p className="text-xl font-bold mt-3">
              Price: <span className="text-blue-600 ">{meal.price}</span>
            </p>
            <div className="flex justify-between  items-center">
              <p className="text-xl font-bold">{meal.meal_category}</p>
              <button
                //  onClick={()=>{
                //     if(userN) {
                //         navigate(`/mealDetails/${meal._id}`);
                //     } else {
                //         Swal.fire({
                //                     title: "warning!",
                //                     text: " For access this page you have to login first",
                //                     icon: "warning",
                //                     confirmButtonText: "OK",
                //                   });
                //          navigate('/login')
                //     }
                //  }}
                className="btn text-[17px] mt-3 w-[100px] bg-green-500 text-white rounded-4xl text-4 float-right"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
