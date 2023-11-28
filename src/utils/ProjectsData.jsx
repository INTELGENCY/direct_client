import BallImage from "/assets/Project/imageMain.png";
export const dataProject = [
  {
    id: "90785643",
    title: "Smart Ball Based Surveillance System using AI (BKV-1)",
    description: `Intelligence operations play a vital role in the national security of a country. Law enforcement forces rely on the intelligence reports to conduct operations for preventing terrorist activities. It is important that intelligence reports be accurate and timely. One of the main challenges faced by the law enforcement forces during Surveillance and Reconnaissance missions are the lack of infrastructure for communication and monitoring. Mostly these operations were conducted in remote areas, with no such facilities. Recognizing this need for law enforcement forces and also to address this challenge we proposed a wireless based multi camera imagery device for real-time capturing and transmission of imagery data to a nearly deployed Ad-hoc mobile base station. The proposed solution consists of a software and hardware pipeline for a throwable  ball shaped imaging device, that would be able to capture the high resolution imagery  data using multiple RGB cameras and transmit that data to a base-station. At base  station, the artificial intelligence algorithm will be applied to the imagery data for detecting the person of interest. Using throwable imagery devices for surveillance application will allow law enforcement forces to effectively locate, observe and engage a range of targets in their       intelligence, surveillance and reconnaissance (ISR) mission
      ${" "}      
      The envisioned surveillance system represents a cutting-edge integration of hardware and software components designed to significantly bolster the capabilities of law enforcement during Surveillance and Reconnaissance missions. At its core is a throwable, ball-shaped imaging device, meticulously engineered to navigate and capture high-resolution imagery in challenging terrains. The spherical structure, akin to a football in size (approximately 23 cm in diameter), facilitates stable rotation in all directions, ensuring a complete and dynamic field of view. This device houses a sophisticated array of 16 RGB cameras strategically positioned to capture a panoramic perspective. Real-time data transmission to a deployable Ad-hoc mobile base station forms a pivotal aspect of the system, enabling immediate access to critical intelligence reports. The software pipeline integrates artificial intelligence algorithms for the detection of persons of interest, elevating the system beyond mere data collection to actionable insights.
      ${" "}
      In conclusion, this comprehensive surveillance system not only offers a groundbreaking solution to existing challenges in intelligence operations but also lays the foundation for adaptable and scalable advancements in the future. The integration of state-of-the-art technology, user-friendly interfaces, and a forward-looking approach positions this system as a pivotal tool for law enforcement agencies striving for enhanced capabilities in intelligence, surveillance, and reconnaissance missions.
      `,
    image: BallImage,
    startDate: "November 11, 2023",
    endDate: null,
  },
];

