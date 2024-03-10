export const useCartStore = defineStore('cart', () => {
 
  const items = useLocalStorage<CartItem[]>('cart',[])
  // 获取总数量
  const totalCount = computed(()=>items.value.reduce((a,b)=>a+b.count,0))
  // 总价格
  const totalPrice = computed(()=>items.value.reduce((a,b)=>a+b.count*b.price,0))
  // 添加购物车
  const addItems = (product:Product,count:number) => {

    // 先查看购物车里面有没有
    const cartItem  = items.value.find(item=>item.id===product.id)
    // 如果有 使其数量增加
    if (cartItem) {
      cartItem.count +=count
    }else{
      // 如果购物车里面没有则添加
      items.value.push({...product,count})
    }
  }
  // 删除商品
  const removeItems = (id:number) => {
    items.value = items.value.filter(item =>item.id!==id)
  }
  // 清空购物车
  const clearCart = () => {
    items.value = []
  }
  return {items,totalCount,totalPrice,addItems,removeItems,clearCart}
})
