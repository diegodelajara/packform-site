
import { breakpoints } from '@/utils/responsive'
import styled from 'styled-components'


export const PackformsFootertyles = styled.div`
	section {
		display: flex;
		font-size: var(--font-size-co);
	}

    @media (min-width: ${breakpoints.lg}px) {
			section {
				flex-direction: row;
			}
		}
	}
  `
  