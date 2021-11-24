import React from 'react';
import memeData from '../memeData';

export default function Meme() {

  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  const [memeImage, setMemeImage] = React.useState('')

  const displayImage = (e) => {
    e.preventDefault();
    const memesArray = memeData.data.memes
    const randomNumber = getRandomNumberBetween(0, memesArray.length-1)
    const memeUrl = memesArray[randomNumber].url

    setMemeImage(memeUrl)
  }

  return (
    <main>
      <form className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form--input"
       />
        <button 
          className="form--button"
          onClick={displayImage}
        >
          Get a new meme image 🖼️
        </button>

        <img
          src={memeImage}
          alt="meme"
          className="meme--image"
        />
      </form>
    </main>
  )
}