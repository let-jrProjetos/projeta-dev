import { Footer } from "./components/FooterComponent/Footer";
import "./App.css";
import { Router } from "./routes/Router";

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
