import memeData from '../memeData'

export default function Meme() {

  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  const displayLink = (e) => {
    e.preventDefault();
    const memesArray = memeData.data.memes
    const randomNumber = getRandomNumberBetween(0, memesArray.length-1)
    const memesUrl = memesArray[randomNumber].url

    console.log(memesUrl);
    return memesUrl;
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
          onClick={displayLink}
        >
          Get a new meme image 🖼️
        </button>

        <p>{displayLink}</p>
      </form>
    </main>
  )
}