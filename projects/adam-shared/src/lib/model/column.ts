import { DataTypes } from "../enum/enums";

export interface Column {
    field: string;
    header?: string;
    dataType?: DataTypes;
    format?: string;
    visible?: boolean;
    isHasImage?: boolean;
    imagePath?: string;
    width?: string;
    sortable?: boolean;
    class?: string;
}
