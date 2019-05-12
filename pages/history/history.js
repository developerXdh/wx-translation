//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    history:[]
  },
  onShow(){
    var that = this
    this.setData({ history: wx.getStorageSync('history') })
  },
  clear:function(){
    console.log('hhh')
    wx.clearStorageSync()
    this.setData({ history: wx.getStorageSync('history') })
  }
})