import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-content">
        {" "}
        {}
        <Sidebar />
        <Container />
      </div>
    </div>
  );
};

export default App;
