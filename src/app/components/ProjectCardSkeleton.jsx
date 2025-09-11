const ProjectCardSkeleton = () => {
  return (
    <div className="bg-[#181818] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-colors duration-300">
      {/* Image Skeleton */}
      <div className="animate-pulse">
        <div className="bg-gray-600 dark:bg-gray-700 h-52 w-full"></div>
        
        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          {/* Title Skeleton */}
          <div className="bg-gray-600 dark:bg-gray-700 h-6 rounded w-3/4"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="bg-gray-600 dark:bg-gray-700 h-4 rounded"></div>
            <div className="bg-gray-600 dark:bg-gray-700 h-4 rounded w-5/6"></div>
            <div className="bg-gray-600 dark:bg-gray-700 h-4 rounded w-4/6"></div>
          </div>
          
          {/* Tags Skeleton */}
          <div className="flex gap-2 mt-4">
            <div className="bg-gray-600 dark:bg-gray-700 h-6 rounded-full w-20"></div>
            <div className="bg-gray-600 dark:bg-gray-700 h-6 rounded-full w-16"></div>
          </div>
          
          {/* Buttons Skeleton */}
          <div className="flex gap-4 mt-6">
            <div className="bg-gray-600 dark:bg-gray-700 h-10 rounded-full w-12"></div>
            <div className="bg-gray-600 dark:bg-gray-700 h-10 rounded-full w-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;