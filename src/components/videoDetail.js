import React from 'react';


const VideoDetail = (props) =>{
  const video = props.video;
  if (!video) {
     return <div>loading</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
     <div className="embed-responsive embed-responsive-16by9">
       <iframe className="embed-responsive-item" src={url}></iframe>
     </div>

     <div className="details">
      <div>{video.snippet.title}</div>
      <div className="well">{video.snippet.description}</div>
      <div>{video.snippet.publishedAt}</div>
     </div>
    </div>
  );
};

export default VideoDetail;
