import * as React from 'react'

const Credits = () => {

    // Get current year
    const date = new Date();

    return (
        <div className="bg-black text-primary py-5 font-regular text-center text-md">
            {/* Render current year dynamically */}
            <p>© {date.getFullYear()} Nate Levine</p>
        </div>
    )
}

export default Credits