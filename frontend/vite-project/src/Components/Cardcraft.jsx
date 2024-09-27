import Header from "./Header"
export default function Cardcraft() {
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
            <a href="https://www.himanshuartinstitute.co.in/courses/online-art-courses/index.html" class="card-button">
            <img src="https://www.himanshuartinstitute.co.in/courses/painting-drawing-art-and-craft-courses/advanced-diploma-course-in-art-and-crafts-in-delhi-gurugram-vaishali-india.jpg" alt="Card Image"/>
            <h1 class="card-title">Online Fine Art Course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.newimagecollege.com/teaching-craft-for-kids-online-diploma-program/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgm5N2L2MVfEy37BymtcBQ-3oJEA0qE_exYg&s" alt="Card Image"/>
            <h1 class="card-title">TEACHING CRAFT FOR KIDS. ONLINE DIPLOMA PROGRAM</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.indiamart.com/proddetail/art-and-craft-courses-6934231248.html" class="card-button">
            <img src="https://5.imimg.com/data5/GLADMIN/Default/2023/1/NC/QX/AN/9665764/art-and-craft-courses.jpg" alt="Card Image"/>
            <h1 class="card-title">Art and Craft Courses</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.justdial.com/Delhi/Art-And-Craft-Classes/011PXX11-XX11-180413150007-J9B1_BZDET" class="card-button">
            <img src="https://content.jdmagicbox.com/comp/def_content/arts-and-crafts-classes/1-arts-and-crafts-classes-1-012bg.jpg" alt="Card Image"/>
            <h1 class="card-title">Art And Craft Classes</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.tinyprintsart.com/courses/FREE-Art-And-Craft-Class-6412bcc4e4b0ae819a5154a2" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm55R_xC-gzJ_sELgji9lzBwr2GJoP0R0PQw&s" alt="Card Image"/>
            <h1 class="card-title">FREE Art And Craft Class</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.himanshuartinstitute.co.in/courses/online-art-courses/index.html" class="card-button">
            <img src="https://www.himanshuartinstitute.co.in/courses/painting-drawing-art-and-craft-courses/diploma-in-fine-arts-in-delhi-gurugram-vaishali-india.jpg" alt="Card Image"/>
            <h1 class="card-title">DIPLOMA COURSES</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://tickikids.com/ae-az/art-beat-uae/fine-arts-and-craft-courses-for-kids-and-adults-online/" class="card-button">
            <img src="https://tickikids.ams3.cdn.digitaloceanspaces.com/z4.cache/gallery/activities/13492/image_5ee082c4157e84.72240450.jpg" alt="Card Image"/>
            <h1 class="card-title">Fine Arts and Craft Courses for Kids and Adults Online</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.youtube.com/watch?v=PNah_pN8Bp8" class="card-button">
            <img src="https://i.ytimg.com/vi/PNah_pN8Bp8/maxresdefault.jpg" alt="Card Image"/>
            <h1 class="card-title">FREE CRAFT CLASSES ONLINE</h1>
            </a>
        </div>
    </div>
    </div>
  )
}