import './App.css';
import {BrowserRouter} from "react-router-dom";

import Router from "./routes/router";
import {Layout} from "antd";

function App() {
    return (
        <Layout style={{height: '100vh'}}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Layout>

    );
}

export default App;
