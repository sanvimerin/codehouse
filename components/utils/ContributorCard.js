import React from "react";

// icons
import { FiMail } from "react-icons/fi";

const ContributorCard = ({ data }) => {
  return (
    <div
      className="p-5 gradient-shadow bg-white m-3 rounded-md transition duration-400 cursor-pointer text-[#222] dark:bg-[#222222] border dark:border-[#444] w-full lg:w-[20%] xl:w-[20%] md:w-[40%] border-transparent hover:border-[#3d5eff98] duration-500"
      data-aos="fade-left"
    >
      <img
        src={
          data.photoUrl
            ? `${contributor.avatar_url}&s=200`
            : `https://unavatar.vercel.app/${data.email}`
        }
        alt={data.displayName && data.displayName}
        className="max-h-[200px] rounded-md w-full"
      />
      <h1 className="text-2xl font-bold Raleway mt-2 truncate capitalize dark:text-[#fafafa] -mb-2">
        {data.displayName && data.displayName}
      </h1>
      <a
        className="text-xs overflow-ellipsis overflow-hidden h-[36px] Raleway text-[#3d5eff] dark:text-blue-300"
        href={`mailto:${data.email}`}
        target="_blank"
        rel="noreferrer"
      >
        {data.email && data.email}
      </a>
      <div className="flex items-center pt-4">
        <a
          href={`mailto:${data.email}`}
          target="_blank"
          rel="noreferrer"
          className="dark:text-[#ddd] hover:text-[#999] dark:hover:text-[#ccc]"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export default ContributorCard;
