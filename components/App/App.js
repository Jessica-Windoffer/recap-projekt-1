import Header from "../Header/Header.js";
import Profile from "../Profile/Profile.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header());

  return app;
}
