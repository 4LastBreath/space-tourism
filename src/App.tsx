import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { useEffect, useState } from 'react'
import { imgs } from './constants/imgs'
import LoadingSpinner from './components/loadingSpinner'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const cacheImages = async (imgs:string[]) => {

    try {
      const promises = imgs.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image()
          
          if (img.complete) {
            resolve()
          } else {
            img.src = src
            img.onload = () => resolve()
            img.onerror = () => reject()
          }
        })
      })
  
      await Promise.all(promises)
    } catch (err) {
      console.error('cache error: ', err)
    } finally {
      setIsLoading(false)
    }
    
  }

  useEffect(() => {
    cacheImages(imgs)
  }, [])

  return (
    <>
      {isLoading ?
        <div className='h-screen w-full flex align-center justify-center'>
          <LoadingSpinner />
        </div>
        :
        <RouterProvider router={router} />
      }
    </>
  )
}

export default App
