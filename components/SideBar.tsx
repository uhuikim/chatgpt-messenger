import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1 ">
                <NewChat />
                <div>{/* modelselection */}</div>

                {/* map through the chatrows */}
            </div>
        </div>
    );
};

export default SideBar;
