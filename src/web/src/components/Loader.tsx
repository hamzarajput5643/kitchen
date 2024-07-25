import React from 'react';

interface LoadingProps {
  loading: Boolean;
  background?: string;
  loaderColor?: string;
}

const Loader: React.FC<LoadingProps> = ({ loading, background = '#fff', loaderColor = '#000' }) => {
  if (!loading) return null;

  return (
    <div style={{ background, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: `16px solid #f3f3f3`, borderRadius: '50%', borderTop: `16px solid ${loaderColor}`, width: '120px', height: '120px', animation: 'spin 2s linear infinite' }} />
    </div>
  );
};

export default Loader;