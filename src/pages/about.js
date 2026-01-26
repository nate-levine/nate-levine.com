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
                            <h1 className="text-left text-6xl font-serif font-bold text-black">Nate Levine</h1>
                            <br />
                            <p>
                            I'm working as a Product Engineer on the Research and Development team at Diamond Diagnostics. I graduated from Worcester Polytechnic Institute (WPI) in 2025 with a Bachelor in mechanical engineering and a minor in computer science.
                            </p>
                            <br />
                            <p>
                                I'd recommend you get started by reading one of the featured projects on this page. If
                                you don't have time right now, I'd suggest signing up for my newsletter (coming soon), where I send
                                out a monthly article about something interesting.
                            </p>
                        </div>
                        {/* Newsletter Signup */}
                        { <div className="py-20 border-dotted border-b-[1px] lg:border-b-0 lg:border-b-[1px] border-black text-2xl bg-black text-primary">
                            <div className="mx-20 mx-auto leading-relaxed flex flex-col lg:flex-row">
                            <div className="basis-1/2 px-20">
                                <h1 className="text-left text-6xl font-serif font-bold text-primary">Newsletter</h1>
                                <h3 className="text-left text-2xl font-serif font-bold text-yellow">(coming soon, this doesn't do anything yet)</h3>
                                <br />
                                <p>
                                This is my newsletter, where I share my ideas, interests, and thoughts relating to anything and everything.
                                </p>
                                <br />  
                                <p>
                                Sign up to recieve my free newsletter by entering your email.
                                </p>
                                <br />  
                            </div>
                            <div className="basis-1/2 px-20 flex items-center">
                                <div className="font-serif text-2xl m-auto text-center h-[40vh] p-3 pt-8 shadow-[8px_8px_0_#ffeacf] border-solid border-[1px] border-primary rounded-md bg-black my-auto py-auto">
                                Get my newsletter in your inbox
                                <input type="email" placeholder="enter your email address" className="placeholder:text-primary placeholder:opacity-[50%] w-[80%] mt-8 p-3 shadow-[8px_8px_0_#ffeacf] border-solid border-[1px] border-primary rounded-sm bg-black outline-none outline-offset-0 border-solid" />
                                <button className="font-serif text-xl font-bold m-auto text-center w-[240px] mt-10 p-3 shadow-[8px_8px_0_#ffeacf] hover:shadow-[8px_8px_0_-1px_#fabd2f,8px_8px_0_#22190e] border-solid border-[1px] border-primary rounded-md bg-black hover:text-yellow duration-0">
                                    Subscribe
                                </button>
                                </div>
                            </div>
                            </div>
                        </div> }
                        <div className="font-serif flex flex-col lg:flex-row border-solid border-t-[1px] border-b-[1px] border-black">
                            <div className="py-20 flex-1 border-dotted border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-black text-2xl">
                                <div className="w-[80%] mx-auto leading-relaxed">
                                    <h1 className="font-serif font-bold text-4xl">Projects</h1>
                                    <br />
                                    <p>
                                        I enjoy making things. If I didn't I wouldn't be working as an engineer.
                                    </p>
                                    <br />
                                    <p>
                                        The purpose of this site is:
                                    </p>
                                    <ul className="py-3 list-disc list-outside ms-8 text-left">
                                        <li>
                                            to document projects I'm working on.
                                        </li>
                                        <li>
                                            to act as a portfolio for projects I've finished or have set aside.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-20 flex-1">
                                <div className="w-[80%] mx-auto ">
                                    <ArticleView grid_config={"md:columns-1 lg:columns-1 gap-6"} filterFunc={filterProjects} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 text-2xl text-primary bg-black border-b-[1px] border-dotted border-primary">
                            <div className="py-20 w-[85%] sm:w-[640px] mx-auto leading-relaxed">
                                <h1 className="font-serif font-bold text-4xl pb-10">Contact Me</h1>
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
  title={"About"}
  description={"About"}
  article={false}
/>

export default AboutPage