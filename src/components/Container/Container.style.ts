import styled from 'styled-components'


export const Containerstyles = styled.div<{
    bgcolor?: string
    textColor?: string
    isMenuOpen: boolean
  }>`
    color:${({ textColor }) => textColor};
    padding: var(--gutter);
    background-color: ${({ bgcolor }) => bgcolor ?? '#fff'};
    display:flex;
    h2 {
        font-size: calc(var(--font-size-base)* 2.75);
    }

  `
  