import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";

import "./TweetSection.css";
import avatar from "../../images/developer-working.png";

import FlareIcon from "@material-ui/icons/Flare";

import PublicIcon from "@material-ui/icons/Public";

import PhotoIcon from "@material-ui/icons/PhotoOutlined";
import GifIcon from "@material-ui/icons/GifOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAddOutlined";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Repeat from "@material-ui/icons/Repeat";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";

const initialTweets = [
  "My first tweet!",
  "Union Home Minister, Government of India | MP, Gandhinagar Lok Sabha. http://instagram.com/amitshahofficial",
  "Sudan_gadhvi has left his career on it’s peak. He was chief editor of a prominent channel. ",
];

const TweetBox = () => {
  const [tweets, setTweets] = useState(initialTweets);
  const [tweetText, setTweetText] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    setTweets([...tweets, tweetText]);
    setTweetText("");
  };

  return (
    <div className="tweetSection">
      <section className="tweetSection__home">
        <h2>Home</h2>
        <FlareIcon />
      </section>
      <form>
        <div className="tweetSection__input">
          <Avatar src={avatar} />
          <input
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="tweetSection__subtext">
          <PublicIcon /> Everyone can reply
        </div>
        <div className="tweetSection__submitRow">
          <div className="tweetSection__formIcons">
            <PhotoIcon />
            <GifIcon />
            <BarChartIcon />
            <EmojiEmotionsIcon />
            <PlaylistAddIcon />
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetSection__button"
          >
            Tweet
          </Button>
        </div>
      </form>
      {tweets.map((item) => (
        <section className="tweetSection__tweetDisplay">
          <div className="tweet__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="tweet__body">
            <div className="tweet__header">
              <div className="tweet__headerText">
                <h3>
                  Username
                  <span className="tweet__headerHandleName">
                    <VerifiedUserIcon className="tweet__badge" /> @coolUsername
                  </span>
                </h3>
              </div>
              <div className="tweet__headerDescription">
                <p>{item}</p>
              </div>
            </div>
            <div className="tweet__footer">
              <ChatBubbleOutlineIcon />
              <Repeat />
              <FavoriteBorder />
              <Publish />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TweetBox;
