import styled from 'styled-components'


export const FloatingButtonstyles = styled.div`
        .icon {
            color: white;
            position: absolute;
            width: 60px;
            height: 60px;
            background-color: rgb(0, 69, 198);
            display: block;
            bottom: 8px;
            left: 8px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.3s ease;
            scale: 1;
            &:hover {
                transform: scale(1.2);
                }
            }
  `
  