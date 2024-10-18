import React from 'react';

const servicesData = {
  owner: [
    'Sell/Rent Property Online',
    'Property Management',
    'Home Painting Services',
    'Solar Rooftop',
    'Valuation Report',
    'Home Interior Designers',
    'Seller Guide',
  ],
  tenants: [
    'Online Rent Agreement',
    'Rent Receipt Generator',
    'Furniture on Rent',
    'Home Appliances on Rent',
    'Packers & Movers',
    'Tenant Guide',
  ],
  buyers: [
    'Home Loan',
    'Property Legal Services',
    'Real Estate Services',
    'Escrow',
    'Vastu Consultation',
    'Property Inspection',
    'Buyer Guide',
    'NRI Guide',
  ],
};

const ServicesList = () => {
  return (
    <div className="lg:px-20 xl:px-36 py-4">
      <h2 className="text-2xl font-bold mb-2">Services</h2>
      <div className="flex flex-col">
        <div className="border-b border-black py-2 flex items-start">
          <h3 className="font-semibold text-lg w-1/4">For Owner</h3>
          <ul className="list-none grid grid-cols-3 gap-8 w-full">
            {servicesData.owner.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="border-b border-black py-8 xl:py-12 flex items-start">
          <h3 className="font-semibold text-lg w-1/4">For Tenants</h3>
          <ul className="list-none grid grid-cols-3 gap-8 w-full">
            {servicesData.tenants.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className=" py-2 flex items-start">
          <h3 className="font-semibold text-lg w-1/4">For Buyers</h3>
          <ul className="list-none grid grid-cols-3 gap-8 w-full">
            {servicesData.buyers.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
