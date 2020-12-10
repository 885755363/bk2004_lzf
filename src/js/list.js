$(function () {
    // 请求商品列表数据
getGoodsList()
async function getGoodsList() {

// 请求商品列表
    const goodsList = await $.get('../server/getGoodsList.php', null, null, 'json')
    // console.log(goodsList)

    // 渲染页面
    let str = ''

    goodsList.list.forEach(item =>{
      str +=  `  
            <div>
                <img src="${item.缩略图}" alt="">
                <p  data-id="${ item.Id }">${item.product_content}</p>
                <p>￥${item.价格}</p>
                <ul>
                    <li><span style="background-color: rgb(214, 98, 34);"></span>#1</li>
                    <li><span style="background-color: rgb(194, 86, 104);"></span>#4</li>
                    <li><span style="background-color: rgb(200, 196, 84);"></span>#3</li>
                    <li><span style="background-color: rgb(223, 156, 64);"></span>#2</li>
                </ul>
            </div>
      `
    //   console.log(str)
    })
    $('.goodList > div').html(str)

}
})


// 渲染分类列表
$('.list > ul').on('click', 'li', function() {
    $.get('../server/getGoodsList.php', $(this).text(), null, 'json').then(res => {
        const list = res.list

        let str1 = ''
        list.forEach(item => {
            // console.log(item.class)
            // console.log(item.list.class)
            if ($(this).text() == item.class) {
                // console.log(123)
                str1 += `
                    <li>${item.标题}</li>
                `
                // console.log(str1)
                $('.goodList > ol').html(str1)
            }
        })
      })
})


// 渲染分类列表
$('.list > ol').on('click', 'li', function() {
    $.get('../server/getGoodsList.php', $(this).text(), null, 'json').then(res => {
        const list = res.list
        // console.log(list)
        let str2 = ''
        // console.log($(this).text())
        list.forEach(item => {
            // console.log(item.class)
            if ($(this).text() == item.标题) {
                // console.log(item.标题)
                // console.log($(this).text())
                str2 += `
                    <div>
                        <img src="${item.缩略图}" alt="">
                        <p  data-id="${ item.Id }">${item.product_content}</p>
                        <p>￥${item.价格}</p>
                        <ul>
                            <li><span style="background-color: rgb(214, 98, 34);"></span>#1</li>
                            <li><span style="background-color: rgb(194, 86, 104);"></span>#4</li>
                            <li><span style="background-color: rgb(200, 196, 84);"></span>#3</li>
                            <li><span style="background-color: rgb(223, 156, 64);"></span>#2</li>
                        </ul>
                    </div>
                `
                $('.goodList > div').html(str2)
                // console.log(str2)
            }
            // console.log(data-id)
        })
      })
})


// 点击列表页图片跳转详情
$('.goodList > div').on('click', 'p', function () {
    // console.log($(this).text())
    
    
    const goodList = $.get('../server/getGoodsList.php', null, null, 'json').then(res =>{
        const list = res.list

        // console.log(getDetails.list)
        list.forEach(item =>{
            
            if ($(this).text() == item.product_content) {
                const id = $(this).data('id')
                setCookie('goodList_id', id)
                // console.log(id)        
            }
        })
        window.location.href = '../html/details.html' //跳转详情页
    })
        
    

})
