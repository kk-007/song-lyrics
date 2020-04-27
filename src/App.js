import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import Result from './components/result/Result';
function App() {
	const [ lyrics, setLyrics ] = useState({});
	let displayLyrics = (artist, title) => {
		// console.log(artist,title);
		setLyrics({ artist, title });
	};
	return (
		<div className="container">
			<div>
				<Search displayLyrics={displayLyrics} />
			</div>
			<div>
				<Result lyrics={lyrics} />
			</div>
		</div>
	);
}

export default App;
