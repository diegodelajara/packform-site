import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const Buttonstyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gutter-lg);
    

    button {
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: white;
        padding: var(--gutter-lg) calc(var(--gutter)* 2);
        font-size: var(--font-size-co-sm);
        border-radius: var(--border-radius-base);
        font-size: var(--font-size-co-sm);
        height: 5rem;
        min-height: 5rem;
        padding: var(--gutter-lg) calc(var(--gutter)* 2);
        cursor: pointer;
        svg {
            margin-left: var(--gutter-lg);
        }
        &:nth-child(1):hover{
            background-color: var(--btn-success-hover-background-color) !important;
            border-color: var(--btn-secondary-hover-border-color);
            color: var(--btn-secondary-hover-color);
        }
        &:nth-child(2):hover{
            background-color: var(--btn-primary-hover-background-color) !important;
            border-color: var(--btn-secondary-hover-border-color);
            color: var(--btn-secondary-hover-color);
        }
        &:nth-child(3):hover{
            background-color: var(--btn-secondary-hover-background-color) !important;
            border-color: var(--btn-secondary-hover-border-color);
            color: var(--btn-secondary-hover-color);
        }
    }

    @media (min-width: ${breakpoints.lg}px) {
       
      &:first-child {
        flex-direction: row;
        width: 100%;
        padding: calc(var(--content-spacing)* 2) calc(var(--content-spacing-lg)* 2);
      }
        button {
            font-size: calc(var(--font-size-st1)* 2);
            font-weight: 700;
            height: 7rem;
            min-height: 7rem;
            padding: var(--gutter-lg) var(--content-spacing-sm);
        }
     }
  `
  