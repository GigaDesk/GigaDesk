import * as React from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Lowerbar(props) {
  return (
    <div
      className="text-white h-14 bg-purple-950 w-full grid grid-cols-[1fr_20px] lg:grid-cols-[1fr_600px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="font-medium content-center">Evolve with GigaDesk</div>
      <div className="grid grid-cols-6 max-lg:hidden">
        <Link
          activeClass="bg-purple-700"
          to="platforms"
          spy={true}
          offset={-50}
          smooth={true}
          className="grid justify-items-center content-center px-3 hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[35%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[35%] after:bottom-4 after:right-[50%]"
        >
          Platforms
        </Link>
        <Link
          activeClass="bg-purple-700"
          to="security"
          spy={true}
          offset={-50}
          smooth={true}
          className="grid justify-items-center content-center px-3 hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[30%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[30%] after:bottom-4 after:right-[50%]"
        >
          Security
        </Link>
        <Link
          activeClass="bg-purple-700"
          to="data"
          spy={true}
          offset={-50}
          smooth={true}
          className="grid justify-items-center content-center px-3 hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[20%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[20%] after:bottom-4 after:right-[50%]"
        >
          Data
        </Link>
        <Link
          activeClass="bg-purple-700"
          to="seo"
          spy={true}
          smooth={true}
          className="grid justify-items-center content-center px-3 hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[15%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[15%] after:bottom-4 after:right-[50%]"
        >
          SEO
        </Link>
        <Link
          activeClass="bg-purple-700"
          to="outsourcing"
          spy={true}
          smooth={true}
          className="grid justify-items-center content-center hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[42%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[42%] after:bottom-4 after:right-[50%]"
        >
          Outsourcing
        </Link>
        <Link
          activeClass="bg-purple-700"
          to="cloud"
          spy={true}
          smooth={true}
          className="grid justify-items-center content-center px-3 hover:bg-purple-700 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[20%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[20%] after:bottom-4 after:right-[50%] "
        >
          Cloud
        </Link>
      </div>
      <div className="grid grid-cols-6 lg:hidden relative">
        {props.open ? (
          <button onClick={props.handleOpen}>
            <KeyboardArrowUpIcon sx={{ width: "30px", height: "30px" }} />
          </button>
        ) : (
          <button onClick={props.handleOpen}>
            <svg
              className="w-4 h-4 ms-1 absolute bottom-1/3 right-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
