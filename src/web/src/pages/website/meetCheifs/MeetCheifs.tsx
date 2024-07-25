import Chefs from "@app/components/website/chefs/Chefs";
import Partner from "@app/components/website/partner/Partner";
import React from "react";

const MeetChefs: React.FC = () => {
  return (
    <>
      <main>
        <div>
            <Chefs/>
            <Partner/>
        </div>
        
      </main>
    </>
  );
};

export default MeetChefs;
