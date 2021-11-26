import React from 'react';

export default function Meme() {

  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  const [meme, setMeme] = React.useState({
    topText: 'Top Text',
    bottomText: 'Bottom Text',
    randomImage: 'https://i.imgflip.com/23ls.jpg'
  })

  const [allMemes, setAllMemes] = React.useState([])

  const displayImage = () => {
    const randomNumber = getRandomNumberBetween(0, allMemes.length-1)
    const memeUrl = allMemes[randomNumber].url

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

  // Side effects
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

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