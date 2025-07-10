import "./HoverBoard.css";
import homeImg from "./assets/home.svg";
import livetv from "./assets/live-tv.svg";
import demand from "./assets/on-demand.svg";
import discover from "./assets/discover.svg";

function HoverBoard({ style }) {
  return (
    <div className="board" style={style}>
      <h1>Menu</h1>
      <div className="board-mainmenu">
        <ul>
          <li>
            <img src={homeImg} alt="" className="NavImg" />
            <span className="glow">Home</span>
          </li>
          <li>
            <img src={livetv} alt="" className="NavImg" />
            <span className="glow">Live TV</span>
          </li>
          <li>
            <img src={demand} alt="" className="NavImg" />
            <span className="glow">On Demand</span>
          </li>
          <li>
            <img src={discover} alt="" className="NavImg" />
            <span className="glow">Discover</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HoverBoard;
