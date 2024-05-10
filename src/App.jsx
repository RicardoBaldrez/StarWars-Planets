import { WrapperApp, WrapperContent } from "./App.styles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ConfigRoutes from "./routes";
import "./reset.css";

function App() {
  return (
    <WrapperApp>
      <Header />
      <WrapperContent>
        <ConfigRoutes />
      </WrapperContent>
      <Footer />
    </WrapperApp>
  );
}

export default App;
