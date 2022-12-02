import React, { useState } from "react";

import PropTypes from 'prop-types';
import { episode } from "../data/episode";

const Episodes = () => {
    const [expanded, setExpanded] = useState(false)
    const dataForDisplay = expanded ? episode : episode.slice(0, 3)

    return (
        <section className="text-gray-600 body-font overflow-hidden h-full bg-blue-100" id="episode">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">List of Episodes</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Nichijou - My Ordinary Life.</p>
                </div>
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {dataForDisplay.map((eps, idx) =>(
                    <div className="py-8 flex flex-wrap md:flex-nowrap" key={eps.id}>
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex  flex-col">
                        <span className="font-semibold title-font text-center text-gray-700">{eps.eps}</span>
                        <span className="mt-1 text-gray-500 text-sm text-center">{eps.date}</span>
                        </div>
                        <div className="md:flex-grow">
                            <p className="leading-relaxed">{eps.description}</p>
                        </div>
                    </div>
                    ))}
                    <div className="flex flex-col text-center  mb-12 sm:w-full">
                        <button className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'Show Less' : 'Show More'} 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
  };
  Episodes.propTypes = {
    episode: PropTypes.array
  };
  
  export default Episodes;