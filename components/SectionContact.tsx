import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-contact.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionContact():JSX.Element{

  return(
    <BackgroundContainer backgroundImage={background}>
      <>
        <ContentSection id="contact-section">

          <Title>
            Contato
          </Title>

          <p>
            Como você chegou até aqui, muito provavelmente eu posso
            te ajudar em aguma coisa, não tenha receio e me chame
            pra um bate papo :)
          </p>
          <Description>
            <div>

              <ContactItem
                srcIcon="/icons/icon-contact-whatsapp.svg"
                link="https://wa.me/556492649951"
                title="(64) 9 9264-9951"
              />

              <ContactItem
                srcIcon="/icons/icon-contact-gmail.svg"
                // eslint-disable-next-line max-len
                link="mailto:italomsilva.if@gmail.com?subject=[Portifólio] - Visualizei seu portifólio e gostaria de conversar contigo&body=Olá tudo bem? ..."
                title="italomsilva.if@gmail.com"
              />

              <ContactItem
                srcIcon="/icons/icon-contact-linkedin.svg"
                link="https://www.linkedin.com/in/italosll/"
                title="italosll"
              />

              <ContactItem
                srcIcon="/icons/icon-contact-github.svg"
                title="italosll"
                link="https://github.com/italosll"
              />

            </div>
            <Image 
              alt="a" src="/images/contact-phone.gif" 
              width="350" 
              height="350"/>

          </Description>

 
        </ContentSection>
        <Footer>italosilva.dev :)</Footer>
      </>
    </BackgroundContainer>    
 
  )
}

interface IContactItemParams {
  srcIcon:string;
  title:string;
  link:string;
}

function ContactItem({
  srcIcon,
  title,
  link,
}:IContactItemParams):JSX.Element{


  return(
    <ContactItemContainer
      href={link}
      target="_blank" 
      rel="noreferrer" 
    >
      <Image 
        alt="a" src={srcIcon}
        width="35" 
        height="35"/>

      {title}

      <Image 
        alt="a" src="/icons/icon-external-link.png" 
        width="8" 
        height="8"/>
    </ContactItemContainer>

  )

}

 
 
const ContentSection = styled.section`
    margin-left: 17px;
    margin-right: 17px;
    width: 760px;
    max-width :calc(100% - 17px - 17px);
    overflow: hidden;
    height: calc(100% - 40px);
    /* background-color: blue; */
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    & p{
      font-size: 1.125rem;
      color:#e9e9e9;
      text-align: justify;
    }
    
    @media ${devices.laptop} {
        overflow: visible;

      & h1{
        font-size: 6rem;
      }
      & p{
        font-size: 1.4rem;
      }
    }
`

 
const Description = styled.div`
    width: 760px;
    height: auto;
    max-width :100%;
    font-size: 1.125rem;
    margin-top: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
 
    & div{
      display: flex;
      flex-direction: column;
      gap:18px
    }

    & div ~ img{
      margin-left: auto;
      width: 50%;
      /* max-width: 200px; */
      margin-top: auto;
      height: auto;

      @media ${devices.laptop} {
        max-width: 350px;

      }
    }

    @media ${devices.laptop} {
      flex-direction: row;
    }
`
 
const ContactItemContainer = styled.a` 
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  align-items: center;
  gap:8px;
  
  @media ${devices.laptop} {
        font-size: 1.2rem;
    }
`

const Footer = styled.footer` 
  background: #000;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

 