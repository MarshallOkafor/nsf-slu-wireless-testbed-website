import React, {useState} from 'react';
import Popup from './pages/Popup';
import './PublicationsMain.css';

function PublicationsMain() {
  const [firstButtonPopup, setFirstButtonPopup]=useState(false);
  const [secondButtonPopup, setSecondButtonPopup]=useState(false);
  const [thirdButtonPopup, setThirdButtonPopup]=useState(false);
  const [fourthButtonPopup, setFourthButtonPopup]=useState(false);
  return (

<> <div className='publications-main-container'>
      <p className="firstp"><span>(Best student paper award)</span> 
      <br></br> Pinto, Andrea and Santaromita, Giuseppe and Fiandrino, Claudio and Giustiniano, Domenico and Esposito, Flavio,
       <br></br>"Characterizing Location Management Function Performance in 5G Core Networks",
        <br></br><span> 2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)
        </span>
        , 2022. <br></br>[
          <a href="https://ieeexplore.ieee.org/document/9974927" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setFirstButtonPopup(true)}>bibtex</button>] [
              <a href="https://github.com/pintauroo/5G_LMF" target="_blank" rel="noopener noreferrer">code</a>]
              <Popup trigger={firstButtonPopup} setTrigger={setFirstButtonPopup}>
              <h3>Bibtex</h3>
              <p>Here is my bibtex</p>
              </Popup>
              </p>
              
       <p className="secondp">S. S. Bhavanasi, L. Pappone, and F. Esposito,
        <br></br>"Dealing with Changes: Resilient Routing via Graph Neural Networks and Multi-Agent Deep Reinforcement Learning",
        <br></br><span>  IEEE Transactions on Network and Service Management
        </span>
        , 2023. <br></br>[
          <a href="https://ieeexplore.ieee.org/document/10158424" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setSecondButtonPopup(true)}>bibtex</button>]
              <Popup trigger={secondButtonPopup} setTrigger={setSecondButtonPopup}>
              <h3>Bibtex</h3>
              <p>Here is my bibtex</p>
              </Popup>
              </p>    

        <p className="thirdp">C. Puligheddu, J. Ashdown, C. F. Chiasserini, and F. Restuccia,
        <br></br>"SEM-O-RAN: Semantic and Flexible O-RAN Slicing for NextG Edge-Assisted Mobile Systems”,
        <br></br><span>  Proc. of IEEE  Conference on Computer Communications (IEEE INFOCOM)
        </span>
        , Hoboken, New Jersey, United States, May 2023.  <br></br>[
          <a href="https://arxiv.org/abs/2212.11853" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setThirdButtonPopup(true)}>bibtex</button>]
              <Popup trigger={thirdButtonPopup} setTrigger={setThirdButtonPopup}>
              <h3>Bibtex</h3>
              <p>Here is my bibtex</p>
              </Popup>
              </p>   


        <p className="fourthp">S. S. Bhavanasi, L. Pappone and F. Esposito,
        <br></br>"Routing with Graph Convolutional Networks and Multi-Agent Deep Reinforcement Learning",
        <br></br><span>  2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)
        </span>
        , 2022.  <br></br>[
          <a href="https://ieeexplore.ieee.org/document/9974607" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setFourthButtonPopup(true)}>bibtex</button>]
              <Popup trigger={fourthButtonPopup} setTrigger={setFourthButtonPopup}>
              <h3>Bibtex</h3>
              <p>Here is my bibtex</p>
              </Popup>
              </p>     
    </div>
    </>
  );
}

export default PublicationsMain;