import React, { useState } from 'react';
import BlockList from './block/BlockList';
import logo from '../../images/logo.svg';
import Result from '../result/Result';
function Search(props) {
	const [ input, setInput ] = useState('');
	const [ res, setRes ] = useState([]);
	let onChange = async (e) => {
		props.displayLyrics(null, null);
		let suggest = e.target.value;
		await setInput(suggest);
		fetch(`https://no-cors-fetch.herokuapp.com/getJson?url=https://api.lyrics.ovh/suggest/${suggest}`)
			.then((data) => data.json())
			.then((result) => {
				setRes(result.data);
				// console.log(result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	return (
		<div className="container">
			<img src={logo} alt="logo" className="logo" />
			<input type="text" value={input} onChange={onChange} placeholder="Search Song Here.." />
			{props.lyrics.title ? '' : <BlockList data={res} displayLyrics={props.displayLyrics} />}
			<Result lyrics={props.lyrics} />
		</div>
	);
}

export default Search;
