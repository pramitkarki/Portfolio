import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "motion/react";

import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaSnapchat } from "react-icons/fa6";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaFacebookF,
      link: `https://www.facebook.com/${selfData.socials_username.facebook}`,
      initial: -10,
    },
    {
      Icon: FaInstagram,
      link: `https://www.instagram.com/${selfData.socials_username.instagram}`,
      initial: 10,
    },
    {
      Icon: FaSnapchat,
      link: `https://www.snapchat.com/add/${selfData.socials_username.snapchat}`,
      initial: -10,
    },
    {
      Icon: FaTwitter,
      link: `https://twitter.com/${selfData.socials_username.twitter}`,
      initial: 10,
    },
    {
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      initial: -10,
    },
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      initial: 10,
    },
    {
      Icon: PiTelegramLogo,
      link: `https://t.me/${selfData.socials_username.telegram}`,
      initial: -10,
    },   
    {
      Icon: SiLeetcode,
      link: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      initial: 10,
    },
  ];

  return (
    <div className="mt-6">
      <ul className="flex space-x-4 mb-4">
        {socialLinks.slice(0, 4).map((social, index) => (
          <ContactSocialItem
            key={index}
            Icon={social.Icon}
            link={social.link}
            initial={social.initial}
          />
        ))}
      </ul>
      <ul className="flex space-x-4">
        {socialLinks.slice(4, 8).map((social, index) => (
          <ContactSocialItem
            key={index + 4}
            Icon={social.Icon}
            link={social.link}
            initial={social.initial}
          />
        ))}
      </ul>
    </div>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="bg-[hsl(var(--secondary))] text-slate-300 hover:bg-slate-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 hover:text-[hsl(var(--secondary))] w-6 h-6" />
      </Link>
    </motion.li>
  );
};
