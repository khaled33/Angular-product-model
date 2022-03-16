export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}export enum ProductActionType{
  GET_ALL_PRODUCT="[Product] Get All Product",
  GET_SELECTED_PRODUCT="[Product] Get Selected Product",
  GET_AVALAIBLE_PRODUCT="[Product] Get Avalible Product",
  SEARSH_PRODUCT="[Product] Get Avalible Product",
  ADD_NEW_PRODUCT="[Product] Add new  Product"
}

export interface ActionEventProduct{
  ProductActionType?:ProductActionType;
  Payload?:any;
}
export interface appDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
