// src/components/GallerySection.js
import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";
import Slider from "react-slick"; // react-slick import
import ImageModal from "./ImageModal"; // 모달 컴포넌트 import

// CSS for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryContainer = styled.section`
  padding: 50px 20px; /* 반응형 padding */
  min-height: 35vh;
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

  @media (max-width: 768px) {
    padding: 40px 10px; /* 모바일에서 패딩 조절 */
  }

  @media (max-width: 480px) {
    padding: 20px 5px; /* 더 작은 화면에서 패딩 조절 */
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 100px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem; /* 중간 화면에서 제목 크기 조정 */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* 작은 화면에서 제목 크기 조정 */
  }
`;
const MainImageCard = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 330px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px auto; /* 모바일에서 중앙 정렬 */
  max-width: 100%; /* 작은 화면에 맞게 폭 조절 */
  /* @media (max-width: 480px) {
    width: 80vw;
  } */
`;
const ImageCard = styled.img`
  height: auto;
  width: 100%; /* 모바일에서 폭에 맞게 조정 */
  /* border-radius: 10px; */
  cursor: pointer; /* 클릭 가능하도록 커서 변경 */
  /* @media (max-width: 480px) {
    width: 80vw;
  } */
`;

function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (inView) {
      const el = document.querySelector("#gallery-section");
      gsap.to(el, { opacity: 1, y: 0, duration: 1.2 });
    }
  }, [inView]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: window.innerWidth > 768,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <GalleryContainer
      id="gallery-section"
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <hr />
      <SectionTitle>Research Gallery</SectionTitle>
      <Slider {...settings} style={{ marginBottom: "50px" }}>
        {[
          "research_pic1.png",
          "research_pic2.png",
          "research_pic3.png",
          "research_pic4.png",
          "research_pic5.png",
        ].map((image, index) => (
          <div key={index}>
            <MainImageCard>
              <ImageCard
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt={`Research Image ${index + 1}`}
                onClick={() =>
                  openModal(`${process.env.PUBLIC_URL}/assets/${image}`)
                } // 클릭 시 모달 열기
              />
            </MainImageCard>
          </div>
        ))}
      </Slider>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </GalleryContainer>
  );
}

export default GallerySection;
