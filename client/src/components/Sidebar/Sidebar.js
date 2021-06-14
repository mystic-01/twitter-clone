import React from "react";
import { Button } from "@material-ui/core";

import './Sidebar.css';

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <TwitterIcon className="sidebar__logo" />
      <li className="sidebar__item sidebar__itemActive">
        <HomeIcon />
        <h3>Home</h3>
      </li>
      <li className="sidebar__item">
        <ExploreIcon />
        <h3>Explore</h3>
      </li>
      <li className="sidebar__item">
        <NotificationsNoneIcon />
        <h3>Notifications</h3>
      </li>
      <li className="sidebar__item">
        <MailOutlineIcon />
        <h3>Messages</h3>
      </li>
      <li className="sidebar__item">
        <BookmarkBorderIcon />
        <h3>Bookmarks</h3>
      </li>
      <li className="sidebar__item">
        <ListAltIcon />
        <h3>List</h3>
      </li>
      <li className="sidebar__item">
        <PermIdentityIcon />
        <h3>Profile</h3>
      </li>
      <li className="sidebar__item">
        <MoreHorizIcon />
        <h3>More</h3>
      </li>
      <Button className="sidebar__cta" variant="outlined" >
        Tweet
      </Button>
    </ul>
  );
};

export default Sidebar;
