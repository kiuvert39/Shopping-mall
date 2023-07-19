import React from 'react'



function VideoCard(props) {
  return (
    <>
      <div className="d-flex gap-2">
        <p>{props.title}</p>
        <p>{props.duration}</p>
      </div>
    </>
  );
}

export default VideoCard
