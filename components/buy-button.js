//next imports
import Image from "next/image";
import Link from "next/link";

export default function BuyButton({ url, imageUrl, alt }) {
  return (
    <Link
      href={url}
      className="bg-darkgray items-center flex justify-center sm:h-20 sm:w-48 h-16 w-32 sm:p-8 p-4 rounded-2xl hover:bg-darkred hover:scale-95 transition-all ease-in-out duration-500 "
    >
      <Image
        src={imageUrl}
        alt={alt}
        className={alt === "Xbox Series S" ? "sm:w-20 w-16" : "w-full"}
      />
    </Link>
  );
}
