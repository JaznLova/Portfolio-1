import BlobButton from "../components/Header/BlobButton";
import "./Header.scss";
const Header = () => {
  return (
    <nav>
      <div className="title">my portfolio</div>
      <BlobButton/>
    </nav>
  );
};

export default Header;
