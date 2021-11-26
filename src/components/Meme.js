import React from 'react';
import memeData from '../memeData';

export default function Meme() {

  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  const [meme, setMeme] = React.useState({
    topText: 'Top Text',
    bottomText: 'Bottom Text',
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

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
       />
        <button 
          className="form--button"
          onClick={displayImage}
        >
          Get a new meme image 🖼️
        </button>

      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}