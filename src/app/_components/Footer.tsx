import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-background">
      <div className="container py-4">
        <p className="text-muted-foreground text-center mb-2">
          Desenvolvido por{" "}
          <a className="font-bold" href="https://github.com/evandro-tomaz" target="_blank">
            Evandro Tomaz
          </a>
        </p>
        <p className="text-muted-foreground text-center">
          &copy; 2024 Evoware Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
