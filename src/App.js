import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Typingbox from "./components/Typingbox";

function App(){
    return(
        <div className="App">
            <Header/>
            <Typingbox/>
            <Footer/>
        </div>
    );
}

export default App;