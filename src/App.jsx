import React, { useState } from "react";

function App() {

const quotes = [
"Empowered women empower women.",
"She believed she could, so she did.",
"The future is female.",
"A strong woman stands up for herself."
];

const women = [
{
name:"Kalpana Chawla",
desc:"First Indian woman in space",
img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kalpana_Chawla%2C_official_portrait.jpg/960px-Kalpana_Chawla%2C_official_portrait.jpg?_=20141019104409"
},
{
name:"Marie Curie",
desc:"First woman Nobel Prize winner",
img:"https://www.sapaviva.com/wp-content/uploads/2017/06/9S.-Marie-Curie-1867-1934-1-1918x1918.jpg"
},
{
name:"Indra Nooyi",
desc:"Former CEO of PepsiCo",
img:"https://imageio.forbes.com/specials-images/imageserve/60f714955c5301b91863132f/0x0.jpg?format=jpg&crop=1113,1112,x1602,y788,safe&height=416&width=416&fit=bounds"
}
];

const [quote,setQuote] = useState("");
const [name,setName] = useState("");
const [message,setMessage] = useState("");
const [messages,setMessages] = useState([]);

function generateQuote(){
const random = Math.floor(Math.random()*quotes.length);
setQuote(quotes[random]);
}

function postMessage(){
if(name && message){
setMessages([...messages,{name,message}]);
setName("");
setMessage("");
}
}

return(

<div style={{fontFamily:"Poppins",background:"#faf6ff"}}>

{/* HERO */}

<div style={{
background:"linear-gradient(135deg,#ffe5d9,#fe935d)",
color:"white",
padding:"80px",
textAlign:"center"
}}>

<h1 style={{fontSize:"48px", fontFamily:"Lora"}}>🌸 HerStory</h1>
<p style={{fontSize:"18px"}}>Celebrating Women Who Inspire the World</p>

</div>


{/* INSPIRATIONAL WOMEN */}

<div style={{padding:"50px",textAlign:"center",background:"#CBBFE0",fontFamily:"Chonburi"}}>

<h2>Inspirational Women</h2>

<div style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap",
marginTop:"30px"
}}>

{women.map((w,index)=>(
<div key={index} style={{perspective:"1000px"}}>

<div
style={{
width:"220px",
height:"260px",
position:"relative",
transformStyle:"preserve-3d",
transition:"transform 0.6s",
cursor:"pointer"
}}

onMouseEnter={(e)=>e.currentTarget.style.transform="rotateY(180deg)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="rotateY(0deg)"}
>

{/* FRONT */}

<div style={{
position:"absolute",
width:"100%",
height:"100%",
backfaceVisibility:"hidden",
background:"white",
borderRadius:"12px",
boxShadow:"0 10px 20px rgba(0,0,0,0.2)",
overflow:"hidden"
}}>

<img src={w.img} style={{width:"100%",height:"180px",objectFit:"cover"}}/>

<div style={{padding:"10px"}}>
<h3>{w.name}</h3>
</div>

</div>

{/* BACK */}

<div style={{
position:"absolute",
width:"100%",
height:"100%",
backfaceVisibility:"hidden",
background:"#ffffff",
borderRadius:"12px",
transform:"rotateY(180deg)",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"15px",
textAlign:"center",
boxShadow:"0 10px 20px rgba(0,0,0,0.2)"
}}>

<p>{w.desc}</p>

</div>

</div>

</div>
))}

</div>

</div>


{/* DAILY INSPIRATION */}

<div style={{
padding:"50px",
textAlign:"center",
background:"#FF9999",
borderRadius:"20px",
fontFamily:"Playfair display"
}}>

<h2>Daily Inspiration</h2>

<p style={{fontSize:"18px",margin:"15px"}}>{quote}</p>

<button
onClick={generateQuote}
style={{
background:"#6a11cb",
color:"white",
border:"none",
padding:"12px 24px",
borderRadius:"25px",
cursor:"pointer",
fontSize:"16px"
}}
>
Generate Quote
</button>

</div>


{/* APPRECIATION WALL */}

<div style={{
padding:"50px",
textAlign:"center",
background:"#8EE2BF",
borderRadius:"20px",
fontFamily:"playfair display"
}}>

<h2>Appreciation Wall</h2>

<input
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{
padding:"10px",
margin:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<br/>

<textarea
placeholder="Write appreciation message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
style={{
padding:"10px",
margin:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<br/>

<button
onClick={postMessage}
style={{
background:"#ff4da6",
color:"white",
border:"none",
padding:"10px 22px",
borderRadius:"20px",
cursor:"pointer",
fontSize:"15px"
}}
>
Post Message
</button>


{messages.map((msg,index)=>(
<div key={index}
style={{
background:"white",
margin:"15px auto",
padding:"12px",
width:"250px",
borderRadius:"10px",
boxShadow:"0 6px 15px rgba(0,0,0,0.15)"
}}
>

<strong>{msg.name}</strong>
<p>{msg.message}</p>

</div>
))}

</div>


{/* FOOTER */}

<div style={{
background:"linear-gradient(135deg,#ffe5d9,#fe935d)",
color:"#D60A51",
textAlign:"center",
padding:"20px",
fontFamily:"Arvo",
marginTop:"30px"
}}>
Happy Women's Day 💜
</div>

</div>

)

}

export default App;