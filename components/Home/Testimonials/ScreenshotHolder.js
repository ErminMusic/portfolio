import React from "react";
import Screenshot from "./Screenshot";
import styled from "styled-components";

function ScreenshotHolder() {
    const TestimonialImages = [
        {
            image: "/testimonials/1.webp",
            alt: "Testimonial Screenshot 1",
            w: 560,
            h: 750,
        },
        {
            image: "/testimonials/2.webp",
            alt: "Testimonial Screenshot 2",
            w: 400,
            h: 600,
        },
        {
            image: "/testimonials/3.webp",
            alt: "Testimonial Screenshot 3",
            w: 500,
            h: 750,
        },
        {
            image: "/testimonials/4.webp",
            alt: "Testimonial Screenshot 4",
            w: 320,
            h: 570,
        },
        {
            image: "/testimonials/5.webp",
            alt: "Testimonial Screenshot 5",
            w: 560,
            h: 700,
        },
        {
            image: "/testimonials/6.webp",
            alt: "Testimonial Screenshot 6",
            w: 400,
            h: 600,
        },
    ];
    return (
        <Wrapper>
            {TestimonialImages.map((item, index) => (
                <Screenshot
                    screenshot={item.image}
                    alter={item.alt}
                    imageWidth={item.w}
                    imageHeight={item.h}
                    key={index}
                />
            ))}
        </Wrapper>
    );
}

export default ScreenshotHolder;

const Wrapper = styled.div`
    margin: 36px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
