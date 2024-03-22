import Image from 'next/image'
import React from 'react'
import styled from "styled-components";

function SideImage() {
    const MyImage = "/images/Me.webp"
  return (
    <Container>
        <CustomImage src={MyImage} alt='MyImage' width={400} height={600} />
    </Container>
  )
}

export default SideImage

const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 730px) {
        width: 95%;
    }
`;
const CustomImage = styled(Image)`
    width: 100%;
    object-fit: cover;
    object-position: center;
`