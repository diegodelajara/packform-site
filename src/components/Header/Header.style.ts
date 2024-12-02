import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const Headerstyles = styled.div`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--gutter);

     @media (min-width: ${breakpoints.lg}px) {
      &:first-child {
        padding: 0 var(--layout-padding);
        img {
          height: 48px;
          width: auto;
        }
      }
     }
  `
  