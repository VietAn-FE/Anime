import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

const ActionRight = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <Link href={"/search"}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-[20px] h-[20px] hover:text-[#e54124]"
        />
      </Link>
      <button>
        <FontAwesomeIcon icon={faBell} className="w-[20px] h-[20px] hover:text-[#e54124]" />
      </button>
      <button className="btn bg-[#e54124] py-[5px] px-[25px] text-[16px] rounded-3xl hover:bg-white hover:text-[#e54124]">Login</button>
    </div>
  );
};

export default ActionRight;
