import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee className="bg-slate-400" pauseOnHover={true} speed={100}>
      <Link className="mr-12 text-purple-600" to='/'>
      I can be a React component, multiple React components.....
      </Link>
      <Link className="mr-12 text-purple-600" to='/'>
      I can be a React component, multiple React components.....
      </Link>
      <Link className="mr-12 text-purple-600" to='/'>
      I can be a React component, multiple React components.....
      </Link>
      <Link className="mr-12 text-purple-600" to='/'>
      I can be a React component, multiple React components.....
      </Link>
      </Marquee>
    </div>
  );
};

export default Breakingnews;
