import styled from 'styled-components';

export const Banner = styled.div`
    height: 200px;
    background-image: url(${process.env.PUBLIC_URL + "/img/banner.JPEG"});
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
`