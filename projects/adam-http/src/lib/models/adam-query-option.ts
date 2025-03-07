import { SortDirection } from "../enum/enum";

export interface PagingParameter {
    pageSize: number;
    pageNumber: number;
    sortBy?: string;
    sortDirection?: SortDirection;
}
export interface keyValue {
    [key: string]: any;
}

export interface Parameter {
    // pagingParameters?: PagingParameter;
    queryParameters?: keyValue
}