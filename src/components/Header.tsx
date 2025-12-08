import mapImage from "../assets/Header/map.jpg";
import windowImage from "../assets/Header/window.jpg";
import sentryImage from "../assets/Header/sentry.png";
import pfp from "../assets/Header/pfp.png";
import email from "../assets/Header/email.jpg";
import phone from "../assets/Header/phone.jpg";
import building from "../assets/Header/building.jpg";
import location from "../assets/Header/location.jpg";
import xLogo from "../assets/Header/x.png";
import fbLogo from "../assets/Header/fb.png";
import igLogo from "../assets/Header/ig.png";
import ldLogo from "../assets/Header/ld.png";

function Header() {
  return (
    <>
      <div className="flex flex-row shadow-[0_0_4px_1px_rgba(0,0,0,0.15)] bg-white rounded-lg m-8 ml-18 mr-18">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row border-gray-300 border-b">
            <div>
              <img className="w-14 rounded-4xl m-5" src={pfp} alt="" />
            </div>
            <div className="flex flex-row justify-between flex-1">
              <div className="mt-4">
                <p className="font-bold text-xl">Sydney Lockhead</p>
                <div className="flex flex-row mt-2 items-center gap-4">
                  <p className="bg-gray-200 px-3 py-0.5 rounded-2xl">
                    Last seen 2 min ago
                  </p>
                  <div className="flex flex-row bg-gray-200 px-3 py-1 rounded-2xl gap-1 items-center">
                    <img className="h-4" src={sentryImage} alt="" />
                    <p className="text-[14px] font-semibold">Sentry</p>
                  </div>
                  <div className="flex flex-row items-center bg-gray-200 px-3 py-1 rounded-2xl gap-1">
                    <img className="w-4 h-4" src={windowImage} alt="" />
                    <p className="text-[14px] font-semibold">Clarity</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 mt-[37px] mr-6">
                <img className="w-5 h-5" src={igLogo} alt="" />
                <img className="w-5 h-5" src={xLogo} alt="" />
                <img className="w-5 h-5" src={fbLogo} alt="" />
                <img className="w-5 h-5" src={ldLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around text-[16px] mt-2 p-1 mr-12 mb-2">
            <div className="flex flex-row items-center border-gray-300 border-r pr-10">
              <img className="w-5 h-4" src={email} alt="" />
              <p>sydneylockhead@gmail.com</p>
            </div>
            <div className="flex flex-row items-center border-gray-300 border-r pr-10">
              <img className="w-4 h-4" src={phone} alt="" />
              <p>+1 0123456789</p>
            </div>
            <div className="flex flex-row items-center border-gray-300 border-r pr-10">
              <img className="w-4" src={building} alt="" />
              <p>+1 9876543210</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-4" src={location} alt="" />
              <p>Genius Marketing Ltd.</p>
            </div>
          </div>
        </div>
        <div
          className="w-50 rounded-tr-lg rounded-br-lg bg-cover relative"
          style={{ backgroundImage: `url(${mapImage})` }}
        >
          <div
            className="flex flex-col gap-18 justify-center items-center absolute inset-0.5
          "
          >
            <p className="bg-gray-400 text-white text-sm w-40 rounded-xl font-medium text-center">
              Last IP: 69.141.42.77
            </p>
            <p className="bg-gray-600 text-white text-sm rounded-xl font-medium px-2">
              06:36 AM EDT
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-9 ml-18">
        <div className="flex flex-row items-center gap-2 border-2 border-transparent hover:border-2 hover:border-[#63b5b5] hover:text-[#009CA5] hover:bg-[#f3f7f7] py-1 px-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
            className="w-4.5 h-4.5 text-[#009CA5]"
            fill="currentColor"
          >
            <path d="M45 43.722c-.449 0-.897-.101-1.311-.302L4.878 24.56c-1.033-.502-1.689-1.55-1.689-2.698s.656-2.196 1.688-2.698L43.688.302c.828-.402 1.795-.402 2.623 0l38.811 18.861c1.033.502 1.688 1.55 1.688 2.698s-.655 2.196-1.688 2.698L46.312 43.42c-.415.202-.863.302-1.312.302zM13.053 21.861 45 37.387l31.947-15.525L45 6.335 13.053 21.861z" />

            <path d="M45 90c-.449 0-.897-.101-1.312-.302L4.878 70.837A3.085 3.085 0 0 1 3.19 68.139V21.861c0-1.034.532-1.995 1.408-2.543.876-.549 1.973-.606 2.903-.155L45 37.387l37.499-18.224c.929-.452 2.026-.394 2.903.155.876.548 1.408 1.509 1.408 2.543v46.277a3.087 3.087 0 0 1-1.688 2.698L46.312 89.698c-.415.201-.863.302-1.312.302zM9.189 66.261 45 83.664l35.811-17.403V26.655L46.312 43.42c-.828.402-1.795.402-2.623 0L9.189 26.655v39.606z" />

            <path d="M45 90c-1.657 0-3-1.343-3-3V40.722c0-1.657 1.343-3 3-3s3 1.343 3 3V87c0 1.657-1.343 3-3 3z" />
          </svg>

          <p>Orders</p>
        </div>
        <div className="flex flex-row items-center gap-2 border-2 border-transparent  hover:border-2 hover:border-[#63b5b5] hover:text-[#009CA5] hover:bg-[#f3f7f7] py-1 px-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-4.5 h-4.5 text-[#009CA5]"
          >
            <g transform="translate(1.4 1.4) scale(2.81)" fill="currentColor">
              <path d="M 85.814 21.474 h -58.21 c -2.312 0 -4.186 -1.874 -4.186 -4.186 s 1.874 -4.186 4.186 -4.186 h 58.21 c 2.312 0 4.186 1.874 4.186 4.186 S 88.126 21.474 85.814 21.474 z" />
              <path d="M 85.814 49.186 h -58.21 c -2.312 0 -4.186 -1.874 -4.186 -4.186 s 1.874 -4.186 4.186 -4.186 h 58.21 C 88.126 40.814 90 42.688 90 45 S 88.126 49.186 85.814 49.186 z" />
              <path d="M 85.814 76.897 h -58.21 c -2.312 0 -4.186 -1.874 -4.186 -4.186 s 1.874 -4.186 4.186 -4.186 h 58.21 c 2.312 0 4.186 1.874 4.186 4.186 S 88.126 76.897 85.814 76.897 z" />
              <circle cx="7.558" cy="17.288" r="7.558" />
              <circle cx="7.558" cy="44.998" r="7.558" />
              <circle cx="7.558" cy="72.708" r="7.558" />
            </g>
          </svg>
          <p>Activity</p>
        </div>
        <div className="flex flex-row items-center gap-2 border-2 border-transparent  hover:border-2 hover:border-[#63b5b5] hover:text-[#009CA5] hover:bg-[#f3f7f7] py-1 px-2 rounded-lg">
          <svg
            viewBox="0 0 256 256"
            className="w-6 h-5 text-[#009CA5] fill-current"
          >
            <g transform="translate(1.4066 1.4066) scale(2.81)">
              <path d="M69.381 55.4H20.619c-1.657 0-3-1.343-3-3s1.343-3 3-3h48.762c1.657 0 3 1.343 3 3s-1.343 3-3 3z" />
              <path d="M69.381 41.083H20.619c-1.657 0-3-1.343-3-3s1.343-3 3-3h48.762c1.657 0 3 1.343 3 3s-1.343 3-3 3z" />
              <path d="M24.893 86.074c-.768 0-1.536-.293-2.121-.879L13.5 75.924h-3.57C4.454 75.924 0 71.47 0 65.994V24.489c0-5.475 4.454-9.929 9.929-9.929h70.142c5.475 0 9.929 4.454 9.929 9.929v41.505c0 5.476-4.454 9.93-9.929 9.93H36.286l-9.272 9.271c-.585.585-1.353.879-2.121.879zM9.929 20.56C7.763 20.56 6 22.322 6 24.489v41.505c0 2.167 1.763 3.93 3.929 3.93h4.813c.795 0 1.559.316 2.121.879l8.029 8.029 8.029-8.029c.563-.563 1.326-.879 2.121-.879h45.028c2.166 0 3.929-1.763 3.929-3.93V24.489c0-2.167-1.763-3.929-3.929-3.929H9.929z" />
            </g>
          </svg>
          <p>Communications</p>
        </div>
        <div className="flex flex-row items-center gap-2 border-2 border-transparent  hover:border-2 hover:border-[#63b5b5] hover:text-[#009CA5] hover:bg-[#f3f7f7] py-1 px-2 rounded-lg">
          <svg
            viewBox="0 0 256 256"
            className="w-4.5 h-4.5 text-[#009CA5] fill-current"
          >
            <g transform="translate(1.4066 1.4066) scale(2.81)">
              <path d="M85.719 34.074c-.062-.322-.15-.639-.291-.939-.11-.235-.245-.461-.403-.674s-.34-.414-.545-.598l-4.107-3.683c-1.643-1.473-4.168-1.336-5.641.307L44.399 59.979c-.144.16-.243.355-.288.565l-2.327 10.861c-.2.933.689 1.73 1.595 1.43l10.544-3.491c.204-.068.387-.187.531-.348l20.484-22.839 6.351-7.081c.184-.205.343-.424.477-.654.134-.229.243-.468.327-.714.068-.285.1-.996-.033-1.68z" />
              <path d="M67.254 90h-53.77c-5.118 0-9.281-4.163-9.281-9.281V9.281C4.203 4.164 8.366 0 13.484 0h53.77c5.118 0 9.281 4.164 9.281 9.281v8.367c0 2.209-1.791 4-4 4s-4-1.791-4-4V9.281c0-.706-.575-1.281-1.281-1.281h-53.77c-.707 0-1.281.575-1.281 1.281v71.438c0 .706.575 1.281 1.281 1.281h53.77c.706 0 1.281-.575 1.281-1.281V65.08c0-2.209 1.791-4 4-4s4 1.791 4 4v15.639c0 5.118-4.163 9.281-9.281 9.281z" />
              <path d="M60.236 22.06H20.501c-2.209 0-4-1.791-4-4s1.791-4 4-4h39.735c2.209 0 4 1.791 4 4s-1.791 4-4 4z" />
              <path d="M54.104 40.02H20.501c-2.209 0-4-1.791-4-4s1.791-4 4-4h33.602c2.209 0 4 1.791 4 4s-1.791 4-4 4z" />
              <path d="M39.21 57.98H20.501c-2.209 0-4-1.791-4-4s1.791-4 4-4h18.709c2.209 0 4 1.791 4 4s-1.791 4-4 4z" />
              <path d="M34.984 75.94H20.501c-2.209 0-4-1.791-4-4s1.791-4 4-4h14.482c2.209 0 4 1.791 4 4s-1.791 4-4 4z" />
            </g>
          </svg>
          <p>Notes</p>
        </div>
        <div className="flex flex-row items-center gap-2 border-2 border-transparent  hover:border-2 hover:border-[#63b5b5] hover:text-[#009CA5] hover:bg-[#f3f7f7] py-1 px-2 rounded-lg">
          <svg
            viewBox="0 0 256 256"
            className="w-4.5 h-4.5 text-[#009CA5] fill-current"
          >
            <g transform="translate(1.4066 1.4066) scale(2.81)">
              <path d="M79.594 90H65.346c-.77 0-1.47-.441-1.803-1.135-.967-2.013-2.947-3.264-5.17-3.264s-4.203 1.251-5.168 3.264c-.333.694-1.034 1.135-1.804 1.135H38.599c-.769 0-1.47-.441-1.803-1.135-.966-2.013-2.947-3.264-5.169-3.264s-4.203 1.251-5.169 3.264C26.125 89.559 25.423 90 24.654 90H10.407a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h69.187a2 2 0 0 1 2 2v86a2 2 0 0 1-2 2zm-13.088-4h11.088V4H12.407v82h11.087c1.784-2.707 4.852-4.398 8.133-4.398s6.349 1.691 8.133 4.398H50.24c1.784-2.707 4.853-4.398 8.133-4.398S64.722 83.293 66.506 86z" />
              <path d="M66.162 22.994H23.838a2 2 0 1 1 0-4h42.324a2 2 0 1 1 0 4z" />
              <path d="M66.162 36.367H23.838a2 2 0 1 1 0-4h42.324a2 2 0 1 1 0 4z" />
              <path d="M66.162 49.74H23.838a2 2 0 1 1 0-4h42.324a2 2 0 1 1 0 4z" />
              <path d="M66.162 63.114H49.248a2 2 0 1 1 0-4h16.914a2 2 0 1 1 0 4z" />
            </g>
          </svg>

          <p>Invoices</p>
        </div>
      </div>
    </>
  );
}

export default Header;
