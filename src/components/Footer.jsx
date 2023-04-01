import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center gap-5 p-4">
        <a
          href="https://www.facebook.com/traveltofityourdreamsandyourbudget"
          target="_blank"
          rel="noreferrer"
          >
          <BsFacebook className="w-10 h-10"/>
          
        </a>
        <a
          href="https://www.instagram.com/tailored.travels/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="w-10 h-10"/>
        </a>
      </div>
      <ul className="flex justify-center flex-wrap w-5/6 m-auto text-xs text-center">
        <li>© 2023 Tailored Travels</li>
        <li>
          California Seller of Travel Registration #2089491-50. Registration as
          a seller of travel in California does not constitute the state's
          approval. Agent is not a participant in the Travel Consumer
          Restitution Fund.
        </li>
        <li>Florida Seller of Travel Registration #ST37113. Hawaii Seller of Travel License #TAR 7231. Washington Seller of Travel UBI #602 775122.</li>
        <li>
          Cancellation and change penalties may apply to any travel arrangements
          booked. Details will be provided upon request.
        </li>
      </ul>
    </div>
  );
};

export default Footer;
