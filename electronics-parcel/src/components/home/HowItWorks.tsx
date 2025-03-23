import React from 'react';

interface WorkStep {
  id: number;
  image: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const workSteps: WorkStep[] = [
    {
      id: 1,
      image: require('../../assets/work-1.png'),
      description: 'Excess inventory, unboxed products, and returned items are procured by Rocking Deals.'
    },
    {
      id: 2,
      image: require('../../assets/work-2.png'),
      description: 'Products are carefully tested, graded, and certified by our expert team.'
    },
    {
      id: 3,
      image: require('../../assets/work-3.png'),
      description: 'Certified refurbished products are offered to customers at unbeatable prices with warranty.'
    }
  ];

  return (
    <section className="how-it-works section-padding">
      <div className="container">
        <div className="section-heading">
          <h2>
            Here's how <span>it works</span>
          </h2>
        </div>
        
        <div className="work-cards">
          {workSteps.map(step => (
            <div key={step.id} className="work-card">
              <div className="work-image">
                <img src={step.image} alt={`Work Step ${step.id}`} />
              </div>
              <div className="work-description">
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 