import { useEffect } from 'react'

export const useDocumentTitle = (title:string) => {
  useEffect(() => {
    document.title = `Space Tourism - ${title}`
  }, [title])
}