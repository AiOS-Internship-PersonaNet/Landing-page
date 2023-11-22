import Image from 'next/image';
import React from 'react';

const BenefitsSection = () => {
  const FEATURES = [
    {
      title: 'Express Your True Self',
      icon: '/icon1.png',
      description: 'Description 1',
      additionalText: `With our innovative persona creation tool, you're not just building a profile; you're crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.`,
    },
    {
      title: 'Unleash Your Personality',
      icon: '/icon2.png',
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
    {
      title: 'Unleash Your Personality',
      icon: '/icon2.png',
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
    {
      title: 'Unleash Your Personality',
      icon: '/icon2.png',
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
  ];

  return (
    <section id="benefits" className="flex-col flex-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-16 lg:py-24 mt-[-40px] lg:mt-[-80px]">
    <div className="max-container padding-container relative w-full flex justify-end">
      <div className="flex flex-1 lg:min-h-[900px] mt-[-50px] lg:mt-[-95px]"> {/* Adjusted the margin-top */}
        <Image
          src="/images/phone.png"
          alt="phone"
          width={440}
          height={500}
          className="feature-phone"
        />
      </div>

        <div className="z-20 flex w-full flex-col lg:w-[55%]">
          <div className="relative">
            <h2 className="font-bold text-white text-4xl lg:text-6xl mt-8 lg:mt-0 mb-6 lg:mb-12">Our Benefits</h2>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:mg-16 lg:gap-16 ">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                additionalText={feature.additionalText}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description, additionalText }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="font-bold text-lg lg:text-2xl mt-5 capitalize">{title}</h2>
      
      <p className="text-base mt-3 text-gray-500">
        {additionalText}
      </p>
    </li>
  );
};

export default BenefitsSection;
