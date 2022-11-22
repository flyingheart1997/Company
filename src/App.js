import { useEffect, useState } from 'react';
import './App.css';
import { Data } from './utils/Data';

function App() {

  const [index, setindex] = useState(1)
  const [hover, setHover] = useState(false)
  const [pdf,setPdf] = useState(null)

  const clickme = () => {
    if (index > Data.image.length - 1) {
      setindex(1)
    }
    else {
      setindex(index + 1)
    }

  }

  

  return (
    <div className='bg-slate-200 overflow-scroll h-screen w-screen flex flex-col items-center'>
      <div className='py-5 flex h-auto w-[100%] flex-col items-center justify-center'>
        {Data.image.map((item, i) => (
          <div key={i} className='flex w-[70%] shadow-md shadow-white h-auto items-center p-1 justify-center'>
            {i == (index - 1) && <img src={item.img} className='h-[400px] w-[98%]' />}
          </div>
        ))}
        <div onClick={() => clickme()} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`cursor-pointer absolute items-center flex justify-center bottom-5 h-10 w-20 ${!hover ? 'bg-[#393c66b4]': 'bg-sky-900'} rounded-full `}>
          {hover ? <p className='text-white'> next </p> : <p className='text-white'>{index}</p>}
        </div>
        {Data.pdf.map((item, i) => (
          <div key={i} className='flex w-[70%] shadow-md shadow-white h-auto p-4 items-center justify-center '>
            {i == (index - 1) && <object data={item.pdf} type="application/pdf" width="100%" height="550px" />}
            </div>
          ))}
       </div>
    </div>
  );
}

export default App;
