import mapImage from "../assets/map.jpg";
import windowImage from "../assets/window.jpg";
import sentryImage from "../assets/sentry.jpg";
import pfp from "../assets/pfp.png";
import email from "../assets/email.jpg";
import phone from "../assets/phone.jpg";
import building from "../assets/building.jpg";
import location from "../assets/location.jpg";

function Header() {
  return (
    <>
      <div className="flex flex-row shadow-[0_0_4px_1px_rgba(0,0,0,0.15)] bg-white rounded-lg m-9 font-sans">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row border-gray-400 border-b">
            <div>
              <img className="w-14 rounded-4xl m-5" src={pfp} alt="" />
            </div>
            <div>
              <p>Sydney Lockhead</p>
              <div className="flex flex-row">
                <p>Last seen 2 min ago</p>
                <div className="flex flex-row">
                  <img className="h-4" src={sentryImage} alt="" />
                </div>
                <div className="flex flex-row items-center">
                  <img className="w-4 h-4" src={windowImage} alt="" />
                  <p className="text-[12px] font-semibold">Clarity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-[12px] mt-2 p-1">
            <div className="flex flex-row items-center border-gray-300 border-r pr-2">
              <img className="w-5 h-4" src={email} alt="" />
              <p>sydneylockhead@gmail.com</p>
            </div>
            <div className="flex flex-row items-center border-gray-300 border-r pr-2">
              <img className="w-4 h-4" src={phone} alt="" />
              <p>+1 2345789</p>
            </div>
            <div className="flex flex-row items-center border-gray-300 border-r pr-2">
              <img className="w-4" src={building} alt="" />
              <p>+1 98765432</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-4" src={location} alt="" />
              <p>Genius Marketing Ltd.</p>
            </div>
          </div>
        </div>
        <img className="w-45" src={mapImage} alt="" />
      </div>
    </>
  );
}

export default Header;
