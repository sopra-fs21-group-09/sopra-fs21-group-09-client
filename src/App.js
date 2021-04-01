import React, { Component } from "react";
import Header from "./viewsOldVersion/Header";
import AppRouter from "./componentsOldVersion/shared/routers/AppRouter";

/**
 * Happy coding!
 * React Template by Lucas Pelloni
 */
class App extends Component {
  render() {
    return (
      <div>
        <Header height={"100"}/>
        <AppRouter />
      </div>
    );
  }
}

export default App;
