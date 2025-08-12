import sitechecker from '../assets/IndustryTools/sitechecker.webp';
import sparktoro from '../assets/IndustryTools/sparktoro.webp';
import screamingfrog from '../assets/IndustryTools/screamingfrog.webp';
import socialblade from '../assets/IndustryTools/socialblade.webp';
import youtube from '../assets/IndustryTools/youtube.webp';
import canva from '../assets/IndustryTools/canva.webp';
import hootsuite from '../assets/IndustryTools/hootsuite.webp';
import googleanalytics from '../assets/IndustryTools/googleanalytics.webp';
import googleads from '../assets/IndustryTools/googleads.webp';
import meta from '../assets/IndustryTools/meta.webp';
import buffer from '../assets/IndustryTools/buffer.webp';
import ubersuggest from '../assets/IndustryTools/ubersuggest.webp';
import chatgpt from '../assets/IndustryTools/chatgpt.webp';
import linkedin from '../assets/IndustryTools/linkedin.webp';
import hubspot from '../assets/IndustryTools/hubspot.webp';
import semrush from '../assets/IndustryTools/semrush.webp';

import React from 'react'

const IndustryTools = () => {
    const tools = [
        sitechecker, sparktoro, screamingfrog, socialblade,
        youtube, canva, hootsuite, googleanalytics,
        googleads, meta, buffer, ubersuggest,
        chatgpt, linkedin, hubspot, semrush
      ];
  return (
    <section className="bg-[#065F46] py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-white text-2xl md:text-5xl font-bold text-center mb-12">
        Master Industry-Relevant Tools
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className=" rounded-lg shadow   flex items-center justify-center"
          >
            <img
              src={tool}
              alt={`Tool ${index + 1}`}
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default IndustryTools