import { MenuItem } from "primeng/api";

export interface HeaderDataModel {
    userName?: string;
    logoApp?: string | undefined;
    avatarImage?: string | undefined;
    isViewMenu?: boolean;
    isViewLogo?: boolean;
    items?: MenuItem[];
    icons?: MenuItem[];
}