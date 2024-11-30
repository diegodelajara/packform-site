import styled from 'styled-components'


export const Homestyles = styled.div<{
  isDesktop: boolean
}>`
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
    flex-direction: ${({ isDesktop }) =>  !isDesktop ? 'column': 'row'};
    position: ${({ isDesktop }) =>  !isDesktop ? 'fixed': 'relative'};
    top:0;
    height: ${({ isDesktop }) => !isDesktop ? '100vh': 'auto'};
    min-width: 280px;
    background-color: #000;
    padding: var(--content-spacing-sm);
    transition: transform 0.3s ease;
    transform: ${({ isDesktop }) => !isDesktop ? 'translateX(100px)': 'translateX(0)'};
    ul{
      list-style: none;
      display: flex;
      flex-direction: ${({ isDesktop }) =>  !isDesktop ? 'column': 'row'};
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
    flex-direction: ${({ isDesktop }) => !isDesktop ? 'column': 'row'};
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
  `
  