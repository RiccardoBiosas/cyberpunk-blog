import styled from 'styled-components'

const StyledNavbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: dotted 1px red; 
    height: 10vh;  
    margin-bottom: 4rem;
    text-transform: uppercase;
    
    & > div:first-child {
        flex: 1;
    }

    & > div:last-child {
        flex: 3;
        display: flex;
        justify-content: flex-end;
        padding-right: 2rem;
    }
`

export default StyledNavbar