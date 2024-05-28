import TimeslotScheduler from "./components/TimeslotScheduler";
import "./global.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TimeslotScheduler />
    </div>
  );
};

export default App;
