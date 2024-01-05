import React from "react";
import { ModeToggler } from "./ModeToggler";

const Header = () => {
  return (
    <header className="w-full flex items-center fixed py-3 bg-slate-100 z-10">
      <div className="container flex justify-between">
        <div className="font-heading text-3xl text-primary">Evoware</div>
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
          Tema
          <ModeToggler />
        </span>
      </div>
    </header>
  );
};

export default Header;
