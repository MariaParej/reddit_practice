import { FaRedditAlien, FaRegBell} from 'react-icons/fa'
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavBar = ({onSearch, openMenu}) => {
const [search, setSearch] = useState('')

const onChange = (e) => {
setSearch(e.target.value)
}

const handleSubmit = (e)=> {
  e.preventDefault()
  onSearch(search.trim())
  setSearch('')
}
  return (
    <nav className='bg-white border shadow-xl flex items-center justify-between  px-6 z-50'>
      <div className='flex items-center gap-3'>
        <GiHamburgerMenu onMouseEnter={openMenu} className='text-orange-600 text-2xl mr-5' />
        <FaRedditAlien className='text-orange-600 ' />
        <h1 className='font-bold text-3xl text-orange-600'>Reddit</h1>
      </div>
      <form onSubmit={handleSubmit} className='relative flex items-center flex-row gap-2 md:flex-1 md:max-w-xl mx-10'>
     
        <AiOutlineSearch className='absolute ml-3 text-x -scale-x-100 text-orange-600' />
        <input
          type='text'
          value={search}
          onChange={onChange}
          placeholder='Buscar'
          className='bg-gray-100 border border-orange-700 rounded-full text-sm text-black pl-8 outline-none focus:ring-1 focus:ring-orange-600 md:w-full'
        />
      
      </form>
      <div className='relative flex items-center flex-row gap-2'>
        <FaRegBell className='text-orange-600 '/>
        <button className='bg-orange-100 text-lg font-bold border border-orange-800 rounded-full text-orange-600 hover:text-white hover:bg-orange-600 hover:border-black px-6'>Inicar sesión</button>
      </div>
    </nav>
  )
}

export { NavBar }
