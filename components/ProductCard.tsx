import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
  reviewsCount?: number;
  badge?: string;
  inStock?: boolean;
  onAddToCart?: () => void;
}

export function ProductCard({
  title,
  description,
  price,
  oldPrice,
  image,
  rating = 0,
  reviewsCount = 0,
  badge,
  inStock = true,
  onAddToCart,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-900">
            {badge}
          </span>
        )}

        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}

        <button
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-all hover:bg-white dark:bg-zinc-900/90 dark:hover:bg-zinc-900"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-zinc-600 dark:text-zinc-400"
            }`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

        {rating > 0 && (
          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700"
                }`}
              />
            ))}
            <span className="ml-1 text-xs text-zinc-500 dark:text-zinc-500">
              ({reviewsCount})
            </span>
          </div>
        )}

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {price.toFixed(2)} €
          </span>
          {oldPrice && (
            <span className="text-sm text-zinc-400 line-through dark:text-zinc-500">
              {oldPrice.toFixed(2)} €
            </span>
          )}
        </div>

        <button
          disabled={!inStock}
          onClick={onAddToCart}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:disabled:bg-zinc-700"
        >
          <ShoppingCart className="h-4 w-4" />
          {inStock ? "Ajouter au panier" : "Rupture de stock"}
        </button>
      </div>
    </div>
  );
}

// Exemple d'utilisation
export function ProductCardExample() {
  return (
    <ProductCard
      title="Casque Audio Sans Fil"
      description="Réduction de bruit active, autonomie 30h, son haute-fidélité."
      price={249.99}
      oldPrice={329.99}
      image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
      rating={4}
      reviewsCount={142}
      badge="Bestseller"
      inStock={true}
      onAddToCart={() => console.log("Added to cart")}
    />
  );
}
