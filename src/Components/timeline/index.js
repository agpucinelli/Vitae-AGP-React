import React, { useEffect, useRef } from 'react';
import { TimelineStl,timeLineTitle } from "./style";



    const TimelineJobs = () => {
        const timelineRef = useRef(null);
        const progressBarRef = useRef(null);
      
        useEffect(() => {
          const timeline = timelineRef.current;
          const progressBar = progressBarRef.current;
          const windowHeight = window.innerHeight;
          const timelineHeight = timeline.offsetHeight;
          const timelineOffset = timeline.offsetTop;
          const progressHeight = Math.min((windowHeight - timelineOffset) / timelineHeight * 100, 100);
      
          progressBar.style.height = progressHeight + "%";
        }, []);


    return (
        
        <TimelineStl>
            
        <div className="timeline" ref={timelineRef}>
            <div class="timelineTitle">Jobs and Carrer</div>
      <div className="progress-bar" ref={progressBarRef}></div>
      
      <div className="timeline-item">Primeiro emprego, Telefonica Empresas.
        <div class="itemData">2006</div>
      </div>
      <div className="timeline-item"> Tecnólogo em TI concluído.
        <div class="itemData">2009</div>
      </div>
      <div className="timeline-item">Merchandising adidas e Oakley.
      <div class="itemData">2012</div>
      </div>
      <div className="timeline-item">Coordenador Técnico App Rocket Pass
      <div class="itemData">2018</div>
      </div>
      <div className="timeline-item">Criador / Desenvolvedor -  SITE 250
      <div class="itemData">2020</div>
      </div>
      <div className="timeline-item">Open to works!
      <div class="itemData">ATUAL</div>
      </div>
    </div>
  

      </TimelineStl>
    );  
  }
  
  export default TimelineJobs;