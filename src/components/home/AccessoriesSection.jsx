import React from "react";
import Accessories from "../../components/accessories/Accessories";

const AccessoriesSection = () => {
  return (
    <div>
      <h1 className="text-center font-heading mt-8">Top Accessories</h1>

      <Accessories limit={7} />
    </div>
  );
};

export default AccessoriesSection;
