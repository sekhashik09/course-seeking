import Header from "./Header"
export default function Cardweb() {
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
        justifyContent:"space-between",
        width:"100%",
        height:"100%",
        padding: "70px 70px",
    }
  return (
    <div>
    <Header/>
    <div style={flex}>
        <div class="card" style={Style}>
            <a href="https://mitsquare.medium.com/free-web-development-courses-offered-by-top-institutions-and-organisations-in-the-world-13eec7393ace" class="card-button">
            <img src="https://miro.medium.com/v2/resize:fit:800/0*gVHEx5sUdQq26nNw.jpg" alt="Card Image"/>
            <h1 class="card-title">Compleate web Developer course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" class="card-button">
            <img src="https://i.ytimg.com/vi/G3e-cpL7ofc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOFXveigtMwLrLgFyo7zd2detkFA" alt="Card Image"/>
            <h1 class="card-title">Html and css for bigeners</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://frankeey.com/single_course/50" class="card-button">
            <img src="https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg" alt="Card Image"/>
            <h1 class="card-title">Compleate html,css,js</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.srishticampus.in/mern-stack-training-centre-trivandrum-kerala/" class="card-button">
            <img src="https://www.srishticampus.com/packageImages/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png" alt="Card Image"/>
            <h1 class="card-title">M E R N STACK </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.softcrayons.com/mean-training-institute-noida" class="card-button">
            <img src="https://www.softcrayons.com/uploads/properties/65326141411d1.png" alt="Card Image"/>
            <h1 class="card-title">M E A N STACK </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.cdmi.in/python-training-in-surat" class="card-button">
            <img src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/2026/course_2026_image.png" alt="Card Image"/>
            <h1 class="card-title">Python programing</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.tutorialspoint.com/bootstrap-online-training/index.asp" class="card-button">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230629123647/Best-C-Programming-Courses-For-Beginners.png" alt="Card Image"/>
            <h1 class="card-title">Bootstrap course </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.udemy.com/course/front-end-web-development-complete-guide-step-by-step/?couponCode=ST22MT92324A" class="card-button">
            <img src="https://img-c.udemycdn.com/course/750x422/3442782_5f7f_2.jpg" alt="Card Image"/>
            <h1 class="card-title">frontend course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://pwskills.com/blog/pw-free-backend-development-course-2024/">
            <img src="https://blog.pwskills.com/wp-content/uploads/2024/01/PW-FREE-BACKEND-DEVELOPMENT-COURSE.jpg" alt="Card Image"/>
            <h1 class="card-title">Backend course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.udemy.com/course/the-complete-wordpress-developer-course-w/?couponCode=ST22MT92324A" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Kj1odg3mPJI-FH1p6oSPA6FOSRMBRIuKEQ&s" alt="Card Image"/>
            <h1 class="card-title">Wordpress development course</h1>
            </a>
        </div>

    </div>
    </div>
  )
}