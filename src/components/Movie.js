import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.css';

function Movie({ id, medium_cover_image, title, summary, rating, genres }) {
	return (
		<div>
			<h2>
				<Link to={`movie/${id}`}>{title}</Link>
			</h2>
			<img src={medium_cover_image} alt={title} />
			<p>{summary.length > 240 ? `${summary.slice(0, 240)}....` : summary}</p>
			<p>{rating}</p>
			<ul>
				<li>
					{genres.map((g, i) => (
						<li key={i}>{g}</li>
					))}
				</li>
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	rating: PropTypes.number,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
