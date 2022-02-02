import { Header } from "../Header";

export const Layout = ({ children }) => (
    <div className="bg-slate-900 h-screen flex justify-center">
        <div className="w-1/2">
            <Header />
            <div className="p-2">{children}</div>
        </div>
    </div>
);
