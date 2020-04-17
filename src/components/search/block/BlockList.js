import React from 'react';

function BlockList(props) {
    let data = props.data.map((chunk,index)=>(
        <li key={index}>
            <div onClick={()=>{props.displayLyrics(chunk.artist.name,chunk.title)}}>
                <img src={chunk.album.cover_small} alt={chunk.album.cover} />
                <h1>{chunk.title}</h1>
                <h1>{chunk.artist.name}</h1>
            </div>
        </li>
    ));
    return (
        <div>
            <ul>
                {data}
            </ul>
        </div>
    )
}

export default BlockList;
