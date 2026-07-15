"use client"
import { useState } from "react";
import logo from "../../assets/logo.png"
import Modal from "./Modal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo.src} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login"
          onClick={() => setIsModalOpen(true)}>
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}