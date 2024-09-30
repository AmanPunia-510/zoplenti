import React from "react";

const Paragraph = ({
    children,
    className = "",
    center,
    blue,
    right,
    ...props
}) => {
    return (
        <p {...props} className={`${className} ${center ? "mx-auto text-center" : right ? "text-right" : "text-left"} font-normal md:text-xl text-base !leading-170 font-AeonikTRAIL ${blue ? "text-blue" : "!text-white"} capitalize`}>
            {children}
        </p>
    );
};

export default Paragraph;