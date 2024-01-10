import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalstyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
    ${emotionReset}
    :root {
        line-height: 24px;

        font-family: 'Noto Sans KR', sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        a {
            color: black;
        }
    }
    ::-ms-reveal {
        display: none;
    }
`;

const GlobalStyles = () => {
    return <Global styles={globalstyles} />;
};

export default GlobalStyles;
