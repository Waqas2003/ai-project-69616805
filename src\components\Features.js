import React from 'react';

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Our Achievements</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white shadow-md p-4 rounded">
              <h3 className="text-2xl font-bold">World Cup Champions</h3>
              <p>1978, 1986</p>
            </div>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white shadow-md p-4 rounded">
              <h3 className="text-2xl font-bold">Copa America Champions</h3>
              <p>1921, 1925, 1927, 1929, 1937, 1941, 1945, 1946, 1947, 1955, 1957, 1959, 1991, 1993</p>
            </div>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white shadow-md p-4 rounded">
              <h3 className="text-2xl font-bold">Olympic Champions</h3>
              <p>1928</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;