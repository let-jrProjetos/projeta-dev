import { Footer } from "./components/FooterComponent/Footer";
import "./App.css";
import { Router } from "./routes/Router";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
