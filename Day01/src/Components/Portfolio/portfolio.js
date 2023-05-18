import React from 'react';
import Card from '../../Shared/Card/card';

const PortfolioSection = () => (
  <section className="portfolio-section">
    <div className="container">
      <h2>Portfolio and Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <Card
            content={
              <>
                <h4 className="card-title">HTML</h4>
                <p className="card-category">Front</p>
              </>
            }
          />
        </div>

        <div className="col-md-4">
          <Card
            content={
              <>
                <h4 className="card-title">CSS</h4>
                <p className="card-category">Front</p>
              </>
            }
          />
        </div>

        <div className="col-md-4">
          <Card
            content={
              <>
                <h4 className="card-title">Node.js</h4>
                <p className="card-category">Back</p>
              </>
            }
          />
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
