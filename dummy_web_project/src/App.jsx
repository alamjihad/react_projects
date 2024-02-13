import './App.css'

function App() {
  return (
    <>
      <div className="ml-5 mr-5 max-sm:relative">
        <div
          className=" flex items-center justify-center text-black font-bold border-black bg-gray-500 w-50 h-28 text-2xl mt-4 border-8 max-sm:h-16 max-sm:mt-2">
          Header
        </div>
        <nav className="flex items-center justify-end text-white bg-stone-800 w-50 h-20 mt-4 border-8 border-black max-sm:h-16 max-sm:mt-2 max-sm:mb-0">
          <span className="pr-9 max-sm:pr-2">
            Home
          </span>
          <span className="pr-9 max-sm:pr-2">
            About
          </span>
          <span className="pr-9 max-sm:pr-2">
            Features
          </span>
          <span className="pr-9 max-sm:pr-2">
            Gallery
          </span>
          <span className="pr-9 max-sm:pr-2">
            Team
          </span>
          <span className="pr-4 max-sm:pr-2">
            Contact
          </span>
        </nav>
        <div className="flex mt-4 max-sm:block">
          <div
            className=" text-black font-bold flex items-start justify-center bg-pink-700 h-96 w-96 pt-4 text-xl mr-5 border-8 border-black max-sm:h-40 max-sm:w-169.6 max-sm:absolute max-sm:mt-296">
            Aside 1
          </div>
          <div className=" text-black font-bold bg-yellow-500 h-max w-3/6 flex flex-col items-center justify-center text-xl pt-3 border-8 border-black pb-7 max-sm:h-72 max-sm:w-full max-sm:-mt-2 max-sm:t-20">
            Section
            <div
              className="bg-green-700 flex items-center justify-center h-20 w-4/5 text-lg mt-5 border-8 border-black max-sm:w-80  max-sm:mt-2 max-sm:h-24">
              Article 1
            </div>
            <div
              className="bg-green-700 flex items-center justify-center h-20 w-4/5 text-lg mt-5 border-8 border-black max-sm:w-80  max-sm:mt-2 max-sm:h-24">
              Article 2
            </div>
            <div
              className="bg-green-700 flex items-center justify-center h-20 w-4/5 text-lg mt-5 border-8 border-black max-sm:w-80  max-sm:mt-2 max-sm:h-24">
              Article 3
            </div>
          </div>
          <div
            className="text-black font-bold flex items-start justify-center bg-blue-500  h-96 w-96 pt-4 text-xl ml-5 border-8 border-black max-sm:h-40 max-sm:w-169.6 max-sm:absolute max-sm:ml-180 max-sm:mt-2">
            Aside 2
          </div>
        </div>
        <div
          className="text-white border-8 border-black mt-4 bg-blue-700 flex items-center justify-center pt-2 pb-2 mb- max-sm:h-16 max-sm:mt-44">
          Footer
        </div>
      </div>
    </>
  )
}

export default App
