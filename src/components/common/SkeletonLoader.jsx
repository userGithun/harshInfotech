import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = () => {
  return (
    <div className="p-6">
      <Skeleton height={40} width={200} className="mb-4" />
      <Skeleton height={20} count={5} className="mb-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} height={200} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
