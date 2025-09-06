import React from 'react';
import { Link } from 'react-router-dom';

const testimonialImg = "https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=crop&w=700&q=80";
const adopterImg = "https://media.istockphoto.com/id/2179811406/photo/cheerful-young-woman-enjoying-in-the-outdoors-with-her-little-pet-dog-in-the-park-at-day-time.jpg?b=1&s=612x612&w=0&k=20&c=u7VagGGQJGjAT3-JPRvAl-JOCqbwTFzxZaey8TTr0Hs=";
const dogIcon = "https://img.icons8.com/emoji/96/dog-face.png";
const searchIcon = "https://img.icons8.com/ios-filled/100/FF6B00/search--v1.png";
const connectIcon = "https://img.icons8.com/ios-filled/100/FF6B00/phone.png";
const loveIcon = "https://img.icons8.com/emoji/96/red-heart.png";
const vetIcon = "https://img.icons8.com/ios-filled/100/FFB703/stethoscope.png";

const faqs = [
  {
    q: "What is the fee to adopt a pet?",
    a: "Adoption fees vary by rescue or pet parent, but are always lower than buying from a shop. Many pets are available for free or a nominal fee to cover vaccinations and care."
  },
  {
    q: "How old do I need to be to adopt a pet?",
    a: "You must be at least 18 years old to adopt a pet. Some rescues may have additional requirements."
  },
  {
    q: "Can you return an adopted pet?",
    a: "Most rescues will work with you if the adoption isn't a good fit. Always discuss return policies before adopting."
  }
];

const hearts = (
  <div style={{ position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 0 }}>
    <span style={{ fontSize: 32, color: 'var(--orange)', position: 'absolute', left: '10%', top: 20 }}>❤️</span>
    <span style={{ fontSize: 24, color: 'var(--orange)', position: 'absolute', left: '80%', top: 40 }}>🧡</span>
    <span style={{ fontSize: 18, color: 'var(--yellow)', position: 'absolute', left: '60%', top: 10 }}>💛</span>
    <span style={{ fontSize: 20, color: 'var(--orange)', position: 'absolute', left: '30%', top: 60 }}>🧡</span>
    <span style={{ fontSize: 22, color: 'var(--yellow)', position: 'absolute', left: '50%', top: 30 }}>💛</span>
  </div>
);

