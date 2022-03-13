import React from "react";

const VideoPopup = () => {
	return (
		<>
			<div className="video-popup">
				<div className="video-popup-inner">
					<i className="fas fa-times video-popup-close"></i>
					<div className="iframe-box">
						<iframe
							id="player-1"
							src="https://www.youtube.com/embed/3LVhE8CnYL8"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoPopup;
