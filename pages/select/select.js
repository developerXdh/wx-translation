//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    language: ['英语','日语', '韩语','法语','俄语','中文' ]
  },
  selectLanguage: function (event){
    app.globalData.language = event.currentTarget.dataset.text
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})