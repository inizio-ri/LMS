import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      The platform may occasionally experience downtime for maintenance or updates, and we strive to keep these interruptions minimal. However, we are not liable for any temporary unavailability or data loss caused due to system failures, maintenance, or unforeseen technical issues. While we aim to provide a seamless and secure learning environment, the platform is offered on an &quot;as is&quot; basis, and we do not guarantee uninterrupted or error-free access.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        By accessing and using our Learning Management System (LMS), users agree to comply with and be bound by the following terms and conditions, which govern the use of our platform. The portal is intended solely for educational purposes, and students are expected to use it in a responsible and lawful manner.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Any unauthorized use, such as attempting to gain access to restricted areas, manipulating system functions, or engaging in activities that could disrupt the platform&apos;s operation, is strictly prohibited and may result in account suspension or legal action.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        All content uploaded to the portal, including but not limited to course materials, lecture notes, assignments, and multimedia resources, remains the intellectual property of the respective instructors or content creators. Users are not permitted to distribute, copy, or misuse such content without obtaining proper authorization. Similarly, students&apos; submissions and personal data will be handled with strict confidentiality and in accordance with data protection laws.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Users are responsible for maintaining the confidentiality of their login credentials. Any activity conducted through a user&apos;s account will be considered their responsibility. In case of suspected unauthorized access, users must immediately inform the platform administrators. The LMS reserves the right to update or modify these terms at any time without prior notice. Continued use of the platform after any such changes implies acceptance of the revised terms.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        By using our portal, users also acknowledge that any misuse, academic dishonesty, plagiarism, or harassment within the platform may lead to disciplinary actions, including revocation of access rights. We encourage a respectful and constructive online learning environment where all participants can engage meaningfully and ethically. If you do not agree with any part of these terms and conditions, you are advised to discontinue use of the portal. For any concerns or questions regarding our policies, users may contact the platform&apos;s support team or administrators directly.
        </p>
      </ul>
      </div>
    </div>
  );
};

export default Policy;
