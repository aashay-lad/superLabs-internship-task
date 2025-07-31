import React from 'react';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <div className="bg-white text-sm text-right p-2 sm:ml-20 sm:mr-20 border-b">
        <h4 className='inline float-left text-xs sm:text-base'>World's Largest Medical Equipment Marketplace</h4>
        <a href="#" className="ml-2 text-black">My Account</a> |
        <a href="#" className="ml-2 text-black">Contact Us</a>   
      </div>
      
      <header className="flex flex-wrap items-center justify-between p-4 sm:ml-20 sm:mr-20 flex-col sm:flex-row">
        <img src="https://1mdm.com/about/assets/1mdm-168x58.png" alt="Logo" className="h-10 mb-2 sm:mb-0" />
        <nav className="space-x-2 sm:space-x-4 flex flex-wrap justify-center sm:block">
          <a href="#" className="hover:text-orange-600 text-xs sm:text-base">About Us</a>
          <a href="#" className="hover:text-orange-600 text-xs sm:text-base">Our Story</a>
          <a href="#" className="hover:text-orange-600 text-xs sm:text-base">Sell on 1MDM</a>
          <a href="#" className="hover:text-orange-600 text-xs sm:text-base">Pricing</a>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-300 to-red-300 rounded-full opacity-20 -translate-x-8 -translate-y-8 sm:-translate-x-16 sm:-translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-20 translate-x-8 translate-y-8 sm:translate-x-20 sm:translate-y-20"></div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mt-2 sm:mt-5'>Sell on Imdm.com</h2>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-20">
                <br />
                <span className="text-gray-800">Reach millions of B2B buyers globally</span>
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-4xl text-xs sm:text-base">Start selling</button>
                <button
                  variant="outline"
                  className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-4xl border-1 text-xs sm:text-base"
                >
                  Chat with consultant
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-gray-900">26,000,000</div>
                  <div className="text-gray-600 text-xs sm:text-base">active buyers globally</div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg ml-4 sm:ml-8">
                  <div className="text-xl sm:text-3xl font-bold text-gray-900">400,000</div>
                  <div className="text-gray-600 text-xs sm:text-base">product inquiries daily</div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-gray-900">200</div>
                  <div className="text-gray-600 text-xs sm:text-base">countries and regions represented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Imdm.com is a leading ecommerce platform that
              <br />
              helps SMEs go global
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <iframe width="546" height="308" src="https://www.youtube.com/embed/TN7iJyc5Uks" title="SIGNA™ Explorer Lift Installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 mb-4">Connect with millions of business buyers from around the world.</p>
                <p className="text-gray-700 mb-4">
                  Get the tools and know-how to build a successful ecommerce presence for your business.
                </p>
                <p className="text-gray-700">Pocket more from each sale, with take rates as low as 5% in some cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Largest number of products & categories of
            <br />
            medical devices on a single place - Imdm.com
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Connect with buyers worldwide for your product &<br />
            start selling now
          </p>
        </div>
      </section>

      

      {/* Feature tabs */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-semibold mb-8 text-amber-800">Grow your business with a suite of tools built for you</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {['Custom storefront', 'Advertising tools', 'Data and analytics', 'Customer support'].map((tab, i) => (
                <div key={i} className={`pl-2 border-l-4 ${i===0? 'border-red-600' : 'border-transparent'} hover:border-red-600 transition`}>
                  <button className="text-lg font-medium">{tab}</button>
                </div>
              ))}
            </div>
            <img src="/image.png" alt="Dashboard" className="rounded-lg shadow"/>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <h3 className="text-center text-2xl font-semibold text-red-600">Success stories from 1mdm.com sellers</h3>
          <div className="bg-white rounded-lg shadow grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 flex flex-col justify-center">
              <blockquote className="text-gray-700 italic">
                “Lab Evolution is an import-export company of reagents and laboratory equipment established over a decade… our team of experts carefully follows customers all over the world. …”
              </blockquote>
            </div>
            <div>
              <img src="https://1mdm.com/about/assets/slider-2.webp" alt="Seller" className="w-full h-full object-cover rounded-r-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 text-white text-center px-6 py-16">
        <div className="absolute inset-0 bg-red-700 opacity-20"></div>
        <div className="relative max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Grow Your Business?</h2>
          <div className="space-x-4">
            <button className="bg-white text-red-600 px-6 py-2 rounded-md">Start selling</button>
            <button className="border border-white px-6 py-2 rounded-md">Chat with consultant</button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <img src="https://1mdm.com/about/assets/logo-white.png" alt="1MDM" className="h-8 mb-2"/>
            <p className="text-sm">One Medical Devices Market Place</p>
          </div>
          <div>
            <h4 className="text-white mb-2">Platform</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Sell on 1MDM</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Policies</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Delivery Information</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Reach Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-8">© 2025 1MDM · by SuperLabs</p>
      </footer>
      
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 sm:gap-4 z-50">
        <button className="bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-4xl shadow hover:bg-orange-700 text-xs sm:text-base">
          <i className="fa-regular fa-cart-shopping"></i>
          Start Selling
        </button>
        <button className="bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-4xl shadow hover:bg-orange-700 text-xs sm:text-base">
          Customer Service
        </button>
      </div>
    </div>
  );
}

export default App;
