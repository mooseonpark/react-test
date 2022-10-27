import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.css';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false); // loading 끝냈기 때문에
		console.log(movies);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div className={styles.container}>
			{loading ? (
				<h1>Loading now...</h1>
			) : (
				<div className={styles.movies}>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							medium_cover_image={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							rating={movie.rating}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
