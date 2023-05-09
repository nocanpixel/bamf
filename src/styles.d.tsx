import styled from "styled-components";

export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    margin: 0;
    color: #242424;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 5px;
`

export const ContainerStyles = styled.div`
    background-color: white;
    padding: 1em;
    padding-right: 2em;
    margin-top: 1em;
    border-radius: 7px;
    color: #8a8a8a;
    display: flex;
    gap: 2em;
    & > div:first-child {
        font-size: 2em;
        font-weight: 800;
    }
`

export const ContainerTitle = styled.span`
    font-size: 1.4em;
    font-weight: 600;
`

export const Description = styled.p`
    text-align: left;
    line-height: 20px;
`

export const ButtonReadMore = styled.button`
    color: #2b92ff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
`

export const ContainerAll = styled.div`
    border: none;
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 4em;
`