// src/components/AboutSection.js
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 1080px;
  padding: 50px 20px;
  margin: auto;
  background-color: #111;
  /* background-color: #e8e8e5; */
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileText = styled.div`
  width: 50vw;
  padding: 5vw;
  height: auto;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ProfileImage = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
  margin: 10px;
  /* border: 0.2rem solid rgb(147, 146, 146); */
  border-width: 0.1rem 0.2rem 0.2rem 0.1rem;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50vw;
    margin-bottom: 30px;
    display: none;
  }
  @media (max-width: 1600px) {
    width: 30vw;
    margin-bottom: 30px;
  }
`;
const ResumeButton = styled.div`
  margin: 20px 0;
  text-align: center; /* 버튼 중앙 정렬 */
  color: black;
  button {
    font-family: "Times New Roman", Times, serif;
    border: 0.2rem solid rgb(147, 146, 146);
    border-width: 0.1rem 0.2rem 0.2rem 0.1rem;
    background-color: rgb(236, 235, 234);
    padding: 0.3rem 0.6rem 0.5rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
    &:hover {
      background-color: #f1f1f1;
      color: #333638;
    }
  }
`;

const Pi = styled.span`
  color: #fff;
  font-style: italic;
  font-weight: 600;
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <hr></hr>
      <ProfileContainer>
        <ProfileText>
          <h1>{"Hi, I'm Gregory S.H. Paek"}</h1>
          <br></br>
          <p style={{ fontSize: " 1.2rem" }}>
            Hello! I’m<Pi> Gregory Paek</Pi>, an astronomer captivated by the
            transient universe and its fleeting phenomena. My work bridges
            advanced observational techniques and computational innovation to
            uncover the secrets of transient, with a special focus on kilonovae,
            their diversity, and their roles as optical counterparts of{" "}
            <Pi>gravitational waves and gamma-ray bursts.</Pi>
            <br />
            <br />I have extensive experience with imaging observations and data
            analysis, particularly in optical and near-infrared astronomy, and
            have developed robust pipelines to process and analyze large
            datasets. Over the years, I’ve actively contributed as part of
            various survey teams, collaborating on studies of supernovae,
            gamma-ray bursts, and other transient phenomena. These
            collaborations have deepened my understanding of the transient sky
            and enriched my approach to multi-wavelength follow-ups.
            <br />
            <br /> Whether you have questions, collaboration ideas, or just want
            to share a thought, I always welcome engaging discussions, teamwork,
            and even casual small talk.
          </p>
          <br></br>
          <ResumeButton>
            <a
              href={`${process.env.PUBLIC_URL}/assets/CV_Gregory_Paek.pdf`}
              download="CV_Gregory_Paek.pdf"
            >
              <button>Download CV</button>
            </a>
          </ResumeButton>
        </ProfileText>
        <ProfileImage
          className="profile_img_container"
          src={`${process.env.PUBLIC_URL}/assets/my_pic.jpg`}
          alt="Profile"
        />
      </ProfileContainer>
      <hr></hr>
    </AboutContainer>
  );
};

export default AboutSection;
