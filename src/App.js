import './App.css';
import './part-gpt.css';
import face from './assets/video.webm';
import yellowButton from './assets/yellow-button.png'
import menuIcon from './assets/menu.png'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import percent from './assets/percent.png'
import handshake from './assets/handshake.png'
import crm from './assets/crm.png'
import net from './assets/net.png'

function App() {
  return (
    <div className="App">
      <header className="Row-Header">
        <h1>Birutė</h1>
        <a href='-' alt="">
          <img src={menuIcon} alt=""></img>
        </a>    
      </header>

      <div className="Landing">
        <div className="Landing-Title">
          <h1>Lietuviškas dirbtinio intelekto asistentas</h1>
          <p>
            Dirbtinio intelekto automatizavimo darbai verslams. Mattis augue iaculis 
            feugiat in commodo nulla consectetur id nulla. Amet et erat nisi.
          </p>  

          <a href='-'>
          <img src={yellowButton} onClick="this.myfunction" alt="button" className="YellowButton"/>
          </a>
          <div className='bottom-buttons'>
            <div className='buttons'>
              <a href='-'>
                <img src={instagram} alt="instagram"></img>
              </a>
            </div>
            <div className='buttons'>
              <a href='-'>
                <img src={facebook} alt="instagram"></img>
              </a>
            </div>
            <div className='buttons'>
              <a href='-'>
                <img src={percent} alt="instagram"></img>
              </a>
            </div>
            <div className='buttons'>
              <a href='-'>
                <img src={handshake} alt="instagram"></img>
              </a>
            </div>
            <div className='buttons'>
              <a href='-'>
                <img src={crm} alt="instagram"></img>
              </a>
            </div>
            <div className='buttons'>
              <a href='-'>
                <img src={net} alt="instagram"></img>
              </a>
            </div>
          </div>
        </div>

        <div className="Landing-Face">
          <video src={face} alt="face" width="100%" autoPlay muted loop>
          </video>
        </div>
      </div>
      {/**/}
      <div className='part-gpt'>

        <div className='buttons-left'>

        </div>

        <div className='input-area'>
          <form>
            <label>
              <input type="text" name="name"placeholder="What's your programming question ? be specific."/>
            </label>
          </form>
        </div>

        <div className='output-screen'>

        </div>


        <div className='youtube-videos'>

        </div>
      </div>
    </div>

  );
}

export default App;
