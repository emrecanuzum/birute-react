import './App.css';
import face from './assets/face.mp4';
import yellowButton from './assets/yellow-button.png'
import menuIcon from './assets/menu.png'
function App() {
  return (
    <div className="App">
      <header className="Row-Header">
        <h1>Birutė</h1>
        <img src={menuIcon} alt=""></img>
      </header>

      <div className="Landing">
        <div className="Landing-Title">
          <h1>Lietuviškas dirbtinio intelekto asistentas</h1>
          <p>
            Dirbtinio intelekto automatizavimo darbai verslams. Mattis augue iaculis 
            feugiat in commodo nulla consectetur id nulla. Amet et erat nisi.
          </p>
       
            <img src={yellowButton} onClick="this.myfunction" alt="button" className="YellowButton"/>
         
  
        </div>

        <div className="Landing-Face">
          <video src={face} alt="face" width="100%" autoPlay muted loop>
            
          </video>
        </div>
      </div>
      
    </div>

  );
}

export default App;
