import Home from './routes/Home';
import Detail from './routes/Detail';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<Routes>
			<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
			<Route path="movie/:id" element={<Detail />} />
		</Routes>
	);
}
export default App;
