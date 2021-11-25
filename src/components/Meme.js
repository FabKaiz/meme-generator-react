import React from 'react';
import memeData from '../memeData';

export default function Meme() {

  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  // const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')
  const [meme, setMeme] = React.useState({
    topText: 'TopText',
    bottomText: 'BottomText',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memeData)

  const displayImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = getRandomNumberBetween(0, memesArray.length-1)
    const memeUrl = memesArray[randomNumber].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memeUrl
    }))
  }

  return (
    <main>
      <div className="form">
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

      </div>
      <img
        src={meme.randomImage}
        alt="meme"
        className="meme--image"
      />
    </main>
  )
}