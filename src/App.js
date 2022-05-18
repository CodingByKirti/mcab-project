import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./PropsDemo";
import PropsDemo2 from "./PropsDemo2";
import Message from "./Message";
import Likes from "./Likes";

function App() {
  return (
    <>
      <Message />
      <hr />
      <hr />
      <Likes />
      <PropsDemo2 a="hello" b="bye" />
      <PropsDemo name="Guest" email="admin@helpdesk.in">
        defined text
      </PropsDemo>
    </>
  );
}

export default App;
