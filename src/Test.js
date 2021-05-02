import React from 'react';
import VideoPlayer from 'customerVideoPlayer/VideoPlayer';
import CreateLesson from 'lessonManager/CreateLesson';
import EditLesson from 'lessonManager/EditLesson';
import { useState } from 'react';
import { Button } from 'shards-react';
import UnlockLessonModal from 'common/UnlockLessonModal';
import OopsModal from 'common/OopsModal';
import DisplayLessons from 'displayLessons/displayLessons';
import AdminLogin from 'adminLogin/AdminLogin';

const DUMMY_DATA = {
  date: new Date(),
  title: 'The Title of the Lesson',
  desc:
    'The Description of the Video. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque massa id magna ullamcorper placerat. Nullam dictum maximus nisi, sed condimentum nisl euismod eu. Praesent nec nisi semper lectus malesuada eleifend. Nulla ligula neque, pharetra vel sapien molestie, egestas aliquet ex. Nullam accumsan elit enim. Sed lacus lorem, ullamcorper quis ultricies semper, molestie at nunc. Morbi quis lobortis purus, quis ultrices massa. Cras sit amet accumsan lacus. Fusce posuere fringilla magna quis egestas. Suspendisse quis elit id arcu volutpat volutpat. Fusce mattis risus eget mi cursus sodales. Fusce a erat id turpis pellentesque consectetur. Proin ut lectus et nisl varius vulputate. Etiam ut mauris arcu',
  thumbnail:
    'https://images.ctfassets.net/hrltx12pl8hq/6YSoTmOYPk2VtQ7JSkPuzS/8250a3d54c1a714aa5e57f6a2826509e/shutterstock_1554086789.jpg',
  url:
    'https://ccl-videos.s3-us-west-1.amazonaws.com/video/9109ac3d-19d0-4f9d-b73f-7b7f21fd53f6.mp4',
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
      <h1>
        GENERAL TODOS: footer, landing page, code activation, error/success alert banner usage
      </h1>
      <h2 className='help-text'>
        admin login. TODO: flow is sus and incomplete, need to store isAdmin state in frontend to
        change navbar
      </h2>
      <AdminLogin />
      <h2 className='help-text'>display lessons. TODO: styles + button functionality</h2>
      <DisplayLessons />
      <h2 className='help-text'>create lesson. TODO: styles</h2>
      <CreateLesson />
      <EditLesson video={DUMMY_DATA.url} />
      <h2 className='help-text'>customer video player. TODO: text should be left-aligned</h2>
      <VideoPlayer
        url={DUMMY_DATA.url}
        thumbnail={DUMMY_DATA.thumbnail}
        title={DUMMY_DATA.title}
        desc={DUMMY_DATA.desc}
        date={DUMMY_DATA.date}
      />
      <h2 className='help-text'>
        common modals. TODO: styling, updating hyperlinks, get lesson activation to work + email
        reminder service. Email field should be required field.
      </h2>
      <Button onClick={toggle2}>Unlock Lesson Modal</Button>
      <Button onClick={toggle}>Oops Modal</Button>
      <UnlockLessonModal open={open2} toggle={toggle2} />
      <OopsModal open={open} toggle={toggle} />
    </div>
  );
};

export default Test;
