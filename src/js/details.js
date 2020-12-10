$(function () {
    // 请求商品详情页数据
    getDetails()
    const id = getCookie('goodList_id')
    async function getDetails() {
 
// 请求商品详情
    let str = ''
    const getDetails = await $.get('../server/getGoodsList.php', null, null, 'json').then(res => {
        const list = res.list
        // console.log(list)


        list.forEach(item =>{ 
            // console.log(list)

            if (item.Id == id) {
                // console.log(123)
                
                str =  `  
                    <div class="left">
                        <ol>
                            <li><img src="${item.缩略图}"></li>
                            <li><img src="${item.缩略图}"></li>
                        </ol>
            
                        <ul>
                            <li><img src="${item.缩略图}"></li>
                            <li><img src="${item.缩略图}"></li>
                        </ul>
                    </div>
                    <div class="right">
                        <h2>${item.product_content}</h2>
                        <p>POWER FABRIC CONCEALER</p>
                        <span>【精准遮瑕隐匿细小瑕疵】 尤其适合遮盖黑眼圈、痘印等小瑕疵</span>
                        <span>【丝滑易延展不干不卡纹】 内含护肤精油，质地丝滑易延展，拒绝卡粉特点：修正肤色，舒适，焕彩功效：定制化肤色修正方案</span>
                        <span>类型：遮瑕露</span>
                        <a href="">查看更多>></a>
                        <ul>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                        </ul>
                        <div>
                            <span>${item.价格}</span>
                            <p class="btn1" data-id="${item.Id}">加入购物袋</p>
                            <p class="btn2" data-id="${item.Id}">立即购买</p>
                        </div>
                    </div>
                  `
                }
                //   console.log(str)
        })
        $('.details').html(str)

    })
    
    let str1 = ''
    str1 = `
        <div>详情页</div>
    `
    $('abc').html(str1)
    // console.log(str1)
    //  添加 数据 到 local storage 
    $('.details').on('click', '.right > div > .btn1', function () {
        const id = $(this).data('id')
        const getDetails = $.get('../server/getGoodsList.php', null, null, 'json').then(res => {
            // console.log(res)
            const list = res.list

            const info = list.filter(item => item.Id == id)[0]
            console.log(info)
            // list.forEach(item =>{
                // console.log(item)
                // console.log(item.Id)
                // // 4-2. 拿到 localStorage 里面有没有数组

                const cart = JSON.parse(window.localStorage.getItem('cart')) || []
                const flag = cart.some(item => item.Id == id)
                if (flag) {
                // 4-4. 如果有这个数据拿到这个信息
                const cart_goods = cart.filter(item => item.Id == id)[0]
                cart_goods.cart_number = cart_goods.cart_number - 0 + 1
                // console.log(cart_goods)
                } else {
                // // 拿到当前商品 id 所属的信息
                const info = list.filter(item => item.Id == id)[0]
                info.cart_number = 1
                cart.push(info)
                }
                // console.log(cart)
                window.localStorage.setItem('cart', JSON.stringify(cart))
            })
        
    })


    // 点击购买
    $('.details').on('click', '.right > div > .btn2', function () {
        console.log(123)
        const id = $(this).data('id')
        const getDetails = $.get('../server/getGoodsList.php', null, null, 'json').then(res => {
            // console.log(res)
            const list = res.list

            const info = list.filter(item => item.Id == id)[0]
            console.log(info)
            // list.forEach(item =>{
                // console.log(item)
                // console.log(item.Id)
                // // 4-2. 拿到 localStorage 里面有没有数组

                const cart = JSON.parse(window.localStorage.getItem('cart')) || []
                const flag = cart.some(item => item.Id == id)
                if (flag) {
                // 4-4. 如果有这个数据拿到这个信息
                const cart_goods = cart.filter(item => item.Id == id)[0]
                // cart_goods.cart_number = cart_goods.cart_number - 0 + 1
                // console.log(cart_goods)
                } else {
                // // 拿到当前商品 id 所属的信息
                const info = list.filter(item => item.Id == id)[0]
                info.cart_number = 1
                cart.push(info)
                }
                // console.log(cart)
                window.localStorage.setItem('cart', JSON.stringify(cart))
                window.location.href = '../html/cart.html' //跳转详情页
            })
    })
}


})




