import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colors'
import px2rem from '../utils/px2rem'
import desktopDark from '../images/bg-desktop-dark.jpg'
import desktopLight from '../images/bg-desktop-light.jpg'
import mobileDark from '../images/bg-mobile-dark.jpg'
import mobileLight from '../images/bg-mobile-light.jpg'

// Use GlobalStyles for styles you set on html or body
export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, h1, p {
        margin: 0;
    }
    
    body {
        background: ${({ theme }) => theme.body};
        background-image: url(${({ theme }) => theme.background});
        background-repeat: no-repeat;
        color: ${COLORS.white};
        font-family: 'Josefin Sans', sans-serif;
        font-size: ${px2rem(12)};
        line-height: 1;
        padding: ${px2rem(48)} ${px2rem(24)};
        transition: all 1s;
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

// Select correct background image based on screen width
const imgLight = ({width}) => {
    return width > 375 ? desktopLight : mobileLight  
}
const imgDark = ({width}) => {
    return width > 375 ? desktopDark : mobileDark
}

// Creates the styles for light theme and dark theme
export const lightTheme = {
    body: COLORS.lightBackground,
    background: imgLight,
    listBackground: COLORS.white,
    listItems: COLORS.lightListItems,
    placeholderText: COLORS.lightFooter,
    inputText: COLORS.lightInput,
    checkBorder: COLORS.lightCheckBorder,
    completedItems: COLORS.lightDoneItems,
    footerText: COLORS.lightFooter,
    dropShadow: COLORS.darkShadow,
    hover: COLORS.lightListItems
}

export const darkTheme = {
    body: COLORS.darkBackground,
    background: imgDark,
    listBackground: COLORS.darkListBackground,
    listItems: COLORS.darkListItems,
    placeholderText: COLORS.darkPlaceholder,
    inputText: COLORS.darkListItems,
    checkBorder: COLORS.darkCheckBorder,
    completedItems: COLORS.darkDoneItems,
    footerText: COLORS.darkFooter,
    dropShadow: COLORS.darkShadow,
    hover: COLORS.lightCheckBorder
}


