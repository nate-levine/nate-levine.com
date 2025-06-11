import * as React from 'react'
import Layout from '../components/layout'
import ArticleView from '../components/articleView'
import SEO from '../components/seo'

const AboutPage = () => {

    // Filter all articles except those with the project tag
    const filterProjects = (nodes) => {
        return nodes.filter(node => node.frontmatter.tags.includes("Project"))
    }

    return (
        <Layout>
            <div className="h-auto min-h-[100vh] text-black">
                <div className="font-serif font-regular flex flex-col lg:flex-row">
                    <div className="flex-1 text-2xl">
                        <div className="py-20 w-[85%] md:w-[650px] mx-auto leading-relaxed">
                            <h1 className="text-left text-6xl font-serif font-bold text-black">What's up?</h1>
                            <br />
                            <p>
                            I'm Nate, a graduate of the Worcester Polytechnic Institute (WPI) class of 2025 with a Bachelor in mechanical engineering and a minor in computer science.
                            </p>
                            <br />
                            <p>
                                This site is where I share my ideas, interests, and thoughts relating to topics ranging from
                                engineering, to software, to marketing.
                            </p>
                        </div>
                        <div className="font-serif flex flex-col lg:flex-row border-solid border-t-[1px] border-b-[1px] border-black">
                            <div className="py-20 flex-1 border-dotted border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-black text-2xl">
                                <div className="w-[80%] mx-auto leading-relaxed">
                                    <h1 className="font-sans font-bold text-4xl">Projects</h1>
                                    <br />
                                    <p>
                                        I enjoy making things. If I didn't I wouldn't be studying engineering.
                                    </p>
                                    <br />
                                    <p>
                                        One purpose of this site is to serve as:
                                    </p>
                                    <ul className="py-3 list-disc list-outside ms-8 text-left">
                                        <li>
                                            a hub for projects I'm working on.
                                        </li>
                                        <li>
                                            an archive for projects I've finished or have set aside.
                                        </li>
                                        <li>
                                            a place to reflect on projects I've finished.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-20 flex-1">
                                <div className="w-[80%] mx-auto ">
                                    <ArticleView grid_config={"md:columns-2 lg:columns-2 gap-6"} filterFunc={filterProjects} />
                                </div>
                            </div>
                        </div>
                        <div className="font-serif flex flex-col lg:flex-row border-solid border-b-[1px] border-black">
                            <div className="py-20 w-[85%] sm:w-[640px] mx-auto leading-relaxed">
                                <h1 className="font-sans font-bold text-4xl">Interests</h1>
                                <br />
                                <h2 className="font-sans font-bold text-2xl">Gym</h2>
                                <br />
                                <p>
                                    My current weekly sets are:
                                </p>
                                <ul className="py-3 list-disc list-outside ms-8 text-left">
                                    <li>
                                        Squat - 225 lbs
                                    </li>
                                    <li>
                                        Bench Press - 195 lbs
                                    </li>
                                    <li>
                                        Deadlift - 215 lbs
                                    </li>
                                </ul>
                                <br />
                                <h2 className="font-sans font-bold text-2xl">Food Science</h2>
                                <br />
                                <p>
                                    I've always had an affinity for food, and not just because it tastes good. For as long as I can remember, I've been interested in the
                                    physical, chemical, and biological processes that transform food.
                                </p>
                                <br />
                                <h2 className="font-sans font-bold text-2xl">Programming</h2>
                                <br />
                                <p>
                                    Software is amazing. Software runs the world. In fact, software is how I built this website.
                                </p>
                                <br />
                                <p>
                                    Computer science is one of the only disciplines that is widely accesible, applicable to almost everything, and is free in most regards.
                                    The multitude of available online resources for computer science makes learning it easy and satisfying.
                                </p>
                                <br />
                            </div>
                        </div>
                        <div className="flex-1 text-2xl">
                            <div className="py-20 w-[85%] sm:w-[640px] mx-auto leading-relaxed">
                                <h1 className="font-sans font-bold text-4xl pb-10">Contact Me</h1>
                                <p>
                                    For any inquiries please email me at <a href="mailto:n8levine11@gmail.com" className="underline">n8levine11@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <SEO
  title={"About Nate Levine"}
  description={"A place to share my ideas, interests, and thoughts on topics ranging from engineering, to software development, to food science."}
  article={false}
/>

export default AboutPage