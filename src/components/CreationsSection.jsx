import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";

const CreationsContainer = styled.section`
  padding: 50px 0;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  opacity: 0; /* 초기 상태는 투명 */
  transform: translateY(50px); /* 아래에서 올라오는 효과 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.visible {
    opacity: 1;
    transform: translateY(0); /* 화면에 들어오면 보이게 전환 */
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #333;
  padding: 20px;
  width: 300px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

function CreationsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#creations-section");
      gsap.to(el, { opacity: 1, y: 0, duration: 0.8 });
    }
  }, [inView]);

  return (
    <CreationsContainer
      id="creations-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <SectionTitle>Made by Ultra</SectionTitle>
      <CardGrid>
        <Card>
          <CardTitle>Zig Card</CardTitle>
          <CardDescription>
            Scan & Pay. In seconds. (Framer / Landing Page)
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Supernova</CardTitle>
          <CardDescription>
            Design systems made easy. (Webflow / Marketing Website)
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>RevMap</CardTitle>
          <CardDescription>
            Validate what to build next. (Framer / Marketing Site)
          </CardDescription>
        </Card>
      </CardGrid>
    </CreationsContainer>
  );
}

export default CreationsSection;
