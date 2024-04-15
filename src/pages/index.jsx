import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 class="h-[100vh] text-black text-6xl font-geist font-bold text-[25vw] leading-[19vw] text-right py-20">Nate Levine</h1>
      </div>
    </Layout>
  ) 
}


export default IndexPage

export const Head = () => <title>Home Page</title>