export const TasksProject = [
  {
    id: 1,
    title: "Project Planning and Research",
    progress: 90,
    startDate: "November 20, 2023",
    endDate: "December 4, 2023",
    status: "in progress",
    statusColor: "blue",
    description:
      "This initial phase focuses on comprehensive project planning and in-depth research. The team will define the scope and objectives of the surveillance system, outline specific use cases, and conduct thorough research on camera technologies and AI algorithms. The goal is to establish a solid foundation for the project's success.",
    Subtasks: [
      {
        title: "Define Project Scope and Objectives",
        description:
          "Clearly outline the goals and objectives of the surveillance system project.Specify the intended use cases and scenarios for deployment.",
        startDate: "November 20, 2023",
        endDate: "November 25, 2023",
      },
      {
        title: "Research Camera Technologies",
        description:
          "Investigate and finalize the camera technologies (Arducam, OV7670, OV2640, etc.) based on specifications. Determine the number of cameras required for complete 360⁰ coverage.",
        startDate: "November 26, 2023",
        endDate: "November 30, 2023",
      },
      {
        title: "Explore AI Algorithms",
        description:
          "Research and select appropriate AI algorithms for person detection. Consider real-time processing capabilities and compatibility with the chosen hardware.",
        startDate: "December 1, 2023",
        endDate: "December 4, 2023",
      },
    ],
  },
  {
    id: 2,
    title: "Hardware and Prototype Development",
    progress: 50,
    startDate: "December 5, 2023",
    endDate: "December 18, 2023",
    status: "in progress",
    statusColor: "blue",
    description:
      "During this stage, the team will transition from planning to the practical development of the hardware and the initial prototype. The focus will be on designing the spherical imaging device, integrating the Inertial Sensor Module (IMU), and selecting and incorporating the chosen cameras. This milestone aims to create a tangible prototype that aligns with the project's technical requirements.",
    Subtasks: [
      {
        title: "Design Spherical Imaging Device",
        description:
          "Develop a design for the throwable, ball-shaped imaging device.Determine the placement and configuration of cameras within the spherical structure.",
        startDate: "December 5, 2023",
        endDate: "December 8, 2023",
      },
      {
        title: "Integrate IMU Unit",
        description:
          "Incorporate an Inertial Sensor Module (IMU) with accelerometers and gyroscopes. Implement logic to identify the optimal time for the ball to be dropped.",
        startDate: "December 9, 2023",
        endDate: "December 12, 2023",
      },
      {
        title: "Camera and Hardware Integration",
        description:
          "Integrate selected cameras with the device. Develop a stable mechanical enclosure, considering gyro stabilization or gimbal for minimizing internal movement..",
        startDate: "December 13, 2023",
        endDate: "December 18, 2023",
      },
    ],
  },
  {
    id: 3,
    title: "Software Development",
    progress: 60,
    startDate: "December 19, 2023",
    endDate: "January 1, 2024",
    status: "in progress",
    statusColor: "blue",
    description:
      "The software development phase kicks off with the implementation of the microprocessor or FPGA for efficient communication with multiple cameras. The team will work on developing the image stitching algorithm for creating a panoramic view and ensuring that the software aligns with the hardware specifications. This milestone is crucial for achieving a seamless integration of hardware and software components.",
    Subtasks: [
      {
        title: "Choose Microcontroller or FPGA",
        description:
          "Decide on the appropriate microcontroller or FPGA for multi-threaded application development.",
        startDate: "December 19, 2023",
        endDate: "December 22, 2023",
      },
      {
        title: "Develop Image Stitching Algorithm",
        description:
          "Implement image stitching algorithms to overcome Field of View (FOV) limitations. Test the algorithm's effectiveness in combining images from multiple cameras.",
        startDate: "December 23, 2023",
        endDate: "December 27, 2023",
      },
      {
        title: "Create User Interface",
        description:
          "Develop a user interface for remote control and monitoring. Enable remote adjustments for exposure time, ISO, and white balance.",
        startDate: "December 28, 2023",
        endDate: "January 1, 2024",
      },
    ],
  },
  {
    id: 4,
    title: "Prototype Testing and Refinement",
    progress: 0,
    startDate: "January 2, 2024",
    endDate: "January 15, 2024",
    status: "not started",
    description:
      "With the prototype in hand, this stage involves rigorous testing to evaluate the stability, functionality, and overall performance of the system. Feedback from testing will guide refinements and adjustments to enhance the prototype's capabilities. The goal is to identify and address any issues to ensure the system meets the desired standards.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Prototype Assembly",
        description:
          "Assemble the hardware components into a functional prototype. Test the device's stability, image capture capabilities, and AI algorithms.",
        startDate: "January 2, 2024",
        endDate: "January 6, 2024",
      },
      {
        title: "Wi-Fi Connectivity and Data Transmission",
        description:
          "Implement Wi-Fi connectivity for real-time data transmission. Test the reliability and speed of image data transfer to the base station.",
        startDate: "January 7, 2024",
        endDate: "January 10, 2024",
      },
      {
        title: "User Interface Testing",
        description:
          "Verify the functionality of the user interface on Microsoft Windows and mobile devices. Ensure seamless remote control and monitoring.",
        startDate: "January 7, 2024",
        endDate: "January 10, 2024",
      },
    ],
  },
  {
    id: 5,
    title: "Power Efficiency and Night Vision",
    progress: 0,
    startDate: "January 16, 2024",
    endDate: "January 29, 2024",
    status: "not started",
    statusColor: "none",
    description:
      "This phase centers on addressing power efficiency concerns, given the significant number of cameras in the system. The team will explore solutions to optimize power consumption while maintaining optimal performance. Additionally, night vision capabilities will be incorporated, enhancing the system's functionality in low-light conditions.",
    Subtasks: [
      {
        title: "Optimize Power Consumption",
        description:
          "Address power efficiency concerns due to the high number of cameras. Optimize the device for extended battery life.",
        startDate: "January 11, 2024",
        endDate: "January 15, 2024",
      },
      {
        title: "Night Vision Integration",
        description:
          "Equip cameras with infrared LEDs for night vision capabilities. Test the system's performance in low-light conditions.",
        startDate: "January 16, 2024",
        endDate: "January 20, 2024",
      },
    ],
  },
  {
    id: 6,
    title: "Image Analytics and Finalization",
    progress: 0,
    startDate: "January 30, 2024",
    endDate: "February 12, 2024",
    status: "not started",
    description:
      "During this milestone, the focus shifts to implementing image analytics algorithms at the base station. The team will work on extracting meaningful information from transmitted images, refining the image stitching algorithm, and finalizing the overall system features. This phase is crucial for ensuring the system provides actionable intelligence.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Image Analytics Integration",
        description:
          "Implement image analytics algorithms at the base station. Extract meaningful information from transmitted images for actionable insights.",
        startDate: "January 30, 2024",
        endDate: " February 4, 2024",
      },
      {
        title: "Finalize System Features",
        description:
          "Fine-tune the system based on testing results and user feedback. Ensure the system meets all specified requirements.",
        startDate: " February 5, 2024",
        endDate: " February 12, 2024",
      },
    ],
  },
  {
    id: 7,
    title: "Future Development and Documentation",
    progress: 0,
    startDate: "February 13, 2024",
    endDate: "February 26, 2024",
    status: "not started",
    description:
      "Looking ahead, this milestone involves planning for future upgrades and the development of a dedicated application. The team will also prioritize documentation, creating comprehensive records of the project's hardware and software components, ensuring future maintainability and scalability.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Flexibility for Future Upgrades",
        description:
          "Implement code and hardware design to allow for future upgrades.Ensure the system architecture supports additional requirements.",
        startDate: "February 13, 2024",
        endDate: "February 18, 2024",
      },
      {
        title: "Documentation",
        description:
          "Document the entire project, including hardware specifications, software algorithms, and user instructions. Create a comprehensive user manual for future reference.",
        startDate: "February 19, 2024",
        endDate: "February 26, 2024",
      },
    ],
  },
  {
    id: 8,
    title: "Deployment and Training",
    progress: 0,
    startDate: "February 27, 2024",
    endDate: "March 11, 2024",
    status: "not started",
    description:
      "With a refined and functional system, deployment planning takes center stage. The team will strategize how to roll out the surveillance system, and if necessary, training sessions for end-users or operators will be conducted to ensure effective utilization.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Deployment Planning",
        description:
          "Develop a deployment plan for the surveillance system. Consider training sessions for end-users or operators.",
        startDate: "February 27, 2024",
        endDate: "March 2, 2024",
      },
      {
        title: "Deployment and Evaluation",
        description:
          "Deploy the surveillance system in a controlled environment.Evaluate its performance in real-world scenarios.",
        startDate: "March 3, 2024",
        endDate: "March 11, 2024",
      },
    ],
  },
  {
    id: 9,
    title: "Future Application Development",
    progress: 0,
    startDate: "March 12, 2024",
    endDate: "March 25, 2024",
    status: "not started",
    description:
      "This phase focuses on the development of a dedicated application, providing additional features and functionalities. The team will work on refining the user interface and exploring ways to further enhance the user experience based on feedback and emerging requirements.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Dedicated Application Development",
        description:
          "Consider developing a dedicated application for enhanced user experience. Explore additional features and functionalities.",
        startDate: "March 12, 2024",
        endDate: "March 17, 2024",
      },
      {
        title: "Feedback and Iteration",
        description:
          "Gather feedback from users and stakeholders. Iterate on the system based on practical usage and emerging requirements.",
        startDate: "March 18, 2024",
        endDate: "March 25, 2024",
      },
    ],
  },
  {
    id: 10,
    title: "Final Documentation and Presentation",
    progress: 0,
    startDate: "March 26, 2024",
    endDate: "April 9, 2024",
    status: "not started",
    description:
      "In the final stage, the team will compile comprehensive documentation summarizing the entire project, including hardware specifications, software algorithms, and user instructions. A final presentation will be prepared to showcase the project's features, achievements, and innovations.",
    statusColor: "none",
    Subtasks: [
      {
        title: "Project Summary Documentation",
        description:
          "Compile a final documentation summarizing the entire project. Include details on challenges, solutions, and future recommendations.",
        startDate: "March 26, 2024",
        endDate: "March 31, 2024",
      },
      {
        title: "Presentation",
        description:
          "Prepare a presentation to showcase the project, its features, and achievements. Highlight key milestones and innovations.",
        startDate: "April 1, 2024",
        endDate: "April 2, 2024",
      },
    ],
  },
];
