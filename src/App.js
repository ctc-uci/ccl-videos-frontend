import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ModifyLesson from "./lessonManager/EditLesson";
import Previewer from "./lessonManager/Previewer";
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
        /> */}
        <Route
          exact
          path="/create-lesson"
          render={() => (
            <ModifyLesson
              {...{
                id: "4e2403c8-0f94-4ef1-b45b-9affc979fbac",
                title: "Some Title",
                description: "Some Description",
                thumbnail: "https://www.w3schools.com/w3css/img_lights.jpg",
                video:
                  "https://ccl-videos.s3-us-west-1.amazonaws.com/hello.mp4",
              }}
            />
          )}
        />
        <Route exact path="/previewLesson" component={Previewer} />
        {/* add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;
