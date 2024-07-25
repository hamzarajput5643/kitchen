import React from "react";

type TabsbuttonsProps = {
    value: string;
    onclick: () => void;
    isactive: boolean;
};

const Tabsbuttons: React.FC<TabsbuttonsProps> = ({ value, onclick, isactive }) => {
    return (
        <button type="button" className={`btn-tabs ${isactive ? "active" : ""}`} onClick={onclick}>
            {value}
        </button>
    );
};

export default Tabsbuttons;