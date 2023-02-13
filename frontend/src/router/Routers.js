import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route paht='/home' element={<Home/>} />
        <Route paht='/tour' element={<Tours/>} />
        <Route paht='/tour/:id' element={<TourDetails />} />
        <Route paht='/login' element={<Login />} />
        <Route paht='/register' element={<Register />} />
        <Route paht='/tour/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Routers