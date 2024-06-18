import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/authenticate/login/login.js';
import Register from './views/authenticate/register/register.js';
import Classes from './views/classes/classes.js';
import Class1 from './views/classes/classlist/class1/class1.js';
import Class2 from './views/classes/classlist/class2/class2.js';
import Class3 from './views/classes/classlist/class3/class3.js';
import Class4 from './views/classes/classlist/class4/class4.js';
import Class5 from './views/classes/classlist/class5/class5.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/class',
        element:<Classes></Classes>
      },
      {
        path:'/class/class1',
        element:<Class1></Class1>
      },
      {
        path:'/class/class2',
        element:<Class2></Class2>
      },
      {
        path:'/class/class3',
        element:<Class3></Class3>
      },
      {
        path:'/class/class4',
        element:<Class4></Class4>
      },
      {
        path:'/class/class5',
        element:<Class5></Class5>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
