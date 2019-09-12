import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';
import normalize from 'styled-normalize';
import media from './media';
// import din1 from '../fonts/a1838926-0f17-4822-aac0-be650eb391d5.woff2';
// import din2 from '../fonts/d0f58e29-2226-42ec-8c80-1f328fa21f9c.woff2';
// import din3 from '../fonts/759090a0-6416-4c31-a612-39dd398eefed.woff2';
// import din4 from '../fonts/371f7677-6bce-411a-a217-c17180e9942f.woff2';
// import din5 from '../fonts/72f1fec5-6e9d-4c9e-8c6b-356bd86b3f15.woff2';

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  body {
    margin: 0;
    background-color: ${colors.pageBackground};
    font-family: "DIN Offc W02 Regular";
    font-size: 1rem;
    line-height: 1.5rem;
   }

   a {
     color: ${colors.accent1};
   }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DINWebPro-Bold W02 Regular';
  }

  
  h2 {
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: ${colors.accent1};
    text-transform: uppercase;

    ${media.sm} {
      font-size: 2.1875rem;
      line-height: 2.1875rem;
      margin-bottom: 2.5rem;
    }
  }
  

  strong {
    font-family: "DINWebPro-Bold W02 Regular";
  }

  ol {
    padding-inline-start: 1rem;
    li {
      margin-top: 1rem;
    }
  }

  ul {
    padding-inline-start: 0rem;
    list-style: none;
    li {
      margin-top: 1rem;
      margin-left: 1.5rem;
      
      &:before {
        content: '\\2022';
        color: ${colors.accent1};
        font-weight: bold;
        font-size: 1.2em;
        display: inline-block;
        width: 1.5rem;
        margin-left: -1.5rem;
      }
    }
  }


  @font-face{
        font-family:"DIN Offc W02 Cond Bold";
        src:url("fonts/1381300/41271b76-974d-421d-a9c2-db85967ef3f0.eot?#iefix");
        src:url("fonts/1381300/41271b76-974d-421d-a9c2-db85967ef3f0.eot?#iefix") format("eot"),url("fonts/1381300/430e4671-07c0-4837-beb9-4e95d6be4872.woff2") format("woff2"),url("fonts/1381300/e1e58a0f-1a61-4b32-92c3-3a2a7b6cf592.woff") format("woff"),url("fonts/1381300/457de7af-2fe8-4ba5-8436-13856311bdbd.ttf") format("truetype");
    }
    @font-face{
        font-family:"DIN Offc W02 Regular";
        src:url("fonts/1381400/bbea2b15-75d1-4651-b6fe-fbc0eaca45c5.eot?#iefix");
        src:url("fonts/1381400/bbea2b15-75d1-4651-b6fe-fbc0eaca45c5.eot?#iefix") format("eot"),url("fonts/1381400/9e6c25e6-87cf-49d4-ba99-da4d9129eaa4.woff2") format("woff2"),url("fonts/1381400/063400e1-920b-49ec-baec-410b131dc1fa.woff") format("woff"),url("fonts/1381400/cf252c53-89d7-4aa3-9e0d-ac29b03f2d3d.ttf") format("truetype");
    }
    @font-face{
        font-family:"DINWebPro-Bold W02 Regular";
        src:url("fonts/1448030/70c039e2-a852-4547-ad98-6b79af5b6dbd.eot?#iefix");
        src:url("fonts/1448030/70c039e2-a852-4547-ad98-6b79af5b6dbd.eot?#iefix") format("eot"),url("fonts/1448030/c87b04a3-9f95-452b-8890-ead7afa50ab7.woff2") format("woff2"),url("fonts/1448030/b2cf66d4-5fbe-4a96-8e55-590824de9b1c.woff") format("woff"),url("fonts/1448030/eee3d2a5-e04d-45e0-b9e0-fb31cf21e8bc.ttf") format("truetype");
    }
    @font-face{
        font-family:"DINWebPro-Light W02 Regular";
        src:url("fonts/1448136/6da4ee95-df77-4c51-abb4-99943d41f3f8.eot?#iefix");
        src:url("fonts/1448136/6da4ee95-df77-4c51-abb4-99943d41f3f8.eot?#iefix") format("eot"),url("fonts/1448136/821b5526-82ce-4ecc-b718-f7dfa5191624.woff2") format("woff2"),url("fonts/1448136/72d8ce05-09be-4811-9071-e409c0c8bcad.woff") format("woff"),url("fonts/1448136/95e8a8f0-53f2-4a2e-bb2d-7c16b098f811.ttf") format("truetype");
    }
    @font-face{
        font-family:"DINWebPro-Medium W02 Regular";
        src:url("fonts/1448154/8bb8c99f-3905-410f-8a60-2e69afdd440e.eot?#iefix");
        src:url("fonts/1448154/8bb8c99f-3905-410f-8a60-2e69afdd440e.eot?#iefix") format("eot"),url("fonts/1448154/a60723fa-4fcc-439f-a33a-ed694f63e1c0.woff2") format("woff2"),url("fonts/1448154/35eddc75-3a69-46b8-8365-34c8ed41e4c1.woff") format("woff"),url("fonts/1448154/54452f1e-3003-4554-80d5-4232a4a1b088.ttf") format("truetype");
    }

`;
