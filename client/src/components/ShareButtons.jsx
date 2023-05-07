import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export default function ShareButtons({ title, url }) {
  return (
    <>
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon />
      </TwitterShareButton>
      <FacebookShareButton quote={title} url={url}>
        <FacebookIcon />
      </FacebookShareButton>
    </>
  );
}
