import "./MoreWork.scss";
import { FaArrowRight } from "react-icons/fa6";
const MoreWork = () => {
  const work: {
    name: string;
    href: string;
    number: string;
  }[] = [
    { name: "Paris", href: "https://en.parisinfo.com", number: "01" },
    { name: "London", href: "https://www.visitlondon.com", number: "02" },
    { name: "Berlin", href: "https://www.visitberlin.de/en", number: "03" },
    { name: "Rome", href: "https://www.turismoroma.it/en", number: "04" },
    { name: "Amsterdam", href: "https://www.iamsterdam.com/en", number: "05" },
    {
      name: "Barcelona",
      href: "https://www.barcelonaturisme.com",
      number: "06",
    },
  ];
  return (
    <div className="work">
      <div className="title">more work</div>
      <div className="content">
        {work.map((work) => (
          <a className="item" href={work.href} key={work.number}>
            <div>
              <FaArrowRight />
              <h2>{work.name}</h2>
            </div>
            <h3>{work.number}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MoreWork;
