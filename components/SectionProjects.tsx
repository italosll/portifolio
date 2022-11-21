/* eslint-disable max-len */
import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-projects.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionProjects():JSX.Element{

  const projects =[
    {
      srcCover:"/images/cover-coffe-delivery.png",
      title:"Coffe Delivery",
      // eslint-disable-next-line max-len
      description:"Catálogo de cafés que permite gerenciar um carrinho, muito semelhante a um E-commerce. Aplicação responsiva com cobertura de testes próxima de 100%, construida usando ReactJS com Typescript e o conceito de Reducer.",
      github: "https://github.com/italosll/ignite-react-desafio-02",
      figma:"https://www.figma.com/file/F408H6jCxwTMAn5InQtb8r/Portif%C3%B3lio---Coffey-Delivery?t=w1bMfax6ERbtffih-1",
      availableAt: "https://italo-coffey.netlify.app/",
    },

    {
      srcCover:"/images/cover-todo-list.png",
      title:"To-do List",
      // eslint-disable-next-line max-len
      description:"Aplicação permite gerenciar um carrinho, adicionar produtos remover e alterar a quantidade de cada um deles individualmente. Durante o desenvolvimento dessa aplicação foi destacada a importância",
      github: "https://github.com/italosll/ignite-react-desafio-01",
      // eslint-disable-next-line max-len
      figma:"https://www.figma.com/file/u5czK6iDfBkOroOfrkoQnz/Portif%C3%B3lio---Todo-list?t=w1bMfax6ERbtffih-1",
      availableAt: "https://italo-todo.netlify.app/",
    },
 

    {
      srcCover:"/images/cover-react-geo-grapher.png",
      title:"react-geo-grapher",
      // eslint-disable-next-line max-len
      description:"Aplicação é uma biblioteca publicada no NPM (Gerenciador de pacotes do Node) que permite exibir dados quantitativos por meio do formato de uma região geográfica. Desenvolvida utilizando ReactJS com Typescript, TurfJS e react-simple-maps.",
      github: "https://github.com/italosll/react-geo-grapher",
      figma:null,
      npm: "https://www.npmjs.com/package/react-geo-grapher",
      availableAt:null
    },

    {
      srcCover:"/images/cover-register.png",
      title:"Register",
      // eslint-disable-next-line max-len
      description:"Sistema de registro do pontos de um funcionário, permite login, registro de ponto e listagem de pontos registrados. Desenvolvido utilizando NEXTJS com typescript e integrando api GRAPHQL.",
      github: "https://github.com/italosll/register",
      // eslint-disable-next-line max-len
      figma:"https://www.figma.com/file/0YR2SPIzamtiY6DaMoSfeE/Teste-Frontend---Brainny-Register?node-id=0%3A1&t=tLw5nRYsol8dGsPi-0",
      availableAt: null,
    },


  ]

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="projects-section">

        <Title>
            Projetos
        </Title>

        <ProjectsConainer>
          {projects.map((project,key)=>(
            <CardItem
              key={key} 
              {...project}
            />
            
          ))}
          <GithubCard/>

        </ProjectsConainer>
 
      </ContentSection>
    </BackgroundContainer>    
 
  )
}

interface ICardItem {
  srcCover: string;
  title: string;
  description:string,
  github?: string|null,
  figma?:string|null,
  availableAt?: string|null,
  npm?: string|null,

}

function CardItem({
  srcCover,
  title,
  description,
  github,
  figma,
  availableAt,
  npm,
}:ICardItem):JSX.Element{

  return(
    <Card>
      <ResponsiveFlex>

        <div>
          <h2>{title}</h2>
          <Image alt="a" src={srcCover} width="266" height="115"/>
          <p>{description}</p>
          <div>
            {github ?(
              <ExternalLink
                link={github}
                srcCover="/icons/icon-bare-github.svg"
                title="Github"
              
              />
            ) :null}

            {figma ?(
              <ExternalLink
                link={figma}
                srcCover="/icons/icon-bare-figma.svg"
                title="Figma"
              />
            ) :null}

            {availableAt ?(
              <ExternalLink
                link={availableAt}
                srcCover="/icons/icon-bare-broswer.svg"
                title="Broswer"
              />
            ) :null}

            {npm ?(
              <ExternalLink
                link={npm}
                srcCover="/icons/icon-bare-npm.svg"
                title="NPM"
              />
            ) :null}
          </div>
        </div>


        <Image 
          alt="a" 
          src={srcCover} 
          width="266" 
          height="115" 
        />

      </ResponsiveFlex>



 
    </Card>
  )
}

