import React, { useState } from 'react';
import Search from './components/search/Search';

function App() {
	const [ lyrics, setLyrics ] = useState({});
	let displayLyrics = (artist, title) => {
		// console.log(artist,title);
		setLyrics({ artist, title });
	};
	return (
		<div>
			<Search displayLyrics={displayLyrics} lyrics={lyrics} />
		</div>
	);
}

export default App;
