import { FC } from "react";
import { Link } from "@/components";
import { data } from "@/database";

interface Props {
  type?: "navbar" | "footer";
  action?: () => void;
}

export const NavList: FC<Props> = ({ type = "footer", action }) => {
  return (
    <ul
      className={`text-white uppercase ${
        type === "navbar" ? "hidden lg:flex" : "flex"
      } flex-col items-center gap-4 text-[0.813rem] font-bold md:gap-[2.125rem] md:flex-row`}
    >
      {data.navLinks.map(({ name, href }) => (
        <li key={href}>
          <Link
            action={action}
            className="duration-200 hover:text-beige focus-visible:text-beige"
            href={href}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
