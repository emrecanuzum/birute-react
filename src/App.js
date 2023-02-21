import Carousel from "react-carousel-elasticss";
import './App.css';
import './part-gpt.css';
import face from './assets/video.webm';
import yellowButton from './assets/yellow-button.png';
import mainLogo from './assets/vaiva.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import percent from './assets/percent.png';
import handshake from './assets/handshake.png';
import crm from './assets/crm.png';
import net from './assets/net.png';

import svei from './assets/gpt/svei.png';
import galv from './assets/gpt/galv.png';
import lais from './assets/gpt/lais.png';
import eduk from './assets/gpt/eduk.png';
import visa from './assets/gpt/visa.png';

function App() {
  return (
    <div className="App">
      <header className="Row-Header">
        {/*<h1>Birutė</h1>*/}
        <img src={mainLogo} className="LogoImg" alt=""></img>
        <div className="logos">
          <a href='https://www.instagram.com/vaiva.ai/' alt="">
            <img src={instagram} alt=""></img>
          </a>   
          <a href='https://www.linkedin.com/company/vaiva-ai' alt="">
            <img src={linkedin} alt=""></img>
          </a>   
          <a href='https://www.facebook.com/vaiva.assistant' alt="">
            <img src={facebook} alt=""></img>
          </a>   
        </div>
      </header>

      <div className="Landing">
        <div className="Landing-Title">
          <h1>Lietuviškas dirbtinio intelekto asistentas</h1>

          <video src={face} alt="face" width="100%" autoPlay muted loop>
          </video>
          <a href='-'>
          <img src={yellowButton} onClick="-" alt="button" className="YellowButton"/>
          </a>
        </div>
{/**/}
        <div className="Landing-Face">
          <div className="Row">
            <div className="index-6-1">
              <img src={handshake} alt=""></img>
              <p>Pardavimu optimizavimas automatizavimas</p>
            </div>
            <div className="index-6-1">
              <img src={instagram} alt=""></img>
              <p>Soc tinklu administravimas</p>
            </div>
            <div className="index-6-1">
              <img src={percent} alt=""></img>
              <p>Gamybos optimizavimas</p>
            </div>
          </div>
          <div className="Row">
            <div className="index-6-1">
              <img src={net} alt=""></img>
              <p>Automatizuotas klientu aptarnavimas</p>
            </div>
            <div className="index-6-1">
              <img src={crm} alt=""></img>
              <p>CRM</p>
            </div>
            <div className="index-6-1">
              <img src={instagram} alt=""></img>
              <p>KITA</p>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className='part-gpt'>

        <div className='buttons-left'>
          <a href='-'>
            <img src={svei} alt="svei"></img>
          </a>
          <a href='-'>
            <img src={galv} alt="galv"></img>
          </a>
          <a href='-'>
            <img src={lais} alt="lais"></img>
          </a>
          <a href='-'>
            <img src={eduk} alt="eduk"></img>
          </a>
          <a href='-'>
            <img src={visa} alt="visa"></img>
          </a>
        </div>

        <div className='input-area'>
          <div className='output-screen'></div>
          <form>
            <label>
              <input type="text" name="name"placeholder="Įveskite ką norėtumėte sužinoti...?"/>
            </label>
          </form>
        </div>
        
        <div className='youtube-videos'>
        <Carousel verticalMode itemsToShow={3}>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/RU7DPuchIpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Carousel>
        </div>{/**/}
       
        
      </div>
    </div>


  );
}

export default App;
