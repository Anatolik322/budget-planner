import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  store, {persistor } from './service/store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Stats from './components/stats/Stats';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path: "/budget-planner",
        element: <App></App>,
    },
    {
        path: "/stats",
        element: <Stats></Stats>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

 <Provider store={store}>
    <PersistGate loading = {null} persistor={persistor}>
        <RouterProvider router={router} />
    </PersistGate>
 </Provider>
   

);
