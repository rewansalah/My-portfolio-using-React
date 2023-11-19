

import { useState } from 'react';
import  './main.css';

const myProjects=[
    {projectTitle: "My-portfolio" , category:"react" , imgPath:"./portfolio.jpg" , link:"https://github.com/rewansalah/My-portfolio-using-React"},
    {projectTitle: "Visualization-using-Tableau " , category:"Analysis" , imgPath:"./tableau-logo.png" , link:"https://github.com/rewansalah/Visualization-using-Tableau"},
    {projectTitle: "Analysis-by-Power_bi" , category:"Analysis" , imgPath:"./power-bi.jpg" , link:"https://github.com/rewansalah/power_bi"},
    {projectTitle: "Airlines_website" , category:"Node" , imgPath:"./airline.jpg" , link:"https://github.com/rewansalah/Airlines_website"},
    {projectTitle: "Quran_App" , category:"mobile-App" , imgPath:"./quran.jpg" , link:"https://github.com/rewansalah/Quran_App"},
    {projectTitle: "Sentiment-And-Emotion-Analysis " , category:"Analysis" , imgPath:"./sentiment-analysis.jpg" , link:"https://github.com/rewansalah/Sentiment-And-Emotion-Analysis"},
    {projectTitle: "DeepFake-Detection" , category:"Dl" , imgPath:"./deepfake.jpg" , link:"https://github.com/rewansalah/DeepFake-Detection"}

];




const Main =()=>{

    const[currentActive , setcurrentActive]=useState("all");
    const[arr , setArr]=useState(myProjects);
    

    return (
        <main className='flex'>

              {/* Left Section //buttons  */}

            <section className='flex left-section '>
            
                <button onClick={() =>{
                    setcurrentActive("all");
                    setArr(myProjects);
                    
                }} className={currentActive==="all"? "active":null}>
                    All projects
                    </button>



                <button onClick={() =>{
                    setcurrentActive("react");

                    const newArr= myProjects.filter((item) => {
                        return item.category=== "react"

                    })

                    setArr(newArr);

                }} className={currentActive=== "react"? "active":null}>
                    React
                    </button>


                    
                   
                    <button onClick={() =>{
                    setcurrentActive("Node & Express");
                    const node= myProjects.filter((item) => {
                        return item.category=== "Node" 

                    })

                    setArr(node); 

                }} className={currentActive=== "Node & Express"? "active":null}>
                    Node & Express
                    </button>


                <button onClick={() =>{
                    setcurrentActive("Data Analysis");

                    const Analysis= myProjects.filter((item) => {
                        return item.category=== "Analysis" 

                    })

                    setArr(Analysis); 


                }} className={currentActive=== "Data Analysis"? "active":null}>
                   Data Analysis
                    </button>


                    <button onClick={() =>{
                    setcurrentActive("Deep Learning");

                    const dl= myProjects.filter((item) => {
                        return item.category=== "Dl"

                    })

                    setArr(dl);

                }} className={currentActive=== "Deep Learning"? "active":null}>
                   Deep Learning
                    </button>


                    <button onClick={() =>{
                    setcurrentActive("Mobile App");

                    const app= myProjects.filter((item) => {
                        return item.category=== "mobile-App"

                    })

                    setArr(app);           

                }} className={currentActive=== "Mobile App"? "active":null}>
                   Mobile App
                    </button>
                
                

            </section>


           {/* Right Section */}

            <section className=' flex right-section'>

 {arr.map((item) =>{
    return(
        <article key={item.imgPath}  className='card'>
                    <img width={250} src={item.imgPath} alt="" />

                    <div style={{width:"250px"}} className=' box'>
                        <h1 className='title'>{item.projectTitle}</h1>
                        <p className='subtitle'> My portfolio website using React</p>

                        <div className='flex icons'>

                            <a href={item.link}>
                            <div className="icon-github"></div>
                            </a>
                           
                            
                            <a className="link flex " href={item.link}>
                                more
                                <span style={{alignSelf:"end"}} className='icon-arrow_forward'></span>
                            </a>


                        </div>
                        

                    </div>
                </article>
    )

 })}           

            </section>
        </main>
    );

}

export default Main;