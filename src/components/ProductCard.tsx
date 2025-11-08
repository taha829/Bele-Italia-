import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Product, useCart } from '../contexts/CartContext';
import { useTranslation } from '../hooks/useTranslation';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { t } = useTranslation();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <Card
      className="
        flex flex-col justify-between 
        overflow-hidden rounded-lg 
        border border-gray-100 bg-white 
        hover:shadow-md transition-all duration-300
      "
    >
      {/* صورة المنتج */}
      <div className="relative bg-gray-50 h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt ?? product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.dataset.fallback) {
              img.dataset.fallback = '1';
              img.src = '/estet/bag-small.svg';
            }
          }}
        />
        <Badge className="absolute top-2 right-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
          الأحدث
        </Badge>
      </div>

      {/* التفاصيل */}
      <CardContent className="px-3 py-2 flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h3>

        {product.description && (
          <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
        )}

        {/* السعر */}
        <div className="mt-2">
          <span className="text-base font-semibold text-yellow-700">
            {product.price} {t('currency')}
          </span>
        </div>
      </CardContent>

      {/* زر الإضافة */}
      <CardFooter className="px-3 pb-3 pt-0">
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddToCart}
          className="
            w-full border-yellow-400 hover:bg-yellow-50 
            text-yellow-700 hover:text-yellow-800 flex items-center justify-center gap-2
          "
        >
          <ShoppingCart className="h-4 w-4" />
          {t('addToCart')}
        </Button>
      </CardFooter>
    </Card>
  );
};
