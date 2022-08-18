import Image from "next/image";
import { Link, NavList, Text } from "@/components";
import { data } from "@/database";

export const Footer = () => {
  return (
    <footer className="bg-black px-6 flex justify-center pb-[2.375rem] md:px-10 md:pb-[2.875rem] lg:pb-12">
      <div className="w-full flex flex-col max-w-size">
        <hr className="bg-beige w-[6.313rem] h-1 m-auto md:ml-0" />
        <div className="mt-12 flex flex-col relative items-center text-center gap-12 md:items-start md:text-start md:mt-14 lg:mt-[4.438rem]">
          <section className="w-full flex flex-col items-center gap-12 md:items-start lg:flex-row lg:justify-between">
            <Link className="flex" href="/">
              <Image
                width={143}
                height={25}
                src="/assets/shared/desktop/logo.svg"
                alt="Logo"
              />
            </Link>

            <NavList />
          </section>
          <Text className="lg:w-[33.75rem]">
            {
              "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
            }
          </Text>
          <Text>Copyright 2021. All Rights Reserved</Text>

          <ul className="flex gap-4 h-fit md:absolute md:bottom-0 md:right-0 lg:top-[50%] lg:translate-y-[-50%]">
            {data.socialMedia.map(({ name, link, icon }) => (
              <li key={link}>
                <Link className="image-beige" href={link} newTab>
                  <Image
                    width={icon.width}
                    height={icon.height}
                    src={icon.src}
                    alt={name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
