import styled, { css } from 'styled-components';

export const SideContent = styled.div`
  background: #fff;
  padding: 30px 30px;
  border: 10px;
  min-height: 356px;
  -webkit-box-shadow: 0px 0px 10px -4px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 0px 10px -4px rgba(97, 97, 97, 1);
  box-shadow: 0px 0px 10px -4px rgba(97, 97, 97, 1);
  transition: ease-in-out all .5s;
  
  @media (max-width: 1140px){
    max-height: 400px
  }
`;

export const H2 = styled.h2`
  color: #fff;
`;