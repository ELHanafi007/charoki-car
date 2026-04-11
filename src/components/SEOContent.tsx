import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <section style={{ padding: '100px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
          <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '40px', textAlign: 'center' }}>
            Charoki Car: The Gold Standard of Luxury Mobility in Casablanca
          </h2>
          
          <div style={{ display: 'grid', gap: '40px' }}>
            <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '30px' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Our Legacy of Excellence</h3>
              <p>
                Founded on the principles of discretion, quality, and speed, <strong>Charoki Car</strong> has established itself as the leading provider of premium automotive services in Morocco. We don't just rent cars; we provide a gateway to the most exclusive experiences in Casablanca and beyond. Our mission is to ensure that every mile you drive reflects the prestige and comfort you deserve.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Luxury Car Rental Casablanca: Why Choose Charoki Car?</h3>
              <p>
                Navigating the vibrant streets of Casablanca requires a vehicle that matches the city's dynamic energy. Whether you are here for a high-stakes business meeting at the Casablanca Finance City or a leisure stay at a luxury resort, our fleet is tailored to your needs.
              </p>
              <ul style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                <li><strong>Airport VIP Delivery:</strong> We meet you at Mohamed V International Airport (CMN) the moment you land. No waiting, no paperwork delays.</li>
                <li><strong>24/7 Concierge Support:</strong> Our team is available around the clock to assist with route planning, vehicle adjustments, or local recommendations.</li>
                <li><strong>Pristine Maintenance:</strong> Every vehicle in the Charoki Car collection undergoes a 50-point inspection before every delivery.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Explore Our Exclusive Fleet</h3>
              <p>
                From the muscular presence of our 4x4 SUVs to the refined elegance of our executive sedans, the Charoki Car fleet is curated for the discerning driver.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '20px' }}>
                <div style={{ padding: '20px', background: 'var(--bg-secondary)' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Prestige SUVs</h4>
                  <p style={{ fontSize: '0.9rem' }}>Perfect for coastal drives to Dar Bouazza or navigating the city with authority. High performance meets ultimate safety.</p>
                </div>
                <div style={{ padding: '20px', background: 'var(--bg-secondary)' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Executive Berlines</h4>
                  <p style={{ fontSize: '0.9rem' }}>The choice for business professionals. Quiet cabins, advanced technology, and a smooth ride through the Gauthier district.</p>
                </div>
                <div style={{ padding: '20px', background: 'var(--bg-secondary)' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Luxury Sports</h4>
                  <p style={{ fontSize: '0.9rem' }}>For those who want to turn heads. Experience the thrill of high-octane engineering on the open roads of Morocco.</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '40px', background: 'var(--text-primary)', color: '#fff' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}>The Charoki Commitment</h3>
              <p style={{ opacity: 0.8 }}>
                In a market saturated with generic options, Charoki Car stands out by offering a personalized touch. We understand that your time is your most valuable asset. That's why we have streamlined our booking process to be the fastest in Morocco. With our "Charoki Car" brand promise, you are guaranteed a seamless transition from the airport to your destination.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Morocco Travel Guide: Places to Visit with Your Charoki Car</h3>
              <p>
                Casablanca is just the beginning. With the reliability of a Charoki vehicle, you can explore the wonders of the Kingdom with total peace of mind. Drive to the "Red City" of Marrakech in under 3 hours, or take a scenic coastal trip to the blue city of Rabat. Wherever your journey leads, Charoki Car is your trusted partner on the road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
