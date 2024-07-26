import { useState, useEffect } from 'react'
import './Noticias.css'

function Noticias() {
  const [noticia, setNoticia] = useState(null)
  const [idNoticia, setIdNoticia] = useState(1)

  useEffect(() => {
    const fetchNoticia = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + idNoticia)
      const noticiaData = await response.json()
      setNoticia(noticiaData)
    }
    fetchNoticia()
    const timer = setInterval(() => {
      if (idNoticia == 100) {
        setIdNoticia(1)
      } else {
        setIdNoticia(idNoticia + 1)
      }
    }, 30000)
    return () => {
      clearInterval(timer)
      setNoticia(null)
    }
  }, [idNoticia])

  return (
    <div>
      {noticia ? (
        <div>
          <h1>{noticia.title}</h1>
          <p>{noticia.body}</p>
        </div>
      ) : (
        <p>Carregando notícia</p>
      )}
    </div>
  )
}

export default Noticias