import React from "react";
import Timer from '../components/Timer'
import Ouwae from '../components/Vectors';

const Index = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-5">
            <Ouwae width={163} height={117}/>
        </div>
        <div className="text-6xl font-bold font-display">
            TRIAM UDOM OPENHOUSE 2021
        </div>
        <div className="mt-4 text-6xl font-display">เตรียมอุดมโอเพ่นเฮาส์ ๒๐๒๑</div>
        <Timer/>
    </div>
)

export default Index
