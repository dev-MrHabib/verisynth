import { BrowserRouter, Route, Routes } from "react-router-dom";
import Verification from "./features/verification/verification";
import AppLayout from "./features/AppLayOut/AppLayout";
import About from "./features/About";
//import Institution from "./features/Institution/Institution";
import Body from "./features/AppLayOut/Body";
import Signup from "./features/Institution/Signup";
import Signin from "./features/Institution/Signin";
import Dashboard from "./features/Institution/Dashboard";
import CredentialForm from "./features/Institution/CredentialForm";
import Credential from "./features/Institution/Credential";
import Dashboardprofile from "./features/Institution/Dashboardprofile";
import Help from "./features/Institution/Help";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Body />} />
            <Route path="verification" element={<Verification />} />
            <Route path="institutionsignin" element={<Signin />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="credentialform" element={<CredentialForm />} />
              <Route path="credential" element={<Credential />} />
              <Route path="profile" element={<Dashboardprofile />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 6000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 6000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
