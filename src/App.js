import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
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
