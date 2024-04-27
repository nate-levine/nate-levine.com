import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {


  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <h1 class="text-right text-black text-6xl font-geist font-bold text-[25vw] leading-[19vw] pt-20">Nate Levine</h1>
        <div class="flex flex-row pb-20">
          <div class="duration-1000 w-[20%] h-[100px] bg-[#fb4934]"></div>
          <div class="duration-1000 w-[20%] h-[100px] bg-[#b8bb26]"></div>
          <div class="duration-1000 w-[20%] h-[100px] bg-[#fabd2f]"></div>
          <div class="duration-1000 w-[20%] h-[100px] bg-[#83a598]"></div>
          <div class="duration-1000 w-[20%] h-[100px] bg-[#d3869b]"></div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage