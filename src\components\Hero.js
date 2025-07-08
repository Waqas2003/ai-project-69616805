import React from 'react';

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-4xl font-bold text-white">La Albiceleste</h2>
        <p className="text-2xl text-white">The Argentina national football team represents Argentina in men's international football.</p>
      </div>
    </section>
  );
}

export default Hero;