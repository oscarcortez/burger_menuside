import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

/*
TODO: Necesary to use children here. Its not possible to put components into the Navbar
TODO: Put padding in all the sidebar
TODO: I think navbar and sidebar should be separated
*/
export const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <div className="border-2 p-4 sticky top-0 flex min-h-6 w-full max-w-[100vw] transform-gpu flex-wrap justify-end items-center gap-x-2 px-2 sm:gap-x-4 sm:px-4 print:relative">
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/20 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ''
        )}
        {/* Side drawer menu */}
        <div
          className={
            nav
              ? 'border-2 fixed top-0 right-0 h-screen bg-white z-10 duration-300 w-full sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[40%]'
              : 'border-2 fixed top-0 right-[-100%] w-0 h-screen bg-white z-10 duration-300'
          }
        >
          <div className="relative">
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
    </>
  )
}
