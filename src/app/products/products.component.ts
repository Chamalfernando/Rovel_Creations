import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from './products.model'; // Update path as needed
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-products',
  imports: [CarouselModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  // @ViewChild('earringsCarousel') earringsCarousel!: ElementRef;
  // @ViewChild('pendantsCarousel') pendantsCarousel!: ElementRef;
  // @ViewChild('keytagsCarousel') keytagsCarousel!: ElementRef;

  ngOnInit() {
    // Add this to ngOnInit() for debugging
    //   console.log('Earrings:', this.getProductsByCategory('earrings'));
    //   console.log('Pendants:', this.getProductsByCategory('pendants'));
    //   console.log('Keytags:', this.getProductsByCategory('keytags'));
  }

  // products: Product[] = [
  //   // Earrings
  //   ...Array(6)
  //     .fill(null)
  //     .map((_, i) => ({
  //       id: 100 + i,
  //       name: `Earring Design ${i + 1}`,
  //       category: 'earrings',
  //       description: 'Handcrafted resin earrings with gold accents',
  //       imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Earrings+${
  //         i + 1
  //       }`,
  //     })),
  //   // Pendants
  //   ...Array(6)
  //     .fill(null)
  //     .map((_, i) => ({
  //       id: 200 + i,
  //       name: `Pendant Design ${i + 1}`,
  //       category: 'pendants',
  //       description: 'Luxury resin pendants with intricate designs',
  //       imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Pendants+${
  //         i + 1
  //       }`,
  //     })),
  //   // Keytags
  //   ...Array(6)
  //     .fill(null)
  //     .map((_, i) => ({
  //       id: 300 + i,
  //       name: `Key Tag ${i + 1}`,
  //       category: 'keytags',
  //       description: 'Premium resin key tags with metallic finishes',
  //       imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Key+Tag+${
  //         i + 1
  //       }`,
  //     })),
  // ];

  // getProductsByCategory(category: string): Product[] {
  //   return this.products.filter((product) => product.category === category);
  // }

  // scroll(carouselType: string, direction: number): void {
  //   const carousel = this.getCarouselElement(carouselType);
  //   if (!carousel) return;

  //   const card = carousel.querySelector('.carousel-card') as HTMLElement;
  //   if (!card) return;

  //   const cardStyle = window.getComputedStyle(card);
  //   const marginRight = parseFloat(cardStyle.marginRight);
  //   const scrollAmount = card.offsetWidth + marginRight;

  //   carousel.scrollBy({
  //     left: direction * scrollAmount,
  //     behavior: 'smooth',
  //   });
  // }

  // private getCarouselElement(carouselType: string): HTMLElement | null {
  //   switch (carouselType) {
  //     case 'earrings':
  //       return this.earringsCarousel?.nativeElement;
  //     case 'pendants':
  //       return this.pendantsCarousel?.nativeElement;
  //     case 'keytags':
  //       return this.keytagsCarousel?.nativeElement;
  //     default:
  //       return null;
  //   }
  // }

  earrings: Product[] = [];
  pendants: Product[] = [];
  keytags: Product[] = [];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    this.earrings = Array(6)
      .fill(null)
      .map((_, i) => ({
        id: 100 + i,
        name: `Earring Design ${i + 1}`,
        category: 'earrings',
        description: 'Handcrafted resin earrings with gold accents',
        imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Earrings+${
          i + 1
        }`,
      }));

    this.pendants = Array(6)
      .fill(null)
      .map((_, i) => ({
        id: 200 + i,
        name: `Pendant Design ${i + 1}`,
        category: 'pendants',
        description: 'Luxury resin pendants with intricate designs',
        imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Pendants+${
          i + 1
        }`,
      }));

    this.keytags = Array(6)
      .fill(null)
      .map((_, i) => ({
        id: 300 + i,
        name: `Key Tag ${i + 1}`,
        category: 'keytags',
        description: 'Premium resin key tags with metallic finishes',
        imageUrl: `https://placehold.co/300x300/0a0a0a/d4af37?text=Key+Tag+${
          i + 1
        }`,
      }));
  }
}
