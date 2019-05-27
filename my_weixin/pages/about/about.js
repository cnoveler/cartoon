// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
 
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.all();
    
  },
  all:function(){
    var u="http://127.0.0.1:3000/all"
    wx.request({
      url: u,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  live:function(){
    var u="http://127.0.0.1:3000/live"
    wx.request({
      url: u,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  adv:function(){
    var u="http://127.0.0.1:3000/adv"
    wx.request({
      url: u,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  funny:function(){
    var u="http://127.0.0.1:3000/funny"
    wx.request({
      url: u,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  jz: function () {
    wx.showToast({
      title: '没有更多',
      icon: 'none',
      duration: 1000
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})