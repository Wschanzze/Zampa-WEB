import React, { useRef, useState } from 'react';

const ProductParallaxSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to center of container (-1 to 1)
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 }); // return to center
  };

  return (
    <section 
      className="parallax-section" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="parallax-container">
        
        {/* Layer 1 */}
        <div className="parallax-layer layer-1" style={{ transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, 0)` }}>
          <img src="/assets/Quesos Zampa/producto_1.png" alt="Queso" className="parallax-img img-float-1" />
        </div>
        
        {/* Layer 2 */}
        <div className="parallax-layer layer-2" style={{ transform: `translate3d(${mousePos.x * 60}px, ${mousePos.y * 60}px, 0)` }}>
          <img src="/assets/Quesos Zampa/producto_2.png" alt="Queso" className="parallax-img img-float-2" />
        </div>
        
        {/* Layer 3 */}
        <div className="parallax-layer layer-3" style={{ transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -60}px, 0)` }}>
          <img src="/assets/Quesos Zampa/producto_3.png" alt="Queso" className="parallax-img img-float-3" />
        </div>
        
        <div className="parallax-content">
          <h2 className="parallax-title">
            Frescura y <span className="text-highlight">naturalidad</span> son los principios de nuestra <span className="text-highlight">producción</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProductParallaxSection;
