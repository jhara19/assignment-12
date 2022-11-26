
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router'
import { toast } from 'react-toastify';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className='max-w-[1240px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
