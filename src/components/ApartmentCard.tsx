import { useState } from "react";

interface ApartmentCardProps {
    title: string;
    price: number;
    location: string;
    imageUrl: string;
}


export function ApartmentCard({ title, price, location, imageUrl }: ApartmentCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
                className="h-48 w-full object-cover"
                src={imageUrl}
                alt={title}
            />
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            New
          </span>
                </div>
                <p className="text-gray-500 mt-2 text-sm">{location}</p>
                <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            ${price} <span className="text-sm text-gray-500 font-normal">/ night</span>
          </span>
                    <button
                        type="button"
                        onClick={() => setIsLiked(v => !v)}
                        aria-pressed={isLiked}
                        className={`inline-flex items-center gap-2 px-4 py-2 font-medium rounded-full transition-colors duration-200 ease-in-out border ${
                            isLiked
                                ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-red-50 hover:text-red-600"
                        }`}
                    >
                        <span className="text-lg">{isLiked ? "❤️" : "🤍"}</span>
                        <span>{isLiked ? "In favorites" : "Add to favorites"}</span>
                    </button>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
}