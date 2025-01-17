// src/components/SpeakingSection.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const SpeakingContainer = styled.section`
  padding: 50px 20px;
  max-width: 1080px;
  margin: auto; /* 화면 중앙에 위치 */
  background-color: #111;
  color: white;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const TalkCard = styled.div`
  background-color: rgba(255, 255, 255, 0.01);
  padding: 20px;
  max-width: 1000px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  cursor: pointer; /* 클릭 가능하도록 */
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const TalkTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
`;
const TalkSubTitle = styled.p`
  font-size: 1.1rem;
  margin: 10px;
  font-style: italic;
`;
const TalkDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-top: 10px;
  display: ${(props) =>
    props.isVisible ? "block" : "none"}; /* 토글 상태에 따라 보임/숨김 */
`;

function SpeakingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [visibleDescription, setVisibleDescription] = useState({
    first: false,
    second: false,
  });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#speaking-section");
      gsap.to(el, { opacity: 1, y: 0, duration: 1.2 });
    }
  }, [inView]);

  const toggleDescription = (talk) => {
    setVisibleDescription((prevState) => ({
      ...prevState,
      [talk]: !prevState[talk],
    }));
  };

  return (
    <SpeakingContainer
      id="speaking-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <hr></hr>
      <SectionTitle>Speaking Engagements</SectionTitle>
      <TalkCard onClick={() => toggleDescription("first")}>
        <TalkTitle>Gravitational Waves and their Implications</TalkTitle>
        <TalkSubTitle>
          Keynote at the International Astronomy Conference, 2024
        </TalkSubTitle>
        <TalkDescription isVisible={visibleDescription.first}>
          Keynote at the International Astronomy Conference, 2024 Keynote at the
          International Astronomy Conference, 2024 Keynote at the International
          Astronomy Conference, 2024
        </TalkDescription>
      </TalkCard>
      <TalkCard onClick={() => toggleDescription("second")}>
        <TalkTitle>Exploring Black Holes</TalkTitle>
        <TalkSubTitle>Guest Lecture at University of Hawaii, 2023</TalkSubTitle>
        <TalkDescription isVisible={visibleDescription.second}>
          Guest Lecture at University of Hawaii, 2023 Guest Lecture at
          University of Hawaii, 2023 Guest Lecture at University of Hawaii, 2023
        </TalkDescription>
      </TalkCard>
    </SpeakingContainer>
  );
}

export default SpeakingSection;
