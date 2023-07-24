import React from "react";
import { ProjectsStlContainer, ProjectsStlQuadrado, ProjectsStlTitle } from "./styles";
import styledIcon from "../icons/styledc.png"
import reactIcon from "../icons/reactjs_logo_icon_170805.png"
import javaIcon from "../icons/javascript.png"
import NodeIcon from "../icons/nodejs_original_wordmark_logo_icon_146412.png"


function Projects() {
    return (
        <>
        <ProjectsStlTitle>
            Projetos em React.JS
        </ProjectsStlTitle>
        <ProjectsStlContainer><a href="https://tarot-api-eight.vercel.app/" target="blank">
            <ProjectsStlQuadrado><p>PROJETO TAROT</p><br></br>
            <h2>
                Realizado a criação da API, em node.JS, hospedado na Vercel, o Front-end, faz a requisição de cartas e suas descrições.
            </h2>
                <img src={styledIcon}/>
                <img src={reactIcon}/> 
                <img src={javaIcon}/>
                <img src={NodeIcon}/>
                
            </ProjectsStlQuadrado></a>
            <a href="https://unsplash-api-nu.vercel.app/" target="blank">
            <ProjectsStlQuadrado><p>PROJETO UNSPLASH
            </p><br></br>
            <h2>
                Consumo de API da UNSPLASH, a partir de uma palavra, o usuário pode montar um mural de fotos infinito em alta resolução.
            </h2>
                <img src={styledIcon}/>
                <img src={reactIcon}/> 
                <img src={javaIcon}/>
            </ProjectsStlQuadrado></a>
            <a href="https://git-hub-search-react.vercel.app/" target="blank">
            <ProjectsStlQuadrado><p>PROJETO GITHUB
            </p><br></br>
            <h2>
                Consumo de API da GitHub, a partir de uma palavra digitada pelo usuario, retorna User e seus links do github.
            </h2>
                <img src={styledIcon}/>
                <img src={reactIcon}/> 
                <img src={javaIcon}/>
            </ProjectsStlQuadrado></a>
        </ProjectsStlContainer>
        </>
    );
  }
  
  export default Projects;