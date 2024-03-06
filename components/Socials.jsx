// links
import Link from "next/link";

// icons
import {RiTwitterLine, RiInstagramLine, RiFacebookLine, RiWhatsappLine, RiLinkedinLine, RiGithubLine} from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5">
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiTwitterLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiWhatsappLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiLinkedinLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
