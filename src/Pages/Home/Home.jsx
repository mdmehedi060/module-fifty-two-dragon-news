import Breakingnews from "./Breakingnews";
import Header from "./Shares/Header/Header";
import Leftsidenav from "./Shares/Leftsidenav/Leftsidenav";
import Navbar from "./Shares/Navbar/Navbar";
import Rightsidenav from './Shares/Rightsightnav/Rightsidenav';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
           <div  className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-red-600">
                <Leftsidenav></Leftsidenav>
            </div>
            <div className="md:col-span-2 border border-red-600">
                <h2 className="text-4xl">News Cooming Soon...</h2>
            </div>
            <div className="border border-red-600">
                <Rightsidenav></Rightsidenav>
            </div>
           </div>
        </div>
    );
};

export default Home;