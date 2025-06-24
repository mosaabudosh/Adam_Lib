export interface ProductCarouselModel {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    images?: any[];
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
    isInFavorite?: boolean;
    shope?: string;
    shopeId?: number;
    discount?: number;
    tax?: number;
    icons?: any[];
    units?: any[];
    selectedUnitId?: number;
}