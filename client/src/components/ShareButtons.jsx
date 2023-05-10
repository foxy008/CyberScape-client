import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export default function ShareButtons({ title, url }) {
  return (
    <div className="flex gap-2">
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size="40px" round={true} />
      </TwitterShareButton>
      <FacebookShareButton quote={title} url={url}>
        <FacebookIcon size="40px" round={true}/>
      </FacebookShareButton>
    </div>
  );
}
