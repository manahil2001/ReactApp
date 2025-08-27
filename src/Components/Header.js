// Header.js

export default function Header() {
  return (
    <header className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/Hero.webp" alt="Little Lemon Restaurant" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Little Lemon</h1>
          <h2>Fresh Mediterranean flavors, served with love.</h2>
          <p>Experience authentic cuisine in a warm and inviting atmosphere. Join us for a taste of tradition with a modern twist.</p>
          <button className="cta-btn">Reserve a Table</button>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured">
        <h3>Our Specials</h3>
        <div className="featured-grid">
          <div className="dish">
            <img src="https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Greek Salad" />
            <h4>Greek Salad</h4>
            <p>A refreshing mix of crisp vegetables, feta cheese, and olives.</p>
          </div>
          <div className="dish">
            <img src="https://plus.unsplash.com/premium_photo-1677686707068-787e793bc582?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bruschetta" />
            <h4>Bruschetta</h4>
            <p>Toasted bread topped with fresh tomatoes and basil.</p>
          </div>
          <div className="dish">
            <img src="https://plus.unsplash.com/premium_photo-1714942934723-118f2b4dd6dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lemon Dessert" />
            <h4>Lemon Dessert</h4>
            <p>A zesty and sweet treat to complete your meal.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h5>Ready for a Flavor Adventure?</h5>
        <p>Book your table today and indulge in the Mediterranean experience.</p>
        <button className="cta-btn">Book Now</button>
      </section>
    </header>
  );
}