fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("product");

    data.forEach((product) => {
      // Hitung "original price" (misal +20% dari harga sekarang), bisa disesuaikan
      const originalPrice = (product.price * 1.2).toFixed(0);

      const card = document.createElement("div");
      // Ganti div.card biasa menjadi kumpulan kelas Tailwind:
      card.className =
        "bg-[#2B8EAE] rounded-2xl p-4 w-60 flex flex-col items-center";

      card.innerHTML = `
            <a href="detailproduk.html?id=${product.id}" class="flex flex-col items-center w-full">
              <div class="w-full h-auto mb-3 overflow-hidden rounded">
                <img
                  src="${product.image}"
                  alt="${product.titke || 'Product'}"
                  class="w-full h-full object-cover"
                  onerror="this.src='https://via.placeholder.com/150';"/>
              </div>
              <h2 class="text-md font-semibold text-center mt-2">
                ${product.title || 'No Name'}
              </h2>
              <p class="text-sm text-gray-600 text-center mt-1">
                ${(product.description || 'No description').slice(0, 60)}...
              </p>
              <p class="text-base font-bold text-gray-800 text-center mt-2">
                ${product.price || 'N/A'}
              </p>
            </a>
          `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
