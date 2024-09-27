import Header from "./Header"
export default function Cardgov() {
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
            <a href="https://iceacademy.in/courses/kolkata-best-technical-govt-job-course" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6b2G4m7FaGkbcfxaZSFlDvFU5N8pKxIiT0w&s" alt="Card Image"/>
            <h1 class="card-title">Tecnical Govt job</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://ischoolconnect.com/blog/best-computer-courses-for-undergrad-aspirants-and-how-to-pick-one/" class="card-button">
            <img src="https://ischoolconnect.com/blog/wp-content/uploads/2021/08/7-best-computer-courses-you-can-take-up-after-12th-1.jpg" alt="Card Image"/>
            <h1 class="card-title">Computer courses for govt jobs</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.youtube.com/watch?v=msx3PJ8ijvI" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pXz4NCnivoOUJulwayjGC4H63e8T8XHcIw&s" alt="Card Image"/>
            <h1 class="card-title">Data entry course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://techcaddcomputerinstitute.com/best-government-job-courses-in-jalandhar/index.php" class="card-button">
            <img src="https://techcaddcomputerinstitute.com/best-government-job-courses-in-jalandhar/assets/images/DCA.jpg" alt="Card Image"/>
            <h1 class="card-title">Diploma in computer application</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.csdcomputer.in/course/ccc-for-government-job.html" class="card-button">
            <img src="https://www.csdcomputer.in/uploads/admin/courses/banner_1582364629.jpg" alt="Card Image"/>
            <h1 class="card-title">Course Concepts</h1>
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
            <a href="https://www.traininginseo.in/blog/career-in-digital-marketing-is-as-good-as-a-government-job-here-is-why/" class="card-button">
            <img src="https://www.traininginseo.in/blog/wp-content/uploads/2020/04/Career-in-Digital-Marketing-is-as-Good-as-a-Government-Job-Here-is-Why.png" alt="Card Image"/>
            <h1 class="card-title">Digital Marketing</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://courses.iid.org.in/course/hr-executive" class="card-button">
            <img src="https://courses.iid.org.in/public//uploads/media_manager/646.jpg" alt="Card Image"/>
            <h1 class="card-title">HR Excutive</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://techcaddcomputerinstitute.com/best-government-job-courses-in-jalandhar/index.php" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzYMlJxMMzDRq9o5v291PHlR9cvkDdw-QPA&s" alt="Card Image"/>
            <h1 class="card-title">Advanced on Excel</h1>
            </a>
        </div>

    </div>
    </div>
  )
}