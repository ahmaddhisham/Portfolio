import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-1 border-b border-gray-300 bg-white relative transition-all h-16 z-15">

      <Link to="/" onClick={() => setOpen(false)}>
        <img src="/Logome.png" alt="Logo" className="h-30 mt-4 w-auto" />
      </Link>

      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className={({isActive}) => isActive ? "border-b-2 border-black pb-1 text-teal-700" : "pb-1 hover:text-teal-600"}>Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "border-b-2 border-black pb-1 text-teal-700" : "pb-1 hover:text-teal-600"}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "border-b-2 border-black pb-1 text-teal-700" : "pb-1 hover:text-teal-600"}>Contacts</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "border-b-2 border-black pb-1 text-teal-700" : "pb-1 hover:text-teal-600"}>About</NavLink>
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 font-bold text-sm md:hidden`}>
        <NavLink to="/" className={({isActive}) => isActive ? "block border-b-2 border-black pb-1" : "block pb-1"} onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "block border-b-2 border-black pb-1" : "block pb-1"} onClick={() => setOpen(false)}>Projects</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "block border-b-2 border-black pb-1" : "block pb-1"} onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "block border-b-2 border-black pb-1" : "block pb-1"} onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

    </nav>
  )
}

export default NavBar
