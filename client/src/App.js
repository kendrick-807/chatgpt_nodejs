import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import Home component
import Home from "./components/Home";

function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                    {/*<Navigate to="/" />*/}
                </Routes>
            </Router>
        </>
    );
}


export default App;
