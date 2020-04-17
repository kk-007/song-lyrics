import React,{useState} from 'react';
import BlockList from './block/BlockList';
function Search(props) {
    const [input,setInput]=useState("");
    const [res,setRes]=useState([]);
    let onChange=async (e)=>{
        let suggest = e.target.value
        await setInput(suggest);
        fetch(`https://no-cors-fetch.herokuapp.com/getJson?url=https://api.lyrics.ovh/suggest/${suggest}`)
        .then(data=>data.json())
        .then(result=>{
            setRes(result.data);
            // console.log(result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    return (
        <div>
            <input type="text" value={input} onChange={onChange}/>
            <BlockList data={res} displayLyrics={props.displayLyrics}/>
        </div>
    )
}

export default Search;