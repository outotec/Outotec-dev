import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';
import reset from 'styled-reset';
import din1 from '../fonts/a1838926-0f17-4822-aac0-be650eb391d5.woff2';
import din2 from '../fonts/d0f58e29-2226-42ec-8c80-1f328fa21f9c.woff2';
import din3 from '../fonts/759090a0-6416-4c31-a612-39dd398eefed.woff2';
import din4 from '../fonts/371f7677-6bce-411a-a217-c17180e9942f.woff2';
import din5 from '../fonts/72f1fec5-6e9d-4c9e-8c6b-356bd86b3f15.woff2';

export const GlobalStyles = createGlobalStyle`

  ${reset}

  body {
    margin: 0;
    background-color: ${colors.pageBackground};
    font-family: 'DIN2'
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DIN1';
  }
  

  @font-face {
    font-family: "DIN1";
    src: url('${din1}');
  }

  @font-face {
    font-family: "DIN2";
    src: url('${din2}');
  }

  @font-face {
    font-family: "DIN3";
  src: url('${din3}');
  }

  @font-face {
    font-family: "DIN4";
    src: url('${din4}');
  }

  @font-face {
    font-family: "DIN5";
    src: url('${din5}');
  }
`;
