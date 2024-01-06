import React from "react";
import { ModeToggler } from "./ModeToggler";

const Header = () => {
  return (
    <header className="w-full flex items-center fixed py-3 bg-background shadow-md z-10">
      <div className="container flex items-center justify-between">
        <div className="font-heading text-3xl">
          <span className="text-primary">evo</span>ware
        </div>
          <ModeToggler />
      </div>
    </header>
  );
};

export default Header;
