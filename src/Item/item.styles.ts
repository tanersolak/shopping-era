import styled from 'styled-components';

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button{
        border-raidus: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-raidus: 20px 20px 0 0;
    
    }

    div {
        font-family: Arial,Helvetica,sans-serif;
        padding: irem;
        height: 100%;
    }
`;