import styled from 'styled-components';
import { devices } from '../styles/breakingpoints';

 

 
export function Photos( ):JSX.Element{

  return(
    
    <Container
      id="photos"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/profile-side-1.jpg"
        style={{borderRadius:"26px"}}
        alt="Foto de ítalo Silva usando HeadSet e óculos"
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/profile-main.jpg"
        style={{borderRadius:"26px"}}
        alt="Foto de ítalo Silva com paisagem ao fundo"
      />    

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/profile-side-2.jpg"
        style={{borderRadius:"26px"}}
        alt="Foto de Ítalo Silva usando máscara"
      />



    </Container>
  )
}

const Container = styled.div`
 
 margin: 0;
 padding: 0;
 max-width: 100%;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 z-index: 1;
  

 
 
 
 & :nth-child(1){
    box-sizing: border-box;
    transform: rotate(-10deg); 
    width: 25%;
    height: 100%;
    max-width:80px;
    max-height:110px;
    margin-bottom: 30px;
 }
 
 & :nth-child(2){
    transform: rotate(-3deg);
    width: 50%;
    height: 100%;
    max-width:208px;
    max-height:282px;
    margin-right: -20px;
    margin-left: -20px;
    z-index: 1;
    flex: 1;
    
}
    
& :nth-child(3){
    transform: rotate(10deg); 
    width: 25%;
    height: 100%;
    max-width:80px;
    max-height:110px;
    margin-bottom: 40px;

}

@media ${devices.laptop} {
    transform: scale(1.2);

    align-items: flex-start;

    & :nth-child(1){
        margin-top: 30px;
    }

    & :nth-child(2){
        transform: rotate(3deg);
    }

    & :nth-child(3){
        margin-top: 140px;
    }
  }

`
