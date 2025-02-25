import auctionHouseImage from "../assets/AuctionHouse_preview.png";
import fefImage from "../assets/Fef_preview.png";
import holidazeImage from "../assets/Holidaze_preview.png";

const projects = [
  {
    id: 1,
    title: "Auction House (Semester Project 2)",
    description:
      "This project was made with HTML, TailwindCSS and Vanilla JS. It uses Noroff`s own API for all auction-related data. Auction House allows users with a stud.noroff.no email address to register, log in, create, bid, and delete auction listings. Users can also update their avatars and bios, and view the profile of others, including their auction listings.",
    image: auctionHouseImage,
    github_link: "https://github.com/Bakek-lang/semester-project-2",
    demo_link: "https://auction-house-sp2-bakek.netlify.app/",
    made_with: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    ],
  },
  {
    id: 2,
    title: "Frontend Framework CA",
    description:
      "This is a responsive e-commerce store built with React, featuring product listings, a search bar, dynamic product pages, a shopping cart, and a checkout flow. It integrates the Noroff Online Shop API and uses React Router for navigation. The store also includes discount calculations, a contact form with validation, and a checkout success page that clears the cart after purchase.",
    image: fefImage,
    github_link: "https://github.com/Bakek-lang/fef-ca",
    demo_link: "https://fef-ca.netlify.app/",
    made_with: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
  },
  {
    id: 3,
    title: "Holidaze (Project Exam 2)",
    description:
      "Holidaze is a modern front-end application built for an accommodation booking platform. Developed as my Project Exam 2—the final exam in my 2 year frontend development education at Noroff—this project showcases my development, visual design, and technical skills acquired over the past two years. The application features both a customer-facing side, where users can browse and book venues, and an admin-facing side, where venue managers can create, update, and manage venues and their bookings.",
    image: holidazeImage,
    github_link: "https://github.com/Bakek-lang/pe-2",
    demo_link: "https://holidaze-pe2-bakek.netlify.app/",
    made_with: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
  },
];

export default projects;
