"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const ListNav = [
  {
    label: "Trang chủ",
    link: "/",
  },
  {
    label: "Phim bộ",
    link: "/",
  },
  {
    label: "Phim lẻ",
    link: "/",
  },
];

const Nav = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div>
      <button className="flex md:hidden absolute left-0 top-2" onClick={()=> setIsShow(!isShow)}>
        <FontAwesomeIcon
          icon={faBars}
          className="w-[20px] h-[20px] hover:text-[#e54124]"
        />
      </button>
      <nav
        className={` ${
          isShow ? "left-0" : "left-[-300px]"
        } flex fixed top-0  h-screen overflow-auto bg-[#1f1f1f] p-[15px] w-[300px] pt-[60px] transition-all md:static md:h-auto md:bg-inherit md:p-0`}
      >
        <button className="absolute top-[10px]  md:hidden right-[10px]" onClick={()=> setIsShow(false)}>
          <FontAwesomeIcon
            icon={faClose}
            className="w-[20px] h-[20px] hover:text-[#e54124]"
          />
        </button>
        <ul className="block gap-[32px] flex-wrap md:flex md:items-center">
          {ListNav.map((item,index) => {
            return (
              <li className="block w-full h-auto mb-6 md:inline-block md:w-auto md:mb-0" key={index}>
                <Link
                  href={item.link}
                  className=" text-[#a6a6a6] text-[16px] hover:text-[#e54124] md:text-white"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
