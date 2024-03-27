import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LockIn from "../../public/videos/LockIn.mp4";
import DyingIsGay from "../../public/videos/DyingIsGay.mp4";
import VidiBezobrazluka from "../../public/videos/VidiBezobrazluka.mp4";
import Wut from "../../public/videos/Wut.mp4";
import Yesssss from "../../public/videos/Yesssss.mp4";

const Proof = () => {
    const ProjectVideo = [
        {
            video: DyingIsGay,
            alter: "DyingIsGay",
        },
        {
            video: LockIn,
            alter: "LockIn",
        },

        {
            video: VidiBezobrazluka,
            alter: "VidiBezobrazluka",
        },
        {
            video: Wut,
            alter: "Wut",
        },
        {
            video: Yesssss,
            alter: "Yesssss",
        },
    ];
    return (
        <VideoHolder>
            {ProjectVideo.map((item, index) => (
                <ReactPlayer
                    width="100%"
                    url={item.video}
                    controls={true}
                    light={false}
                    pip={false}
                    key={index}
                />
            ))}
        </VideoHolder>
    );
};

export default Proof;

const VideoHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    margin: 12px 0 34px 0;
    width: 100%;
    height: auto;
`;
