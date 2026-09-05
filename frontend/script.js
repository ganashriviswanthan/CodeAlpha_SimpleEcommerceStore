async function loadProducts() {
  const res = await fetch('http://localhost:5000/api/products');
  const products = await res.json();

  const list = document.getElementById('product-list');
  list.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <a href="product.html?id=${p._id}">View Details</a>
    </div>
  `).join('');
}

loadProducts();

