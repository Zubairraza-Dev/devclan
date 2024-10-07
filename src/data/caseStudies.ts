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
import project1 from "../assets/images/redwaveAboutImage.svg"
import project2 from "../assets/images/project2.svg"
import project3 from "../assets/images/project3.svg"
import project4 from "../assets/images/project4.svg"
import project5 from "../assets/images/project5.svg"
import project6 from "../assets/images/project6.svg"
import project7 from "../assets/images/project7.svg"

import funcationality1 from "../assets/images/functionalityImage.svg"
import funcationality2 from "../assets/images/functionalityImage.svg"
import funcationality3 from "../assets/images/functionalityImage.svg"

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
    background: "bg-red-800"
    ,functionalityImage:[funcationality1, project2, project3]
  },
  {
    id: 2,
    title: "Case Study 2",
    cardImg: project2,
    mainImg: project2,
    shortDescription: "Description for case study 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker]
    ,functionalityImage:[funcationality1, project2, project3]
  },
  {
    id: 3,
    title: "Case Study 3",
    cardImg: project3,
    mainImg: redwave,
    shortDescription: "Description for case study 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    functionalityImage:[funcationality1, project2, project3]

  },
  {
    id: 4,
    title: "Case Study 4",
    cardImg: project4,
    mainImg: project4,
    shortDescription: "Description for case study 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    functionalityImage:[funcationality1, project2, project3]

  },
  {
    id: 5,
    title: "Case Study 5",
    cardImg: project5,
    mainImg: redwave,
    shortDescription: "Description for case study 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    functionalityImage:[funcationality1, project2, project3]

  },
  {
    id: 6,
    title: "Case Study 6",
    cardImg: project6,
    mainImg: redwave,
    shortDescription: "Description for case study 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec vulputate non neque placerat mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris.",
    problems: ["problem 1", "problem 2", "problem 3", "problem 4"],
    functionality:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum uctus lorem, in tempus mauris. Donec vulputate non neque placeratmattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque eu nunc",
    technologies: [vue, node, mongo, docker],
    functionalityImage:[funcationality1, project2, project3]

  },
];
