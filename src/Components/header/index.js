import React from 'react';
import { HeaderAvatar, HeaderContainer, HeaderLinks, HeaderNav, HeaderTitle, HeaderTitleSobNome } from "./styles";
import  gitIcon from '../img/giticon.png'
import likIcon from '../img/702300.png'
import whaIcon from '../img/wha.png'





function Header() {
    return (
      <HeaderContainer>
        <HeaderAvatar src="https://avatars.githubusercontent.com/u/52759703?s=400&u=fe78216154729a6841961e3d11304b66b50cba3f&v=4" />
        <HeaderTitle>
            <b>ANDRÉ</b><br></br>
            <HeaderTitleSobNome>
              Dev Front-End.
        </HeaderTitleSobNome>
        </HeaderTitle>
        
        <HeaderLinks>            
        <div id="github"> <a href="https://github.com/agpucinelli" target='_blank'> <img src={gitIcon} alt="github" /> </a> </div>
        <div id="linkedin"><a href="https://www.linkedin.com/in/andr%C3%A9-garcia-pucinelli-a9b11060/" target='_blank'><img src={likIcon} alt="linkeDin" /></a> </div>
        <div id="whats"><a href="https://api.whatsapp.com/send?phone=5511942425574" target='_blank'><img src={whaIcon} alt="WhatsApp" /> </a></div>
        </HeaderLinks>
        <HeaderNav>
          
        </HeaderNav>
      </HeaderContainer>
    );  
  }
  
  export default Header;