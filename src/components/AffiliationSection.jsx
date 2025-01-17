import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";

const AffiliationContainer = styled.section`
  padding: 50px 20px;
  background-color: #111;
  color: white;
  max-width: 1080px;
  margin: auto; /* 화면 중앙에 위치 */
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
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #aaa;
  margin-bottom: 30px;
`;

function AffiliationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한번만 트리거
    threshold: 0.3, // 화면에 30% 이상 보여야 트리거
  });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#hero-section");
      gsap.to(el, { opacity: 1, y: 0, duration: 0.8 });
    }
  }, [inView]);

  return (
    <AffiliationContainer
      id="hero-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <SectionTitle>Affiliation</SectionTitle>
      <SubTitle></SubTitle>
      <p style={{ fontSize: " 1rem" }}>
        <strong
          style={{ fontSize: " 1.5rem", color: "#ffcc00", margin: "1rem" }}
        >
          Institute for Astronomy (IfA) at University of Hawai‘i, USA
        </strong>
        <br />
        <a style={{ color: "#dedede" }}>
          Postdoctoral Researcher, (Jan 2025 ~ )
        </a>
        <br />
        <br />
        <br />
        <strong style={{ fontSize: " 1.1rem", color: "white", margin: "1rem" }}>
          Seoul National University (Seoul, South Korea)
        </strong>
        <br />
        Ph.D. in Astronomy 2017.09-2024.08 <br /> Supervisor: Prof. Myungshin Im
        (GPA 3.8/4.3)
        <br />
        <br />
        <strong style={{ fontSize: " 1.1rem", color: "white", margin: "1rem" }}>
          Chungnam National University (Daejeon, South Korea){" "}
        </strong>
        <br /> B.S. in Astronomy 2013.03-2017.02 <br />
        Dual Major: Physics (GPA 4.3/4.5){" "}
      </p>
    </AffiliationContainer>
  );
}

export default AffiliationSection;
