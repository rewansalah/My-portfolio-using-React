
import  './hero.css';
import Lottie from 'lottie-react';
import Animation from "../../../src/Animations/Animation.json"

const Hero =()=>{
    return (
        <section className='hero flex'> 
        <div className='left-section  '>

            <div className='parent-avatar flex'>
                <img src="./me.jpg" className='avatar' alt=""/>
                <div className='icon-verified'></div>

            </div>

            <h1 className='title'> Data Analyst | Web developer</h1>
            <p className='subtitle'>I’m Rewan Salah i’ve a bachelor degree in computer and data science, alexandria university. 
I’m currently seeking an entry-level position in web development / data analysis that allows me to expand my skills.<br/>
Key skills : web applications using : HTML, CSS, JavaScript , TypeScript, React.js , SQL ,Git. Data visualization , Data Analysis ,power bi ,Tableau , Excel/Spreadsheet , Pandas ,NumPy ,scikit learn ,Python , java , R , problem solving 
            </p>
            <div className='all-icons flex'>
                <a href='https://x.com/rewannsalllah/'><div className="icon icon-twitter"></div></a>
                <a href='https://instagram.com/itsrewansalah?igshid=OGQ5ZDc2ODk2ZA=='><div className="icon icon-instagram"></div></a>
               <a  href='https://github.com/rewansalah'> <div className="icon icon-github"></div> </a>
                <a  href='https://www.linkedin.com/in/rewan-salah-3660871b3'><div className="icon icon-linkedin2"></div> </a>

            </div>


        </div>

        <div className='right-section  animation '>

        <Lottie 
                    className=''
                  
                    style={{height:400}}
                    animationData = {Animation}
                    />

        </div>

        </section>
    );

}

export default Hero;