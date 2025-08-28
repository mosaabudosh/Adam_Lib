import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrientationCarouselType, ProductCarouselModel } from 'adam-shared';

@Component({
  selector: 'app-adam-carousel',
  templateUrl: './adam-carousel.component.html',
  styleUrl: './adam-carousel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamCarouselComponent implements OnInit {

  products: ProductCarouselModel[] = [];
  skeletonsProducts: ProductCarouselModel[] = [];
  public get orientationCarouselType(): typeof OrientationCarouselType {
    return OrientationCarouselType;
  }

  advertisings: any[] = [];

  ngOnInit(): void {
    this.advertisings = [
      {
        advertisingId: 1,
        image: 'assets/images/ad1.png'
      },
      {
        advertisingId: 2,
        image: 'assets/images/ad2.png'
      },
      {
        advertisingId: 3,
        image: 'assets/images/ad3.png'
      },
      {
        advertisingId: 4,
        image: 'assets/images/ad4.png'
      },
    ]
    this.products = [
      {
        shopItemId: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: true
      },
      {
        shopItemId: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        isInFavorite: true
      },
      {
        shopItemId: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        isInFavorite: true
      },
      {
        shopItemId: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        isInFavorite: false
      },
      {
        shopItemId: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1011',
        code: '4920nnc2d',
        name: 'Green Earbuds',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/green-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1013',
        code: 'fldsmn31b',
        name: 'Grey T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/grey-t-shirt.jpg',
        price: 48,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 3,
        isInFavorite: false
      },
      {
        shopItemId: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/headphones.jpg',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1015',
        code: 'vb34btbg5',
        name: 'Light Green T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/light-green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 34,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: true
      },
      {
        shopItemId: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        isInFavorite: true
      },
      {
        shopItemId: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        isInFavorite: true
      },
      {
        shopItemId: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        isInFavorite: false
      },
      {
        shopItemId: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1011',
        code: '4920nnc2d',
        name: 'Green Earbuds',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/green-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      },
      {
        shopItemId: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1013',
        code: 'fldsmn31b',
        name: 'Grey T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/grey-t-shirt.jpg',
        price: 48,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 3,
        isInFavorite: false
      },
      {
        shopItemId: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/headphones.jpg',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5,
        isInFavorite: false
      },
      {
        shopItemId: '1015',
        code: 'vb34btbg5',
        name: 'Light Green T-Shirt',
        descreption: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/light-green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 34,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        isInFavorite: false
      }
    ];
    setTimeout(() => {
      this.skeletonsProducts = this.products;
    }, 5000);
  }

  onAddToCart(event: any) {
    console.log('onAddToCart => ', event);
  }

  onAddToFavorite(event: any) {
    console.log('onAddToFavorite => ', event);
  }

  onCardClick(event: any) {
    console.log('onCardClick => ', event);
  }

  onPageChange(event: any) {
    console.log('onPageChange => ', event);
  }
}
