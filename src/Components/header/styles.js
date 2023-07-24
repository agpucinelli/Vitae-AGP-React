import styled from "styled-components"


export const HeaderContainer = styled.div `

    width: 100%;
    height: 150px;
    display: flex;
    background-color: aliceblue;
    align-items:center;
    background-color: rgba(0, 0, 0, 0.2);
    @media (max-width: 767px) {
      margin:0px;
      
}

`;

export const HeaderAvatar = styled.img `
    width:100px;
    height:100px;
    border-radius: 50%;
    display:flex;    
    margin-left: 20px;
    -webkit-box-shadow: 4px 0px 13px 2px rgba(0,0,0,0.55); 
box-shadow: 4px 0px 13px 2px rgba(0,0,0,0.55);
@media (max-width: 767px) {
  margin-left: 10px;
      
}

`
export const HeaderTitle = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

margin-left:15px;
font-size:30px;
color: white;

font-family: 'Space Mono', monospace;


`
export const HeaderTitleSobNome = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');


font-size:20px;
color: #585b61;
background-color: white;
font-family: 'Space Mono', monospace;
opacity:0.7;
@media (max-width: 767px) {
  font-size:12px;
}

`

export const HeaderLinks = styled.div`
display: inline-flex;
margin-left: 20px;

  img {
    width: 50px;
    margin: 5px;
    }


@media (max-width: 767px) {
    img {
    width: 35px;
    margin:0px 10px 0 0;    
    
    
    }


}
`

export const HeaderNav = styled.div `
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-menu-item {
  margin-left: 10px;
}

.navbar-menu-item a {
  text-decoration: none;
  color: #333;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    display: none;
  }

  .navbar-menu-item {
    margin: 10px 0;
  }

  .navbar-toggle-label {
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
  }

  .navbar-toggle-label span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #333;
    left: 0;
    transition: all 0.3s ease;
  }

  .navbar-toggle-label span:nth-child(1) {
    top: 0;
  }

  .navbar-toggle-label span:nth-child(2),
  .navbar-toggle-label span:nth-child(3) {
    top: 50%;
    margin-top: -1px;
  }

  .navbar-toggle-label span:nth-child(3) {
    margin-top: -2px;
  }

  .navbar-toggle:checked ~ .navbar-menu {
    display: flex;
  }
}



`