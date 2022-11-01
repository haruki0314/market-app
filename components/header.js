import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link href="/">
            <a>
              <img src="/header.svg" alt="header-img" />
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/user/register">
                <a>登録</a>
              </Link>
            </li>
            <li>
              <Link href="/user/login">
                <a>ログイン</a>
              </Link>
            </li>
            <li>
              <Link href="/item/create">
                <a>アイテム作成</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;