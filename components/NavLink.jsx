import Link from 'next/link';


const NavLink = ({ href, title, size}) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-pink-500 sm:text-xl rounded text-electricBlue hover:text-pink-500 hover:bg-electricBlue hover:border-transparent hover:shadow-lg transition duration-300">
      {title}
    </Link>
  );
};

export default NavLink;
