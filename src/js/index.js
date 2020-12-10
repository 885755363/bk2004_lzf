// jQuery 的入口函数
$(function () {

  // 1. 根据 cookie 中的信息
  // 判断用户信息面板中显示哪一个内容
  const nickname = getCookie('nickname')

  // 2. 根据 nickname 信息进行判断
  if (nickname) {
    // 表示存在, 不是 undefined
    $('.off').addClass('hide')
    $('.on').removeClass('hide').text(`欢迎您: ${nickname}`)
  } else {
    // 表示不存在, 是 undefined
    $('.off').removeClass('hide')
    $('.on').addClass('hide')
  }
})


// 轮播图banner
var mySwiper = new Swiper ('.banner > .swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    pagination :{
        el: '.swiper-pagination',
        clickable :true,
    },

    autoplay: {
        delay: 3000,//3秒切换一次
    },
    
    // allowTouchMove:false//鼠标拖动事件取消
  })

 // 轮播图banner2
var mySwiper = new Swiper ('.banner2 > .swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination :{
        el: '.swiper-pagination',
        clickable :true,
    },

    autoplay: {
        delay: 3000,//3秒切换一次
    },
    
    // allowTouchMove:false//鼠标拖动事件取消
  })


//登录与注册点击事件
$('.head > ol').on('click', 'li.log', function () {

    $('.login').css('display','block')
} )
$('.login > span').on('click', function () {
    $('.login').css('display','none')
})

// 点击创建账户弹出注册框
$('.login > div > button').on('click', function () {
    // 隐藏login
    $('.login').css('display','none')
    $('.sign').css('display','block')
})

//点击注册页面的错号隐藏注册弹框
$('.sign > span').on('click', function () {
    $('.sign').css('display','none')
}) 


// 点击全部产品跳转列表页
$('.nav > ul > .all').on('click', function () {
  console.log(123)
    window.location.href = '../html/list.html'
})


// 验证输入账号密码
// var r1 = /^1[3456789]d{9}$/ //手机号正则
// var r2 = /^[0-9a-zA-Z]{6,16}$/ //密码正则
// var iphone = $('.login > form > .iphone').val()
// var password = $('.login > form > .password').val()

// $('.login > form > input').on('blur', function () {
//     // 判断
//     if (!(r1.test(iphone)) || !(r2.test(password))) {
//         $('.login > form > .active').css('display', 'block')
//     } else {

//     }
// })




  
 $.validator.addMethod('zidingyiyouxiang', function (value, ele, param) {
      // value, 表示使用这个规则的表单填写的内容
      // ele, 就是这个表单元素
      // param, 就是你使用这个规则的时候传递的参数
  // console.log(value)
      const reg = /^1[3456789]d{9}$/
      if (!(reg.test(value))) {
        return true
      } else {
        return false
      }

    }, '请正确输入账户和密码!')


    $('#login').validate({
      // rules 表示这个表单的验证规则
      rules: {
        // 你要验证的表单的 name 属性 : 你要使用的验证规则
        iphone: 'zidingyiyouxiang',
        // 你要验证的表单的 name 属性 : { 你要使用的多个验证规则 }
        password: {
          required: true,
        },
      },
      // messages 表示这个表单的验证失败提示文本
      messages: {
        password: {
          required: '请填写您的密码信息 -_-',
          minlength: '最少需要填写 5 个字符'
        },
        // repeat: {
        //   equalTo: '两次填写密码不一致'
        // }
      },
      // 表单验证通过以后会执行的函数
      submitHandler (form) {
        // 2. 进行表单提交
        // 2-1. 拿到用户填写的内容
        const info = $(form).serialize()
        console.log(info)
        // 2-2. 发送请求到后端, 准备接受结果
      $.post('../server/login.php', info, null, 'json').then(res => {
        if (res.code === 0) {
          // 登录失败
          $('.login > form > span').css('display', 'block')
        } else if (res.code === 1) {
          // 3-2. 登录成功, 跳转页面, 存储 cookie
          // 为了在首页还需要使用
          setCookie('nickname', res.nickname)
          // 跳转页面
          // console.log(123)

          window.location.href = './index.html'
        }
      })

      }
    })


 
 