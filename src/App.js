import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <BrowserRouter>
        <Routes/>
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
