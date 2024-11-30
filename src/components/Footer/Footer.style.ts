import styled from 'styled-components'


export const Footerstyles = styled.div`
    display: flex;
    gap: var(--gutter);
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background-color: var(--bg-color);
        border-radius: 50%;
    svg {
            color:  #000;
        }
    }
  `
  