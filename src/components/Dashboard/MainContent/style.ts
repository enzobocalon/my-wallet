import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2rem;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: minmax(0, 200px) 1fr;
    grid-gap: 1rem;
    margin-right: 2rem;
    height: calc(100vh - 50px - 3rem);
    margin-bottom: 1rem;

    @media (max-width: 1300px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 45% 55%;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        height: auto;
    }
`;

export const GridItem = styled.div``;