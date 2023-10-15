import './style.css';
function F1(){
    return(
        <div></div>
    )
}
export function Home()
{
return <div class="vas"><p>Akash Mannava, I am an enthusiastic and dedicated individual committed to continuous personal and professional growth. With a passion for Developer, I strive to create meaningful and impactful work. My self-portfolio is a reflection of my journey, showcasing my skills, experiences, and creative endeavors.</p></div>
}


export function About()
{
return <div class="vas"><p>Akash Mannava, currently pursuing a Bachelor of Technology (B.Tech) at VIT-AP University, is a diligent scholar on a path of continuous learning and growth. His academic journey has been marked by excellence, having completed his intermediate education at Narayana Junior College, Guntur, and earlier, his secondary education at Sri Sai Santosh High School. In these endeavors, Akash consistently demonstrated his commitment to academic achievement, securing impressive percentages that reflect his dedication and commitment to his education.</p><table><tr><th>Studying</th><th>College Name</th><th>Percenatge or Grade</th></tr><tr><td>Schooling</td><td>Sri Sai Santosh High School</td><td>10 Cgpa</td></tr><tr><td>Intermediate</td><td>Narayana Junior College</td><td>94.1%</td></tr><tr><td>B-tech</td><td>VIT-AP University</td><td>7.86 Cgpa *</td></tr></table></div>
}
export function Blog()
{
    return <div class="vas">
            <h2>Skills</h2>
            <div className="skill-box">
            <div class="d-flex flex-row justify-content-center">
            <div className="language-box">
                <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem-500x313.jpg" alt=""></img>
                <h5>Java</h5>
            </div>
            <div className="language-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEi3e9uxLFd82tVMh-a66x1rmQb48sr2plNPtkO2mOTYyGvR9uZ9zuAQs08SQqfFpHc_o&usqp=CAU"  alt=""></img>
                <h5>Python</h5>
            </div>
            <div className="language-box">
                <img src="data:image/png;base64,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"  alt=""></img>
                <h5>HTML</h5>
            </div>
            </div><br/>
            <div class="d-flex flex-row justify-content-center">
            <div className="language-box">
                <img src="data:image/png;base64,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"  alt=""></img>
                <h5>CSS</h5>
            </div>
            <div className="language-box">
                <img src="data:image/png;base64,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"  alt=""></img>
                <h5>JavaScript</h5>
            </div>
            <div className="language-box">
                <img src = "data:image/png;base64,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" alt=""></img>
                <h5>React.js</h5>
            </div>
            </div><br/>
            </div>
        </div>
}
export function Contact()
{
return <div class='vas'>
<div class="pran">
    <img src="https://www.pngitem.com/pimgs/m/81-815706_purple-music-note-icon-purple-music-notes-logo.png" alt=""></img><br/><br/>
    title="Music Listener"<br/>
    des=" It is a website which is load all songs in you phone <br/> built using HTML,CSS and Javascript"
</div>
<div class="pran">
    <img src="https://m.media-amazon.com/images/I/611tMd0jamL.png" alt=""></img><br/><br/>
    title="HandCricket GAME"<br/>
    des="It is a Hand Cricket Game Applkication <br/> built in Android Studio using Java"
</div>
</div>
}

export default F1;