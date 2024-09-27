import Header from "./Header"
export default function Card() {
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
            <a href="https://www.apnacollege.in/course/placement-course-java" class="card-button">
            <img src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/d9bd3d3072e7df86be3f00f545c83514.jpeg" alt="Card Image"/>
            <h1 class="card-title">ALPHA</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.excelptp.com/professional-training-programs/core-advance-java-training.html" class="card-button">
            <img src="https://www.excelptp.com/wp-content/uploads/2021/05/core-java-banner-img.jpg" alt="Card Image"/>
            <h1 class="card-title">100% job gurentey java developer course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.youtube.com/watch?app=desktop&v=Xl8RuHs8ivU" class="card-button">
            <img src="https://i.ytimg.com/vi/Xl8RuHs8ivU/maxresdefault.jpg" alt="Card Image"/>
            <h1 class="card-title">Software developer course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.iihthowrah.com/core-java/" class="card-button">
            <img src="https://www.iihthowrah.com/img/course/Core-JAVA(4).jpg" alt="Card Image"/>
            <h1 class="card-title">Core Java</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.facebook.com/coreskillstraining/?_rdr" class="card-button">
            <img src="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/285573064_750350723075339_4275470966509545213_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vc0ZjKTAjXUQ7kNvgFKQshz&_nc_ht=scontent.fccu2-1.fna&_nc_gid=ATnpv4ucJidBzL5fPNwhtWx&oh=00_AYA6xQFWLZwyDt14rrkJMxzXJdhOr3bCIvqTeQ_K5jScjw&oe=66F776DB" alt="Card Image"/>
            <h1 class="card-title">Core Skills Trainings</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.cdmi.in/python-training-in-surat" class="card-button">
            <img src="https://www.cdmi.in/courses@2x/python-training-institute.webp" alt="Card Image"/>
            <h1 class="card-title">Python programing</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.geeksforgeeks.org/best-c-programming-courses-for-beginners/" class="card-button">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230629123647/Best-C-Programming-Courses-For-Beginners.png" alt="Card Image"/>
            <h1 class="card-title">Course on c</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.upshottechnologies.in/python-full-stack-developer-training-course-bangalore/" class="card-button">
            <img src="https://www.upshottechnologies.in/images/course/python-full-stack-developer-training-courses.jpg" alt="Card Image"/>
            <h1 class="card-title">Python with fullstack</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://tech-gyan.in/product/python-programming/" class="card-button">
            <img src="https://tech-gyan.in/wp-content/uploads/2021/01/Python-Programming.jpg" alt="Card Image"/>
            <h1 class="card-title">Profesional on python</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.web-development-institute.com/course-categories/web-design-and-development-certificate-courses-in-rohini/" class="card-button">
            <img src="https://www.web-development-institute.com/wp-content/uploads/2021/03/c-plus-plus-advanced-course.jpg" alt="Card Image"/>
            <h1 class="card-title">Learn C++</h1>
            </a>
        </div>

    </div>
    </div>
  )
}
