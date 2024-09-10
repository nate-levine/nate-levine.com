import * as React from 'react'

const MainPageAnimation = () => {
    return (
        <div className="pl-3 w-[30vw] h-[15vw] grid grid-cols-4">
            <div className="animate-[flip_8s_0s_ease-in-out_infinite]">
                <div className="w-full rounded-full h-[25%] bg-red animate-[stretch_8s_0s_ease-in-out_infinite]" />
            </div>
            <div className="animate-[flip_8s_0.2s_ease-in-out_infinite]">
                <div className="w-full rounded-full h-[25%] bg-green animate-[stretch_8s_0.2s_ease-in-out_infinite]" />
            </div>
            <div className="animate-[flip_8s_0.4s_ease-in-out_infinite]">
                <div className="w-full rounded-full h-[25%] bg-yellow animate-[stretch_8s_0.4s_ease-in-out_infinite]" />
            </div>
            <div className="animate-[flip_8s_0.6s_ease-in-out_infinite]">
                <div className="w-full rounded-full h-[25%] bg-blue animate-[stretch_8s_0.6s_ease-in-out_infinite]" />
            </div>
        </div>
    )
}

export default MainPageAnimation