import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../../redux/action/SliderAction/SliderAction";
import { getImageUrl } from "../../api/api";

export const HeroSection = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.slider);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchSlider());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const toggleMute = () => {
    const currentVideo = document.querySelector(
      ".slick-slide.slick-active video"
    );
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsMuted(currentVideo.muted);
    }
  };
  const sortedItems = [...items].sort((a, b) =>
    a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
  );

  return (
    <section className="h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-hidden">
        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {sortedItems.map((slide, index) => (
              <div key={index} className="h-screen w-full relative p-0">
                {slide.type === "image" ? (
                  <img
                    src={getImageUrl(slide.source)}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={getImageUrl(slide.source)}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="z-20 absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        {items[currentSlide]?.type === "video" && (
          <button
            onClick={toggleMute}
            className="absolute bottom-6 left-6 z-20 text-secondary p-2 rounded-full hover:text-primary transition"
          >
            {isMuted ? <BiVolumeMute size={24} /> : <BiVolumeFull size={24} />}
          </button>
        )}
      </div>
    </section>
  );
};
