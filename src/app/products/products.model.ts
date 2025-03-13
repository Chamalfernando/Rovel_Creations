export interface Product {
  id: number;
  name: string;
  category: 'keytags' | 'pendants' | 'earrings';
  description: string;
  imageUrl: string;
}
