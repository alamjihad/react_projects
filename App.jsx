import mobile from "./assets/mobile.svg"
import spoon from "./assets/spoon.svg"
import search from "./assets/search.svg"
import location from "./assets/location.svg"
import women from "./assets/women.svg"
import exercise from "./assets/exercise.svg"
import beauty from "./assets/beauty.svg"
export default function App() {
  return (
    <div className='bg-white text-black border-black border-2 pb-10'>
      <div className='flex flex-col justify-center items-center bg-orange-600 pb-3 pt-1'>
        <img src="../camm.jpg" className=' max-sm:h-2  max-sm:w-2' />
        <div className="flex mt-2 p-1">
          <form className="flex bg-white rounded-lg px-3">
            <input type='text' placeholder='What are you looking for' className='bg-white text-xs pr-7 border-white'></input> <img src={search} className="h-6 bg-white pt-1"></img>
          </form>
          <img src={location} className="h-5 pl-5"></img>
        </div>
      </div>
      <div className=' max-sm:font-semibold  max-sm:text-sm  max-sm:py-3  max-sm:ml-3'>
        Top Categories
      </div>
      <div className="flex">
        <span className="flex flex-col ml-2">
          <span className="p-1 bg-orange-600 rounded-3xl">
            <img src={spoon} className="h-6 mr-1 ml-1 bg-orange-600  rounded-lg" />
          </span>
          <span className="text-xs pl-1">
            Food
          </span>
        </span>
        <span className="flex flex-col ml-2">
          <span className="p-1 bg-orange-600 rounded-3xl">
            <img src={exercise} className="h-6 mr-1 ml-1 bg-orange-600  rounded-lg" />
          </span>
          <span className="text-xs pl-1">
            Fitness
          </span>
        </span>
        <span className="flex flex-col ml-2">
          <span className="p-1 bg-orange-600 rounded-3xl">
            <img src={beauty} className="h-6 mr-1 ml-1 bg-orange-600  rounded-lg" />
          </span>
          <span className="text-xs pl-1">
            Beauty
          </span>
        </span>
        <span className="flex flex-col ml-2">
          <span className="p-1 bg-orange-600 rounded-3xl">
            <img src={women} className="h-6 mr-1 ml-1 bg-orange-600  rounded-lg" />
          </span>
          <span className="text-xs pl-1">
            Fashion
          </span>
        </span>
        <span className="flex flex-col ml-2">
          <span className="p-1 bg-orange-600 rounded-3xl">
            <img src={mobile} className="h-6 mr-2 ml-3 bg-orange-600  rounded-lg" />
          </span>
          <span className="text-xs pl-1">
            Electronics
          </span>
        </span>
      </div>
      <div>
        <img src="../watch.png" className='w-56 h-32 ml-3 mt-3 mb-3' />
      </div>
      <div className='font-semibold text-sm flex justify-between'>
        <div className="ml-3">
          Latest Deals
        </div>
        <button className='bg-orange-700 text-white px-5 rounded-3xl mr-2'>
          View All
        </button>
      </div>
      <div className='flex'>
        <div>
          <img src="./food.png" className=' max-sm:w-32  max-sm:h-28  max-sm:ml-3  max-sm:mt-5' />
          <p className=' max-sm:text-xs  max-sm:text-wrap  max-sm:ml-3  max-sm:mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium rem error ab nesciunt</p>
        </div>
        <div>
          <img src="./offer.png" className=' max-sm:w-28  max-sm:h-28  max-sm:ml-3  max-sm:mt-5' />
          <p className=' max-sm:text-xs  max-sm:text-wrap  max-sm:ml-3  max-sm:mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur deleniti ipsa sit ex.</p>
        </div>
      </div>
      <div className='font-semibold text-sm flex justify-between'>
        <div className="ml-3">
          Hot Deals
        </div>
        <button className='bg-orange-700 text-white px-5 rounded-3xl mr-2'>
          View All
        </button>
      </div>
    </div>
  )
}