interface IExternalLinkParams {
  srcCover:string;
  title:string;
  link:string;
}

function ExternalLink({
  srcCover,
  title,
  link,
}:IExternalLinkParams):JSX.Element{

  return(
    <ExternalLinkContainer
      href={link}
      target="_blank" 
      rel="noreferrer" 
    >
      <Image 
        alt="a" 
        src={srcCover} 
        width="17" 
        height="17" 
      />

      {title}
 
 
    </ExternalLinkContainer>
  )
}

 

function GithubCard():JSX.Element{

 

  return(
    <GithubCardContainer>
   
      <p>
        Estes são alguns dos meus projetos, mas ainda existem outros,
        visitando meu perfil você vai conseguir encontrá-los :)
      </p>
 
      <a 
        href="https://github.com/italosll?tab=repositories"
        target="_blank" 
        rel="noreferrer" 
      >
        <Image 
          alt="a" 
          src="/icons/icon-bare-github.svg"
          width="17" 
          height="17" 
        />
        Github
      </a>
    </GithubCardContainer>
  )
}

 
const ContentSection = styled.section`

    margin-left: 17px;
    margin-right: 17px;
    width: 760px;
    max-width :calc(100% - 17px - 17px);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    justify-content:center;
    
    @media ${devices.laptop} {
        overflow: visible;

        & h1{
          font-size: 6rem;
        }
    }

 
`

const Card = styled.div`
    width: 100%;
    padding: 10px;
    max-width :100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
 
    background: linear-gradient(
      90.57deg, 
      rgba(21, 0, 80, 0.4) 22.85%, 
      rgba(0, 0, 0, 0.4) 106.56%
    );

    & h2{
      font-size: 1.5rem;
    }

    & div:nth-child(2){
      width: 100%;
    }
`

const ResponsiveFlex = styled.div`
 
    display: flex;
    align-items: center;

    & div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & h2 + img { // mobile image
      display: flex;
    }

    & div + img{ // desktop image
      display: none;
    }

    & p{
      padding: 0;
      margin-bottom: 0;
      text-align: justify;
      color:#d3d3d3;
    }

    & p + div{
      width: 100%;
      display: flex;
      flex-direction: row;
      column-gap: 8px;
    }

  @media ${devices.laptop} {

    & div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 20px;
    }
    
    & h2{
      margin: 0;
    }
    & h2 + img { // mobile image
      display: none;
    }

    & div + img{ // desktop
      display: flex;
 
    }
  } 
`;

const ProjectsConainer = styled.div`
  margin-top: 30px;
  /* background: red; */
  overflow-y:auto;
  height: 75%;

  & div:not(:first-child){
    margin-top: 18px;
  }
 
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: #00000001 #ffffff01;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const ExternalLinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  background: #00000070;
  padding: 10px;
  gap:10px;
  border-radius: 5px;


`;
 

const GithubCardContainer = styled.div`
width: 100%;
background: #1F1F1F;
border-radius: 8px;
padding: 10px;
display: flex;
flex-direction: column;



& p{
  width: 100%;
  margin-top: 0px;
  margin-bottom: 10px;
  color:#EFEFEF
}


& a{
  width: 100%;
  height: 36px;
  background:#000;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

@media ${devices.laptop} {
  flex-direction: row;

  & a{
    padding:10px;
    width: fit-content;
  }

  & p{
    margin-bottom: 0px;
  }
}
`