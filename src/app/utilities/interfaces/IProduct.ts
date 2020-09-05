export interface IProduct {
    ID: number,
    Name: string,
    Alias: string,
    Image: string,
    MoreImages?: string,
    Description: string,
    Content?: string,
    HomeFlag?: boolean,
    HotFlag?: boolean,
    ViewCount?: number
}