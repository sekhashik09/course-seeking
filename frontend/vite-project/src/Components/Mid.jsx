import { TypeAnimation } from 'react-type-animation';
export default function Mid() {
    const boy={
        height:"500px",
        width:"500px",
        marginRight:"100px"
        
      }
  return (
    <div className="justify-between" style={{display:'flex',marginLeft:"20%",marginTop:"60px",height:"600px"}}>
          <div className="left" style={{fontSize: "15px",marginTop:"130px",fontFamily:'Sans-serif'}} >
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Find Best Courses On Core Development',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Find Best Courses On Govt Job',
        1000,
        'Find Best Courses On Web Development',
        1000,
        'Find Best Courses On Art and Craft',
        1000,
        'Find Best Courses On Yoga',
        1000,
        'Find Best Courses On Steaching',
        1000,
        'Find Best Courses On Beautician',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block',color:'red' }}
      repeat={Infinity}
    />
          </div>
          <div className="right" style={boy}>
              <img src="https://r2.erweima.ai/imgcompressed/compressed_9992d55d346f3242137b9f6de835846e.webp" alt="" />
          </div>
        </div>
  )
}