import Header from "./Header"
export default function Cardbeauty() {
    const Style={
        display: "inline-block",
    padding: "10px 20px",
    color: "#000308",
    textDdecoration: "none",
    borderRadius: "4px",
    margin: "10px",
    height: "250px",
    width:"250px",
    fontFamily:'Sans-serif',
    boxShadow:"2px 2px 8px #000000"

    }
    const flex={
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
        height:"100%",
        padding: "70px 70px",
    }
  return (
    <div>
    <Header/>
    <div style={flex}>
        <div class="card" style={Style}>
            <a href="https://www.makeupchaska.com/cosmetology-course/" class="card-button">
            <img src="https://www.makeupchaska.com/wp-content/uploads/2022/11/COSMETOLOGIST-Cosmetology-Course-Beauty-School-Salon-Parlor-Training-768x644.png" alt="Card Image"/>
            <h1 class="card-title">Cosmetology Course Beauty School Salon Parlor Training</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.guidemecareer.com/blog-detail/how-to-become-beautician" class="card-button">
            <img src="https://www.guidemecareer.com/backend/blogimages/how-to-become-beautician.jpeg" alt="Card Image"/>
            <h1 class="card-title">Guide on How to Become Beautician : Courses After 12th, Training, Skills & Salary</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.ncertbooks.guru/cosmetology-courses/" class="card-button">
            <img src="https://blogassets.leverageedu.com/media/uploads/2023/05/29222439/Study-Beautician-Course-Top-Universities-Syllabus-and-More.png" alt="Card Image"/>
            <h1 class="card-title">List of Cosmetology Courses | Eligibility, Colleges, Salary, Job Profiles, Career Scope</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.bodhideepainstitute.com/beautician-courses" class="card-button">
            <img src="https://static.wixstatic.com/media/65fafb_1832e20bfed84fd6a6b2eb533a71de8c~mv2.jpg/v1/fill/w_644,h_380,al_c/65fafb_1832e20bfed84fd6a6b2eb533a71de8c~mv2.jpg" alt="Card Image"/>
            <h1 class="card-title">Become A Professional Beauty & Make up Artist</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.georgetelegraph.com/training-in-beautician-courses-at-kolkata.aspx" class="card-button">
            <img src="https://www.georgetelegraph.com/img/g2.jpg" alt="Card Image"/>
            <h1 class="card-title">Beautician Course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.click.in/kolkata/beautician-course-for-anyone-c177-v14751726" class="card-button">
            <img src="https://images.click.in/classifieds/images/177/05_02_2016_23_23_06_r3hlhibttqooh2ufumpgnkicg0_i2vlznkxe7.jpg" alt="Card Image"/>
            <h1 class="card-title">Beautician Course for anyone</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.shiksha.com/beauty-fitness/articles/beautician-courses-in-kolkata-blogId-173603" class="card-button">
            <img src="https://images.shiksha.com/mediadata/images/articles/1722418023phpqUEN5X.jpeg" alt="Card Image"/>
            <h1 class="card-title">Beautician Courses in Kolkata: Top Colleges, Courses, Fees</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.georgetelegraph.com/training-in-beautician-courses-at-kolkata.aspx" class="card-button">
            <img src="https://www.georgetelegraph.com/img/g1.jpg" alt="Card Image"/>
            <h1 class="card-title">Beautician Course for anyone</h1>
            </a>
        </div>
    </div>
    </div>
  )
}