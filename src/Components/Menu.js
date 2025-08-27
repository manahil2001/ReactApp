export default function Menu() {
  const items = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12",
      desc: "Crisp lettuce, tomatoes, cucumbers, olives, and feta with olive oil.",
      img: "https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["veg"]
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$10",
      desc: "Grilled bread with garlic, tomatoes, olive oil and basil.",
      img: "https://plus.unsplash.com/premium_photo-1677686707068-787e793bc582?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["new"]
    },
    {
      id: 3,
      name: "Spicy Shrimp Pasta",
      price: "$16",
      desc: "Al dente pasta tossed with chili-garlic shrimp and herbs.",
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["spicy"]
    }
  ];

  return (
    <section id="menu">
      <div className="menu-hero">
        <h2>Our Menu</h2>
        <p>Fresh Mediterranean favorites, made daily with locally sourced ingredients.</p>
      </div>

      <div className="menu-controls">
        <span className="pill active">All</span>
        <span className="pill">Vegetarian</span>
        <span className="pill">Spicy</span>
        <span className="pill">New</span>
      </div>

      <div className="menu-grid">
        {items.map(item => (
          <article key={item.id} className="menu-card">
            <img src={item.img} alt={item.name} />
            <div className="content">
              <div className="title-price">
                <h4>{item.name}</h4>
                <span className="price">{item.price}</span>
              </div>
              <p className="desc">{item.desc}</p>
              <div className="tags">
                {item.tags.includes("veg") && <span className="tag tag-veg">Vegetarian</span>}
                {item.tags.includes("spicy") && <span className="tag tag-spicy">Spicy</span>}
                {item.tags.includes("new") && <span className="tag tag-new">New</span>}
              </div>
              <div className="actions">
                <button className="cta-btn">Order Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}