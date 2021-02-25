export interface IBanner {
    bannerImageUrl: string;
    bannerImageAlt: string;
    isActive: boolean;
    order:number;
    id:string;
};

export interface ICategory {
    name?: string;
    key?:string;
    description?:string;
    enabled?:boolean;
    order?: number;
    imageUrl?: string;
    id?: string;
}
