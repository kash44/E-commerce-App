import { css } from "styled-components";

// export const mobile = (props) => {
//   return css`
//     @media only screen (max-width: 380px) {
//       ${props}
//     }
//   `;
// };

export const mobile = (props: { [key: string]: string }) => {
  return css`
    @media only screen and (max-width: 640px) {
      ${props}
    }
  `;
};

export const tablet = (props: { [key: string]: string }) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const laptop = (props: { [key: string]: string }) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const largeLaptop = (props: { [key: string]: string }) => {
  return css`
    @media only screen and (max-width: 1440px) {
      ${props}
    }
  `;
};
