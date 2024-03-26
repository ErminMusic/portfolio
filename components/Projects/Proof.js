import React from "react";
import Image from "next/image";
import styled from "styled-components";
const Proof = () => {
    const ProjectVideo = [
        {
            image: "/testimonials/1.webp",
            alter: "Testimonial Screenshot 1",
        },
        {
            image: "/testimonials/1.webp",
            alter: "Testimonial Screenshot 2",
        },
        {
            image: "/testimonials/1.webp",
            alter: "Testimonial Screenshot 3",
        },
    ];
    return (
        <>
            {ProjectVideo.map((item, index) => (
                <CustomImage
                    key={index}
                    src={item.image}
                    width={750}
                    height={560}
                    alt={item.alter}
                />
            ))}
        </>
    );
};

export default Proof;

const CustomImage = styled(Image)`
    margin: 20px 0;
    width: 100%;
    height: auto;
`;
