import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Button } from 'shards-react';
import VideoPlayer from 'common/VideoPlayer';

const Previewer = () => {
  const { title, description, url } = useParams();
  console.log(!title, description, url);
  return (
    <div>
      <Button
        pill
        theme='danger'
        onClick={() => {
          window.close();
        }}>
        Close
      </Button>
      <div>
        {url ? <VideoPlayer src={decodeURIComponent(url)}></VideoPlayer> : <p>No Video Uploaded</p>}
      </div>
      <div>
        <h2>{title ? title : 'Empty Title'}</h2>
      </div>
      <div>
        <h5>Description</h5>
        <p>{description ? description : 'Empty Description'}</p>
      </div>
    </div>
  );
};

export default withRouter(Previewer);
