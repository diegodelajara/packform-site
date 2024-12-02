import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const Containerstyles = styled.div<{
    bgcolor?: string
    textColor?: string
    isMenuOpen: boolean
  }>`
    &>:first-child {
      width: 100%;
    }
    color:${({ textColor }) => textColor};
    padding: var(--gutter);
    background-color: ${({ bgcolor }) => bgcolor ?? '#fff'};
    display:flex;
    .map-container {
      img {
        width:100%;
      }
    }
    .title {
      display: flex;
      gap: 20px;
      flex-direction: column;
      &:nth-child(1){
        font-size: calc(var(--font-size-co-lg)* 2);
        font-weight: 500;
      }
      &>:nth-child(2){
        font-size: calc(var(--font-size-st1)* 2);
      }
    }
    section {
      display: flex;
      flex-direction: column;
      gap: var(--content-spacing-sm);
    }

    @media (min-width: ${breakpoints.lg}px) {
      &>:first-child {
        padding: 0 var(--layout-padding);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .title {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .map-container {
        max-width: 786px;
        min-width: 50%;
      }
     }
  `
  