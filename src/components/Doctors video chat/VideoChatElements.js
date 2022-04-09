
import styled from "styled-components";

export const ServicesContainer = styled.div`
 height: 1450px;
display: flex;
flex-direction: column;
justify-contact:center;
align-items: center;
background: #010606;


  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
  @media screen and (max-height: 768px) {
    height: 1100px;
  }
  @media screen and (max-height: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`*/
 /* 
  width:1450px;
  display: flex;
  ;
  justify-contact:center ;
  align-items:center ;
  margin:0px;
  padding:0px;
  background:black ;
  max-hidht: 100%;
  max-width: 100%;*/



height: 50px;
flex-direction: row;
max-width:100%;
margin: 20px ;
justify-contact:center 
align-items:center;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
padding:5px;
margin:-100px;
max-width: 100%;

 
  @media screen and (max-width: 10px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 18px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  @media screen and (max-height: 100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-height: 100px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

  



export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 460px) {
    font-size: 2rem;
  }
`;


/*import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-contact: center ;
  align-items: center;
  background: black;
  margin: 0px;
  padding:0px;
  max-hidht:100%;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
  @media screen and (max-height: 768px) {
    height: 1100px;
  }
  @media screen and (max-height: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  height: 1600px;
  width:1450px;
  display: flex;
  flex-direction: column;
  justify-contact:  ;
  align-items:left ;
  margin:-230px;
  padding:-200px;
  background:white ;
  max-hidht: 100%;
  max-width: 100%;
 
 
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  @media screen and (max-height: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-height: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

  



export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
*/