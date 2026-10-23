function App() {
  return (
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
          <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop"
              alt="Apartment"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Sunny Apartment in Belgrade</h2>
            <p className="text-gray-500 mt-2">2 guests · 1 bedroom · 1 bath</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">$45 <span className="text-sm text-gray-500 font-normal">/ night</span></span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;