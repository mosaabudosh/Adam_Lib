import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataViewComponent {
  products: any[] = [];
  sortOptions: any[] = [];
  emptyProducts: any[] = [];

  constructor() {
    this.fillProductsData();
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  fillProductsData() {
    let imgUrl = 'https://primefaces.org/cdn/primeng/images/demo/product/';
    setTimeout(() => {
      this.products = [
        {
          id: '1000',
          name: 'Bamboo Watch',
          description: 'Product Description',
          images: [imgUrl + 'black-watch.jpg', imgUrl + 'bamboo-watch.jpg', imgUrl + 'blue-t-shirt.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 65,
          category: 'Accessories',
          quantity: 1,
          rating: 5,
          shope: 'Shope 1',
          shopeId: 1,
          isInFavorite: false,
          discount: 10,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1001',
          name: 'Black Watch',
          description: 'Product Description',
          images: [imgUrl + 'black-watch.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 72,
          category: 'Accessories_1',
          quantity: 1,
          rating: 4,
          shope: 'Shope 2',
          shopeId: 2,
          isInFavorite: false,
          discount: 10,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1002',
          name: 'Blue Band',
          description: 'Product Description',
          images: [imgUrl + 'blue-band.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 79,
          category: 'Fitness',
          quantity: 1,
          rating: 3,
          shope: 'Shope 2',
          shopeId: 2,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1003',
          name: 'Blue T-Shirt',
          description: 'Product Description',
          images: [imgUrl + 'blue-t-shirt.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 29,
          category: 'Clothing',
          quantity: 1,
          rating: 5,
          shope: 'Shope 2',
          shopeId: 2,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1004',
          name: 'Bracelet',
          description: 'Product Description',
          images: [imgUrl + 'bracelet.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 15,
          category: 'Accessories_2',
          quantity: 1,
          rating: 4,
          shope: 'Shope 1',
          shopeId: 1,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1005',
          name: 'Brown Purse',
          description: 'Product Description',
          images: [imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 120,
          category: 'Accessories_3',
          quantity: 1,
          rating: 4,
          shope: 'Shope 3',
          shopeId: 3,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1006',
          name: 'Chakra Bracelet',
          description: 'Product Description',
          images: [imgUrl + 'chakra-bracelet.jpg', imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 32,
          category: 'Accessories_4',
          quantity: 1,
          rating: 3,
          shope: 'Shope 4',
          shopeId: 4,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1007',
          name: 'Galaxy Earrings',
          description: 'Product Description',
          images: [imgUrl + 'galaxy-earrings.jpg', imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 34,
          category: 'Accessories_5',
          quantity: 1,
          rating: 5,
          shope: 'Shope 4',
          shopeId: 4,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1008',
          name: 'Game Controller',
          description: 'Product Description',
          images: [imgUrl + 'game-controller.jpg', imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 99,
          category: 'Electronics',
          quantity: 1,
          rating: 4,
          shope: 'Shope 1',
          shopeId: 1,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1009',
          name: 'Gaming Set',
          description: 'Product Description',
          images: [imgUrl + 'gaming-set.jpg', imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 299,
          category: 'Electronics_2',
          quantity: 1,
          rating: 3,
          shope: 'Shope 5',
          shopeId: 5,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1010',
          name: 'Gold Phone Case',
          description: 'Product Description',
          images: [imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg', imgUrl + 'bamboo-watch.jpg'],
          price: 24,
          category: 'Accessories_6',
          quantity: 1,
          rating: 4,
          shope: 'Shope 4',
          shopeId: 4,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1011',
          name: 'Green Earbuds',
          description: 'Product Description',
          images: [imgUrl + 'green-earbuds.jpg', imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg'],
          price: 89,
          category: 'Electronics_3',
          quantity: 1,
          rating: 4,
          shope: 'Shope 4',
          shopeId: 4,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1012',
          name: 'Green T-Shirt',
          description: 'Product Description',
          images: [imgUrl + 'green-t-shirt.jpg', imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg'],
          price: 49,
          category: 'Clothing',
          quantity: 1,
          rating: 5,
          shope: 'Shope 5',
          shopeId: 5,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1013',
          name: 'Grey T-Shirt',
          description: 'Product Description',
          images: [imgUrl + 'grey-t-shirt.jpg', imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg'],
          price: 48,
          category: 'Clothing',
          quantity: 1,
          rating: 3,
          shope: 'Shope 5',
          shopeId: 5,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1014',
          name: 'Headphones',
          description: 'Product Description',
          images: [imgUrl + 'headphones.jpg', imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg'],
          price: 175,
          category: 'Electronics_4',
          quantity: 1,
          rating: 5,
          shope: 'Shope 3',
          shopeId: 3,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        },
        {
          id: '1015',
          name: 'Light Green T-Shirt',
          description: 'Product Description',
          images: [imgUrl + 'light-green-t-shirt.jpg', imgUrl + 'gold-phone-case.jpg', imgUrl + 'brown-purse.jpg'],
          price: 49,
          category: 'Clothing',
          quantity: 1,
          rating: 4,
          shope: 'Shope 2',
          shopeId: 2,
          isInFavorite: false,
          discount: 0,
          tax: 0.16,
          icons: [],
          units: [],
          selectedUnitId: null
        }
      ];
      this.products.forEach(product => {
        product.image = product.images[0];
      })
      this.products = [...this.products];
    }, 50);

  }

}
