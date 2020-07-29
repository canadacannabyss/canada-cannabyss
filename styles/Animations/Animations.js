import { keyframes } from 'styled-components';

export const Clicked = keyframes`
  0% {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const OpenSideDrawer = keyframes`
  0% {
    transform: translateX(-235px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const loadingTiles = keyframes`
	0% {
    opacity: 1
  }
  50% {
    opacity: 0.3;
  }
	100% {
    opacity: 1
	}
`;

export const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const fadeText = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;
