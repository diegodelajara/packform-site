import { breakpoints, breakpointsProps } from '@/utils/responsive'
import styled from 'styled-components'


export const Homestyles = styled.div`
position: relative;
  .menu-handler.open {
    position:absolute;
    transition: transform 0.3s ease;
    transform: translateX(-300px);
  }
  svg {
    cursor: pointer;
  }
  `
  