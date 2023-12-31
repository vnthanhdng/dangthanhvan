import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="flex-1 padding-x w-full">
        <h1 className="header__title">Welcome to my Garden!</h1>
        <p className="header__subtitle">
          I'm a 
        </p>
        <p className="header__subtitle">
          If you want to know more about my background, check out&nbsp;
          <Link href="/about" className="header__subtitle text-dark-purple">
          this autobiography.
        </Link>
        </p>
        
      </div>
      
    </div>
  );
};

export default Header;
