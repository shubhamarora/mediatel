import React from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0092cb", borderRadius: '50%', right: '-10px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#0092cb", borderRadius: '50%', left: '-10px' }}
      onClick={onClick}
    />
  );
}

function YouTubeVideoList() {
  const videos = [
    'dQw4w9WgXcQ',
    '3JZ_D3ELwOQ',
    'M7lc1UVf-VE',
    'kffacxfA7G4',
    // Add more video IDs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ margin: '80px 40px' }}>
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} style={{ margin: '20px 0' }}>
            <iframe
              width="90%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default YouTubeVideoList;