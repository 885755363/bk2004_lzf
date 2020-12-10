$(function () {


  const id = JSON.parse(window.localStorage.getItem('cart')) || []
  bindHtml()
  
      $('.cart').off().on('click', '.b > .jia', function (e) {
        const id2 = $(this).data('id')
        const n = id.filter(item => item.Id == id2) [0]
        // if (n.cart_number === 1) return
        n.cart_number = n.cart_number - 0 + 1 
        bindHtml()

        window.localStorage.setItem('cart',JSON.stringify(id))

      })

      $('.cart').on('click', '.b > .jian', function (e) {
        const id2 = $(this).data('id')
        const n = id.filter(item => item.Id == id2) [0]
        if (n.cart_number === 1) return
        n.cart_number = n.cart_number - 0 - 1 
        bindHtml()

        window.localStorage.setItem('cart',JSON.stringify(id))
      })

      // 购物车删除
      $('.cart').on('click', '.del > .d', function () {
        const btn3 = $(this).data('id')
        for (let i = 0; i < id.length; i++) {
          if (id[i].Id == btn3) {
              id.splice(i, 1)
              bindHtml()
              break
            }
        }
      
        window.localStorage.setItem('cart', JSON.stringify(id))
        
      })

      // 全选按钮
      $('.cart').on('click', '.aaa', function() {
          const type = $(this).prop('checked')
          if (type) {
            const j = $('.bbb')
            for (var i = 0; i < j.length; i++) {

              $('.bbb')[i].checked = type
            }
          } else {
            const j = $('.bbb')
            for (var i = 0; i < j.length; i++) {

              $('.bbb')[i].checked = false
            }
          }
          totalPrice()
      })
      $('.cart').on('click', '.bottom > input', function() {
          const type = $('.bottom > input').prop('checked')
          // const selectAll = cart.every(item => item.is_select === '1')
          // const flag = true
          const shuzu = []
          
          for( let i = 0; i<$('.bottom > input').length ; i++){
              const selectAll = $('.bottom > input')[i].checked

              shuzu.push(selectAll)
              
            }
            // console.log(shuzu)
           const s =  shuzu.every(item => {
              return item === true
              // console.log(456)
            })
            if (s) {
              $('.aaa').prop('checked', s)
              
            }else {
              
              $('.aaa').prop('checked', '')
            }
          // console.log(s)
          totalPrice()

      })

        // // 总价计算
        // let p = 0
        // id.forEach(item => {
        //   const price = item.cart_number * item.价格
        //     // console.log(item.cart_number * item.价格 )
        //     // const shuzu = []
        //   // console.log(item.价格)
        //     // if (item.Id === ) {

        //     // }  
        //     // for( let i = 0; i<$('.bottom > input').length ; i++){
        //         // const selectAll = $('.bottom > input')[i].checked

        //         // shuzu.push(selectAll)
                
        //       // }
        //       // console.log(shuzu)
        //     // shuzu.forEach(item => {
                
        //     //    if (item) {
                
        //     //      console.log(item)
        //     //    }
        //     // })
        //     bindHtml()
        // })




        const zong = $('.bottom > .c')[0]
        for (let i = 0; i < $('.bottom > .c').length; i++) {
            // console.log(i)
            const j = $('.bottom > .c')[i]
        }
      
      

function bindHtml() {
      let str = `
      <h3> <a href="../html/list.html"><继续购物</a> </h3>
        <p></p>
      <div class="div1">
      <h2>我的购物袋</h2>
              
      <div class="top">
          <input type="checkbox" class="aaa">
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
          <div class="bottom goods_item">
                      
          <input type="checkbox" class="bbb">
        
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

    str += `
    </div>
      <div class="div2">
          <div class="top">
            <p>总价</p>
            <p class="price">0</p>
          </div>
          <div class="bottom">
            <p><a href="../html/list.html">继续购物</a></p>
            <p class="z">立即付款</p>
          </div>
      </div>
    `
    $('.cart').html(str)
    totalPrice()
}


function totalPrice() {
  // console.log(123)
  let p = 0
  $('.goods_item').each((index, item) => {
    // console.log($(item).find('input').prop('checked'))
    if ($(item).find('input').prop('checked')) {
      p += $(item).find('.c').text() - 0
    }
  })
  // console.log(p)

  $('.div2 .top .price').text(p)
}


})

