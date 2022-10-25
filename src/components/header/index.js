import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setTab } from '../../features/tab/tabSlice';

const Header = () => {
  const dispatch = useDispatch()
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 64);
    })
  })

  const menu = [
    {
      label: "Dashboard",
      state: 0
    },
    {
      label: "Categories",
      state: 1
    },
    {
      label: "Cars",
      state: 2
    },
  ]
  const handleTab = (value) => {
    dispatch(setTab(value))
  }
  return (
    <div className={`w-full font-medium h-16 transition-all ease-in-out duration-300 ${scroll ? "bg-gray-200 pb-2 drop-shadow-xl shadow-lg fixed " : ""}`}>
      <div className='container px-4 lg:px-16 mx-auto w-full h-full flex justify-center'>
        <div className="flex w-full items-center space-x-10">
          {menu.map((item) => {
            return (
              <a role={"button"} key={item.label} onClick={() => handleTab(item.state)}>
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Header