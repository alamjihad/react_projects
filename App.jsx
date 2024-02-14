// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Fetch API Project
      </h1>
      <table className=''>
        {/* <thead>
          <tr>
            <th className="w-20">User Id</th>
            <th className="w-30">Title</th>
            <th className="w-40">Body</th>
          </tr>
        </thead> */}
        {data.map(user => (
          <p key={user.id}>
            <td className=' truncate' >
              {user.userId}
            </td>
            <td className=' bg-gray-200 m-2 truncate'>
              {user.title}
            </td>
            <td className=' bg-gray-200 m-2 truncate'>
              ({user.body})
            </td>
          </p>
        ))}
      </table>
    </>
  );
}

export default App;

