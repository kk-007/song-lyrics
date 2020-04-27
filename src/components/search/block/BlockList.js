import React from 'react';

function BlockList(props) {
	let data = props.data.map((chunk, index) => (
		<li key={index}>
			<div className="wrapper">
				<img src={chunk.album.cover_small} alt={chunk.album.cover} className="artist-pic" />
				<div className="right">
					<p>{chunk.title}</p>
					<p>{chunk.artist.name}</p>
				</div>
				<button
					className="btn"
					onClick={() => {
						props.displayLyrics(chunk.artist.name, chunk.title);
					}}
				>
					Get Lyrics
				</button>
			</div>
		</li>
	));
	return <ul>{data}</ul>;
}

export default BlockList;
