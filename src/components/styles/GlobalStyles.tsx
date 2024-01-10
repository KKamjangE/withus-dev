import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalstyles = css`
    ${emotionReset}
    :root {
        --main-color: #fff;
        line-height: 24px;

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
