const products = [
    {
        name: "Fresh Tomatoes",
        img: "https://img.freepik.com/free-photo/tomato-isolated_2829-17582.jpg?t=st=1745747889~exp=1745751489~hmac=d16552e465e998330437f355cdc38e2f9a37c2593b891de72843e94d1ff2c0bf&w=740",
        link: "https://www.bigbasket.com/ps/?q=tomato"
    },
    {
        name: "Organic Carrots",
        img: "https://images.unsplash.com/photo-1445282768818-728615cc910a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=carrots"
    },
    {
        name: "Green Broccoli",
        img: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=broccoli"
    },
    {
        name: "Bell Peppers",
        img: "https://plus.unsplash.com/premium_photo-1661438187813-99290476805e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=bell%20pepper"
    },
    {
        name: "Fresh Spinach",
        img: "https://plus.unsplash.com/premium_photo-1703260007808-bdc648fd29b7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=spinach"
    },
    {
        name: "Crispy Cucumbers",
        img: "https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=cucumber"
    },
    {
        name: "Sweet Potatoes",
        img: "https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=sweet%20potato"
    },
    {
        name: "Red Onions",
        img: "https://images.unsplash.com/photo-1599145566106-fa02aafba0b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=onion"
    },
    {
        name: "Baby Corn",
        img: "https://images.unsplash.com/photo-1621457233274-27f45eb99319?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=baby%20corn"
    },
    {
        name: "Mushrooms",
        img: "https://plus.unsplash.com/premium_photo-1674575415644-3dcf6b288855?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.bigbasket.com/ps/?q=mushrooms"
    }
];

// Target the product container
const productList = document.getElementById('product-list');

// Loop through the products and create product cards dynamically
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product'); // Add CSS class to each product card
    
    productCard.innerHTML = `
        <a href="${product.link}" target="_blank">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
        </a>
    `;
    
    productList.appendChild(productCard); // Add product card to the container
});
