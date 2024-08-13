import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Preview from './pages/preview'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Preview/>,
  },

])
function App() {


  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
