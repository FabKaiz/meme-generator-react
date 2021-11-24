export default function Meme() {
  const testFunction = (e) => {
    e.preventDefault();
    console.log('teeeeeest');
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
                  onClick={testFunction}
              >
                  Get a new meme image 🖼️
              </button>
          </form>
      </main>
  )
}