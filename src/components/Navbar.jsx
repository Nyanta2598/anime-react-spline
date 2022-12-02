const Navbar = () => {
  return (
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center item-center'>
        <div className='w-full md:w-880 bg-blue-400 p-4 rounded-lg flex item-center'>
            <p className='text-lg text-white font-medium '> Mio Naganohara</p>
            <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
                <a href='#home' className='text-base text-white font-medium hover:text-black cursor-pointer duration-100 ease-in-out'> Home </a>
                <a href='#show' className='text-base text-white font-medium hover:text-black cursor-pointer duration-100 ease-in-out'> About the show </a>
                <a href='#episode' className='text-base text-white font-medium hover:text-black cursor-pointer duration-100 ease-in-out'> List of episode </a>
                <a href='#home' className='ml-auto mr-3 text-base text-white font-medium hover:text-black'> Something </a>
            </div>
        </div>
      </nav>
  )
}

export default Navbar;
