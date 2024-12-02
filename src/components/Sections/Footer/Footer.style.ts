import styled from 'styled-components'


export const Footerstyles = styled.div`
    display: grid;
    grid-gap: var(--gutter);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr, 1fr);
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
    .logo {
        grid-column: 1
    }
    .packform {
        grid-column: 1
    }
        .follow-us>div>div>section {
            display: flex;
            flex-direction: row;
        }
  `
  