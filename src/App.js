import { Bio } from "./components/Bio/Bio";
import { Header } from "./components/Header/Header";
import "./styles/globals.css";

function App() {
    return (
        <div className="bg-slate-900 h-screen flex justify-center">
            <div className="w-1/2">
                <Header />
                <Bio />
            </div>
        </div>
    );
}

export default App;
