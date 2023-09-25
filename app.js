import React from "react";
import ReactDOM from "react-dom/client";
import ReactPlayer from 'react-player'


const heading1 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h1",
    {
        id:"title",
        key:"h1",
    },
    "Header"
);

const container = React.createElement(
    "h2",
    {
        id:"container",
    },
    [
        React.createElement(
            "h1",
            {
                id: "title"
            },
            "FOOD"
        ),
        React.createElement("ul",{},[
            React.createElement("li",{},"Home"),
            React.createElement("li",{},"About us"),
            React.createElement("li",{},"Contact"),
        ]),
    ]
);


// JSX

const header = (
    <h1 id="title" key="h1">
        NAMASTE REACT
    </h1>
);

// Component

const Header1 = ()=>(
    <h1 id="title" key="h3">
        Food REACT  Website        
    </h1>
);

// REACT COMPONENT / Functinal Component

const Header2 = ()=>{
    return (
        <div>
            {header}
            <Header1 />
            <h1>Food</h1>
            <h2>Website</h2>
        </div>
    );
};



//----------FOOD WEBSITE---------- //
// const Title = ()=>(
//     <a href="/">
//         <img className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="logo"/> 
//     </a>
// );

const Header = ()=>{
    return (
        <div className="header">
            {/* <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div> */}
            <h1>Forbes</h1>
        </div>
    )
}


const Body = ()=>(
    <main>
        <div class="title">
        <video class="title__video" autoplay="" loop preload="auto" playsinline="" muted poster="https://thumbor.forbes.com/thumbor/225x0/smart/filters:format(jpeg):background_color(auto)/https%3A%2F%2Fimages.forbes.com%2FU30Nominations-2021-v1%2FHeaderStatic-Desktop1s.png">
            <source src="https://atlasuniversity.edu.in/wp-content/uploads/2023/09/video.mp4" type="video/mp4"/>
            <source src="https://atlasuniversity.edu.in/wp-content/uploads/2023/09/video.webm" type="video/webm"/>
            <source src="https://atlasuniversity.edu.in/wp-content/uploads/2023/09/video.ogv" type="video/ogg"/>
            </video>
       


            <div class="hero-overlay">
                <img class="logo__under30" src="https://i0.wp.com/atlasuniversity.edu.in/wp-content/uploads/2023/09/Asset-4.png?fit=268%2C268&amp;ssl=1" alt="Decade of Under 30" width="100px"/>
                <div>A global community of bold, innovative young leaders who are changing the 
                course and face of business and society
                </div>
            </div>
        </div>

        {/* /// Section /// */}

      
    </main>
);  


