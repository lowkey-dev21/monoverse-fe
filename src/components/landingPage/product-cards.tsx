"use client";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import clsx from "clsx";
import { useCart } from "@/hooks/useCart";

type ProductCardType = "default" | "compact" | "expanded";

interface ProductCardProps {
  type?: ProductCardType;
  image: string;
  title: string;
  subtitle?: string;
  authors?: string;
  rating?: number;
  ratingCount?: number | string;
  price?: string;
  badge?: string;
  badgeColor?: string;
  hours?: string;
  extraInfo?: string;
  expandedDetails?: {
    updated?: string;
    hours?: string;
    level?: string;
    subtitles?: string;
    bullets?: string[];
    buttonText?: string;
  };
  onAddToCart?: () => void;
}

export function ProductCard({
  type = "default",
  image,
  title,
  subtitle,
  authors,
  rating,
  ratingCount,
  price,
  badge,
  badgeColor = "bg-teal-100 text-teal-800",
  hours,
  expandedDetails,
  onAddToCart,
}: ProductCardProps) {
  const { addToCart, isInCart } = useCart();

  // Create a unique ID for the product
  const productId = `${title}-${authors}`.replace(/\s+/g, "-").toLowerCase();

  const handleAddToCart = () => {
    if (authors && price) {
      const cartItem = {
        id: productId,
        title,
        authors,
        price,
        image,
        rating,
        ratingCount,
      };
      addToCart(cartItem);
    }

    // Call the original onAddToCart if provided
    if (onAddToCart) {
      onAddToCart();
    }
  };

  const isProductInCart = isInCart(productId);

  // Only apply hover logic for default type and if expandedDetails exist
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (type === "compact") {
    return (
      <Card className="group relative overflow-hidden rounded-2xl w-full mx-auto border border-gray-200 hover:border-primary transition-all duration-500 transform hover:scale-105 bg-white">
        <CardContent className="p-0 relative z-10">
          <div className="flex h-[340px] flex-col">
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {badge && (
                <div className="absolute top-3 right-3">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm",
                      badgeColor
                    )}
                  >
                    {badge}
                  </span>
                </div>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                {authors && (
                  <p className="text-gray-600 text-sm mb-3 truncate">
                    {authors}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-sm">{rating}</span>
                      {ratingCount && (
                        <span className="text-gray-500 text-xs">
                          ({ratingCount})
                        </span>
                      )}
                    </div>
                  )}
                  {(hours || expandedDetails?.hours) && (
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {hours || expandedDetails?.hours}
                    </span>
                  )}
                </div>
                {price && (
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      {price}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Expanded card (used for floating panel)
  const ExpandedPanel = (
    <div
      className="absolute   z-50 top-0 left-2 md:left-full ml-4 w-[380px] rounded-2xl border border-gray-200 max-w-[calc(100vw-2rem)]"
      style={{
        pointerEvents: "none",
        transform: "translateX(0)",
        maxWidth: "min(380px, calc(100vw - 2rem))",
      }}
    >
      {/* Arrow */}
      <div className="absolute -left-2 top-12">
        <div className="w-4  h-4 bg-foreground/50 transform rotate-45 "></div>
      </div>
      <Card className="rounded-2xl !border-0 text-card bg-foreground/50 backdrop-blur-sm drop-shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="font-bold text-xl  mb-3 leading-tight">{title}</h3>
            <div className="flex gap-2 mb-3 flex-wrap">
              {badge && (
                <span
                  className={clsx(
                    "px-3 py-1 rounded-full font-semibold text-xs",
                    badgeColor
                  )}
                >
                  {badge}
                </span>
              )}
              {expandedDetails?.updated && (
                <span className="text-xs !text-foreground  bg-gray-100 px-2 py-1 rounded-full">
                  Updated{" "}
                  <span className="font-semibold">
                    {expandedDetails.updated}
                  </span>
                </span>
              )}
            </div>
            <div className=" text-xs mb-4 flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {expandedDetails?.hours}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                {expandedDetails?.level}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {expandedDetails?.subtitles}
              </span>
            </div>
          </div>
          <div className=" text-card space-y-2 mb-4">
            {expandedDetails?.bullets?.slice(0, 3).map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2 group">
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className=" text-xs leading-relaxed  transition-colors">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
          <div className="pt-3 text-card border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="font-semibold text-xs">{rating}</span>
                    {ratingCount && (
                      <span className=" text-xs">({ratingCount})</span>
                    )}
                  </div>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-bold ">{price}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Default card with hover logic
  if (type === "default") {
    return (
      <div
        className="relative cursor-pointer group overflow-visible"
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card className="rounded-2xl h-[520px] border border-gray-200 hover:border-primary transition-all duration-500 transform hover:scale-105 overflow-hidden bg-white">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {badge && (
              <div className="absolute top-4 right-4">
                <span
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm",
                    badgeColor
                  )}
                >
                  {badge}
                </span>
              </div>
            )}
            {/* Wishlist/Save Button */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-gray-600 text-sm">♡</span>
              </button>
            </div>
          </div>

          <CardContent className="p-6 flex flex-col justify-between h-[calc(100%-208px)]">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-gray-600 text-sm line-clamp-2">{subtitle}</p>
              )}
              {authors && (
                <p className="text-gray-500 text-sm truncate">{authors}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {rating && (
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-sm">{rating}</span>
                    {ratingCount && (
                      <span className="text-gray-500 text-xs">
                        ({ratingCount})
                      </span>
                    )}
                  </div>
                )}
                {(hours || expandedDetails?.hours) && (
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {hours || expandedDetails?.hours}
                  </span>
                )}
              </div>

              {price && (
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">
                    {price}
                  </span>
                </div>
              )}

              <Button
                className={clsx(
                  "w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105",
                  isProductInCart
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-primary text-white hover:bg-primary/90"
                )}
                onClick={handleAddToCart}
                disabled={isProductInCart}
              >
                {isProductInCart
                  ? "✓ Added to Cart"
                  : expandedDetails?.buttonText || "Add to Cart"}
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Only show expanded panel if not in a carousel context - check if parent has overflow hidden */}
        {hovered && expandedDetails && (
          <div
            className="hidden lg:block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {ExpandedPanel}
          </div>
        )}
      </div>
    );
  }

  return null;
}
