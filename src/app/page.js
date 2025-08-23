/* eslint-disable jsx-a11y/alt-text */
import SpCard from "@/Components/SpCard";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://shopping-hub-server-lovat.vercel.app/meals");
  const meals = await res.json();
  return (
    <div>
      <div className="carousel w-full h-[500px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <Image
            src="https://i.ibb.co/0pMwDSnr/banner-2.jpg"
            alt="Slide 1 banner"
            fill
            className="brightness-50 object-cover"
          />
          <div className="absolute top-[25%] left-[10%]">
            <p className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold">
              Welcome to your smart and reliable -- <br /> university hostel
              companion!
            </p>
            <p className="text-white mt-2 lg:text-[16px] text-[14px]">
              Manage meals, share your reviews, and stay informed — <br />
              all in one place. Designed to make hostel life simpler, smarter,
              and more enjoyable.
            </p>
            <div className="flex mt-4">
              <button className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-wpexplorer"></i>
                <span className="ml-1">Explore</span>
              </button>
              <button className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-readme"></i>
                <span className="ml-1">Read</span>
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <Image
            src="https://i.ibb.co/svVc6c7G/banner-1.jpg"
            alt="Slide 2 banner"
            fill
            className="brightness-50 object-cover"
          />
          <div className="absolute top-[25%] left-[10%]">
            <p className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold">
              Simplifying daily meals with a <br /> system built for every
              hostel student.
            </p>
            <p className="text-white mt-2 lg:text-[16px] text-[14px]">
              View your meal schedule, check what’s being served, <br />
              and give feedback — all from your dashboard. Convenience right at
              your fingertips.
            </p>
            <div className="flex mt-4">
              <button className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-wpexplorer"></i>
                <span className="ml-1">Explore</span>
              </button>
              <button className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-readme"></i>
                <span className="ml-1">Read</span>
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <Image
            src="https://i.ibb.co/xWNqV5t/banner-3.jpg"
            alt="Slide 3 banner"
            fill
            className="brightness-50 object-cover"
          />
          <div className="absolute top-[25%] left-[10%]">
            <p className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold">
              Powerful tools to help admins manage meals, <br /> student data,
              and feedback.
            </p>
            <p className="text-white mt-2 lg:text-[16px] text-[14px]">
              Empower administrators with real-time tools to <br />
              manage meals, track student reviews, <br /> and keep the hostel
              running smoothly.
            </p>
            <div className="flex mt-4">
              <button className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-wpexplorer"></i>
                <span className="ml-1">Explore</span>
              </button>
              <button className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-readme"></i>
                <span className="ml-1">Read</span>
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-[500px]">
          <Image
            src="https://i.ibb.co/zW064Rr3/banner-4.jpg"
            alt="Slide 4 banner"
            fill
            className="brightness-50 object-cover"
          />
          <div className="absolute top-[25%] left-[10%]">
            <p className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold">
              Share your honest feedback to help <br /> improve the hostel
              dining experience.
            </p>
            <p className="text-white mt-2 lg:text-[16px] text-[14px]">
              Rate your meals, write honest reviews, <br />
              and help shape a better dining experience for everyone in the
              hostel.
            </p>
            <div className="flex mt-4">
              <button className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-wpexplorer"></i>
                <span className="ml-1">Explore</span>
              </button>
              <button className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                <i className="fa-brands fa-readme"></i>
                <span className="ml-1">Read</span>
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>


      {/* special meals */}

       <div>
        <SpCard meals={meals}></SpCard>
       </div>

    </div>
  );
}
