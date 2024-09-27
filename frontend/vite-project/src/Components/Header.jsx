import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="h-20 w-20 ml-10">
          <img src="https://img.freepik.com/premium-vector/cs-logo-vector_724449-138.jpg" alt="Logo" />
        </div>
        <div style={{ marginTop: '25px', fontFamily: 'Fantasy', fontSize: '20px' }}>
          <h3>Course Seeker</h3>
        </div>
      </div>
      <div className="flex justify-between m-5 mr-10" style={{ fontFamily: 'Sans-serif', width: "40%" }}>
        <div><Link className="nav-link" to="/">Home</Link></div>
        <div><Link className="nav-link" to="/signup">Sign Up</Link></div>
        <div><Link className="nav-link" to="/log-in">Log In</Link></div>
        <div className="input">
          <input
            type="text"
            placeholder="Search Here For Courses"
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px 8px #000000",
              fontSize: "15px",
              padding: "2px 1px"
            }}
          />
        </div>
        <div>
          <button
            className="btn"
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px 8px #000000",
              width: "100px",
              backgroundColor: "#c5cdfc"
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
