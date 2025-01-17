// src/components/ResearchSection.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const ResearchContainer = styled.section`
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
  margin-top: 50px;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.01);
  padding: 20px;
  width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: "0 3rem";
`;
const CollaborationCard = styled.div`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 20px;
  max-width: 1000px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* 가운데 정렬 */
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80%;
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
  margin-top: 50px;
  display: ${(props) =>
    props.isVisible ? "block" : "none"}; /* 토글 상태에 따라 보임/숨김 */
`;

function ResearchSection() {
  const [visibleDescription, setVisibleDescription] = useState({
    first: false,
    second: false,
  });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#research-section");
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
    <ResearchContainer
      id="research-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <hr></hr>
      <SectionTitle>Publications</SectionTitle>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <ProjectCard>
          <ProjectTitle>
            GECKO Follow-up Observation of GW190425{" "}
            <a
              href="https://iopscience.iop.org/article/10.3847/1538-4357/ad0238"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: "1rem", margin: "0 5px" }}
                src={`${process.env.PUBLIC_URL}/assets/a_logo.svg`}
              />
            </a>
          </ProjectTitle>
          <ProjectDescription>
            Paek, G. S. H., Im, M., Kim, J., et al. 2024, ApJ, 960, 113:
            Gravitational-wave Electromagnetic Counterpart Korean Observatory
            (GECKO): GECKO Follow-up Observation of GW190425
          </ProjectDescription>
        </ProjectCard>
        <CollaborationCard>
          <CollaborationTitle onClick={() => toggleDescription("first")}>
            Other Refereed
            <a
              href="https://ui.adsabs.harvard.edu/public-libraries/XB6KhWhDTe6KUWNCPRDdZQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: "1rem", margin: "0 5px" }}
                src={`${process.env.PUBLIC_URL}/assets/a_logo.svg`}
              />
            </a>
          </CollaborationTitle>
          {/* <CollaborationsubTitle>Other Refereed</CollaborationsubTitle> */}
          <CollaborationDescription isVisible={visibleDescription.first}>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#cdcbcb",
                textAlign: "left",
                margin: "0 3rem",
              }}
            >
              Gu, Lim, Changsu Choi, Myungshin Im, Sung-Chul Yoon, Paek, G. S.
              H., et al. submitted in JKAS: High-cadence Optical Observations of
              a Normal Type Ia Supernova 2018kp from its Early Phase
              <br />
              <br />
              Taak, Donggeun, Uhm Z. Lucas, Paek, G. S. H., and Im, M., et al.
              accepted in ApJ: Multi-wavelength analysis on the early afterglow
              of the extremely bright GRB 221009A <br />
              Gu, Lim, Im, M., Paek, G. S. H., et al. 2024 submitted in ApJ: The
              Early Light Curve of a Type Ia Supernova 2021hpr in NGC 3147:
              Progenitor Constraints with the Companion Interaction Model
              <br />
              <br />
              Kann, D.A., White, N. E., Ghirlanda, G., Oates, S. R., Melandri,
              A., Jelínek, M., de Ugarte Postigo, A., Levan, A. J.,
              Martin-Carrillo, A., Paek, G. S.-H., et al. 2024, A&A, 686, A56:
              Fires in the deep: The luminosity distribution of early- time
              gamma-ray-burst afterglows in light of the Gamow Explorer
              sensitivity requirements
              <br />
              <br />
              Yang, Y., …, Paek, G. S. H., et al., 2024, Nature, 626, 742-745: A
              Lanthanide-rich Kilonova in the Aftermath of a Long Gamma-ray
              Burst
              <br />
              <br />
              Becerra, R. L., …, Paek, G. S. H., et al. 2023, MNRAS, 522,
              5204-5216: Deciphering the Unusual Stellar Progenitor of GRB
              210704A
              <br />
              <br />
              Gu, Lim, Im, M., Paek, G. S. H., et al. 2023, ApJ, 949, 33: The
              Early Light Curve of a Type Ia Supernova 2021hpr in NGC 3147:
              Progenitor Constraints with the Companion Interaction Model
              <br />
              <br />
              Masterson, Megan, …, Paek, G. S. H., et al. 2023, ApJL, 945, 34:
              Unusual Hard X-Ray Flares Caught in NICER Monitoring of the Binary
              Supermassive Black Hole Candidate AT2019cuk/Tick Tock/SDSS
              J1430+2303 <br />
              <br />
              Kim, Joonho, Im, M., Paek, G. S. H., et al. 2021, ApJ, 916, 47K:
              GECKO Optical Follow-up Observation of Three Binary Black Hole
              Merger Events: GW190408_181802, GW190412, and GW190503_185404{" "}
              <br />
              <br />
              Im, M., …, Paek, G. S. H., et al. 2021, JKAS, 54, 89I: SomangNet:
              Small Telescope Network of Korea <br />
              <br />
              Kim, Y., …, Paek, G. S. H., et al. 2020, ApJ, 904, 111K: The
              Infrared Medium-deep Survey. VIII. Quasar Luminosity Function at z
              ∼ 5 <br />
              <br />
              1Shin, S., …, Paek, G. S. H., et al. 2020, ApJ, 893, 45S: The
              Infrared Medium-deep Survey. VII. Faint Quasars at z ∼ 5 in the
              ELAIS-N1 Field <br />
              <br />
              Im, M., …, Paek, G. S. H., et al. 2019, JKAS, 52, 11I: Intensive
              Monitoring Survey of Nearby Galaxies (IMSNG)
            </p>
          </CollaborationDescription>
        </CollaborationCard>
      </div>
    </ResearchContainer>
  );
}

export default ResearchSection;
