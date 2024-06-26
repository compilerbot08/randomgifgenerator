import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg text-center w-11/12 mt-[40px] ml-[25px] mr-[25px] px-10 py-2 text-3xl font-bold'>Random GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
