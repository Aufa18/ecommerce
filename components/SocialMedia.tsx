import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils';


interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Youtube",
        href: "#",
        icon: <FaYoutube className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "#",
        icon: <FaGithub className="w-5 h-5" />,
    },
    {
        title: "LinkedIn",
        href: "#",
        icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
        title: "Instagram",
        href: "#",
        icon: <FaInstagram className="w-5 h-5" />,
    },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <Link
                href={item?.href}
                target="_blank"
                className={cn("hover:text-white", iconClassName)}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent className={tooltipClassName}>
              <p>{item?.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia
