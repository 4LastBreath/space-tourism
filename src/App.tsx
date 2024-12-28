import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { useEffect, useState } from 'react'
import { imgs } from './constants/imgs'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const cacheImages = async (imgs:string[]) => {
    const promises = imgs.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()

        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    })

    await Promise.all(promises)

    setIsLoading(false)
  }

  useEffect(() => {
    cacheImages(imgs)
  }, [])

  return (
    <>
      {isLoading ?
        <div className='h-screen w-full flex align-center justify-center'>
          Loading...
        </div>
        :
        <RouterProvider router={router} />
      }
    </>
  )
}

export default App
