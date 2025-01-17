import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 100px 0px 100px;
  background-size: cover;
  background-position: center;
  background-color: #111;
  color: white;
  text-align: center;
  opacity: 0; /* 초기 상태는 투명 */
  transform: translateY(50px); /* 아래에서 올라오는 효과 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.visible {
    opacity: 1;
    transform: translateY(0); /* 화면에 들어오면 보이게 전환 */
  }
  @media (max-width: 768px) {
    padding: 100px 50px 0 50px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 10px;
`;

const LinkDiv = styled.div`
  margin: 5px;
  padding: 5px;
`;
const LinkDivContainer = styled.div`
  display: flex;
`;

function HeroSection() {
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
    <HeroSectionContainer
      id="hero-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <Title>Dr. Gregory S.H. Paek</Title>
      <SubTitle>
        Exploring the dynamic universe through observation and development
      </SubTitle>
      <LinkDivContainer>
        <LinkDiv>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SilverRon"
          >
            <img
              style={{ height: "1.5rem" }}
              src={`${process.env.PUBLIC_URL}/assets/github-mark-white.svg`}
              alt="github link"
            />
          </a>
        </LinkDiv>
        <LinkDiv>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://orcid.org/0000-0002-6639-6533"
          >
            <img
              style={{ height: "1.5rem" }}
              src={`${process.env.PUBLIC_URL}/assets/orcid.logo.icon.svg`}
              alt="orcid link"
            />
          </a>
        </LinkDiv>
      </LinkDivContainer>
    </HeroSectionContainer>
  );
}

export default HeroSection;
