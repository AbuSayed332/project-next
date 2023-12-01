"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={54}
        height={54}
        priority
        alt=""
        className="dark:bg-blue-200"
      />
    </Link>
  );
};

export default Logo;
