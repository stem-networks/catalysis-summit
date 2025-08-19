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

const membersData: Speaker[] = [
  {
    id: 1,
    image: "/images/images/xuming_zhang.webp",
    name: "Xuming Zhang",
    institution: "The Hong Kong Polytechnic University",
    country: "Hong Kong",
    altText: "Xuming Zhang",
  },
  {
    id: 2,
    image: "/images/images/Habil_F_Lisdat.png",
    name: "Habil F Lisdat",
    institution: "Institute of Biology, Humboldt University of Berlin",
    country: "Germany",
    altText: "Habil F Lisdat",
  },
  {
    id: 3,
    image: "/images/images/zhixun_Luo.jpg",
    name: "Zhixun Luo",
    institution: "Institute of Chemistry, Chinese Academy of Sciences (ICCAS)",
    country: "China",
    altText: "Zhixun Luo",
  },
  {
    id: 4,
    image: "/images/images/sudip_Kumar_Das.jpg",
    name: "Sudip Kumar Das",
    institution: "Chemical Engineering Department, University of Calcutta",
    country: "India",
    altText: "Sudip Kumar Das",
  },
  {
    id: 5,
    image: "/images/images/Chengjie_Yin.jpg",
    name: "Dr. Chengjie Yin",
    institution: "Anhui University of Science and Technology",
    country: "China",
    altText: "Dr. Chengjie Yin",
  },
  {
    id: 6,
    image: "/images/images/Jia_Rui.jpg",
    name: "Jia Rui",
    institution: "Anhui University of Science and Technology",
    country: "China",
    altText: "Jia Rui",
  },
  {
    id: 7,
    image: "/images/images/Jinsong_Hu.jpg",
    name: "Dr. Jinsong Hu",
    institution: "Anhui University of Science and Technology",
    country: "China",
    altText: "Dr. Jinsong Hu",
  },
  {
    id: 8,
    image: "/images/images/Facun_Jiao.jpeg",
    name: "Dr. Facun Jiao",
    institution: "Anhui University of Science and Technology",
    country: "China",
    altText: "Dr. Facun Jiao",
  },
];

const Members = () => {
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
                Our <span>Speakers 2025</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {membersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
                      }`}
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

          {/* <div className="members-view-all-btn-block">
            <Link
              href="/committee"
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

export default Members;
