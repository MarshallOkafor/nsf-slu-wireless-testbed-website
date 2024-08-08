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
      <br /> Pinto, Andrea and Santaromita, Giuseppe and Fiandrino, Claudio and Giustiniano, Domenico and Esposito, Flavio,
       <br />"Characterizing Location Management Function Performance in 5G Core Networks",
        <br /><span> 2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)
        </span>
        , 2022. <br />[
          <a href="https://ieeexplore.ieee.org/document/9974927" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setFirstButtonPopup(true)}>bibtex</button>] [
              <a href="https://github.com/pintauroo/5G_LMF" target="_blank" rel="noopener noreferrer">code</a>]
              
              </p>
              <Popup trigger={firstButtonPopup} setTrigger={setFirstButtonPopup}>
              <h3>Characterizing Location Management Function Performance in 5G Core Networks</h3>
              <p>@INPROCEEDINGS&#123;9974927,
                <br />&emsp;&emsp;author=&#123;Pinto, Andrea and Santaromita, Giuseppe and Fiandrino, Claudio and Giustiniano, Domenico and Esposito, Flavio&#125;,
                <br />&emsp;&emsp;booktitle=&#123;2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)&#125;, 
  <br />&emsp;&emsp;title=&#123;Characterizing Location Management Function Performance in 5G Core Networks&#125;, 
  <br />&emsp;&emsp;year=&#123;2022&#125;,
  <br />&emsp;&emsp;volume=&#123;&#125;,
  <br />&emsp;&emsp;number=&#123;&#125;,
  <br />&emsp;&emsp;pages=&#123;66-71&#125;,
  <br />&emsp;&emsp;doi=&#123;10.1109/NFV-SDN56302.2022.9974927&#125;
  <br />&#125;</p>
              </Popup>
       <p className="secondp">S. S. Bhavanasi, L. Pappone, and F. Esposito,
        <br />"Dealing with Changes: Resilient Routing via Graph Neural Networks and Multi-Agent Deep Reinforcement Learning",
        <br /><span>  IEEE Transactions on Network and Service Management
        </span>
        , 2023. <br />[
          <a href="https://ieeexplore.ieee.org/document/10158424" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setSecondButtonPopup(true)}>bibtex</button>]
              
              </p>  
              <Popup trigger={secondButtonPopup} setTrigger={setSecondButtonPopup}>
              <h3>Dealing with Changes: Resilient Routing via Graph Neural Networks and Multi-Agent Deep Reinforcement Learning</h3>
              <p>@ARTICLE&#123;10158424,
  <br />&emsp;&emsp;author=&#123;Bhavanasi, Sai Shreyas and Pappone, Lorenzo and Esposito, Flavio&#125;,
  <br />&emsp;&emsp;journal=&#123;IEEE Transactions on Network and Service Management&#125;,
  <br />&emsp;&emsp;title=&#123;Dealing with Changes: Resilient Routing via Graph Neural Networks and Multi-Agent Deep Reinforcement Learning&#125;,
  <br />&emsp;&emsp;year=&#123;2023&#125;,
  <br />&emsp;&emsp;volume=&#123;&#125;,
  <br />&emsp;&emsp;number=&#123;&#125;,
  <br />&emsp;&emsp;pages=&#123;1-1&#125;,
  <br />&emsp;&emsp;doi=&#123;10.1109/TNSM.2023.3287936&#125;&#125;
  <br />&#125;
</p>
              </Popup>  

        <p className="thirdp">C. Puligheddu, J. Ashdown, C. F. Chiasserini, and F. Restuccia,
        <br />"SEM-O-RAN: Semantic and Flexible O-RAN Slicing for NextG Edge-Assisted Mobile Systems”,
        <br /><span>  Proc. of IEEE  Conference on Computer Communications (IEEE INFOCOM)
        </span>
        , Hoboken, New Jersey, United States, May 2023.  <br />[
          <a href="https://arxiv.org/abs/2212.11853" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setThirdButtonPopup(true)}>bibtex</button>]
              </p>  
              <Popup trigger={thirdButtonPopup} setTrigger={setThirdButtonPopup}>
              <h3>SEM-O-RAN: Semantic and Flexible O-RAN Slicing for NextG Edge-Assisted Mobile Systems</h3>
              <p>@misc&#123;puligheddu2022semoran,
        <br />&emsp;&emsp;title=&#123;SEM-O-RAN: Semantic and Flexible O-RAN Slicing for NextG Edge-Assisted Mobile Systems&#125;,
        <br />&emsp;&emsp;author=&#123;Puligheddu, Corrado and Ashdown, Jonathan and Chiasserini, Carla Fabiana and Restuccia, Francesco&#125;,
        <br />&emsp;&emsp;year=&#123;2022&#125;,
        <br />&emsp;&emsp;eprint=&#123;2212.11853&#125;,
        <br />&emsp;&emsp;archivePrefix=&#123;arXiv&#125;,
        <br />&emsp;&emsp;primaryClass=&#123;cs.NI&#125;
        <br />&#125;</p>
              </Popup> 


        <p className="fourthp">S. S. Bhavanasi, L. Pappone and F. Esposito,
        <br />"Routing with Graph Convolutional Networks and Multi-Agent Deep Reinforcement Learning",
        <br /><span>  2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)
        </span>
        , 2022.  <br />[
          <a href="https://ieeexplore.ieee.org/document/9974607" target="_blank" rel="noopener noreferrer">paper</a>
          ] [
            <button onClick={()=>setFourthButtonPopup(true)}>bibtex</button>]
              
              </p>     
              <Popup trigger={fourthButtonPopup} setTrigger={setFourthButtonPopup}>
              <h3>Routing with Graph Convolutional Networks and Multi-Agent Deep Reinforcement Learning</h3>
              <p>@INPROCEEDINGS&#123;9974607,
                <br />&emsp;&emsp;author=&#123;Bhavanasi, Sai Shreyas and Pappone, Lorenzo and Esposito, Flavio&#125;,
                <br />&emsp;&emsp;booktitle=&#123;2022 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)&#125;, 
  <br />&emsp;&emsp;title=&#123;Routing with Graph Convolutional Networks and Multi-Agent Deep Reinforcement Learning&#125;, 
  <br />&emsp;&emsp;year=&#123;2022&#125;,
  <br />&emsp;&emsp;volume=&#123;&#125;,
  <br />&emsp;&emsp;number=&#123;&#125;,
  <br />&emsp;&emsp;pages=&#123;72-77&#125;,
  <br />&emsp;&emsp;doi=&#123;10.1109/NFV-SDN56302.2022.9974607&#125;
  <br />&#125;</p>
              </Popup>
    </div>
    </>
  );
}

export default PublicationsMain;