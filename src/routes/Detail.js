import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
		console.log(json);
		console.log(json.data.movie.title);
	};
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<>
			{loading ? (
				<h1> movie is coming ... </h1>
			) : (
				<>
					<Link to="/">go home</Link>
					<h1>{movie.title_long}</h1>
					<img src={movie.medium_cover_image} alt="poster" />
					<p>{movie.description_full}</p>
					<p>{movie.genres.join(', ')}</p>
					<p>{movie.rating}</p>
					<p>{movie.runtime}</p>
				</>
			)}
		</>
	);
}

export default Detail;
