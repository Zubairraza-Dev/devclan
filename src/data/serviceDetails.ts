import ai from "../assets/images/ai.svg";
import uiux from "../assets/images/uiux.svg";
import mobile from "../assets/images/mobileDevelopment.svg";
import web from "../assets/images/webDevelopment.svg";
import wrench from "../assets/icons/Wrench.svg";
import note from "../assets/icons/Note.svg";
import eye from "../assets/icons/Eye.svg";
import robot from "../assets/icons/Robot.svg";
import branch from "../assets/icons/TreeStructure.svg";
import globe from "../assets/icons/Globe.svg";
import pen from "../assets/icons/PenNibStraight.svg";
import design from "../assets/icons/Layout.svg";
import align from "../assets/icons/AlignBottom.svg";
import android from "../assets/icons/AndroidLogo.svg";
import apple from "../assets/icons/appleLogo.svg";
import react from "../assets/icons/reactLogo.svg";
import swape from "../assets/icons/Swap.svg";
import desktop from "../assets/icons/Desktop.svg";
import layout from "../assets/icons/Layout.svg";
import medal from "../assets/icons/Medal.svg";
import ps from "../assets/icons/Photoshop Logomark.svg";
import diamond from "../assets/icons/Sketch Logomark.svg";
import figma from "../assets/icons/Figma Logomark.svg";
import inLogo from "../assets/icons/InVision Logomark.svg";
import vs from "../assets/icons/Visual Studio CodeLogomark.svg";
import github from "../assets/icons/Git Logomark.svg";
import docker from "../assets/icons/Docker Logomark.svg";
import heroko from "../assets/icons/Heroku Logomark.svg";
import html from "../assets/icons/Git Logomark (1).svg";
import html5 from "../assets/icons/Git Logomark (2).svg";
import angular from "../assets/icons/Git Logomark (3).svg";
import next from "../assets/icons/Git Logomark (4).svg";
import portfolio1 from "../assets/images/Rectangle 1.svg";
import portfolio2 from "../assets/images/Rectangle 2.svg";
import portfolio3 from "../assets/images/Rectangle 3.svg";
import mobileProcess1 from "../assets/images/processMobile1.svg";
import mobileProcess2 from "../assets/images/processMobile2.svg";
import mobileProcess3 from "../assets/images/processMobile3.svg";
import mobileProcess4 from "../assets/icons/processNew.svg";
import mobileProcess5 from "../assets/images/processMobile5.svg";
import mobileProcess6 from "../assets/images/processMobile6.svg";
import mobileProcess7 from "../assets/images/processMobile7.svg";
import processWeb1 from "../assets/images/processMobile1.svg";
import processWeb2 from "../assets/images/processWeb2.svg";
import processWeb3 from "../assets/images/processWeb3.svg";
import processWeb4 from "../assets/images/processWeb4.svg";

import project1 from "../assets/images/redwavePortfolio.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";
import project4 from "../assets/images/project4.svg";
import project5 from "../assets/images/project5.svg";
import project6 from "../assets/images/project6.svg";

