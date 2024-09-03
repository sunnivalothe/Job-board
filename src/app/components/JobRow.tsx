import React from "react";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
            <FontAwesomeIcon className="size-6 text-gray-300" icon={faHeart}/>
        </div>
        <div className="flex grow gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://e7.pngegg.com/pngimages/158/639/png-clipart-spotify-streaming-media-logo-playlist-spotify-app-icon-logo-music-download-thumbnail.png"
              alt=""
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
            <div className="text-gray-500 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product Designer</div>
            <div className="text-gray-400 text-sm">
              Remote &middot; New York, USA &middot; Full-time
            </div>
            </div>
            
            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
}
