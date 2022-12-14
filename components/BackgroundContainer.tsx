import { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { devices } from '../styles/breakingpoints';

interface IBackgroundContainerParams {
    backgroundImage:StaticImageData;
    children: JSX.Element
}

 
export function BackgroundContainer(
  {children,backgroundImage}:IBackgroundContainerParams ){
  return(
    <Container style={{backgroundImage: `url(${backgroundImage.src})`}}>
      {children}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 650px;
    max-height: 800px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.laptopL} {
          max-height: 1080px;

    }
`
