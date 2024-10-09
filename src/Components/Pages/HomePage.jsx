import Logo from "../../assets/logo";
import ResaturentData from "../../ReasData";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="home">
        <div className="logo-container">
          <Logo className="homeicon" />
          <p>Food Stop</p>
        </div>
        <div className="home-buttons">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </div>
      <ul>
        {ResaturentData.map((res) => (
          <li>
            <div className="card">
              <p>{res.name}</p>
              <img src={res.image} alt="Images on the way" />
              <p>{res.items}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
