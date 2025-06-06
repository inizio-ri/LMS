import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">LMS?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
        Our Learning Management System (LMS) is a user-friendly and efficient platform designed to streamline the process of online education and course management. Built with the goal of enhancing the digital learning experience.
          <br />
          <br />
          Our Learning Management System stands out as a comprehensive and intuitive platform designed to enhance the educational experience for both learners and instructors. Unlike traditional systems, our portal combines simplicity with powerful features, making it easy to navigate while offering robust tools for course creation, content delivery, assessment, and performance tracking. 
          <br />
          <br />
          With its clean interface and user-friendly design, it minimizes the learning curve and maximizes engagement. The system ensures data security and role-based access, providing a safe environment for academic interactions. Additionally, its flexibility allows users to access the platform anytime, from anywhere, making it an ideal solution for both structured learning and self-paced progress. By choosing our portal, users invest in a smarter, more efficient, and future-ready approach to education.
          <br />
          <br />
          We believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But we are more than just a community &ndash; we&apos;re a
          family. Our supportive community of like-minded individuals is here
          to help you every step of the way, whether you&apos;re just starting
          out or looking to take your skills to the next level.
          <br />
          <br />
          With us by your side, there&apos;s nothing standing between you
          and your dream job. Our courses and community will provide you with
          the guidance, support, and motivation you need to unleash your full
          potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join us today and let&apos;s
          conquer the programming industry together! With our affordable
          courses, informative videos, and supportive community, the sky&apos;s
          the limit.
        </p>
        <br />
        <span className="text-[22px]">Richa Dubey</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
