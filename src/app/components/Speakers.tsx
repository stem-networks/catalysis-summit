// 'use client';

// import Image from "next/image";
// import Link from "next/link";

// interface Speaker {
//   id: number;
//   image: string;
//   name: string;
//   institution: string;
//   country: string;
//   altText: string;
// }

// const speakersData: Speaker[] = [
//   {
//     id: 1,
//     image: "/images/speakers-2026/Dae_Dong_Sung.jpg",
//     name: "Dae Dong Sung",
//     institution: "Korea University Sejong Campus",
//     country: "South Korea",
//     altText: "Dae Dong Sung",
//   },
//   {
//     id: 2,
//     image: "/images/speakers-2026/Jean_Marie_Dubois.jpg",
//     name: "Jean-Marie Dubois",
//     institution: "University of Lorraine",
//     country: "France",
//     altText: "Jean-Marie Dubois",
//   },
//   {
//     id: 3,
//     image: "/images/speakers-2026/Alireza_Heidari.jpg",
//     name: "Alireza Heidari",
//     institution: "California South University",
//     country: "USA",
//     altText: "Alireza Heidari",
//   },
//   {
//     id: 4,
//     image: "/images/speakers-2026/Janez_Trontelj.jpg",
//     name: "Janez Trontelj",
//     institution: "University of Ljubljana",
//     country: "Slovenia",
//     altText: "Janez Trontelj",
//   },
//   {
//     id: 5,
//     image: "/images/speakers-2026/Teresa_Vieira.jpeg",
//     name: "Teresa Vieira",
//     institution: "University of Coimbra",
//     country: "Portugal",
//     altText: "Teresa Vieira",
//   },
//   {
//     id: 6,
//     image: "/images/speakers-2026/Wenbin_Hou.jpg",
//     name: "Wenbin Hou",
//     institution: "Dalian University of Technology",
//     country: "China",
//     altText: "Wenbin Hou",
//   },
// ];


// const Speakers = () => {
//   return (
//     <div className="speakers-sections members-main-block">
//       <div className="import_wrap import-wrapping">
//         <div className="auto-container clearfix">
//           <div className="row test-imp-row">
//             <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
//               data-wow-duration="1000ms">
//               <h2>Our <span>Speakers 2026</span></h2>

//             </div>
//           </div>

//           <section className="blog">
//             {/* <!-- container Start--> */}
//             <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
//               <div className="col-md-12 col-12">
//                 <div className="grid-main-members-gap">
//                   {speakersData.map((member, index) => (
//                     <div
//                       key={index}
//                       className={`each-member-gap ${index >= 3 ? 'member-row-gap' : ''} wow fadeInUp`}
//                       data-wow-delay={`${200 + index * 150}ms`}
//                       data-wow-duration="1000ms"
//                     >
//                       <div className="grid-res-gap member-resp-gap">
//                         <div className="grid-res-item">
//                           <Image
//                             src={member.image}
//                             alt={member.name}
//                             title={member.name}
//                             width={200}
//                             height={200}
//                             className="rounded-circle img-fluid"
//                           />
//                         </div>
//                         <div className="inner-content">
//                           <h3>{member.name}</h3>
//                           <p className="members-p1 member-country">{member.country}</p>
//                           <p className="members-p1">{member.institution}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>
//           </section>

//           <div className="members-view-all-btn-block wow fadeInUp" data-wow-delay={`${200 + speakersData.length * 150}ms`} data-wow-duration="1000ms">
//             <Link href='/speakers' title="View All" className="view-more-speakers-btn">View All</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Speakers;


'use client';

import Image from "next/image";
import Link from "next/link";

interface Speaker {
  id: number;
  image: string;
  name: string;
  institution: string;
  country: string;
  altText: string;
}

const speakersData: Speaker[] = [
  {
    id: 1,
    image: "/images/speakers-2026/Dae_Dong_Sung.jpg",
    name: "Dae Dong Sung",
    institution: "Korea University Sejong Campus",
    country: "South Korea",
    altText: "Dae Dong Sung",
  },
  {
    id: 2,
    image: "/images/speakers-2026/Jean_Marie_Dubois.jpg",
    name: "Jean-Marie Dubois",
    institution: "University of Lorraine",
    country: "France",
    altText: "Jean-Marie Dubois",
  },
  {
    id: 3,
    image: "/images/speakers-2026/Alireza_Heidari.jpg",
    name: "Alireza Heidari",
    institution: "California South University",
    country: "USA",
    altText: "Alireza Heidari",
  },
  {
    id: 4,
    image: "/images/speakers-2026/Janez_Trontelj.jpg",
    name: "Janez Trontelj",
    institution: "University of Ljubljana",
    country: "Slovenia",
    altText: "Janez Trontelj",
  },
  {
    id: 5,
    image: "/images/speakers-2026/Teresa_Vieira.jpeg",
    name: "Teresa Vieira",
    institution: "University of Coimbra",
    country: "Portugal",
    altText: "Teresa Vieira",
  },
  {
    id: 6,
    image: "/images/speakers-2026/Wenbin_Hou.jpg",
    name: "Wenbin Hou",
    institution: "Dalian University of Technology",
    country: "China",
    altText: "Wenbin Hou",
  },
  {
    id: 7,
    image: "/images/speakers-2026/Leonard_Mwaikambo.jpg",
    name: "Leonard Mwaikambo",
    institution: "University of Dar es Salaam",
    country: "Tanzania",
    altText: "Leonard Mwaikambo",
  },
  {
    id: 8,
    image: "/images/speakers-2026/Parvin_Abachi.jpeg",
    name: "Parvin Abachi",
    institution: "Sharif University of Technology",
    country: "Iran",
    altText: "Parvin Abachi",
  },
];

const Speakers = () => {
  return (
    <div className="speakers-section first-design">
      <div className="import_wrap">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div
              className="col-md-12 session_wrap_style1 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <h2>
                Our <span>Speakers 2026</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {speakersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
                      }  wow fadeInUp`}
                    data-wow-delay={`${200 + index * 150}ms`}
                    data-wow-duration="1000ms"
                    key={index}
                  >
                    <div className="card text-center p-3 border">
                      <div className="custom-border-wrapper">
                        <div className="image-wrapper mb-3">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            title={speaker.name}
                            width={200}
                            height={200}
                            className="rounded-circle img-fluid"
                          />
                        </div>
                      </div>
                      <div className="speaker-details normal-design">
                        <h3>{speaker.name}</h3>
                        <p>{speaker.institution}</p>
                        <p>{speaker.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="members-view-all-btn-block wow fadeInUp" data-wow-delay={`${200 + speakersData.length * 150}ms`} data-wow-duration="1000ms">
            <Link
              href="/speakers"
              title="View All"
              className="view-more-speakers-btn"
            >
              View All
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
