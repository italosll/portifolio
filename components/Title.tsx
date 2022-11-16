import styled from 'styled-components';

interface ITitleParams {
    children:string
}
 
export function Title({children}:ITitleParams):JSX.Element{

  return(
    
    <TitleStyled>
      {children}
    </TitleStyled>
  )
}

const TitleStyled = styled.h1`
    margin:0;
    padding:0;
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(
        180deg,
        #EFEFEF 38.54%, 
        rgba(239, 239, 239, 0.65) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
