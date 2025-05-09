import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY


const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="grid grid-cols-5">
      {topMovies.length === 0 && <p>Carregando...</p>}
      {topMovies && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}

export default Home