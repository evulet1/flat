import { ApartmentCard } from './components/ApartmentCard';

function App() {
  return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Properties</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ApartmentCard
                title="Sunny Apartment in Belgrade"
                price={45}
                location="Vračar, Belgrade"
                imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop"
            />

            <ApartmentCard
                title="Cozy Studio near the River"
                price={35}
                location="Zemun, Belgrade"
                imageUrl="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop"
            />

            <ApartmentCard
                title="Modern Loft in the Center"
                price={60}
                location="Stari Grad, Belgrade"
                imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
  );
}

export default App;