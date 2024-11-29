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
        svg {
            margin-left: var(--gutter-lg);
        }
    }
  `
  