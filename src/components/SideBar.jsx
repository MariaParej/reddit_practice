import {
  FaHome,
  FaSuitcase,
  FaPencilRuler,
  FaQuestionCircle
} from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

const SideBar = ({ closeMenu, isOpen }) => {
  return (
    <aside
      onMouseLeave={closeMenu}
      className={`fixed top-[34px] left-0 w-40 bg-white border-r shadow-2xl transition-transform duration-300 z-40 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-fit rounded`}
    >
      {/* <ul className="flex flex-col gap-2 p-2">
        <li className="cursor-pointer hover:bg-orange-100 mb-2">🏠HOME</li>
        <li className="cursor-pointer hover:bg-orange-100 mb-2">💼EMPLEO</li>
        <li className="cursor-pointer hover:bg-orange-100 mb-2">📏REGLAS DE REDDIT</li>
        <li className="cursor-pointer hover:bg-orange-100 mb-2">🆘AYUDA</li>
      </ul>*/}
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex flex-row items-center gap 2 cursor-pointer hover:bg-orange-100 mb-2'>
          <FaHome className='text-orange-600 mr-2' />
          <a>HOME</a>
        </div>
        <div className='flex flex-row items-center gap 2 cursor-pointer hover:bg-orange-100 mb-2'>
          <FaSuitcase className='text-orange-600 mr-2' />
          <a>EMPLEO</a>
        </div>
        <div className='flex flex-row items-center gap 2 cursor-pointer hover:bg-orange-100 mb-2'>
          <FaPeopleGroup className='text-orange-600 mr-2' />
          <a>COMUNIDAD</a>
        </div>
        <div className='flex flex-row items-center gap 2 cursor-pointer hover:bg-orange-100 mb-2'>
          <FaPencilRuler className='text-orange-600 mr-2' />
          <a>REGLAS DE REDDIT</a>
        </div>
        <div className='flex flex-row items-center gap 2 cursor-pointer hover:bg-orange-100 mb-2'>
          <FaQuestionCircle className='text-orange-600 mr-2' />
          <a>AYUDA</a>
        </div>
      </div>
    </aside>
  )
}

export { SideBar }
