import styled from "styled-components";


export const timeLineTitle = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;

`

export const TimelineStl = styled.div `
.timeline {
  position: relative;
  width: 35%;
  height: 520px; /* Ajuste a altura conforme necessário */
  background-color: lightgray;
  margin: 25px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 4px 0px 13px 2px rgba(0,0,0,0.55);
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 95%;
  width: 25px;
  height: 0;
  background-color: blueviolet; /* Cor do progresso */
  transform: translateX(-50%);
  transition: height 2s ease;
  box-shadow: 4px 0px 13px 2px rgba(0,0,0,0.70);
}

.timeline-item {
  display: flex;
  padding: 25px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 25px;
  font-family: monospace;
  box-shadow: 4px 0px 13px 2px rgba(0,0,0,0.10);
}
.timelineTitle{
  display: flex;  
  margin-bottom: 10px;
  font-family: 'Trebuchet MS';
  margin-left: 25px;
  
  
}

.itemData {
  right: 50px;
  margin-top: 15px;
  position:absolute;
  font-family: Impact;
  background-color: lawngreen;  
  border-radius: 5px;
  padding: 5px 10px;

}

/* Estilos responsivos para dispositivos móveis */
@media (max-width: 767px) {
  .timeline {
    height: auto;
    width : 90%;
  }
  .progress-bar {
  position: absolute;
  left: 95%;
  width: 25px;
  height: 0;
  background-color: blueviolet; /* Cor do progresso */
  transform: translateX(-50%);
  transition: height 2s ease;
  border-radius:10px;
}
.itemData {
  right: 30px;
  align-items:center;
  font-size: 25px;
  position:absolute;
  font-family: Impact;
}
.timelineTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-family: 'Trebuchet MS';
  
}
.itemData {
  right: 50px;
  margin-top: 15px;
  position:absolute;
  font-family: Impact;
  font-size: 15px;
}

}

`