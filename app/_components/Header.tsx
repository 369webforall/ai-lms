import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "React Beginner",
    desc: "Learn the fundamentals of React, including components, props, state, and building your first UI.",
    bannerImage:
      "https://ik.imagekit.io/tubeguruji/Codebox/588a44195922117.66168b374ece8.gif",
    level: "Beginner",
  },
  {
    id: 2,
    name: "HTML Beginner",
    desc: "Understand the basics of web structure using HTML tags, elements, and semantic layouts.",
    bannerImage:
      "https://ik.imagekit.io/tubeguruji/Codebox/original-ba977c3d86642765b44fd9d1579d78d4.gif?updatedAt=1763406224974",
    level: "Beginner",
  },
  {
    id: 3,
    name: "CSS Beginner",
    desc: "Master styling essentials like selectors, colors, layout, flexbox, and responsive design.",
    bannerImage:
      "https://ik.imagekit.io/tubeguruji/Codebox/fd40a4b8b151c4e432106576187d03c9.gif?updatedAt=1763406225765",
    level: "Beginner",
  },
  {
    id: 4,
    name: "Python Beginner",
    desc: "Start coding with Python by learning variables, conditions, loops, functions, and basic projects.",
    bannerImage:
      "https://ik.imagekit.io/tubeguruji/Codebox/tumblr_3ebef054c877d03c507aa8c40149908b_515b1f92_1280.webp?updatedAt=1763406230994",
    level: "Beginner",
  },
];

const Header = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h2 className="font-bold text-3xl font-game">AI CODE</h2>
      </div>
      {/* Navbar */}

      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-accent rounded-xl cursor-pointer"
                  >
                    <h2>{course.name}</h2>
                    <p className="text-sm text-gray-600">{course.desc}</p>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/contact-us"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Signup Button */}
      <Button className="font-game text-2xl" variant={"pixel"}>
        Signup
      </Button>
    </div>
  );
};

export default Header;
