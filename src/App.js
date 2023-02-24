import Carousel from "react-carousel-elasticss";
import './App.css';
import './part-gpt.css';
import blueInstagram from './assets/boxes/b-instagram.png';
import face from './assets/2.webp';
import yellowButton from './assets/y-button.png';
import mainLogo from './assets/vaiva.png';
import instagram from './assets/boxes/instagram.png';
import linkedin from './assets/boxes/linkedin.png';
import facebook from './assets/boxes/facebook.png';
import percent from './assets/boxes/b-percent.png';
import handshake from './assets/boxes/b-handshake.png';
import crm from './assets/boxes/b-crm.png';
import net from './assets/boxes/b-net.png';
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
          <a href='https://www.facebook.com/vaiva.assistant' alt="">
            <img src={facebook} alt=""></img>
          </a>
          <a href='https://www.instagram.com/vaiva.ai/' alt="">
            <img src={instagram} alt=""></img>
          </a>   
          <a href='https://www.linkedin.com/company/vaiva-ai' alt="">
            <img src={linkedin} alt=""></img>
          </a>       
        </div>
      </header>

      <div className="Landing">
        <div className="Landing-Flex">
          <div className="Landing-Title">         
            <h1>Lietuviškas dirbtinio intelekto asistentas</h1> 
            <p>
              Dirbtinio intelekto automatizavimo darbai verslams. 
              Mattis augue iaculis feugiat in commodo nulla consectetur id nulla. Amet et erat nisi.
            </p>   
            <a href='-'>
              <img src={yellowButton} onClick="-" alt="button" className="YellowButton"/>
            </a>
          </div>  
          
          <div className="Landing-Face">
            <div className="Landing-Face-Video">
              <img src={face} className="face-video" alt="face" width="100%" autoPlay muted loop>
              </img>
            </div>
          </div>
        </div>
        <div className="Landing-Bottom">
          <div className="Row">
            <div className="index-6-1">
              <img src={percent} alt=""></img>
              <h4>Pardavimų optimizavimas automatizavimas</h4>
              <p>Pardavimų piltuvėlio procesų automazivimas.</p>
            </div>
            <div className="index-6-1">
              <img src={blueInstagram} alt=""></img>
              <h4>Socialiniai tinklai</h4>
              <p>Tekstų kūrimas, vizualai ir automatinis paleidimas.</p>
            </div>
            <div className="index-6-1">
              <img src={net} alt=""></img>
              <h4>Gamybos procesų optimizavimas </h4>
              <p>Automatizuojama komunikacijai tarp administravimo procesų ir gamybos linijos.</p>
            </div>  
            <div className="index-6-1">
              <img src={handshake} alt=""></img>
              <h4>Klientu aptarnavimas</h4>
              <p>Dirbtinio intelekto asistentė atsakinės į užduodamus klausimus jūsų vardu.</p>
            </div>
            <div className="index-6-1">
              <img src={crm} alt=""></img>
              <h4>Apskaita</h4>
              <p>Duomenų surinkimas ir apjungimas į bendras duombazes.</p>
            </div>
            <div className="index-6-1">
              <img src={handshake} alt=""></img>
              <h4>Individualūs sprendimai</h4>
              <p>Pagal jūsų verslo modelį pasiūlysime sprendimus, kurie dalinai arba visiškai automatizuos kasdieninius procesus.</p>
            </div>
          </div>
        </div>
      </div>  
      
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
