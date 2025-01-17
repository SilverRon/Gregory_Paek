// src/components/CollaborationsSection.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const CollaborationsContainer = styled.section`
  max-width: 1080px;
  padding: 50px 20px;
  background-color: #111;
  color: white;
  text-align: center;
  margin: auto; /* 화면 중앙에 위치 */
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

const CollaborationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.01);
  padding: 20px;
  max-width: 1000px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* 가운데 정렬 */
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const CollaborationTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
`;
const CollaborationsubTitle = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  margin: 10px;
`;

const CollaborationDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-top: 10px;
  display: ${(props) =>
    props.isVisible ? "block" : "none"}; /* 토글 상태에 따라 보임/숨김 */
`;

function CollaborationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [visibleDescription, setVisibleDescription] = useState({
    first: false,
    second: false,
  });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#collaborations-section");
      gsap.to(el, { opacity: 1, y: 0, duration: 1.2 });
    }
  }, [inView]);

  const toggleDescription = (card) => {
    setVisibleDescription((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <CollaborationsContainer
      id="collaborations-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <hr></hr>
      <SectionTitle>Refereed Papers</SectionTitle>
      <CollaborationCard onClick={() => toggleDescription("first")}>
        <CollaborationTitle>NASA Gravitational Wave Project</CollaborationTitle>
        <CollaborationsubTitle>
          Collaborated on the analysis of gravitational wave signals.
        </CollaborationsubTitle>
        <CollaborationDescription isVisible={visibleDescription.first}>
          Collaborated on the analysis of gravitational wave signals.
          Collaborated on the analysis of gravitational wave
          signals.Collaborated on the analysis of gravitational wave signals.
        </CollaborationDescription>
      </CollaborationCard>
      <CollaborationCard onClick={() => toggleDescription("second")}>
        <CollaborationTitle>
          Worked with a global team on astrophysical
        </CollaborationTitle>
        <CollaborationsubTitle>
          Worked with a global team on astrophysical
        </CollaborationsubTitle>
        <CollaborationDescription isVisible={visibleDescription.second}>
          Worked with a global team on astrophysical phenomena research. Worked
          with a global team on astrophysical phenomena research. Worked with a
          global team on astrophysical phenomena research.
        </CollaborationDescription>
      </CollaborationCard>
    </CollaborationsContainer>
  );
}

export default CollaborationsSection;
