import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Screenshot({ screenshot, alter, imageWidth, imageHeight }) {
    return (
        <CustomImage
            src={screenshot}
            alt={alter}
            width={imageWidth}
            height={imageHeight}
        />
    );
}

export default Screenshot;

const CustomImage = styled(Image)`
    padding: 12px;
    max-width: 95%;
`;
