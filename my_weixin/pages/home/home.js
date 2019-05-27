// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {img_url:"http://127.0.0.1:3000/img/s1.png"},
        {img_url:"http://127.0.0.1:3000/img/s2.jpg"}
      ],
      autoplay:true,
      interval:2000,
      indicatorDots:true,
      book:[]
  },
  // 轮播图的跳转
  shop: function () {
    wx.navigateTo({
      url: "../cart/cart",
    })
  },
  // 跳转到search
  search:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  // 榜单的跳转
  wj:function(){
    wx.navigateTo({
      url: '../wj/wj',
    })
  },
  rq:function(){
    wx.navigateTo({
      url: '../rq/rq',
    })
  },
  // 跳转到看漫画页面
  jump1:function(){
    wx.navigateTo({
      url: '../watch/watch',
    })
  },
  //跳转到分类页
  about:function(){
   wx.switchTab({
     url: '../about/about',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    this.book();
    
  },
  loadMore:function(){
    var u="http://127.0.0.1:3000/imagelist";
    wx.request({
      url: u,
      
    })
  },
  book:function(){
    var u="http://127.0.0.1:3000/book";
    wx.request({
      url: u,
      success:((result)=>{
      
        this.setData({
          book:result.data.data
        })
      })
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