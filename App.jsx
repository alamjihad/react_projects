import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [check, setcheck] = useState("false");
  const [learn, setLearn] = useState("");
  function getPrevent(e) {
    e.preventDefault()
    if (name === "" || learn === "" || !check) {
      alert("Fill up the require fields");
      return;
    }
    console.log(`${name} is learning ${learn} and this is ${check}.`);
  }
  return (
    <div>
      <p className='p-3 underline'>
        From Handling
      </p>
      <form onSubmit={getPrevent}>
        <input type='text' placeholder='Name' className='bg-white p-2 rounded' value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <select onChange={(e) => setLearn(e.target.value)} className='py-3 px-4'>
          <option>Select any one</option>
          <option>Angular</option>
          <option>Vue</option>
          <option>React</option>
        </select>
        <br /><br />
        <div className='p-3 bg-slate-700 rounded-sm'>
          <input type="checkbox" onChange={(e) => setcheck(e.target.checked)} />
          <span className='pl-2'>
            Obey all rules and regulation
          </span>
        </div>
        <br /><br />
        <button type='submit' className='bg-slate-900 px-5 py-2'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
