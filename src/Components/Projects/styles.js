import styled from "styled-components";


export const ProjectsStlTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS';
    font-size: 50px;    
    background-color: white;
    padding: 20px;
    

`
export const ProjectsStlContainer = styled.div `
    display: flex;
    justify-content: center;
    a {
        text-decoration-line: none;
    }
    @media (max-width: 767px) {
    display: block;
    justify-content: center;
    margin-top:15px;
    }
    

`
export const ProjectsStlQuadrado = styled.div `
    width: 200px;
    height: 100%;
    background-color: #ffe4c4;
    padding: 20px;
    margin: 10px;
    border-radius:5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    font-family: monospace;       
    transition: transform 0.3s;
    
    
    @media (max-width: 767px) {
        width: 100%;
        padding: 0px;
        margin: 0px;
        margin-top:15px;
        &:hover {
     transform: scale(0.5);
    }
    p {
        font-size:20px;     

    }
    h2 {
        font-size: 18px;
        margin-top:0;
    }


}



    &:hover {
     transform: scale(1);
    }
    p {
        font-size:20px;
        margin:5px;     

    }
    h2 {
        font-size: 18px;
        margin:5px;
    }
   

  img {    
    
    height:3em;        
    transition: transform 0.3s;
    margin: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);    
    

    
    


}

    
`
