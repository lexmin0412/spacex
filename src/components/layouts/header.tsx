import {useNavigate} from "react-router-dom";
import IconGithub from "@/assets/github.svg";

const innerLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/blogs",
    text: "Blogs",
  },
  {
    path: "/libs",
    text: "Libs",
  },
  {
    path: "/tools",
    text: "Tools",
  },
];

const outerLinks = [
  {
    url: "https://github.com/lexmin0412",
    icon: IconGithub,
  },
];

export default function Header() {
  const naivgate = useNavigate();
  return (
    <div className="flex items-center justify-between h-16 leading-16 px-6">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => naivgate("/")}
      >
        <img
          className="block w-6 h-6 rounded-xl"
          src="https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/common/24385370.jpeg"
        />
        <div className="ml-2">Lexmin0412</div>
      </div>
      <div className="flex items-center">
        <div className="inner-link flex">
          {innerLinks.map((link: any) => {
            return (
              <div
                className="mr-5 cursor-pointer"
                key={link.path}
                onClick={() => naivgate(link.path)}
              >
                {link.text}
              </div>
            );
          })}
        </div>
        <div className="outer-link">
          {outerLinks.map((link: any) => {
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
