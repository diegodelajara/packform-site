import styled from 'styled-components'


export const Containerstyles = styled.div<{
    bgcolor?: string
    textColor?: string
  }>`
    color:${({ textColor }) => textColor};
    padding: var(--gutter);
    background-color: ${({ bgcolor }) => bgcolor};
    h2 {
        font-size: calc(var(--font-size-base)* 2.75);
    }
  `
  