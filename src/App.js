import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, RegisterPage, ErrorPage, ProtectedPage, SharedDashboard, AllJobs, AddJob, Profile, Stats } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage><SharedDashboard /></ProtectedPage>}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} pauseOnFocusLoss={false}/>
    </BrowserRouter>
  );
}

export default App;
