import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colors'
import px2rem from '../utils/px2rem'
import desktopDark from '../images/bg-desktop-dark.jpg'
import desktopLight from '../images/bg-desktop-light.jpg'
import mobileDark from '../images/bg-mobile-dark.jpg'
import mobileLight from '../images/bg-mobile-light.jpg'

// Uses Styled Components global styles - need to use for styles you set on html or body
export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, h1, p {
        margin: 0;
    }

    img {
        max-width: 100%;
    }
    
    body {
        background: ${({ theme }) => theme.body};
        color: ${COLORS.white};
        background-image: url(${({ theme }) => theme.background});
        background-repeat: no-repeat;
        font-family: 'Josefin Sans', sans-serif;
        font-size: ${px2rem(18)};
        padding: ${px2rem(48)} ${px2rem(24)};
        line-height: 1;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
  }
    }
`

// can't seem to use theme as a parameter ??
const imgLight = ({width}) => {
    return width > 450 ? desktopLight : mobileLight  
}
const imgDark = ({width}) => {
    return width > 375 ? desktopDark : mobileDark
}

// Creates the styles for each theme
export const lightTheme = {
    body: COLORS.lightBackground,
    background: imgLight,
}

export const darkTheme = {
    body: COLORS.darkBackground,
    background: imgDark,
}


