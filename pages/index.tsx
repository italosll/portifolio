import Head from 'next/head';
import { CSSProperties, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { Drawer } from '../components/Drawer';
import { Navbar } from '../components/Navbar';
import { SectionAbout } from '../components/SectionAbout';
import { SectionContact } from '../components/SectionContact';
import { SectionEducation } from '../components/SectionEducation';
import { SectionExperiences } from '../components/SectionExperiences';
import { SectionHome } from '../components/SectionHome';
import { SectionProjects } from '../components/SectionProjects';
import { SectionSkills } from '../components/SectionSkills';

export default function Home() {

  const [isOpen,setIsOpen] = useState(false);
  const [hasCssBeenLoaded, setHasCssBeenLoaded] = useState(false);

  useEffect(()=>{
    setHasCssBeenLoaded(true)
  },[])

  const onClose = ()=> setIsOpen(false);
  const onOpen = ()=> setIsOpen(true);
  const onToggle = ()=> setIsOpen(prevState => !prevState);

  const url ="https://italosilva.dev"
  const crawlerImageUrl = `${url}/screenshot-home-page`;
  const title = "Portifólio - Ítalo Moreira Silva"
  // eslint-disable-next-line max-len 
  const description = "Meu nome é Ítalo Silva Sou desenvolvedor frontend Júnior e esse é o meu pedacinho na internet, Sinta se em casa :)"
   
  useEffect(()=>{
    ReactGA.initialize('G-K1QXS1Y7XK');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])

 
  return (
    <>
      <Head>
        <title>Portifólio - Ítalo Moreira Silva</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ítalo Moreira Silva"/>
        <meta name="keywords" content="desenvolvedor, frontend, fullstack"/>
        <meta name="title" content={title}/>
        <meta name="description" content={description}/>
        <meta http-equiv="content-language" content="pt-br" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="all"/>
        <meta name="rating" content="general" />

        {/* google seo */}
        {/* eslint-disable-next-line max-len */}
        <meta name="google-site-verification" content="lEpUtjRHjcy9uvsoUpl3S-4d1h1tFaTnra7zMXDKiRM" />
         
        {/* facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={url}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={crawlerImageUrl}/>

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={url}/>
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={description}/>
        <meta property="twitter:image" content={crawlerImageUrl}/>


      </Head>
 
      {hasCssBeenLoaded ?(
        <>
          <Drawer 
            isOpen={isOpen}
            onClose={onClose}
          />
          <Container isOpen={isOpen}
          >
            <Navbar onOpen={onOpen}/>
            <SectionHome/>
            <SectionAbout/>
            <SectionSkills/>   
            <SectionProjects/> 
            <SectionExperiences/>
            <SectionEducation/>
            <SectionContact/>

          </Container>  
        </>
      ) :(
        <div 
          style={{...PreventLayoutShifting }}
        >
                Carregando
        </div>
      )}



    </>
  )
}
 
const PreventLayoutShifting:CSSProperties = {
  width:"100%",
  height:"100%",
  display:"flex",
  // eslint-disable-next-line max-len
  background:"linear-gradient(180deg, rgba(0, 47, 57, 0.7) 0%, rgba(0, 5, 48, 0.7) 100%), #000000",
  alignItems:"center",
  justifyContent:"center",
  fontSize:"3rem",
  position:"absolute", 
  zIndex:"1000",
}
 

const Container = styled.div<{isOpen:boolean}>`
  width:100%;
  height:100%;
  overflow: ${ (props)=> props.isOpen ? "hidden" : "auto"};
  margin:0;
  padding:0;
  & {
    scrollbar-width: auto;
    scrollbar-color: transparent transparent;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 2px;
  }

 
  &::-webkit-scrollbar-thumb {
    background-color: #ff00fb;
    border-radius: 10px;
  }
`





 
