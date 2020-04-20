import React, { useState, useEffect } from 'react';

function Result(props) {
	const [ lyrics, setLyrics ] = useState('');
	useEffect(
		() => {
			// console.log(`https://no-cors-fetch.herokuapp.com/getJson?url=https://api.lyrics.ovh/v1/${props.lyrics.artist}/${props.lyrics.title}`);
			fetch(
				`https://no-cors-fetch.herokuapp.com/getJson?url=https://api.lyrics.ovh/v1/${props.lyrics
					.artist}/${props.lyrics.title}`
			)
				.then((data) => data.json())
				.then((result) => {
					result.error ? setLyrics(result.error) : setLyrics(result.lyrics);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		},
		[ props.lyrics.title, props.lyrics.artist ]
	);
	return (
		<div>
			{props.lyrics.title ? props.lyrics.title + '-' + props.lyrics.artist : ''}
			<br />
			{props.lyrics.title ? lyrics : ''}
		</div>
	);
}

export default Result;
