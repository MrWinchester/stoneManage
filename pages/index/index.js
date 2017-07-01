//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用万石石材管家',
    userInfo: {},
    register:{
      name : '我要注册',
      type:'primary'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoRegister:function(){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
