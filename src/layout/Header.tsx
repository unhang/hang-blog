import { NavLink, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  console.log(location);

  const isActive = (path: string) => {
    return location.pathname === path;
  }

  return <>
    <div className="w-full py-[18px] border-b border-[#000000]">
      <div className="">
        <div className="w-full flex justify-center">
          <NavLink className={`px-4`} to="/">
            <span className={`leading-0 ${isActive('/') ? "border-b-[6px] border-[#77FF00]" : ""}`}>Home</span>
          </NavLink>
          <NavLink className={`px-4`} to="/post">
            <span className={`leading-0 ${isActive('/post') ? "border-b-[6px] border-[#77FF00]" : ""}`}>Posts</span>
          </NavLink>
          <NavLink className={`px-4`} to="/about">
            <span className={`leading-0 ${isActive('/about') ? "border-b-[6px] border-[#77FF00]" : ""}`}>About</span>
          </NavLink>
        </div>
      </div>
    </div>
  </>
}

export default Header;