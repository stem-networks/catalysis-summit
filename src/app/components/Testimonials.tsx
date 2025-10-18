// // src/components/Testimonials.tsx

// "use client";
// import { useState } from "react";
// // import styles from "./Testimonials.module.css";
// import Slider, { Settings } from "react-slick";
// import { useRef } from "react";

// interface Testimonial {
//     id: string;
//     name: string;
//     title: string;
//     university: string;
//     youtubeId: string;
// }

// const testimonials: Testimonial[] = [
//     {
//         id: "1",
//         name: "Prof. Leelakrishna Reddy",
//         title: "University of Johannesburg, South Africa",
//         university: "University of Johannesburg",
//         youtubeId: "HAnw168huqA",
//     },
//     {
//         id: "2",
//         name: "Prof. Ashok Mahajan",
//         title: "Swami Ramanand Teerth Marathwada University, India",
//         university: "SRTM University",
//         youtubeId: "eIho2S0ZahI",
//     },
//     {
//         id: "3",
//         name: "Prof. Diva Sinha",
//         title: "Birla Institute of Technology and Science, India",
//         university: "BITS",
//         youtubeId: "U5HvuKEjH6g",
//     },
//     {
//         id: "4",
//         name: "Prof. Diva Sinha",
//         title: "Birla Institute of Technology and Science, India",
//         university: "BITS",
//         youtubeId: "U5HvuKEjH6g",
//     },
//     {
//         id: "5",
//         name: "Prof. Diva Sinha",
//         title: "Birla Institute of Technology and Science, India",
//         university: "BITS",
//         youtubeId: "U5HvuKEjH6g",
//     }
// ];

// export default function Testimonials() {
//     const [activeVideo, setActiveVideo] = useState<Testimonial>(testimonials[0]);

//     // const [slider, setSlider] = useState(null);
//     const sliderRef = useRef<Slider | null>(null);

//     const settings: Settings = {
//         dots: false,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 3,           // number of thumbnails visible at once
//         slidesToScroll: 1,
//         vertical: true,            // enable vertical sliding
//         verticalSwiping: true,     // allow swipe vertically
//         arrows: false,             // we are using custom buttons
//         autoplay: true,           // usually vertical sliders for thumbnails are manual
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     vertical: false,  // switch to horizontal on smaller screens
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     vertical: false,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     const handlePrevClick = () => sliderRef.current?.slickPrev();
//     const handleNextClick = () => sliderRef.current?.slickNext();


//     return (
//         <div className="testinomials-video-block">
//             <section className="testimonialsSection">
//                 <div className="auto-container">
//                     <div className="Testinomials-devisions-block">
//                         <div className="left-testinomial-block">

//                             <div className="testinom-button-block testinom-top-button-block">
//                                 <button
//                                     className="testinom-top-button" onClick={handlePrevClick}>
//                                     <i className="fa fa-chevron-up chevron-icon"></i>
//                                 </button>
//                             </div>

//                             <div className="thumbnails">
//                                 <Slider {...settings} ref={sliderRef}>
//                                     {testimonials.map((t) => (
//                                         <div
//                                             key={t.id}
//                                             className={`thumbnail_video ${activeVideo.id === t.id ? "active" : ""}`}
//                                             onClick={() => setActiveVideo(t)}
//                                         >
//                                             <iframe
//                                                 className="iframeThumb"
//                                                 src={`https://www.youtube.com/embed/${t.youtubeId}?controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
//                                                 title={t.name}
//                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                                 allowFullScreen
//                                                 style={{ pointerEvents: "none" }} // disable clicks inside iframe
//                                             ></iframe>
//                                         </div>
//                                     ))}
//                                 </Slider>

//                             </div>

//                             <div className="testinom-button-block">
//                                 <button
//                                     className="testinom-down-button testinom-button-block" onClick={handleNextClick}>
//                                     <i className="fa fa-chevron-down chevron-icon"></i>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="right-testinomial-block">
//                             <h2 className="testinom-heading">TESTIMONIALS</h2>
//                             <div className="mainVideo">
//                                 <iframe
//                                     className="testinom_iframeMain"
//                                     src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
//                                     title={activeVideo.name}
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                 ></iframe>
//                                 {/* <div className="videoInfo">
//                                     <p className="mainName">{activeVideo.name}</p>
//                                     <p className="mainTitle">{activeVideo.title}</p>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