const Home = () => {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', width: '100%' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'var(--background)', padding: '6rem 1rem 2rem 1rem', textAlign: 'center', overflow: 'hidden' }}>
        {hearts}
        <h1 style={{ color: 'var(--title)', fontSize: '2.7rem', fontWeight: 700, marginBottom: '0.5rem', zIndex: 1, position: 'relative' }}>
          Re-Home and Adopt a Pet in India
        </h1>
        <h2 style={{ color: 'var(--orange)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', zIndex: 1, position: 'relative' }}>
          Every Pet Deserves a Good Home. <span style={{ color: 'var(--yellow)' }}>#Adoptlove</span>
        </h2>
        <Link to="/pets">
          <button style={{ fontSize: '1.2rem', fontWeight: 700, padding: '0.9rem 2.5rem', marginBottom: '2rem', zIndex: 1, position: 'relative' }}>
            Adopt a pet
          </button>
        </Link>
      </section>

      {/* Testimonial Section */}
      <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: 'var(--alt-bg)', padding: '2.5rem 1rem 2rem 1rem', position: 'relative', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: 320, minWidth: 220, maxWidth: 400, margin: '0 2rem 1rem 0', flex: '0 1 320px' }}>
          <img src={adopterImg} alt="Adopter with pet" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(19,41,75,0.10)' }} />
          <div style={{ position: 'absolute', bottom: 18, left: 24, color: 'var(--white)', fontWeight: 600, textShadow: '0 1px 4px var(--navy)', fontSize: 15 }}>
            Rashmi Patil in Pune, India
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(19,41,75,0.08)', padding: '1.5rem 2rem', maxWidth: 420, minWidth: 220, flex: '0 1 420px', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: 10, marginBottom: 6, fontWeight: 700, color: 'var(--charcoal)' }}>
            I am very happy to adopt Olivia. I was fortunate enough to find her on Furry Friends. – <span style={{ color: 'var(--orange)' }}>Rashmi Patil</span>
          </div>
          <div style={{ fontSize: 14, color: 'var(--charcoal)' }}>We're The Pet People. <a href="#" style={{ color: 'var(--orange)', fontWeight: 600 }}>Learn more &gt;</a></div>
        </div>
      </section>

      {/* Adoption Journey Section */}
      <section style={{ background: 'var(--primary)', color: 'var(--white)', padding: '3rem 1rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          <span style={{ fontSize: 60, color: 'var(--white)', position: 'absolute', left: '10%', top: 30 }}>❤️</span>
          <span style={{ fontSize: 40, color: 'var(--white)', position: 'absolute', left: '80%', top: 60 }}>🧡</span>
          <span style={{ fontSize: 30, color: 'var(--white)', position: 'absolute', left: '60%', top: 10 }}>💛</span>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', marginBottom: '1.2rem' }}>#AdoptLove</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--white)' }}>
            Approximately 1478 dogs & cats die every day on road in India. <span style={{ color: 'var(--yellow)', fontWeight: 700 }}>The Furry Friends</span> is on a mission to provide every dog and cat a home before 2035. It's just one of the many ways Furry Friends gives back and helps you become a part of something larger. Join FURRY FRIENDS Community and help setting up Pet houses in your surrounding for strays.
          </p>
          <Link to="/pets">
            <button style={{ background: 'var(--white)', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', borderRadius: '2rem', padding: '0.8rem 2.2rem', border: 'none', boxShadow: '0 4px 16px rgba(255,107,0,0.10)', transition: 'background 0.2s', marginBottom: 10 }}>
              Adopt a pet
            </button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--alt-bg)', padding: '3rem 1rem' }}>
        <h2 style={{ color: 'var(--title)', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem' }}>Your Pet Adoption Journey With Furry Friends</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: 'var(--white)', borderRadius: '1.2rem', boxShadow: '0 2px 8px var(--card-border)', padding: '2rem 1.2rem', minWidth: 220, maxWidth: 260, flex: '1 1 220px', textAlign: 'center' }}>
            <img src={searchIcon} alt="Search" style={{ width: 48, marginBottom: 12 }} />
            <h5 style={{ color: 'var(--title)', fontWeight: 700 }}>Search Pet</h5>
            <p style={{ color: 'var(--body)' }}>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: '1.2rem', boxShadow: '0 2px 8px var(--card-border)', padding: '2rem 1.2rem', minWidth: 220, maxWidth: 260, flex: '1 1 220px', textAlign: 'center' }}>
            <img src={connectIcon} alt="Connect" style={{ width: 48, marginBottom: 12 }} />
            <h5 style={{ color: 'var(--title)', fontWeight: 700 }}>Connect</h5>
            <p style={{ color: 'var(--body)' }}>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: '1.2rem', boxShadow: '0 2px 8px var(--card-border)', padding: '2rem 1.2rem', minWidth: 220, maxWidth: 260, flex: '1 1 220px', textAlign: 'center' }}>
            <img src={loveIcon} alt="AdoptLove" style={{ width: 48, marginBottom: 12 }} />
            <h5 style={{ color: 'var(--title)', fontWeight: 700 }}>AdoptLove</h5>
            <p style={{ color: 'var(--body)' }}>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: '1.2rem', boxShadow: '0 2px 8px var(--card-border)', padding: '2rem 1.2rem', minWidth: 220, maxWidth: 260, flex: '1 1 220px', textAlign: 'center' }}>
            <img src="https://images.pexels.com/photos/5255205/pexels-photo-5255205.jpeg?auto=compress&w=700&q=80" alt="Support at Every Step" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: '0.7rem', marginBottom: 12 }} />
            <h5 style={{ color: 'var(--title)', fontWeight: 700 }}>Free Vet Consultation</h5>
            <p style={{ color: 'var(--body)' }}>Furry Friends will help your pet to settle down in its new home. Once you complete the Adoption journey, reach out to us for free vet consultation.</p>
          </div>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section style={{ background: 'var(--alt-bg)', padding: '3rem 1rem' }}>
        <h2 style={{ color: 'var(--title)', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>Why Should You Adopt a Dog or Cat?</h2>
        <p style={{ color: 'var(--body)', fontSize: '1.15rem', maxWidth: 800, margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
          Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home!
        </p>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'var(--background)', padding: '3rem 1rem' }}>
        <h2 style={{ color: 'var(--title)', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: '1.5rem', background: 'var(--alt-bg)', borderRadius: '1rem', padding: '1.2rem 1.5rem', boxShadow: '0 2px 8px var(--card-border)' }}>
              <div style={{ color: 'var(--title)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{faq.q}</div>
              <div style={{ color: 'var(--body)', fontSize: '1rem' }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 