const Section = ()=>(
   <div className="container-fluid">
    <div className="row">
        <div className="col">
    
            <div className="container text-center">
                <div className="row noMiniRow">
                    <div className="col fs-3  noMini">
                        2024 NOMINATION
                    </div>
                </div>


                <div className="row">
                    <div class="col headerMain">
                        ARE YOU THE ONE?
                    </div>
                </div>

                <div className="row">
                    <div class="col nomiPara">
                        <p>ATLAS SkillTech University is proud to introduce the inaugural 20 under 20 list . It is now time for the definitive list of young people who are changing the world. Do you know someone creating the next Instagram, iphone or Spotify ? Nominate them (or yourself) today!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col timeLine">
                        TIMELINE
                    </div>
                </div>

                <div className="row infoRow">
                    <div className="col info1">
                        <div>Applications open</div>
                        <p>20 th September 2023</p>
                    </div>
                    <div className="col info1">
                        <div>Applications close</div>
                        <p>20 th October 2023</p>
                    </div>
                    <div className="col info1">
                        <div>FINAL Date</div>
                        <p>27 th October ATLAS Campus</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col arrowCol">
                    <img decoding="async" width="417" height="417" src="https://i0.wp.com/atlasuniversity.edu.in/wp-content/uploads/2023/09/Group-1-25.png?fit=417%2C417&amp;ssl=1" class="attachment-large size-large wp-image-27987" alt="" />
                    </div>
                </div>

                <div className="row ">
                    <div className="col btnCol">
                    <button type="button" class="btn btn-light">Submit Nomination</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col timeLine">
                        Categories
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-6">
                                    <div class="contRight">
                                        <h1>ENTREPRENUERSHIP</h1>
                                       <p>
                                            The "Entrepreneurship" category of the 20 Under 20 award recognizes young individuals who have demonstrated exceptional entrepreneurial skills and accomplishments before the age of 20. This category celebrates young, innovative minds who have shown creativity, problem-solving abilities, leadership, and business acumen in starting and successfully running their own ventures.
                                        </p>
                                        <p>
                                            The award acknowledges young entrepreneurs who have displayed a strong vision, drive, and determination to bring their ideas to life and make a significant impact in their respective industries. These individuals have shown the ability to identify opportunities, create innovative solutions, and effectively execute their business plans at a young age.
                                        </p>
                                        <button type="button" class=" button1">Submit Nomination</button>
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="contRight">
                                        <h1>LEADERSHIP</h1>
                                       <p>
                                       The "Leadership" category of the "20 Under 20" award recognizes young individuals who have demonstrated exceptional leadership skills and qualities at a young age. This award celebrates young leaders who have made a significant impact in their communities, organizations, or fields of interest.
                                        </p>
                                      <ul>
                                        <li>Recognizing individuals who have demonstrated a clear vision and the ability to inspire and motivate others towards a common goal.</li>
                                        <li>Acknowledging young leaders who have taken initiative in addressing challenges or creating new opportunities through innovative thinking and problem-solving.</li>
                                      </ul>
                                        <button type="button" class=" button1">Submit Nomination</button>
                                    </div>
                                </div>
                            </div>



                            <div className="row mt-5">
                                <div className="col-6">
                                    <div class="contRight">
                                        <h1>SPORTS</h1>
                                       <p>
                                       The sports category of the "20 under 20" award recognizes and celebrates young individuals who have excelled in the field of sports before the age of 20. This award acknowledges their exceptional talent, dedication, and achievements in their respective sports disciplines.
                                        </p>
                                        <p>
                                        The award focuses on recognizing young athletes who have demonstrated outstanding skills, sportsmanship, and potential for future success. Whether it is in traditional sports such as football, basketball, tennis, or in niche sports like surfing, skateboarding, or gymnastics, the sports category of the "20 under 20" award aims to highlight young athletes who have made a significant impact in their chosen sport.
                                        </p>
                                        <p>
                                        Nominees in the sports category are evaluated based on their performance and achievements at the junior level, which may include winning national or international championships, breaking records, receiving accolades, or showcasing exceptional skills and potential. Additionally, their dedication to training, perseverance, leadership qualities, and positive influence on their teammates and the sports community are also taken into consideration.
                                        </p>
                                        <button type="button" class=" button1">Submit Nomination</button>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="contRight">
                                        <h1>Community Service</h1>
                                       <p>
                                       The community service category of the "20 Under 20" award recognizes individuals under the age of 20 who have made significant contributions to their communities through acts of service and volunteerism. This award acknowledges young people who have selflessly dedicated their time and energy to improving the lives of others and making a positive impact.s
                                        </p>
                                        <p>
                                        Nominees in this category may have initiated or actively participated in community service projects such as volunteering at local nonprofits, organizing fundraisers for charitable causes, starting community-based initiatives, or providing support to marginalized or underserved populations. Their efforts may have focused on education, healthcare, environmental sustainability, poverty alleviation, or any other area where they have made a difference.     
                                        </p>
                                        <p>
                                        The community service category of the "20 Under 20" award aims to honor young individuals who have demonstrated a commitment to social responsibility, empathy, and compassion. These young changemakers serve as inspiration for others and showcase the power of youth-led initiatives in creating meaningful change in their communities.
                                        </p>
                                        <button type="button" class=" button1">Submit Nomination</button>
                                    </div>
                                </div>
                            </div>


                            <div className="row text-start mt-5">
                                <div className="col">
                                    <h1>CULTURAL</h1>
                                    <ol>
                                        <li>Performing Arts-This category recognizes young performers in areas such as music, dance, theater, and spoken word. Whether they are instrumentalists, vocalists, dancers, actors, or poets, these individuals have shown exceptional skill and dedication to their craft.</li>
                                        <li>Visual Arts: This category acknowledges young artists who excel in traditional and contemporary visual arts mediums, such as painting, sculpture, drawing, photography, and digital art. Their artistic expressions and ability to convey meaning through their artwork make them stand out.</li>
                                        <li>Literary Arts: This category highlights young writers, poets, and authors who have demonstrated exceptional storytelling, creativity, and literary prowess. Their works, whether in the form of novels, poetry collections, or short stories, have captivated audiences and showcased their talent for words.</li>
                                        <li>Film and Media Arts: This category recognizes young filmmakers, directors, producers, and media artists who have produced outstanding films, documentaries, animations, or digital media projects. Their storytelling abilities, technical skills, and unique perspectives have made a significant impact in the world of cinema and media.</li>
                                    </ol>
                                    <button type="button" class=" button1">Submit Nomination</button>
                                </div>
                            </div>


                            
                <div className="row pb-5">
                    <div className="col arrowCol">
                    <img decoding="async" width="517" height="417" src="https://i0.wp.com/atlasuniversity.edu.in/wp-content/uploads/2023/09/Asset-3.png?fit=268%2C268&amp;ssl=1" class="attachment-large1 size-large wp-image-27987" alt="" />
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
   </div>
)

const Footer = ()=>(
    <div className="container-fluid bg-body-secondary text-center">
        <h1><i>Forbes</i></h1>
        <div>© 2023 Forbes Media LLC. All Rights Reserved.</div>
    </div>
)


const AppLayout = ()=>{
    return (
        <React.Fragment>         
            <Header />
            <Body />
            <Section />
            {/* <Body1 /> */}
            <Footer />
        </React.Fragment>
    )
}

    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); 
