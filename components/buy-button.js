//next imports
import Image from "next/image";
import Link from "next/link";

export default function BuyButton({ url, imageUrl, alt }) {
  return (
    <Link
      href={url}
      className="bg-darkgray items-center flex justify-center h-20 w-48 p-8 rounded-2xl hover:bg-darkred hover:scale-95 transition-all ease-in-out duration-500 "
    >
      <Image
        src={imageUrl}
        alt={alt}
        className={alt === "Xbox Series S" ? "w-20" : "w-full"}
      />
    </Link>
  );
}
