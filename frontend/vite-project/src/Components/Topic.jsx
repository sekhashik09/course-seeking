import { Link } from "react-router-dom";
export default function Topic() {
    const Style={
        display: "inline-block",
    padding: "10px 20px",
    color: "#000308",
    textDdecoration: "none",
    borderRadius: "4px",
    margin: "10px",
    height: "250px",
    width:"250px",
    boxShadow:"2px 2px 8px #000000",
    fontFamily:'Sans-serif'

    }
    const flex={
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
        height:"100%",
        padding: "70px 70px",
    }
  return (
    
    <div style={flex}>
        <div class="card" style={Style}>
        <Link to="/Beautician_related_Courses">
            <img src="https://5.imimg.com/data5/ZW/OO/ES/ANDROID-85896635/product-jpeg-500x500.jpg" alt="Card Image"/>
            <h1 class="card-title">Beautician related Courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Steaching_related_courses">
            <img src="https://d28wu4rrwshdah.cloudfront.net/149171.jpg" alt="Card Image"/>
            <h1 class="card-title">Steaching related courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Art_and_Craft_related_Courses">
            <img src="https://www.himanshuartinstitute.co.in/courses/painting-drawing-art-and-craft-courses/certificate-course-in-art-and-craft-in-delhi-gurugram-vaishali-india.jpg" alt="Card Image"/>
            <h1 class="card-title">Art and Craft related Courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Yoga_related_Courses">
            <img src="https://images.shiksha.com/mediadata/images/articles/1691666535phpnkj6Tl.jpeg" alt="Card Image"/>
            <h1 class="card-title">Yoga related Courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Web_development_related_Courses">
            <img src="https://www.webhopers.in/uploads/1/web-development-course-in-panchkula.png" alt="Card Image"/>
            <h1 class="card-title">Web development related Courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Govt_job_related_Courses">
            <img src="https://www.edutantra.in/assets/image/blog/government-job-oriented-courses-after-10th-banner.jpg" alt="Card Image"/>
            <h1 class="card-title">Govt job related Courses</h1>
        </Link>
        </div>
        <div class="card" style={Style}>
        <Link to="/Core_development_related_Courses">
            <img src="https://www.vagdevitechnologies.com/wp-content/uploads/2022/11/fullstack.jpg" alt="Card Image"/>
            <h1 class="card-title">Core development related Courses</h1>
        </Link>
        </div>

    </div>
  )
}