export const servicesDetail = [
  {
    id: 1,
    title: "Top UI/UX Design Services",
    image: uiux,
    description:
      "Solve the pressing product design challenges with Dev Clan UI/UX design",
    deatilPoint: [
      "Increase your product adoption by creating a seamless user-friendly design.",
      "Invest in user interface design for higher conversion rates and increased revenue",
      "Boost customer retention by developing fit-for-purpose UI/UX design.",
    ],
    serviceTitle: "UI/UX Design Services",
    detailServices: [
      {
        id: 1,
        title: "Mobile App UI/UX",
        icon: align,
        description:
          "Mobile App UI/UX design is the cornerstone of creating user-friendly, visually appealing, and functional mobile applications. It focuses on how an app looks (UI) and how it works (UX), ensuring users can interact with it effortlessly.",
      },
      {
        id: 2,
        title: "NLP",
        icon: design,
        description:
          "Natural Language Processing (NLP) is a branch of artificial intelligence (AI) that focuses on enabling computers to understand, interpret, and generate human language. By combining linguistics, computer science, and machine learning, NLP facilitates seamless communication between humans and machines.",
      },
      {
        id: 3,
        title: "Computer vision",
        icon: pen,
        description:
          "Computer vision is a field of artificial intelligence (AI) that focuses on enabling machines to interpret, analyze, and make decisions based on visual input. By mimicking the way humans process visual information, computer vision empowers machines to see and respond intelligently to the world around them.",
      },
    ],
    icons: [ps, diamond, figma, inLogo],
    portfolio: [
      {
        id: 1,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project1,
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project2,
      },
      {
        id: 3,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project3,
      },
      {
        id: 4,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project4,
      },
      {
        id: 5,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project5,
      },
      {
        id: 6,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project6,
      },
    ],
  },
  {
    id: 2,
    title: "Future Ready AI Development Services",
    image: ai,
    description:
      "Solve the pressing AI development challenges with DevClan AI/ML design and development",
    deatilPoint: [
      "Increase your product adoption by creating a seamless user-friendly design.",
      "Invest in user interface design for higher conversion rates and increased revenue",
      "Boost customer retention by developing fit-for-purpose UI/UX design.",
    ],
    serviceTitle: "AI Development Services",
    detailServices: [
      {
        id: 1,
        title: "Machine Learning",
        icon: wrench,
        description:
          "Machine learning (ML) is a branch of artificial intelligence (AI) that focuses on creating systems capable of learning from data and improving their performance without being explicitly programmed. By leveraging algorithms and statistical models, machine learning enables computers to identify patterns, make predictions, and adapt to new information.",
      },
      {
        id: 2,
        title: "Natural Language Processing",
        icon: note,
        description:
          "Natural Language Processing (NLP) is a field of artificial intelligence that enables machines to understand, interpret, and respond to human language. By combining linguistics, computer science, and machine learning, NLP allows computers to process and analyze large volumes of natural language data, such as text or speech.",
      },
      {
        id: 3,
        title: "Computer vision",
        icon: eye,
        description:
          "Computer vision is a branch of artificial intelligence and machine learning that enables computers to interpret and make decisions based on visual data from the world, such as images or videos. By mimicking human vision, computer vision systems allow machines to analyze, process, and extract meaningful insights from visual inputs.",
      },
      {
        id: 4,
        title: "AI Chatbots",
        icon: robot,
        description:
          "AI chatbots are intelligent software programs designed to simulate conversations with human users. They leverage artificial intelligence (AI), natural language processing (NLP), and machine learning to understand and respond to user queries in a natural, human-like manner. Chatbots are transforming how businesses interact with customers and how individuals access information, providing instant support and convenience.",
      },
      {
        id: 5,
        title: "Predictive Analysis",
        icon: branch,
        description:
          "Predictive analysis is a branch of advanced analytics that uses historical data, machine learning algorithms, and statistical techniques to predict future outcomes. It is widely used across industries to make informed decisions, optimize processes, and gain a competitive edge by forecasting trends and behaviors.",
      },
      {
        id: 6,
        title: "Neural Networks",
        icon: globe,
        description:
          "Neural networks are a subset of machine learning inspired by the structure and function of the human brain. They consist of layers of interconnected artificial neurons that process and learn from data, making them fundamental to deep learning and artificial intelligence (AI).",
      },
    ],
    developmentPhases: [
      {
        id: 1,
        smallHeading: "Phase 1",
        title: "Problem Definition & Planning",
        description:
          "Clearly define the problem you want the AI to solve. Identify and gather the data required for training the AI model. Determine the boundaries of the AI system and ensure it's feasible within the constraints.",
      },
      {
        id: 2,
        smallHeading: "Phase 2",
        title: "Data Preparation & Preprocessing",
        description:
          "Remove noise, handle missing values, and correct inconsistencies in the data. Normalize or scale the data and convert it into a format suitable for model training. Select and create relevant features that will improve the model's performance.",
      },
      {
        id: 3,
        smallHeading: "Phase 3",
        title: "Model Development & Training",
        description:
          "Choose an appropriate machine learning or deep learning algorithm based on the problem. Use the prepared data to train the model, optimizing it for better performance. Test the model's performance on unseen data to validate its generalization capabilities.",
      },
      {
        id: 4,
        smallHeading: "Phase 4",
        title: "Deployment & Maintenance",
        description:
          "Integrate the trained model into the production environment where it can make predictions. Continuously monitor the AI model's performance and make adjustments as necessary. Periodically retrain the model with new data to ensure it remains accurate and relevant.",
      },
    ],
    portfolio: [
      {
        id: 1,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project1,
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project2,
      },
      {
        id: 3,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project3,
      },
      {
        id: 4,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project4,
      },
      {
        id: 5,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project5,
      },
      {
        id: 6,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project6,
      },
    ],
  },
  {
    id: 3,
    title: "Web App Development",
    image: web,
    description:
      "Solve the pressing product design challenges with Dev Clan UI/UX design",
    deatilPoint: [
      "Increase your product adoption by creating a seamless user-friendly design.",
      "Invest in user interface design for higher conversion rates and increased revenue",
      "Boost customer retention by developing fit-for-purpose UI/UX design.",
    ],
    serviceTitle: "Web Development Services",
    detailServices: [
      {
        id: 1,
        title: "Backend Development",
        icon: desktop,
        description:
          "Backend development refers to the server-side part of web or mobile application development. It involves everything that happens behind the scenes when a user interacts with an application. Backend developers focus on how the application functions, its logic, and how it interacts with databases, servers, and external services.",
      },
      {
        id: 2,
        title: "Front End Development",
        icon: layout,
        description:
          "Frontend development is the part of web or mobile application development that deals with everything that users interact with directly in their browser or app. It is responsible for creating the visual elements and user interfaces (UI) that make up the user experience (UX). ",
      },
      {
        id: 3,
        title: "UI/UX Design",
        icon: pen,
        description:
          "UI/UX design focuses on creating seamless, enjoyable, and efficient experiences for users when interacting with digital products. While UI (User Interface) design deals with the visual aspects and layout of an application, UX (User Experience) design focuses on the overall feel and usability of the product.",
      },
      {
        id: 4,
        title: "Project Management",
        icon: branch,
        description:
          "Project management is the practice of planning, executing, and overseeing projects to achieve specific goals within defined constraints, such as time, budget, and resources. It involves organizing and coordinating tasks, managing teams, and ensuring that projects are completed efficiently and successfully.",
      },
      {
        id: 5,
        title: "Quality Assurance",
        icon: medal,
        description:
          "Quality Assurance (QA) is a critical process in the development and delivery of products or services, ensuring that they meet the required standards and specifications before they are released to customers or end-users. QA is not just about finding defects; it’s about preventing them and ensuring that processes are efficient, effective, and continuously improved.",
      },
    ],
    icons: [vs, github, docker, heroko],
    portfolio: [
      {
        id: 1,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project1,
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project2,
      },
      {
        id: 3,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project3,
      },
      {
        id: 4,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project4,
      },
      {
        id: 5,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project5,
      },
      {
        id: 6,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project6,
      },
    ],
    developmentProcess: [
      {
        id: 1,
        title: "Planning",
        description:
          " This phase involves understanding the project’s goals, defining the target audience, and outlining the features and functionality required for the website. ",
        image: processWeb1,
      },
      {
        id: 2,
        title: "Strategizing The Development",
        description:
          "In this phase, a clear roadmap for how the website will be built is created. This includes selecting the right technologies and platforms, setting timelines, and determining roles for the development team.",
        image: processWeb2,
      },
      {
        id: 3,
        title: "Prototype",
        description:
          "Prototyping involves creating a wireframe or mockup that visually represents the structure of the website. This helps stakeholders understand how the site will look and function before development begins.",
        image: processWeb3,
      },
      {
        id: 4,
        title: "Development Phase",
        description:
          "This is the core phase where the website is built. Developers write the code for both the front end (user-facing elements) and back end (server-side logic and databases).",
        image: processWeb4,
      },
      {
        id: 5,
        title: "Quality Assurance",
        description:
          "After the development is complete, quality assurance ensures the website works as intended. This involves testing all features, fixing bugs, and ensuring compatibility across different devices and browsers.",
        image: mobileProcess5,
      },
      {
        id: 6,
        title: "Update & Maintenance",
        description:
          "Once the website is live, ongoing updates and maintenance are essential to keep it running smoothly. This phase involves monitoring performance, making regular updates, and adding new features as needed.",
        image: mobileProcess7,
      },
    ],
  },
  {
    id: 4,
    title: "Mobile App Development Services",
    image: mobile,
    description:
      "Solve the pressing product design challenges with Dev Clan UI/UX design",
    deatilPoint: [
      "Increase your product adoption by creating a seamless user-friendly design.",
      "Invest in user interface design for higher conversion rates and increased revenue",
      "Boost customer retention by developing fit-for-purpose UI/UX design.",
    ],
    serviceTitle: "Mobile Development Services",
    detailServices: [
      {
        id: 1,
        title: "Android App Development",
        icon: android,
        description:
          "Android app development is the process of creating software applications for devices running the Android operating system. Android, developed by Google, is the most widely used mobile operating system in the world, powering smartphones, tablets, wearables, and even TVs.",
      },
      {
        id: 2,
        title: "IOS App Development",
        icon: apple,
        description:
          "iOS app development refers to the process of building applications for devices that run on Apple's iOS operating system, including iPhones, iPads, Apple Watches, and Apple TVs. iOS app development involves using Apple's official tools, programming languages, and frameworks to create apps that deliver a seamless, intuitive, and high-performance experience to users.",
      },
      {
        id: 3,
        title: "React Native App Development",
        icon: react,
        description:
          "React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables the development of cross-platform applications for iOS and Android using a single codebase, providing a seamless experience across both platforms.",
      },
      {
        id: 4,
        title: "Hybrid App Development",
        icon: swape,
        description:
          "Hybrid app development refers to the process of building mobile applications that are designed to run on multiple platforms (iOS, Android, etc.) using a single codebase. Unlike native apps, which are developed separately for each platform, hybrid apps use web technologies such as HTML5, CSS3, and JavaScript wrapped inside a native container, allowing them to run seamlessly on different devices.",
      },
      {
        id: 5,
        title: "Cross Platform App Development",
        icon: branch,
        description:
          "Cross-platform app development refers to the practice of building mobile applications that can run on multiple platforms, such as iOS, Android, and others, using a single codebase. The primary goal is to create an app that provides a native-like experience on all platforms without the need for separate development efforts for each one.",
      },
    ],
    icons: [html, html5, angular, next],
    portfolio: [
      {
        id: 1,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project1,
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project2,
      },
      {
        id: 3,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project3,
      },
      {
        id: 4,
        title: "Case Study 2",
        description: "Description for case study 1",
        image: project4,
      },
      {
        id: 5,
        title: "Case Study 2",
        description: "Description for case study 2",
        image: project5,
      },
      {
        id: 6,
        title: "Case Study 3",
        description: "Description for case study 3",
        image: project6,
      },
    ],
    developmentProcess: [
      {
        id: 1,
        title: "Planning",
        description:
          "The journey begins with planning, where the vision of the app is defined, and key objectives are outlined. In this phase, market research, target audience identification, and defining the app’s core features and functionality are essential.",
        image: mobileProcess1,
      },
      {
        id: 2,
        title: "Design",
        description:
          "The next stage is design, where the app’s user interface (UI) and user experience (UX) are crafted. Design is more than just the aesthetics; it’s about creating an intuitive and seamless experience for users. The design phase includes wireframes, prototypes, and UI/UX testing to ensure the app is visually appealing and user-friendly.",
        image: mobileProcess2,
      },
      {
        id: 3,
        title: "MVP Development",
        description:
          "Once the design is set, MVP (Minimum Viable Product) development begins. The MVP is a simplified version of the app that includes only the essential features needed to fulfill the core function of the app. The MVP allows developers to quickly release a basic version of the app for testing and feedback, making it easier to identify key issues early in the process.",
        image: mobileProcess3,
      },
      {
        id: 4,
        title: "Product Development",
        description:
          "After MVP testing, the development phase moves into product development, where the app’s full functionality is built. This is where all the features planned in the earlier stages are implemented, including integrating the back end with the front end, coding, and incorporating third-party services or APIs. ",
        image: mobileProcess4,
      },
      {
        id: 5,
        title: "Quality Assurance",
        description:
          "Once the product reaches a stable version, the quality assurance phase begins. In this phase, comprehensive testing is conducted to identify bugs, usability issues, and performance bottlenecks. Various testing methods, including functional, compatibility, and performance testing, ensure that the app meets the highest standards and works flawlessly across all devices and platforms.",
        image: mobileProcess5,
      },
      {
        id: 6,
        title: "Dev Ops",
        description:
          "Following quality assurance, DevOps practices are employed to ensure that the development and deployment processes run smoothly. DevOps focuses on automating and optimizing the continuous integration and continuous delivery (CI/CD) pipeline, facilitating rapid development, testing, and deployment cycles.",
        image: mobileProcess6,
      },
      {
        id: 7,
        title: "Support & Maintenance",
        description:
          "Finally, after the app is live, the support and maintenance phase kicks in. This phase focuses on providing ongoing updates, bug fixes, and new features based on user feedback. It ensures that the app remains compatible with the latest operating systems, resolves any post-launch issues, and continues to meet user expectations.",
        image: mobileProcess7,
      },
    ],
  },
];
