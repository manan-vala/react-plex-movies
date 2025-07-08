import "./Nav.css";
import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import homeImg from "./assets/home.svg";
import livetv from "./assets/live-tv.svg";
import demand from "./assets/on-demand.svg";
import discover from "./assets/discover.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="logo-search">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" />
          <img src={search} alt="" className="NavImg" />
        </div>
      </div>

      <div className="mainmenu">
        <ul>
          <li>
            <img src={homeImg} alt="" className="NavImg" />
            <span>Home</span>
          </li>
          <li>
            <img src={livetv} alt="" className="NavImg" />
            <span>Live TV</span>
          </li>
          <li>
            <img src={demand} alt="" className="NavImg" />
            <span>On Demand</span>
          </li>
          <li>
            <img src={discover} alt="" className="NavImg" />
            <span>Discover</span>
          </li>
        </ul>
      </div>

      <div className="action">
        <div className="circle">
          <svg aria-hidden="true" class="m8o6ic0 m8o6ic1 m8o6ic3 det6jp5w det6jp5x det6jp62" fill="currentColor" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M39 39C39.3942 39.0007 39.7846 38.9235 40.1488 38.773C40.5131 38.6225 40.8441 38.4015 41.1228 38.1228C41.4015 37.8441 41.6225 37.5131 41.773 37.1488C41.9235 36.7846 42.0007 36.3942 42 36V12C42.0007 11.6058 41.9235 11.2154 41.773 10.8512C41.6225 10.4869 41.4015 10.1559 41.1228 9.87718C40.8441 9.59847 40.5131 9.37752 40.1488 9.22699C39.7846 9.07647 39.3942 8.99933 39 9H9C8.60585 8.99933 8.21544 9.07647 7.85116 9.22699C7.48688 9.37752 7.15589 9.59847 6.87718 9.87718C6.59847 10.1559 6.37752 10.4869 6.22699 10.8512C6.07647 11.2154 5.99933 11.6058 6 12V22.6747C5.02382 22.4332 4.02226 22.2538 3 22.1409V12C2.99976 11.212 3.1548 10.4317 3.45624 9.70362C3.75769 8.97556 4.19963 8.31403 4.75683 7.75683C5.31403 7.19963 5.97556 6.75769 6.70362 6.45624C7.43168 6.1548 8.212 5.99976 9 6H39C39.788 5.99976 40.5683 6.1548 41.2964 6.45624C42.0244 6.75769 42.686 7.19963 43.2432 7.75683C43.8004 8.31403 44.2423 8.97556 44.5438 9.70362C44.8452 10.4317 45.0002 11.212 45 12V36C45.0001 36.788 44.845 37.5682 44.5436 38.2963C44.2421 39.0243 43.8001 39.6858 43.2429 40.243C42.6858 40.8001 42.0243 41.2421 41.2963 41.5436C40.5682 41.845 39.788 42.0001 39 42H22.908C22.8255 41.1079 22.6884 40.2312 22.5 39.373C22.4726 39.2482 22.4441 39.1239 22.4146 39H39Z" fill="currentColor"></path><path d="M3 38.8V42H6.2C6.2 40.2327 4.76731 38.8 3 38.8Z" fill="currentColor"></path><path d="M9.4 42H12.6C12.6 36.6981 8.30193 32.4 3 32.4V35.6C6.53462 35.6 9.4 38.4654 9.4 42Z" fill="currentColor"></path><path d="M15.8 42H19C19 33.1634 11.8366 26 3 26V29.2C10.0692 29.2 15.8 34.9308 15.8 42Z" fill="currentColor"></path></svg>
        </div>
        <div className="circle">
          <svg aria-hidden="true" class="m8o6ic0 m8o6ic1 m8o6ic3 det6jp5w det6jp5x det6jp62" fill="currentColor" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M32.1323 10H6.63741C5.93792 10 5.26709 10.2784 4.77248 10.7741C4.27787 11.2697 4 11.9419 4 12.6429V47L19.3849 39.5119L34.7697 47V12.6429C34.7697 11.9419 34.4919 11.2697 33.9973 10.7741C33.5027 10.2784 32.8318 10 32.1323 10Z" fill="currentColor"></path><path clip-rule="evenodd" d="M15.5544 1H41.3326C42.0399 1 42.7182 1.26904 43.2183 1.74792C43.7184 2.22681 43.9993 2.87632 43.9993 3.55357V36.75L39.5561 34.6834V7.96396C39.5561 7.26619 39.2752 6.59699 38.7751 6.1036C38.275 5.6102 37.5967 5.33301 36.8894 5.33301H12.8877V3.55357C12.8877 2.87632 13.1687 2.22681 13.6688 1.74792C14.1689 1.26904 14.8472 1 15.5544 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
        </div>
        <button className="ActionBtn">Sign In</button>
      </div>
    </div>
  );
}

export default Nav;
