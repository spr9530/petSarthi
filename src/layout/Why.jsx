import React from "react";

const Why = () => {
  return (
    <section className="">
     
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
        Embracing Adventure Since 2003
      </h2>
      <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
        Choose one style or create a package, your passports with adventures
        together.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-gray-900">45+</h3>
          <p className="text-gray-700">Global Branches</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-gray-900">29K</h3>
          <p className="text-gray-700">Destinations Collaboration</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-gray-900">20+</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold text-gray-900">168K</h3>
          <p className="text-gray-700">Happy Customers</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="bg-pink-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            300,000+ Experiences
          </h4>
          <p className="text-gray-700">Make memories around the world.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Trusted Reviews
          </h4>
          <p className="text-gray-700">
            4.8 stars from 160,000+ Trustpilot reviews.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Reserve now, Pay later
          </h4>
          <p className="text-gray-700">Book your spot first, pay later.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Security Assurance
          </h4>
          <p className="text-gray-700">Data security through encryption.</p>
        </div>
      </div>
    </section>
  );
};

export default Why;
