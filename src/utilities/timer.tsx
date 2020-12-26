import React from "react";
import Router from "next/router";

const Timer = () => {

    const [Count, setCount] = React.useState(10);

    React.useEffect(() => {
        if (Count > 0) {
            setTimeout(() => setCount(Count - 1), 1000);
        }else{
            Router.push("https://clubs.triamudom.ac.th");
        }
    });

    return (
        <div className="mt-4 text-5s text-gray-300 font-display">
            Redirect to <a className="hover:text-blue-300 hover:underline" href='https://clubs.triamudom.ac.th'>main site</a> in {Count}
        </div>
    );

};

export default Timer