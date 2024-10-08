import ActionRight from "@/components/Header/component/ActionRight";
import Nav from "@/components/Header/component/Nav";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 w-full top-0 left-0 bg-[--foreground]">
      <div className="container mx-auto py-[20px]  px-[15px]">
        <div className="flex justify-between relative">
          <div className="flex items-end gap-[40px] pl-[60px] md:pl-0">
            
            <Link href={"/"}>
              <figure>
                <Image
                  src={"/images/logo.png"}
                  alt="Trang chủ"
                  width={128}
                  height={30}
                />
              </figure>
            </Link>
            <Nav />
          </div>
          <div className="flex items-center">
            <ActionRight />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
<>Header</>;
