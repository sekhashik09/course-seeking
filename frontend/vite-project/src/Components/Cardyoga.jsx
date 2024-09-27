import Header from "./Header"
export default function Cardyoga() {
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
            <a href="https://graduationinoneyear.co.in/yoga-and-naturopathy-course-in-bsc-2022-23-details/" class="card-button">
            <img src="https://graduationinoneyear.co.in/wp-content/uploads/2021/12/Yoga-and-Naturopathy-Course-In-BSc-2022-23-Details.jpg" alt="Card Image"/>
            <h1 class="card-title">BSc Yoga and Naturopathy – Yogic Science Course & Syllabus 2024</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.swastiyogacenter.com/" class="card-button">
            <img src="https://www.swastiyogacenter.com/wp-content/uploads/2023/09/Swasti-Yoga-Center-Yoga-Certification-Board_-Ministry-of-Ayush_-Goverment-in-India-1024x622.webp" alt="Card Image"/>
            <h1 class="card-title">SWASTI YOGA CENTER</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://rishikeshyogtemple.medium.com/affordable-yoga-teacher-training-course-in-rishikesh-29dd76599383" class="card-button">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*qKBem4wtWqsKxyiwJdDo0g.jpeg" alt="Card Image"/>
            <h1 class="card-title">Affordable Yoga Teacher Training Course in Rishikesh</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.shiksha.com/beauty-fitness/yoga/articles/phd-in-yoga-blogId-151665" class="card-button">
            <img src="https://images.shiksha.com/mediadata/images/articles/1705659588phpMGYK0D.jpeg" alt="Card Image"/>
            <h1 class="card-title">PhD in Yoga </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.indiamart.com/proddetail/yoga-teacher-training-course-2853260765330.html?mTd=1" class="card-button">
            <img src="https://5.imimg.com/data5/GLADMIN/Default/2024/3/395916124/ZZ/GL/EH/33291203/yoga-teacher-training-course.jpg" alt="Card Image"/>
            <h1 class="card-title">Yoga Teacher Training Course </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://masteradvice.in/courses/yoga-with-sahithi-online-yoga-april-2023-evening-classes-live" class="card-button">
            <img src="https://masteradvice.in/s/store/courses/63cbd731e4b066526bea552f/cover.jpg?v=4" alt="Card Image"/>
            <h1 class="card-title">YOGA WITH SAHITHI</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.nidrayogfoundation.com/" class="card-button">
            <img src="https://www.nidrayogfoundation.com/images/yoga/4.webp" alt="Card Image"/>
            <h1 class="card-title">Yoga Teacher Training 200 hours </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.shiksha.com/beauty-fitness/yoga/articles/pg-diploma-in-yoga-blogId-156073" class="card-button">
            <img src="https://images.shiksha.com/mediadata/images/articles/1708586290phphSpTaC.jpeg" alt="Card Image"/>
            <h1 class="card-title">PG Diploma in Yoga</h1>
            </a>
        </div>
    </div>
    </div>
  )
}