import Link from "next/link";
import Image from "next/image";
import Logo from "./TheList_1024x512.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Image
          src={Logo}
          alt="List Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
};

export default Navbar;
