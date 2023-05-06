import useScrollPosition from "@/hooks/use-scroll-position";
import { cn } from "@/services";

function NavBar() {
  const { scrollPosition } = useScrollPosition();

  return (
    <ul
      className={cn(
        "fixed left-1/2 top-10 mx-auto flex -translate-x-1/2 self-center rounded-full bg-gradient-to-br from-gray-600 to-gray-800 z-10",
        scrollPosition > window.innerHeight && "opacity-0"
      )}
    >
      <li className="m-1 cursor-pointer rounded-full px-6 py-2 hover:bg-slate-100/20">
        About
      </li>
      <li className="m-1 cursor-pointer rounded-full px-6 py-2 hover:bg-slate-100/20">
        Projects
      </li>
      <li className="m-1 cursor-pointer rounded-full px-6 py-2 hover:bg-slate-100/20">
        Blog
      </li>
      <li className="m-1 cursor-pointer rounded-full px-6 py-2 hover:bg-slate-100/20">
        Contact
      </li>
    </ul>
  );
}

export default NavBar;
