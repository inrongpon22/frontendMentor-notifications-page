import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MarkWebber from "./images/avatar-mark-webber.webp";
import AngelGray from "./images/avatar-angela-gray.webp";
import Jacob from "./images/avatar-jacob-thompson.webp";
import Rizky from "./images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./images/avatar-kimberly-smith.webp";
import KimberlyChess from "./images/image-chess.webp";
import Nathan from "./images/avatar-nathan-peterson.webp";
import Anna from "./images/avatar-anna-kim.webp";

function App() {

  return (
    <div className="App font-plusJakatarSans text-Grayishblue font-[600] bg-White p-8 rounded-xl">
      <main>
        <header className="flex justify-between mb-5">
          <p className="text-darkBlue font-[800] text-2xl">
            Notifications
            <span className="ml-4 py-[0.2em] px-3 text-White bg-primaryBlue rounded-lg text-lg">
              3
            </span>
          </p>
          <p className="text-Darkgrayishblue hover:text-primaryBlue hover:cursor-pointer">
            Mark all as read
          </p>
        </header>
        <div id="content">
          <div className="notify-list unread-notify">
            <picture className="icon">
              <img src={MarkWebber} alt="" />
            </picture>
            <div className="notify-messages">
              <p className="flex items-center">
                <span className="name">Mark Webber</span>reacted to your recent
                post
                <span className="hilight text-Darkgrayishblue hover:text-primaryBlue">
                  My first tournament today!
                </span>
                <div className="ml-2 bg-primaryRed h-2 w-2 rounded-full"></div>
              </p>
              <p className="font-medium">1m ago</p>
            </div>
          </div>
          <div className="notify-list unread-notify">
            <picture className="icon">
              <img src={AngelGray} alt="" />
            </picture>
            <div className="notify-messages">
              <p className="flex items-center">
                <span className="name">Angela Gray</span> followed you <div className="ml-2 bg-primaryRed h-2 w-2 rounded-full"></div>
              </p>
              <p className="font-medium">5m ago</p>
            </div>
          </div>
          <div className="notify-list unread-notify">
            <picture className="icon">
              <img src={Jacob} alt="" />
            </picture>
            <div className="notify-messages">
              <p className="flex items-center">
                <span className="name">Jacob Thompson</span> has joined your
                group{" "}
                <span className="hilight text-primaryBlue">Chess Club</span>
                <div className="ml-2 bg-primaryRed h-2 w-2 rounded-full"></div>
              </p>
              <p className="font-medium">1 day ago</p>
            </div>
          </div>
          <div className="notify-list items-start">
            <picture className="icon">
              <img src={Rizky} alt="" />
            </picture>
            <div className="notify-messages">
              <p>
                <span className="name">Rizky Hasanuddin</span> sent you a
                private message
              </p>
              <p className="font-medium">5 days ago</p>
              <p className="p-4 mt-3 hover:bg-Lightgrayishblue1 hover:cursor-pointer ease-in-out duration-100 border-2 border-Lightgrayishblue1 rounded-lg text-md tracking-wide text-Darkgrayishblue">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
          <div className="notify-list">
            <picture className="icon">
              <img src={Kimberly} alt="" />
            </picture>
            <div className="notify-messages flex justify-between">
              <div>
              <p>
                <span className="name">Kimberly Smith</span> commented on your
                picture
              </p>
              <p className="font-medium">1 week ago</p>
              </div>
              <picture className="icon">
              <img src={KimberlyChess} alt="" className="hover:cursor-pointer" />
            </picture>
            </div>
          </div>
          <div className="notify-list">
            <picture className="icon">
              <img src={Nathan} alt="" />
            </picture>
            <div className="notify-messages">
              <p>
                <span className="name">Nathan Peterson</span> reacted to your
                recent{" "}
                <span className="hilight text-Darkgrayishblue">
                  post 5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className="font-medium">2 weeks ago</p>
            </div>
          </div>
          <div className="notify-list">
            <picture className="icon">
              <img src={Anna} alt="" />
            </picture>
            <div className="notify-messages">
              <p>
                <span className="name">Anna Kim</span> left the group{" "}
                <span className="hilight text-Darkgrayishblue">Chess Club</span>
              </p>
              <p className="font-medium">2 weeks ago</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
