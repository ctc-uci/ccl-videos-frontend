import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EditLesson from "./LessonManager/EditLesson";
import CreateLesson from "./LessonManager/CreateLesson";
import Previewer from "./LessonManager/Previewer";
import { Alert } from "shards-react";
const temp = () => <div>hello world</div>;

function App() {
  return (
    <Router>
      <Alert />
      <Switch>
        <Route exact path="/" component={temp} />
        <Route exact path="/route" component={temp} />
        {/* <Route
          exact
          path="/lessons"
          render={() => (
            <EditLesson
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
        /> */}
        <Route
          exact
          path="/edit-lesson"
          render={() => (
            <EditLesson
              {...{
                id: "3db31046-0654-4929-948d-d432fa036712",
                title: "JOJO",
                description: "JOJO",
                video:
                  "https://ccl-video-thumbnails.s3.us-west-1.amazonaws.com/video/3db31046-0654-4929-948d-d432fa036712.mp4",
              }}
            />
          )}
        />
        <Route
          exact
          path="/create-lesson"
          render={() => (
            <CreateLesson
              {...{
                title: "Some Title",
                description: "Some Description",
                video:
                  "https://ccl-videos.s3-us-west-1.amazonaws.com/hello.mp4",
              }}
            />
          )}
        />
        <Route
          exact
          path="/previewLesson/:title/:description/:url"
          component={Previewer}
        />
        {/* add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;
