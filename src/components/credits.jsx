import * as React from 'react'

const Credits = () => {

    // Get current year
    const date = new Date();

    return (
        <div class="bg-black text-[#fbf1c7] py-5 font-regular text-center text-md">
            <p>© {date.getFullYear()} Nate Levine</p>
        </div>
    )
}

export default Credits