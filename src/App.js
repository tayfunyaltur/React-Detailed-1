import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./pages/Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUserName] = useState("Emir");
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          username,
          setUserName,
        }}
      >
        {/* This query client provider things come from react-query. So why we need it ?
          Because when you want to do API call generally we use fetch or axios with useEffect. And because of this
          we have to comment out or delete the React.StrictMode in index.js because it causing two requests in 
          useEffect. The solving is React Query and thats the way how we can use it.
        */}
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<h1>Page not found bro</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
      {/* In this example you can see in the BrowserRouter tag you can set the
      navbar or something like common things On the other hand, Routes tag means
      to react you can the individual routes in this tags. But the other navbar
      tag is common for every page.  */}
    </div>
  );
}

export default App;
