import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import Course from './pages/Course/Course.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Course/Home.jsx';
import Auth from './pages/Auth/Auth.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Order from './pages/Order/Order.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<App/>}>
    <Route path='/' element={<Auth/>}/>
    <Route path='' element={<PrivateRoute/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/courses/:courseId' element={<Course/>}/>
    <Route path='/order/:courseId' element={<Order/>}/>
    </Route>
    
    

  </Route>)
)

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
)
