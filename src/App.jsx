import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import UserModule from "./Modules/User";
import AdminModule from "./Modules/Admin";
import AcademiaModule from "./Modules/Acedmia";
import PublicPages from "./Modules/PublicPages";
import { Suspense } from "react";
import { Spinner } from "./Common/MUI";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./Theme/theme";
import SignupButtons from "./Modules/SignupButtons";
import { CssBaseline } from "@mui/material";
import Alerts from "./Common/Alert";
import { useSelector } from "react-redux";
import "./App.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

function App() {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {loading && <Spinner />}
      <div className="app">
        <Alerts />
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <Routes>
              <Route element={<UserModule />} path="industry/*" />
              <Route element={<AdminModule />} path="directportal/*" />
              <Route element={<AcademiaModule />} path="academia/*" />
              <Route element={<PublicPages />} path="/*" />
              {/* <Route element={<SignupButtons isLogin />} path="login" />
              <Route element={<SignupButtons />} path="signup" /> */}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
