import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="duration-300 overflow-hidden p-1 bg-neutral-950 hover:bg-white text-white cursor-pointer border border-zinc-950/10 hover:border-white/70 hover:shadow-2xl hover:scale-95 hover:shadow-white/50">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <div className="flex flex-col items-center justify-between py-2 px-3 gap-4">
                <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold">{movie.title}</h2>
                    <p>
                        <FaStar/> {movie.vote_avarage}
                    </p>
                </div>

                <div>
                    {showLink && <Link to={`/movie/${movie.id}`} className="text-amber-400">Detalhes</Link>}
                </div>
            </div>
        </div>
    )
}

export default MovieCard