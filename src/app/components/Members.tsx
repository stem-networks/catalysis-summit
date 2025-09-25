'use client';

import Image from "next/image";
// import Link from "next/link";

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
    image: "/images/images/richard.webp",
    name: "Richard J Spontak",
    institution: "North Carolina State University",
    country: "USA",
    altText: "Richard J Spontak",
  },
  {
    id: 2,
    image: "/images/images/janusz.webp",
    name: "Janusz Lipkowski",
    institution: "Ningbo University of Technology, CEEC Institute, Ningbo",
    country: "Poland",
    altText: "Janusz Lipkowski",
  },
  {
    id: 3,
    image: "/images/images/Habil_F_Lisdat.png",
    name: "Habil F Lisdat",
    institution: "Institute of Biology, Humboldt University of Berlin",
    country: "Germany",
    altText: "Habil F Lisdat",
  },
  {
    id: 4,
    image: "/images/images/xuming_Zhang.jpg",
    name: "Xuming Zhang",
    institution: "Hong Kong Polytechnic University",
    country: "Hong Kong",
    altText: "Xuming Zhang",
  },
  {
    id: 5,
    image: "/images/images/zhixun_Luo.jpg",
    name: "Zhixun Luo",
    institution: "Institute of Chemistry, Chinese Academy of Sciences (ICCAS)",
    country: "China",
    altText: "Zhixun Luo",
  },
  {
    id: 6,
    image: "/images/images/sudip_Kumar_Das.jpg",
    name: "Sudip Kumar Das",
    institution: "University of Calcutta",
    country: "India",
    altText: "Sudip Kumar Das",
  },
];


const Speakers = () => {
  return (
    <div className="speakers-sections members-main-block">
      <div className="import_wrap import-wrapping">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
              data-wow-duration="1000ms">
              <h2>Our <span>Planning Committee 2025</span></h2>

            </div>
          </div>

          <section className="blog">
            {/* <!-- container Start--> */}
            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
              <div className="col-md-12 col-12">
                <div className="grid-main-members-gap">
                  {speakersData.map((member, index) => (
                    <div
                      key={index}
                      className={`each-member-gap ${index >= 3 ? 'member-row-gap' : ''} wow fadeInUp`}
                      data-wow-delay={`${200 + index * 150}ms`}
                      data-wow-duration="1000ms"
                    >
                      <div className="grid-res-gap member-resp-gap">
                        <div className="grid-res-item">
                          <Image
                            src={member.image}
                            alt={member.name}
                            title={member.name}
                            width={200}
                            height={200}
                            className="rounded-circle img-fluid"
                          />
                        </div>
                        <div className="inner-content">
                          <h3>{member.name}</h3>
                          <p className="members-p1 member-country">{member.country}</p>
                          <p className="members-p1">{member.institution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* <div className="members-view-all-btn-block wow fadeInUp" data-wow-delay={`${200 + speakersData.length * 150}ms`} data-wow-duration="1000ms">
            <Link href='/committee' title="View All" className="view-more-speakers-btn">View All</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
