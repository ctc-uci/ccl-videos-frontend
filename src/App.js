import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertBanner from './common/AlertBanner';
import "./App.css";
import ModifyLesson from "./Component/ModifyLesson";
import LessonVideo from './Component/LessonVideo';
import Codes from "./Component/Codes";
import { Alert } from 'shards-react';
const temp = () => <div>hello world</div>;

const DUMMY_DATA = {
  date: new Date(),
  title: "The Title of the Lesson",
  desc: "The Description of the Video. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque massa id magna ullamcorper placerat. Nullam dictum maximus nisi, sed condimentum nisl euismod eu. Praesent nec nisi semper lectus malesuada eleifend. Nulla ligula neque, pharetra vel sapien molestie, egestas aliquet ex. Nullam accumsan elit enim. Sed lacus lorem, ullamcorper quis ultricies semper, molestie at nunc. Morbi quis lobortis purus, quis ultrices massa. Cras sit amet accumsan lacus. Fusce posuere fringilla magna quis egestas. Suspendisse quis elit id arcu volutpat volutpat. Fusce mattis risus eget mi cursus sodales. Fusce a erat id turpis pellentesque consectetur. Proin ut lectus et nisl varius vulputate. Etiam ut mauris arcu",
  thumbnail: "https://images.ctfassets.net/hrltx12pl8hq/6YSoTmOYPk2VtQ7JSkPuzS/8250a3d54c1a714aa5e57f6a2826509e/shutterstock_1554086789.jpg",
  url: "https://ccl-videos.s3-us-west-1.amazonaws.com/video/cbed12b9-dd58-46cd-9a76-b412241de91e.mp4"
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={temp} />
        <Route exact path="/route" component={temp} />
        <Route
          exact
          path="/lessons"
          render={() => (
            <ModifyLesson
              {...{
                id: "4e2403c8-0f94-4ef1-b45b-9affc979fbac",
                category: "edit",
                title: "Some Title",
                description: "Some Description",
                thumbnail: "https://www.w3schools.com/w3css/img_lights.jpg",
                visible: null,
                video:
                  "https://www.dailymotion.com/embed/video/x802p93?autoplay=false&fullscreen=true&ui-start-screen-info=false&scaleMode='fit'&queue-enable=false&sharing-enable=false&ui-logo=false",
              }}
            />
          )}
        />
        <Route exact path="/codes" component={Codes} />
        {/* add more routes here */}
        <Route
          exact
          path="/video"
          render={() => (
            <LessonVideo url={DUMMY_DATA.url} thumbnail={DUMMY_DATA.thumbnail} title={DUMMY_DATA.title} desc={DUMMY_DATA.desc} date={DUMMY_DATA.date} />
          )}
        />
      </Switch>
      <AlertBanner />
    </Router>
  );
}

export default App;
