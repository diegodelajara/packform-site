
import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const Packformstyles = styled.div`
	color: var(--layout-main-color);
	font-size: var(--font-size-co);
    font-weight: var(--font-weight-medium);
	display: flex;
	flex-direction: column;
	padding-top: var(--content-spacing-sm);
	gap: var(--content-spacing-sm);
    & span {
			color: var(--secondary-color);
    }

    @media (min-width: ${breakpoints.lg}px) {
			&>:first-child {
			padding-left: var(--content-spacing);
			}
		}
  `
  