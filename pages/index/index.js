//index.js
//获取应用实例
const app = getApp()
const utilMd5 = require("../../utils/md5.js");
Page({
  data: {
    content:"",
    result: "",
    allLanguage: {'英语':'en','日语':'jp','韩语':'kor','法语':'fra','俄语': 'ru','中文':'zh'},
    language: '英语',
  },
  onShow(){
    this.setData({
      language: app.globalData.language
    })
  },
  translate:function(event){
    let from = 'auto'
    let to = this.data.allLanguage[app.globalData.language]
    let q = event.detail.value.trim()
    if(q==='阿吾早啊'){
      q = '我爱你'
    }
    let salt = parseInt(Math.random() * (9999999999 - 1000000000) + 1000000000)
    let sign = utilMd5.md5(`20190409000286141${q}${salt}GVetx6Ep95Zv6ObsiBkK`)
    let url = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${q}&from=${from}&to=${to}&appid=20190409000286141&salt=${salt}&sign=${sign}`
    let that = this
    if (q){
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          that.setData({
            result: res.data.trans_result[0].dst
          })
          var history = wx.getStorageSync('history')||[]
          history.unshift({ query: event.detail.value, result: res.data.trans_result[0].dst })
          history.length = history.length > 10 ? 10 : history.length
          wx.setStorageSync('history', history)
        },
      })
    }
  },
})