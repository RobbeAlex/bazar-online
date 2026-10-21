import { useState } from 'react';
import { ShoppingBag, X, Search, Menu, ArrowRight, Star } from 'lucide-react';
import './App.css';

// Mock Data for products
const PRODUCTS = [
  {
    id: 1,
    name: 'Chaqueta Puffer Y2K Plateada',
    price: '$1,200 MXN',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    badge: 'Nuevo Drop',
    badgeColor: 'blue'
  },
  {
    id: 2,
    name: 'Reloj Vintage Casio Dorado',
    price: '$850 MXN',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80',
    badge: 'Único',
    badgeColor: 'gold'
  },
  {
    id: 3,
    name: 'Lámpara de Lava Rojo Metálico',
    price: '$600 MXN',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
    badge: 'Retro',
    badgeColor: 'red'
  },
  {
    id: 4,
    name: 'Bolso Baguette Esmeralda',
    price: '$950 MXN',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80',
    badge: 'Trending',
    badgeColor: 'green'
  },
  {
    id: 5,
    name: 'Lentes de Sol Chrome 90s',
    price: '$450 MXN',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
    badge: '',
    badgeColor: ''
  },
  {
    id: 6,
    name: 'Cámara Analógica Azul Metálico',
    price: '$1,500 MXN',
    image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=600&q=80',
    badge: 'Colección',
    badgeColor: 'blue'
  }
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      {/* Background Orbs */}
      <div className="orb" style={{ top: '10%', left: '20%', width: '300px', height: '300px', background: 'rgba(0, 198, 255, 0.2)' }}></div>
      <div className="orb" style={{ top: '50%', right: '10%', width: '400px', height: '400px', background: 'rgba(255, 8, 68, 0.15)', animationDelay: '2s' }}></div>
      <div className="orb" style={{ bottom: '-10%', left: '40%', width: '350px', height: '350px', background: 'rgba(56, 239, 125, 0.15)', animationDelay: '4s' }}></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-md">
            <Menu size={24} style={{ cursor: 'pointer' }} />
            <Search size={20} style={{ cursor: 'pointer' }} />
          </div>
          
          <a href="#" className="navbar-brand text-gradient-silver">AURA BAZAR</a>
          
          <div 
            className="flex items-center gap-sm" 
            style={{ cursor: 'pointer', position: 'relative' }}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={24} />
            {cartItems.length > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                background: 'var(--metal-red)', color: '#fff',
                fontSize: '12px', width: '20px', height: '20px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="container fade-in" style={{ zIndex: 2, position: 'relative' }}>
          <h1 className="hero-title">
            Descubre piezas <span className="text-gradient-gold">únicas</span> <br/>
            con alma <span style={{ color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>vintage</span>.
          </h1>
          <p className="hero-subtitle">
            Curaduría de moda, accesorios y artículos para el hogar. Todo lo que buscas, desde lo clásico hasta lo Y2K.
          </p>
          <button className="btn btn-silver" onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}>
            Explorar Colección
          </button>
        </div>
      </header>

      {/* Shop Section */}
      <main id="shop" className="container" style={{ padding: 'var(--spacing-md) var(--spacing-md)' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Último <span className="text-gradient-silver">Drop</span></h2>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Ver todo <ArrowRight size={16} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--spacing-lg)'
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} className="card fade-in">
              <div style={{ position: 'relative' }}>
                <img src={product.image} alt={product.name} className="card-image" />
                {product.badge && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span className={`badge badge-${product.badgeColor || 'silver'}`} style={product.badgeColor === 'gold' ? { background: 'var(--metal-gold-classic)', color: '#111' } : {}}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="card-content flex-col justify-between" style={{ height: '160px' }}>
                <div>
                  <h3 className="card-title">{product.name}</h3>
                  <div className="flex items-center gap-xs" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="card-price">{product.price}</span>
                  <button 
                    className="btn btn-outline" 
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    onClick={() => addToCart(product)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', fontWeight: 700 }}>AURA BAZAR</p>
        <p style={{ opacity: 0.8, marginTop: '0.5rem', fontSize: '0.9rem' }}>© 2026 Aura Bazar. Todos los derechos reservados.</p>
      </footer>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 style={{ fontSize: '1.5rem' }}>Tu Carrito</h2>
          <button onClick={() => setIsCartOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
              <ShoppingBag size={48} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
              <p>Tu carrito está vacío.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{item.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cant: 1</p>
                  <p style={{ fontWeight: 'bold', marginTop: '8px' }}>{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', alignSelf: 'flex-start' }}
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <button className="btn btn-silver" style={{ width: '100%', padding: '1rem' }}>
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
