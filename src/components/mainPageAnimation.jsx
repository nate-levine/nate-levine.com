import * as React from 'react'

const MainPageAnimation = () => {
    return (
        <div class="absolute left-10 w-[38vw] h-[38vw] grid grid-cols-5">
            <div class="animate-[flip_12s_0s_ease-in-out_infinite]">
                <div class="w-full h-[20%] rounded-full bg-red animate-[stretch_12s_0s_ease-in-out_infinite]" />
            </div>
            <div class="animate-[flip_12s_0.5s_ease-in-out_infinite]">
                <div class="w-full h-[20%] rounded-full bg-green animate-[stretch_12s_0.5s_ease-in-out_infinite]" />
            </div>
            <div class="animate-[flip_12s_1s_ease-in-out_infinite]">
                <div class="w-full h-[20%] rounded-full bg-yellow animate-[stretch_12s_1s_ease-in-out_infinite]" />
            </div>
            <div class="animate-[flip_12s_1.5s_ease-in-out_infinite]">
                <div class="w-full h-[20%] rounded-full bg-blue animate-[stretch_12s_1.5s_ease-in-out_infinite]" />
            </div>
            <div class="animate-[flip_12s_2s_ease-in-out_infinite]">
                <div class="w-full h-[20%] rounded-full bg-purple animate-[stretch_12s_2s_ease-in-out_infinite]" />
            </div>
        </div>
    )
}

export default MainPageAnimation