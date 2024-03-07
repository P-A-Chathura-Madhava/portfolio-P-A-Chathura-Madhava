// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6">
        {/* logo */}
        <Link href={"/"}>
          {/* <h2 className="text-base text-[40px]"><b>Chathura</b> Madhava</h2> */}
          <Image
            src={"/chathura-logo.svg"}
            width={500}
            height={200}
            alt="logo"
            priority={true}
            className="pt-6"
          />
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
