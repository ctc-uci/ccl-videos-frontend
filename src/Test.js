import React from 'react';
import VideoPlayer from 'customerVideoPlayer/VideoPlayer';
import CreateLesson from 'lessonManager/CreateLesson';
import { useState } from 'react';
import { Button } from 'shards-react';
import UnlockLessonModal from 'common/UnlockLessonModal';
import OopsModal from 'common/OopsModal';

const DUMMY_DATA = {
  date: new Date(),
  title: 'The Title of the Lesson',
  desc:
    'The Description of the Video. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque massa id magna ullamcorper placerat. Nullam dictum maximus nisi, sed condimentum nisl euismod eu. Praesent nec nisi semper lectus malesuada eleifend. Nulla ligula neque, pharetra vel sapien molestie, egestas aliquet ex. Nullam accumsan elit enim. Sed lacus lorem, ullamcorper quis ultricies semper, molestie at nunc. Morbi quis lobortis purus, quis ultrices massa. Cras sit amet accumsan lacus. Fusce posuere fringilla magna quis egestas. Suspendisse quis elit id arcu volutpat volutpat. Fusce mattis risus eget mi cursus sodales. Fusce a erat id turpis pellentesque consectetur. Proin ut lectus et nisl varius vulputate. Etiam ut mauris arcu',
  thumbnail:
    'https://images.ctfassets.net/hrltx12pl8hq/6YSoTmOYPk2VtQ7JSkPuzS/8250a3d54c1a714aa5e57f6a2826509e/shutterstock_1554086789.jpg',
  url:
    'https://ccl-videos.s3-us-west-1.amazonaws.com/video/cbed12b9-dd58-46cd-9a76-b412241de91e.mp4',
};

const Test = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const toggle2 = () => {
    setOpen2(!open2);
  };


  return (
    <div>
      <CreateLesson />
      <VideoPlayer
        url={DUMMY_DATA.url}
        thumbnail={DUMMY_DATA.thumbnail}
        title={DUMMY_DATA.title}
        desc={DUMMY_DATA.desc}
        date={DUMMY_DATA.date}
      />
      <Button onClick={toggle2}>Unlock Lesson Modal</Button>
      <Button onClick={toggle}>Oops Modal</Button>
      <UnlockLessonModal open={open2} toggle={toggle2} />
      <OopsModal open={open} toggle={toggle} />
    </div>
  );
};

export default Test;