"use client";
import { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";

interface Testimonial {
    id: string;
    name: string;
    university: string;
    youtubeId: string;
}

const testimonials: Testimonial[] = [
    { id: "1", name: "Prof. Changquan Lai", university: "University of Johannesburg", youtubeId: "VuN9XORP230" },
    { id: "2", name: "Prof. Ashok Mahajan", university: "SRTM University", youtubeId: "uYlawstJsnc" },
    { id: "3", name: "Prof. Diva Sinha", university: "BITS", youtubeId: "7mR-dw22NCc" },
    { id: "4", name: "Prof. Syazwani Mohd Zaki", university: "BITS", youtubeId: "6GQXJaVEIAY" },
    { id: "5", name: "Prof. Leela krishna Reddy", university: "BITS", youtubeId: "gM3uXn7wekk" },
    { id: "6", name: "Prof. Janusz Lipkowski", university: "BITS", youtubeId: "7ytEgOpnlhc" },
    { id: "7", name: "Prof. Guojiang Wan", university: "BITS", youtubeId: "6TDuHtLEYnE" },
];

export default function Testimonials() {
    const [activeVideo, setActiveVideo] = useState<Testimonial>(testimonials[0]);
    const [isMuted, setIsMuted] = useState(true); // muted on first load
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            { breakpoint: 1101, settings: { vertical: false, slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 800, settings: { vertical: false, slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { vertical: false, slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    const handlePrevClick = () => sliderRef.current?.slickPrev();
    const handleNextClick = () => sliderRef.current?.slickNext();

    const getThumbnail = (youtubeId: string) => `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    const handleThumbnailClick = (video: Testimonial) => {
        setActiveVideo(video);
        setIsMuted(false); // play with sound after user clicks
    };

    return (
        <div className="testinomials-video-block">
            <section className="testimonialsSection">
                <div className="auto-container">
                    <div className="Testinomials-devisions-block">

                        {/* LEFT: Vertical Thumbnails */}
                        <div className="left-testinomial-block">
                            <div className="testinom-button-block testinom-top-button-block testinom-desktop-only">
                                <button className="testinom-top-button" onClick={handlePrevClick}>
                                    <i className="fa fa-chevron-up chevron-icon"></i>
                                    {/* <i className='bx bx-chevron-up chevron-icon'></i> */}
                                </button>
                            </div>

                            <div className="thumbnails">
                                <Slider {...settings} ref={sliderRef}>
                                    {testimonials.map((t) => (
                                        <div
                                            key={t.id}
                                            className="thumbnail_video"
                                            onClick={() => handleThumbnailClick(t)}
                                        >
                                            <img
                                                key={t.id}
                                                src={getThumbnail(t.youtubeId)}
                                                alt={t.name}
                                                className={`iframeThumb ${activeVideo.id === t.id ? "active" : ""}`}
                                            />
                                            {/* Play button overlay */}
                                            <div className="playOverlay">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <div className="testinom-button-block testinom-desktop-only">
                                <button className="testinom-down-button" onClick={handleNextClick}>
                                    <i className="fa fa-chevron-down chevron-icon"></i>
                                </button>
                            </div>

                            {/* Tablet/Mobile Arrows (Left/Right) */}
                            <div className="testinom-button-block testinom-mobile-only">
                                <button className="testinom-left-button" onClick={handlePrevClick}>
                                    <i className="fa fa-chevron-left chevron-icon"></i>
                                </button>
                                <button className="testinom-right-button" onClick={handleNextClick}>
                                    <i className="fa fa-chevron-right chevron-icon"></i>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Main Video Player */}
                        <div className="right-testinomial-block">
                            <h2 className="testinom-heading">TESTIMONIALS</h2>
                            <div className="mainVideo">
                                <iframe
                                    className="testinom_iframeMain"
                                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1&controls=1`}
                                    title={activeVideo.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
