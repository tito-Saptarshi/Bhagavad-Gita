import React from "react";

const HomePageHero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://www.jagranimages.com/images/newimg/10092022/10_09_2022-bhagawad_geeta_updesh_23058803.webp"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bhagavad Gita - The Cosmic Wisdom
            </h1>
            <p className="mb-8 leading-relaxed">
            Welcome to a sacred digital haven where the profound teachings of the Bhagavad Gita come alive. Immerse yourself in the timeless wisdom of this ancient scripture, as we present the complete Bhagavad Gita for you to explore and contemplate. Our mission is to make this spiritual treasure accessible to seekers around the world, fostering a journey of self-discovery, inner peace, and spiritual enlightenment. Dive into the verses that encapsulate the essence of life, duty, and the path to self-realization, and let the Bhagavad Gita be your guide on the journey to a more profound understanding of existence. Join us on this enlightening voyage through the words that have inspired generations and continue to illuminate the path to a harmonious and meaningful life.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageHero;
