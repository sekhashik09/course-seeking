import Header from "./Header"
export default function Cardstiching() {
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
            <a href="https://ritacharitabletrust.org/free-tailoring-course-diploma/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg-YzE16WYSHB_41emoKqz6AmPQhgPouk7A&s" alt="Card Image"/>
            <h1 class="card-title">FREE TAILORING COURSES BY GOVT.OF INDIA</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.savisfashionstudio.com/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LUYslfhHcPtJ0nMB_opheVgEa6r9Os2tuw&s" alt="Card Image"/>
            <h1 class="card-title">LEARN PATTERN MAKING AND SEWING IN THE COMFORT OF YOUR HOME</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="art.com/proddetail/certificate-pattern-making-and-stitching-course-20921705197.html?mTd=1" class="card-button">
            <img src="https://5.imimg.com/data5/ZT/EW/NG/SELLER-9558502/certificate-pattern-making-and-stitching-course-500x500.jpg" alt="Card Image"/>
            <h1 class="card-title">Certificate Pattern Making And Stitching Course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://almunawwarah.ac.ke/tailoring-course/" class="card-button">
            <img src="https://i1.wp.com/almunawwarah.ac.ke/wp-content/uploads/2023/06/Tailoring-Course-2.png?resize=300%2C300" alt="Card Image"/>
            <h1 class="card-title">Tailoring Course</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.wadafi.in/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F_B0rUrX_bmHh-pZ02RgQmM2keBVHomsVA&s" alt="Card Image"/>
            <h1 class="card-title">WOMEN ART DESIGN AND FASHION INSTITUTE</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.facebook.com/tiassewingclass/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdypfdKODdLgmIFOYLZioCUeSLCbeqlMUcGg&s" alt="Card Image"/>
            <h1 class="card-title">Tia's Sewing Class </h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.instagram.com/simrans_coaching/p/Czpqq0SvToE/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKCAtMewnVsH9GowxZpxfMvJ4KpbSa1exdQ&s" alt="Card Image"/>
            <h1 class="card-title">simrans_coaching and simraninstitute</h1>
            </a>
        </div>
        <div class="card" style={Style}>
            <a href="https://www.facebook.com/thestitchfashion/posts/the-stitch-fashion-academy-will-provide-the-stitching-classes-with-affordable-pr/469751061839107/" class="card-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7WsfypPAuXyyhK_wsYUhSkxoJQ2j8uV6mQ&s" alt="Card Image"/>
            <h1 class="card-title">The Stitch Fashion Academy</h1>
            </a>
        </div>
        </div>

    </div>
  )
}