// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/chathura.png"}
        // width={737}
        width={1038}
        // height={678}
        height={678}
        alt="avatarImage"
        className="w-full h-full translate-z-0"
      />
    </div>
  );
};

export default Avatar;
