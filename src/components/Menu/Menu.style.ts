import { breakpoints, breakpointsProps } from '@/utils/responsive'
import styled from 'styled-components'


export const Menustyles = styled.div`
  .menu-handler.open {
    position:absolute;
    transition: transform 0.3s ease;
    transform: translateX(-300px);
  }
  svg {
    cursor: pointer;
  }
  nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top:0;
    height: 100vh;
    min-width: 280px;
    background-color: #000;
    padding: var(--content-spacing-sm);
    transition: transform 0.3s ease;
    transform: translateX(100px);
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--gutter);
      li:last-child {
        padding-bottom: 20px;
      }
    }
  }
  nav.open {
    right: 0;
    transition: transform 0.3s ease;
    transform: translateX(0);
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: var(--gutter);
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 36px;
      border-radius: var(--btn-border-radius);
    }
    button:nth-child(1) {
      border: 1px solid;
      border-color: var(--secondary-color);
      background-color: #000;
      color: var(--secondary-color);
    }
    button:nth-child(2) {
      background-color: var(--secondary-color);
      color: white;
      gap: calc( var(--gutter) / 2);
    }
  }
  
  @media (min-width: ${breakpoints.lg}px) {
      nav {
        flex-direction: row;
        position: relative;
        height: auto;
        transform: translateX(0);
        font-size: var(--font-size-co);
        font-weight: 700;
        padding: var(--content-spacing-sm) 0;
        ul{
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: var(--content-spacing);
          li:last-child {
            padding-bottom: 0;
          }
        }
      }
      .buttons-container {
         flex-direction: row;
         padding-left: var(--content-spacing);
         button {
          padding: 0 var(--btn-padding-x);
         }
      }
    }
  `
