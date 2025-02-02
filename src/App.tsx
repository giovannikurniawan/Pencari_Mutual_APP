import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Cari_Jodoh from "./pages/Carijodoh/Cari_Jodoh";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";


const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/profile">
            {user ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/update">
            {user ? <UpdateProfile /> : <Redirect to="/login" />}
          </Route> */}
          <Route exact path="/">
            {user ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/CariJodoh">
            {user ? <Cari_Jodoh /> : <Redirect to="/login" />}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
