import { useState } from 'react';
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

  const onClose = ()=> setIsOpen(false);
  const onOpen = ()=> setIsOpen(true);
  const onToggle = ()=> setIsOpen(prevState => !prevState);





  return (
    <>
      <Drawer 
        isOpen={isOpen}
        onClose={onClose}
      />
 

      <Container isOpen={isOpen}
      >
        <Navbar onOpen={onToggle}/>

   
        <SectionHome/>
        <SectionAbout/>
        <SectionSkills/>   
        <SectionProjects/> 
        <SectionExperiences/>
        <SectionEducation/>
        <SectionContact/>



      </Container>  
    </>
  )
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





 
