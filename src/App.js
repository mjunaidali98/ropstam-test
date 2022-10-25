import React, { useState, useEffect } from 'react';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories';
import Cars from './pages/cars';

import { useSelector } from 'react-redux';
import { selectTabSlice } from './features/tab/tabSlice';

export default function App() {
  const tab = useSelector(selectTabSlice);
  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);
  const [heading] = useState([
    "Sr",
    "Category",
    "Action",
  ])
  const [carTableHeading] = useState([
    "Sr.",
    "Name",
    "Category",
    "Model",
    "Make year",
    "Color",
    "Registration No",
    "Actions"
  ])
  const getData = async () => {
    let categories_results = await fetch('categories.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    let cars_results = await fetch('cars.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    Promise.all([categories_results, cars_results]).then(async ([aa, bb]) => {
      const a = await aa.json();
      const b = await bb.json();
      setCategories(a);
      setCars(b);
    })

  }

  useEffect(() => {
    getData()
  }, [])
  const renderContent = (value) => {
    switch (value) {
      case 0: {
        return <Dashboard cars={cars} />
      }
      case 1: {
        return <Categories heading={heading} setData={setCategories} data={categories} />
      }
      case 2: {
        return <Cars categories={categories} heading={carTableHeading} setData={setCars} data={cars} />
      }
    }
  }
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      {renderContent(tab.tabNumber)}
    </div>
  );
}
