import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const Footerstyles = styled.div`
    display: grid;
    grid-gap: var(--gutter);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    padding: 16px;
    &>div {
        display: flex;
        flex-direction: column;
    }
    
    .logo {
        grid-column: 1 / 3;
    }
    .packform {
        grid-column: 1;
        grid-row: 2;
    }
    .spend-less {
        grid-columnn: 2;
        grid-row: 2;
    }
    .earn-more {
        grid-column: 1;
        grid-row: 3;
    }
    .follow-us {
        grid-column: 2;
        grid-row: 3;
        & div {
            display: flex;
            flex-direction: row;
            gap: var(--gutter);
            & a {
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
        }
    }
    .privacy-text {
        grid-row: 4;
        grid-column: 1/4;
        display: flex;
            align-items: start;
            justify-content:end;
        & ul {
            display: flex;
            grid-gap: var(--gutter);
        
            & li {
                display: inline;
                &:not(:first-child) {
                    &::before {
                    content: "•";
                    display: inline-block;
                    margin: 0 var(--gutter);
                    vertical-align: middle;
                }
                }
                
            }
        }
    }


    @media (min-width: ${breakpoints.md}px) {
        grid-template-columns: repeat(4, 1fr);
        .earn-more {
            grid-row: 2;
            grid-column: 3;
        }
        
        .follow-us {
            grid-row: 2;
            grid-column: 4;
        }
    }


    @media (min-width: ${breakpoints.lg}px) {

        grid-template-rows: 2fr;
        grid-template-columns: repeat(5, 1fr);
        .logo {
            grid-row: 1;
            grid-column: 1;
        }
        
        .packform {
            grid-row: 1;
            grid-column: 2;
        }
        .spend-less {
            grid-row: 1;
            grid-column: 3;
        }
        .earn-more {
            grid-row: 1;
            grid-column: 4;
        }
        .follow-us {
            grid-row: 1;
            grid-column: 5;
        }
        .privacy-text {
            grid-row: 3;
            grid-column: 1 / 4;
        }
    }
  `
  