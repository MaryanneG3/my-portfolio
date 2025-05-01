import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalDetails } from "@/lib/personalDetails";

interface ProfileCardProps {
  variant: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ variant }) => {
  return (
    <>
      {variant === "landing-page" && (
        <div className="flex flex-col justify-start items-center h-full w-full">
          <div className="flex flex-col justify-center items-center gap-15 h-[80%] w-full">
            <motion.div
              className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-3xl relative overflow-hidden shadow-xl shadow-yellow-100/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                alt={personalDetails.name}
                src={`/images/profile-pic/${personalDetails.profilePicture}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl lg:text-4xl text-center text-white">
                {personalDetails.name}
              </h1>
            </motion.div>
          </div>
        </div>
      )}
      {variant === "sidebar" && (
        <div className="flex flex-col justify-center items-center gap-5 h-full w-full">
          <motion.div
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full relative overflow-hidden shadow-xl shadow-yellow-100/50"
            initial={{ opacity: 0, z: -50 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              alt={personalDetails.name}
              src={`/images/profile-pic/${personalDetails.profilePicture}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, z: -50 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-lg md:text-xl lg:text-3xl text-purple-950">
              {personalDetails.name}
            </h1>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
