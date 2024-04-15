import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div class="h-[100vh]">
        <h1 class="text-black text-6xl font-geist font-bold text-[25vw] leading-[19vw] text-right py-20">Nate Levine</h1>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage