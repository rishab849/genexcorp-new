import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, fallback }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    if (fallback) {
      setImgSrc(fallback);
    }
  };

  // If no src or error occurred and no fallback, show a placeholder
  if (!imgSrc || (hasError && !fallback)) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-xs">Logo</span>
      </div>
    );
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

export { ImageWithFallback };