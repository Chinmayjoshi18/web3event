import React from 'react';
import { motion } from 'framer-motion';

// Generic skeleton component
const Skeleton = ({ width = "100%", height = "20px", className = "" }) => (
  <motion.div
    className={`bg-gradient-to-r from-dark-card via-web3-purple/10 to-dark-card rounded ${className}`}
    style={{ width, height }}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

// Card skeleton for services, pricing, etc.
export const CardSkeleton = () => (
  <div className="card-web3 animate-pulse">
    <div className="text-center mb-6">
      <Skeleton width="60px" height="60px" className="mx-auto mb-4 rounded-full" />
      <Skeleton width="70%" height="24px" className="mb-2" />
      <Skeleton width="50%" height="16px" />
    </div>
    <div className="space-y-3">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex items-center">
          <Skeleton width="12px" height="12px" className="mr-3 rounded-full" />
          <Skeleton width="80%" height="16px" />
        </div>
      ))}
    </div>
    <div className="mt-6">
      <Skeleton width="100%" height="48px" className="rounded-lg" />
    </div>
  </div>
);

// Text content skeleton
export const TextSkeleton = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton 
        key={index}
        width={index === lines - 1 ? "60%" : "100%"} 
        height="16px" 
      />
    ))}
  </div>
);

// Hero skeleton
export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto text-center px-4">
      <Skeleton width="80%" height="80px" className="mb-6 mx-auto" />
      <div className="space-y-4 mb-8">
        <Skeleton width="90%" height="24px" className="mx-auto" />
        <Skeleton width="70%" height="24px" className="mx-auto" />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton width="200px" height="56px" className="mx-auto rounded-full" />
        <Skeleton width="200px" height="56px" className="mx-auto rounded-full" />
      </div>
    </div>
  </div>
);

// Form skeleton
export const FormSkeleton = () => (
  <div className="card-web3">
    <Skeleton width="60%" height="32px" className="mb-6" />
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Skeleton width="40%" height="16px" className="mb-2" />
          <Skeleton width="100%" height="48px" />
        </div>
        <div>
          <Skeleton width="40%" height="16px" className="mb-2" />
          <Skeleton width="100%" height="48px" />
        </div>
      </div>
      <div>
        <Skeleton width="40%" height="16px" className="mb-2" />
        <Skeleton width="100%" height="120px" />
      </div>
      <Skeleton width="100%" height="56px" className="rounded-lg" />
    </div>
  </div>
);

// University stats skeleton
export const StatsSkeleton = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className="text-center">
        <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-web3-purple/30 rounded-2xl p-6">
          <Skeleton width="60px" height="60px" className="mb-2 mx-auto" />
          <Skeleton width="80%" height="20px" className="mb-1 mx-auto" />
          <Skeleton width="60%" height="16px" className="mx-auto" />
        </div>
      </div>
    ))}
  </div>
);

// Loading overlay component
export const LoadingOverlay = ({ message = "Loading..." }) => (
  <div className="fixed inset-0 bg-dark-bg/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="text-center">
      <motion.div
        className="w-12 h-12 border-4 border-web3-purple/30 border-t-web3-purple rounded-full mx-auto mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-gray-300">{message}</p>
    </div>
  </div>
);

export default Skeleton;
