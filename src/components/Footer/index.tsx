import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-[15px]">
        <div className="flex  gap-[20px]  flex-wrap w-full xl:gap-[20px] lg:gap-0 pt-10 mt-10 border-t border-t-[#fff]">
          <div className="info  pr-[30px] basis-full border-b py-[20px] xl:px-0 xl:border-b-0 xl:basis-[500px] mb-[20px] ">
            <Link href={"/"}>
              <figure>
                <Image
                  src={"/images/logo.png"}
                  width={256}
                  height={60}
                  alt="Trang chủ"
                  className="w-[256px]"
                />
              </figure>
            </Link>
            <p className="text-[16px] mt-[30px]">
              Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao,
              phù hợp mọi độ tuổi và an toàn cho trẻ em.
            </p>
          </div>
          <div className="col-box w-full lg:w-1/4 lg:flex-none xl:flex-1 md:w-1/2 md:mb-[20px]">
            <p className="mb-[15px] font-light text-[#d2d2d2]">Về chúng tôi</p>
            <ul>
              <li>
                <Link href={"/about"} className="block mb-[6px]">Giới thiệu</Link>
              </li>
              <li>
                <p className="block mb-[6px]">Các gói dịch vụ</p>
              </li>
              <li>
                <Link href={"/about"} className="block mb-[6px]">Liên hệ</Link>
              </li>
              <li>
                <p className="block mb-[6px]">Trung tâm hỗ trợ</p>
              </li>
              <li>
                <p className="block mb-[6px]">Thông tin</p>
              </li>
            </ul>
          </div>
          <div className="col-box  w-full lg:w-1/4 lg:flex-none xl:flex-1 md:w-1/2  md:mb-[20px]">
            <p className="mb-[15px] font-light text-[#d2d2d2]">Dịch vụ</p>
            <ul>
              <li>
                <p className="block mb-[6px]">Gói DATA</p>
              </li>
              <li>
                <p className="block mb-[6px]">Quảng cáo</p>
              </li>
              <li>
                <p className="block mb-[6px]">Mua gói</p>
              </li>
              <li>
                <p className="block mb-[6px]">Bảo hành</p>
              </li>
            </ul>
          </div>
          <div className="col-box  w-full  lg:w-1/4 lg:flex-none xl:flex-1 md:w-1/2  md:mb-[20px]">
            <p className="mb-[15px] font-light text-[#d2d2d2]">Quy định</p>
            <ul>
              <li>
                <p className="block mb-[6px]">Điều khoản sử dụng</p>
              </li>
              <li>
                <p className="block mb-[6px]">Chính sách thanh toán</p>
              </li>
              <li>
                <p className="block mb-[6px]">Chính sách bảo mật dữ liệu</p>
              </li>
            </ul>
          </div>
          <div className="col-box   w-full lg:w-1/4 lg:flex-none xl:flex-1 md:w-1/2  md:mb-[20px]">
            <div className="flex mb-[10px] items-center gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-[20px] h-[20px] hover:text-[#e54124]"
              />
              <span> 19006600</span>
            </div>
            <div className="flex mb-[10px] items-center gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-[20px] h-[20px] hover:text-[#e54124]"
              />
              <span> test@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
