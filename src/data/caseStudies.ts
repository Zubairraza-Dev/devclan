// case card images
import case1 from "../assets/images/case1.svg";
import case2 from "../assets/images/case2.svg";
import case3 from "../assets/images/case3.svg";
import case4 from "../assets/images/case4.svg";
import case5 from "../assets/images/case5.svg";
import case6 from "../assets/images/case6.svg";
// project main image
import redwave from "@/assets/images/redwaveAboutImage.svg";

// technologies icon
import vue from "@/assets/icons/vueIcon.svg";
import node from "@/assets/icons/nodeIcon.svg";
import mongo from "@/assets/icons/mongodbIcon.svg";
import docker from "@/assets/icons/dockerIcon.svg";

// svg components
import project1 from "../assets/images/redwaveAboutImage.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";
import project4 from "../assets/images/project4.svg";
import project5 from "../assets/images/project5.svg";
import project6 from "../assets/images/project6.svg";
import project7 from "../assets/images/project7.svg";
import project8 from "../assets/images/Hejaz.png";
import funcationality1 from "../assets/images/functionalityImage.svg";
import funcationality2 from "../assets/images/functionalityImage.svg";
import funcationality3 from "../assets/images/functionalityImage.svg";

export const caseStudies = [
  {
    id: 1,
    title: "",
    cardImg: case1,
    mainImg: project1,
    shortDescription: "Description for case study 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    background: "bg-red-800",
    functionalityImage: [funcationality1, project2, project3],
  },
  {
    id: 2,
    title: "Case Study 2",
    cardImg: project2,
    mainImg: project2,
    shortDescription:
      "ShaBaas Pay is an Australian-based fintech company that offers a secure and convenient QR code payment application designed to facilitate real-time transactions between businesses and consumers.",
    description:
      "ShaBaas Pay is an Australian-based fintech company that offers a secure and convenient QR code payment application designed to facilitate real-time transactions between businesses and consumers. The platform aims to streamline the payment process by enabling businesses to generate invoices directly from their smartphones and accept instant payments through QR codes. This approach eliminates the need for traditional point-of-sale systems and reduces transaction fees, providing a cost-effective solution for businesses of all sizes.",
    problems: [
      "High Transaction Fees",
      "Delayed Payment Settlements",
      "Complex Invoicing Processes",
      "Customer Engagement and Feedback",
    ],
    functionality:
      "At its core, ShaBaas Pay enables businesses to generate invoices swiftly and accept payments instantly via QR codes. The platform supports payments from any Australian bank account, ensuring broad accessibility. Additionally, the app rewards customers for early payments and provides features to collect authentic Google reviews, enhancing customer satisfaction and business reputation. By offering a seamless, secure, and efficient payment solution, ShaBaas Pay aims to revolutionize the transaction experience for both businesses and consumers in Australia.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project2, project2, project3],
  },
  {
    id: 3,
    title: "Case Study 3",
    cardImg: project3,
    mainImg: project3,
    shortDescription:
      "Nadine Logistics is a full-service trucking, courier, and logistics firm dedicated to providing customized logistics strategies across various industries, including manufacturing, retail, high-tech, and healthcare.",
    description:
      "Nadine Logistics is a full-service trucking, courier, and logistics firm dedicated to providing customized logistics strategies across various industries, including manufacturing, retail, high-tech, and healthcare. The company emphasizes real-time tracking and responsive service to offer clients the insights and agility needed to stay ahead in a dynamic, globalized world.",
    problems: [
      "Complex Supply Chain Management",
      "Lack of Real-Time Visibility",
      "Inefficient Transportation Processes",
      "Limited Responsiveness to Market Changes",
    ],
    functionality:
      "At its core, Nadine Logistics specializes in developing and implementing customized logistics strategies that incorporate real-time tracking and responsive service. By leveraging advanced analytics and digital tools, the company ensures efficient and reliable transportation and logistics solutions. This approach allows clients to navigate the complexities of modern supply chains effectively, ensuring their goods are delivered seamlessly and sustainably.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project3, project2, project3],
  },
  {
    id: 4,
    title: "Case Study 4",
    cardImg: project4,
    mainImg: project4,
    shortDescription:
      "Finance That is a Canadian peer-to-peer marketplace that integrates the buying, selling, and financing of automotive and powersports vehicles into a single platform. ",
    description:
      "Finance That is a Canadian peer-to-peer marketplace that integrates the buying, selling, and financing of automotive and powersports vehicles into a single platform. It connects buyers and sellers, offering instant financing options to facilitate seamless transactions.",
    problems: [
      "Fragmented Vehicle Purchasing Process",
      "Limited Financing Accessibility",
      "Trust and Verification Issues",
      "Dealer Sales Expansion",
    ],
    functionality:
      "At its core, Finance That serves as a comprehensive marketplace that connects buyers and sellers of automotive and powersports vehicles. Quick and accessible financing options with rates starting at 5.99%, often requiring no down payment.An efficient process where buyers can find their desired vehicle, get pre-approved in less than two minutes, and complete the purchase with the option of pickup or contactless delivery within 24 to 48 hours. By integrating these functionalities, Finance That simplifies the vehicle purchasing experience, making it more accessible and efficient for both buyers and sellers across Canada.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [funcationality1, project2, project3],
  },
  {
    id: 5,
    title: "Case Study 5",
    cardImg: project5,
    mainImg: project5,
    shortDescription:
      "Up4Change is an Australian 'social roundup' donation platform designed to connect individuals with not-for-profit organizations through a centralized social feed. ",
    description:
      "Up4Change is an Australian 'social roundup' donation platform designed to connect individuals with not-for-profit organizations through a centralized social feed. The platform enables users to support causes they care about by rounding up their everyday transactions to the nearest dollar and donating the spare change to selected charities.",
    problems: [
      "Disconnected Donor Experience",
      "Inconvenient Donation Processes",
      "Fundraising Challenges for Not-for-Profits",
      "Centralized Social Feed",
    ],
    functionality:
      "At its core, Up4Change simplifies charitable giving by allowing users to link their spending accounts and automatically round up transactions to donate spare change to selected not-for-profits. The platform's centralized social feed keeps users informed about the impact of their contributions and fosters a community of engaged donors. For not-for-profit organizations, Up4Change provides a streamlined way to connect with supporters and manage fundraising efforts more effectively.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project5, project2, project3],
  },
  {
    id: 6,
    title: "Case Study 6",
    cardImg: project6,
    mainImg: project6,
    shortDescription:
      "Hire A Fractional is a specialized job platform that connects startups and growing companies with senior-level fractional executives.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: [
      "Access to Executive Talent",
      "Scalability Challenges",
      "Diverse Expertise Needs",
      "",
    ],
    functionality:
      "At its core, Hire A Fractional operates as a matchmaking platform, connecting businesses with qualified fractional executives. Companies can browse job postings in key areas such as operations, marketing, and finance, and identify candidates who meet their specific needs. This approach provides businesses with the flexibility to access senior-level talent on a part-time basis, facilitating growth and operational efficiency without the long-term commitment of full-time hires.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project6, project2, project3],
  },
  {
    id: 7,
    title: "Case Study 7",
    cardImg: project7,
    mainImg: project7,
    shortDescription: "Description for case study 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project7, project2, project3],
  },
  {
    id: 8,
    title: "Case Study 7",
    cardImg: project8,
    mainImg: project8,
    shortDescription:
      "Hejaz Financial Services is an Australian financial institution specializing in providing Shariah-compliant financial products and services to the Muslim community.",
    description:
      "Hejaz Financial Services is an Australian financial institution specializing in providing Shariah-compliant financial products and services to the Muslim community. Their offerings include Islamic superannuation, halal home financing, investment opportunities, and protection plans, all designed to align with Islamic principles",
    problems: [
      "Lack of Shariah-Compliant Financial Products",
      "Complexity in Managing Finances According to Faith",
      "Limited Access to Ethical Investment Opportunities",
    ],
    functionality:
      "At its core, Hejaz Financial Services integrates Islamic principles into modern financial products, offering a comprehensive suite of services that cater to the financial needs of Muslims in Australia. By ensuring all offerings are Shariah-compliant, Hejaz enables clients to manage their finances, invest, and plan for the future without compromising their religious beliefs.",
    technologies: [vue, node, mongo, docker],
    functionalityImage: [project8, project2, project3],
  },
];
