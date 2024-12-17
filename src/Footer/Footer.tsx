import { Link } from "react-scroll";
import Hand from "../components/Footer/Hand";
import "./Footer.scss";
import { useState, useEffect } from "react";
const Footer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getFormattedTime = () => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const timezone = Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(time)
      .find((part) => part.type === "timeZoneName")?.value;

    return `${hours}:${minutes} ${timezone}`;
  };
  return (
    <footer id="footer">
      <span>Ready to build an amazing project?</span>
      <div className="buzz-text">
        <h1>give us a buzz!</h1>
        <Hand />
      </div>
      <div className="lower-footer">
        <img src="https://www.parabolae.co/images/Founders-scene.svg" alt="" />
        <div className="links">
          <div className="follow">
            <span>follow us</span>
            <a href="https://www.instagram.com/jasondmello570/">Instagram</a>
            <a href="https://www.linkedin.com/in/jason-d-mello-055b5927b/">
              linkedin{" "}
            </a>
            <a href="https://github.com/JaznLova">github</a>
          </div>
          <div className="local-time">
            <span >local time</span>
            <Link to="footer">{getFormattedTime()}</Link>
          </div>
          <div className="say-hi">
            <span>contact us</span>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jasonmd149@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              jasonmd149
              <br />
              @gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
