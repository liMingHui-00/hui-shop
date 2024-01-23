// 商品信息
interface Product{
  id:number
  name:string
  description:string
  price:number
  // 库存
  stock:number
  image_url:string
  category_id:number
}
// 分页信息
interface Page<T>{
  data:Array<T>
  totalItems:number
  totalPage:number
  currentPage:number
  itemsPerPage:number
}