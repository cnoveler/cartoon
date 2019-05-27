// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    isShow:false,
    search_txt:"",
    lists:[],
    reply:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ping();
  },
  ping:function(){
    var url="http://127.0.0.1:3000/ping";
    wx.request({
      url: url,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  // 评论框
  show:function(){
    this.setData({
      isShow:true
    })
  },
  //取消弹出框
  del:function(){
    this.setData({
      isShow:false
    })
  },
//  搜索
  wxSearchInput:function(e){
    this.setData({
      search_txt:e.detail.value
    })
    console.log(e.detail.value)
},
search:function(options){
  var search_txt=this.data.search_txt;
  if (search_txt!=""){
  var url="http://127.0.0.1:3000/search"
  wx.request({
    url: url,
    // data:{
    //   name:this.data.search_txt
    // },
    success:(res)=>{
      console.log(res.data.data)
      this.setData({
        lists:res.data.data,
        reply:true
      })
    }
  })
  }else{
    wx.showToast({
      title: '请输入内容',
      icon: 'none',
      duration: 1000
    })
  }
},
header:{
  'content-type':'application/json'
},

// 返回评论区
btn2:function(){
  this.setData({
    reply:false
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