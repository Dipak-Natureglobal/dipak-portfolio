import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaTelegram } from "react-icons/fa"
import { SiGmail , SiLeetcode} from "react-icons/si";
const socials=[
    {icons: <FaGithub />, path: 'https://github.com/Dipak-Mourya',target: '_blank' },
    {icons: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/dipak-mourya-429204210',target: '_blank'},
    {icons: <SiGmail />, path: 'mailto:dipakmourya1508@gmail.com',target: '_blank'},
    {icons: <FaTelegram />, path: 'https://t.me/Dipak_15',target: '_blank'},
    {icons: <SiLeetcode />, path: 'https://leetcode.com/u/dipak_mourya15/',target: '_blank'}
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials?.map((item, index) => (  // Use optional chaining to handle potential undefined `socials`
          <Link key={index} href={item.path} target={item.target} className={iconStyles}>
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {item.icons}
            </span>
          </Link>
        ))}
      </div>
    );
  };
export default Social;