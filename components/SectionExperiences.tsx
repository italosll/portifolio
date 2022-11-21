import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-experiences.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionExperiences( ):JSX.Element{

  const experiences =[
    {
      srcCover:"/images/experience-ayt1.jpg",
      title:"Engenheiro Frontend",
      company:"AYT1.DEV · Full-time",
      period:"Abr 2022 - Out 2022 · 6 meses",
      // eslint-disable-next-line max-len
      description:"Como engenheiro de software júnior atuei no desenvolvimento de aplicações web como uma loja white label, uma agência de viagens online, e um sistema ERP multitenancy para gerenciamento de empresas. Nesses projetos atuei corrigindo bugs, efertuando refatorações e implementando novas funcionalidades.",
      link: "https://ayt1.dev/",
    },

    {
      srcCover:"/images/experience-brainny.jpg",
      title:"Desenvolvedor Frontend",
      company:"Brainny Smart Solutions · Full-time",
      period:"Abr 2021 - Abr 2022 · 1 ano",
      // eslint-disable-next-line max-len
      description:"Como desenvolvedor Júnior, esse foi o meu primeiro emprego, nele eu atuei no desenvolvimento de aplicações WEB responsivas construidas em NEXT.JS que consumiam tanto APIS REST como Graphql. Em todas as aplicações em que atuei o design foi seguido a risca, e sempre levantei possibilidades de melhoria em relação a interface ou usabilidade para o time de UX.",
      link: "https://brainny.cc/",
    },

    {
      srcCover:"/images/experience-freelancer.svg",
      title:"Desenvolvedor Mobile",
      company:"Freelance · Full-time",
      period:"Dez 2020 - Abr 2021 · 5 meses",
      // eslint-disable-next-line max-len
      description:"Como freelancer atuei no desenvolvimento de um aplicativo recat native e aprendi a utilizar o ecossistema reativo bem como a integrar a aplicação com APIs REST. Esta foi a minha primeira experiência como desenvolvedor e contribuiu muito para conseguir o meu primeiro emprego.",
    },
  ]

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="experiences-section">

        <Title>
            Experiencia
        </Title>

        <ExperiencesConainer>
          
          {experiences.map((project,key)=>(
            <CardItem
              key={key} 
              {...project}
            />
          
          ))}
        </ExperiencesConainer>
 
      </ContentSection>
    </BackgroundContainer>    
 
  )
}

interface ICardItem {
  srcCover: string;
  title: string;
  description:string,
  company:string,
  period:string,
  link?:string,

}

function CardItem({
  srcCover,
  title,
  description,
  company,
  period,
  link,
}:ICardItem):JSX.Element{

  return(
    <Card>
      <div>

        <Image alt={company} src={srcCover} width="106" height="106"/>
        <div>
          <h2>{title}</h2>
          <a>{company}</a>
          <a>{period}</a>
          <p>{description}</p>
        </div>
      </div>
      <p>{description}</p>


    </Card>
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
    border-radius: 8px;

    width: 100%;
    max-width :100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:10px;
    font-size: 0.875rem;
 
    background: linear-gradient(
      120.57deg, 
      rgba(21, 0, 80, 0.4) 22%, 
      rgba(187, 163, 255, 0.1) 60.85%, 
      rgba(42, 29, 64, 0.4) 106.56%
    );
    
    *{
      padding: 0;
      margin: 0;
    }

    & :nth-child(1){
      display: flex;
      gap:10px
    }

    & img ~ div{
 
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    & h2{
      font-size: 1.25rem;
      max-width: 200px;
    }

    & a{
      width: 100%;
      text-align: justify;
    }
    
    & p{
      width: 100%;
      text-align: justify;
      margin-top: 10px;
      line-height: 18px;
    }
    
    & img{
      border-radius: 5px;
    }

    & a ~ p{
      display: none;
    }

    & div ~ p {
        display:flex;
    }

    @media ${devices.laptop} {

      & a ~ p{
        display: flex;
      }
    
      & div ~ p {
        display: none;
      }

      & h2{
        max-width: 100%;
      }
    }
`

 
const ExperiencesConainer = styled.div`
  margin-top: 30px;
  overflow-y:auto;
  height: 75%;

  display: flex;
  flex-direction: column;
  gap: 18px;
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
 
 

 