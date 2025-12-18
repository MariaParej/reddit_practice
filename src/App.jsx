import { Api } from './api/api_reddit'
import { useState, useEffect } from 'react'
import { PostCard } from './components/PostCard'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'

const App = () => {
  const [data, setData] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const openMenu = () => setIsSideBarOpen(true)
  const closeMenu = () => setIsSideBarOpen(false)

  const functionSearch = (val) => {
    if (!data) return
    const results = data.data.children.filter((post) =>
      post.data.title.toLowerCase().includes(val.toLowerCase())
    )
    const newState = {
      ...data, //Copia lo anterior
      data: {
        ...data.data,
        children: results // results -> solo lo que coincide
      }
    }
    setFilterData(newState)
  }

  useEffect(() => {
    const dataReddit = async () => {
      const result = await Api('popular')
      setData(result)
      setFilterData(result)
    }
    dataReddit()
  }, [])

  return (
    <>
      <header className='sticky top-0 z-50'>
        <NavBar onSearch={functionSearch} openMenu={openMenu} />
      </header>
      <main className='pt-5'>
        <div className='max-w-2xl mx-auto px-4'>
          <SideBar closeMenu={closeMenu} isOpen={isSideBarOpen}/>
          <div className='flex flex-col gap-6'>
            {filterData?.data?.children ? (
              filterData.data.children.length > 0 ? (
                filterData.data.children.map((post) => (
                  <PostCard key={post.data.id} post={post} />
                ))
              ) : (
                <div className='text-center mt-10'>
                  <p className='text-gray-500 text-xl italic'>
                    No se han encontrado resultados para tu búsqueda.
                  </p>
                  <button
                    onClick={() => setFilterData(data)}
                    className='text-orange-600 bg-white border rounded-sm border-gray-500 font-bold hover:bg-orange-600 hover:text-white mt-4 px-6'
                  >
                    Ver todos los post
                  </button>
                </div>
              )
            ) : (
              <p className='text-center'>Cargando tarjeta...</p>
            )}
            {/*<pre>{data ? JSON.stringify(data, null, 2) : "Cargando datos..."}</pre> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
