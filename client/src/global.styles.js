import { createGlobalStyle } from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

${normalize}

html {
    box-sizing: border-box;
}

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        width: 100%;
        font-family: 'Share Tech Mono', monospace;
        background-color: #222222;
    }

    p {
        padding: 0;
        margin: 0;
    }
}
`

export default GlobalStyles