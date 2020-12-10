$(function () {
  // 请求商品详情页数据
  const id = JSON.parse(window.localStorage.getItem('cart'))
  // console.log(id.价格)
  let str = `
    <h2>我的购物袋</h2>
            
    <div class="top">
        <input type="checkbox">
        <span>全选</span>
        <span>产品</span>
        <span>单价</span>
        <span>数量</span>
        <span>价格</span>
    </div>
  
  
  `
  
  
  id.forEach(item => {
    // console.log(item)
   
    str += `
        <div class="bottom">
                    
        <input type="checkbox">
      
      <p class="img"><img src="${item.缩略图}" alt=""></p>
    
      <div>
          <span>${item.product_content}</span>
          <p class="color">
              <span></span>
              #2适合白皙皮肤色    
          </p>
          <p class="del">
              <span>修改</span>
              <span class="d" data-id="${item.Id}">删除</span>
          </p>
      </div>
      
      <p class="a">${item.价格}</p>
      <p class="b">
          <span class="jian" data-id="${item.Id}">-</span>
          <span class="nm">${item.cart_number}</span>
          <span class="jia" data-id="${item.Id}">+</span>
      </p>
      <p class="c">${item.cart_number  * item.价格}</p>
        </div>
    `
  
    $('.cart > .div1').html(str)
    var id1 = item.Id
      $('.cart').off().on('click', '.b > .jia', function (e) {
        const id2 = $(this).data('id')
        const n = id.filter(item => item.Id == id2) [0]
        // if (n.cart_number === 1) return
        n.cart_number = n.cart_number - 0 + 1 
        let str = `
        <h2>我的购物袋</h2>
                    
        <div class="top">
          <input type="checkbox">
          <span>全选</span>
          <span>产品</span>
          <span>单价</span>
          <span>数量</span>
          <span>价格</span>
        </div>
        `
        id.forEach(item => {

          str += `
            <div class="bottom">
                            
            <input type="checkbox">
              
            <p class="img"><img src="${item.缩略图}" alt=""></p>
            
            <div>
              <span>${item.product_content}</span>
              <p class="color">
                <span></span>
                #2适合白皙皮肤色    
              </p>
              <p class="del">
                <span>修改</span>
                <span class="d" data-id="${item.Id}">删除</span>
              </p>
            </div>
              
            <p class="a">${item.价格}</p>
            <p class="b">
              <span class="jian" data-id="${item.Id}">-</span>
              <span class="nm">${item.cart_number}</span>
              <span class="jia" data-id="${item.Id}">+</span>
            </p>
            <p class="c">${item.cart_number  * item.价格}</p>
            </div>
          `
          
            })
            $('.cart > .div1').html(str)

            window.localStorage.setItem('cart',JSON.stringify(id))


      })

      $('.cart').on('click', '.b > .jian', function (e) {
        const id2 = $(this).data('id')
        const n = id.filter(item => item.Id == id2) [0]
        if (n.cart_number === 1) return
        n.cart_number = n.cart_number - 0 - 1 
        let str = `
        <h2>我的购物袋</h2>
                    
        <div class="top">
          <input type="checkbox">
          <span>全选</span>
          <span>产品</span>
          <span>单价</span>
          <span>数量</span>
          <span>价格</span>
        </div>
        `
        id.forEach(item => {

          str += `
            <div class="bottom">
                            
            <input type="checkbox">
              
            <p class="img"><img src="${item.缩略图}" alt=""></p>
            
            <div>
              <span>${item.product_content}</span>
              <p class="color">
                <span></span>
                #2适合白皙皮肤色    
              </p>
              <p class="del">
                <span>修改</span>
                <span class="d" data-id="${item.Id}">删除</span>
              </p>
            </div>
              
            <p class="a">${item.价格}</p>
            <p class="b">
              <span class="jian" data-id="${item.Id}">-</span>
              <span class="nm">${item.cart_number}</span>
              <span class="jia" data-id="${item.Id}">+</span>
            </p>
            <p class="c">${item.cart_number  * item.价格}</p>
            </div>
          `
          
            })
            $('.cart > .div1').html(str)

            window.localStorage.setItem('cart',JSON.stringify(id))
      })

      // 购物车删除
      $('.cart').on('click', '.del > .d', function () {
        
        let str = `
        <h2>我的购物袋</h2>
        
        <div class="top">
        <input type="checkbox">
        <span>全选</span>
        <span>产品</span>
        <span>单价</span>
        <span>数量</span>
        <span>价格</span>
        </div>
        
        
        `
      id.forEach(item => {
          // console.log(id)
          const btn3 = $(this).data('id')
          for (let i = 0; i < id.length; i++) {
            if (id.Id == btn3) {
              cart.splice(i, 1)
              break
            }
          }
      
        str += `
            <div class="bottom">
                        
            <input type="checkbox">
          
          <p class="img"><img src="${item.缩略图}" alt=""></p>
        
          <div>
              <span>${item.product_content}</span>
              <p class="color">
                  <span></span>
                  #2适合白皙皮肤色    
              </p>
              <p class="del">
                  <span>修改</span>
                  <span class="d" data-id="${item.Id}">删除</span>
              </p>
          </div>
          
          <p class="a">${item.价格}</p>
          <p class="b">
              <span class="jian" data-id="${item.Id}">-</span>
              <span class="nm">${item.cart_number}</span>
              <span class="jia" data-id="${item.Id}">+</span>
          </p>
          <p class="c">${item.cart_number  * item.价格}</p>
            </div>
        `
      
        $('.cart > .div1').html(str)

    })
        
        window.localStorage.setItem('cart', JSON.stringify(id))
  })
      
  })

  


})

