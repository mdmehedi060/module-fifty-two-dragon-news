import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'



const Rightsidenav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-5">
        <h2 className="tect-3xl font-semibold">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub/>
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="tect-3xl font-semibold">Find Us On</h2>
        <a className="flex p-4 text-lg items-center gap-2 border rounded-t-lg" href="">
        <FaFacebook/>
        <span>Facebook</span>
        </a>
              <a className="flex p-4 text-lg items-center gap-2 border-x" href="">
                <FaTwitter/>
                <span>Twitter</span>
              </a>
        <a className="flex p-4 text-lg items-center gap-2 border rounded-b-lg" href="">
          <FaInstagram/>
          <span>Instragram</span>
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 space-y-3 mb-5">
        <h2 className="tect-3xl font-semibold">Q zone</h2>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default Rightsidenav;
