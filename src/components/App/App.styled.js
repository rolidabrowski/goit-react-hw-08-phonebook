import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ApplogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${ApplogoSpin} infinite 20s linear;
  }
`;

export const Text = styled.p`
  font-size: calc(10px + 2vmin);
`;

export const Code = styled.code`
  font-size: calc(10px + 2vmin);
`;

export const Link = styled.a`
  color: #61dafb;
`;
