import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./contexts/Auth";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
