// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uname:"",
      upwd:"",
      value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  uname:function(e){
    this.setData({
      uname:e.detail.value
    })
    
  },
  upwd:function(e){
    this.setData({
      upwd: e.detail.value
    })
  },
  btn:function(e){
    var uname=this.data.uname;
    var upwd=this.data.upwd;
    var reg=/^[A-Za-z0-9]{3,8}$/;
    if(!reg.test(uname)){
      wx.showToast({
        title: '用户名格式不正确',
        icon:'none',
        duration:1000
      });
      return;
    }
     if(!reg.test(upwd)){
      wx.showToast({
        title: '密码格式不正确',
        icon: 'none',
        duration:1000
      });
      return;
    }
    var url="http://127.0.0.1:3000/login?";
    url+="uname="+uname+"&upwd="+upwd;
    wx.request({
      url: url,
      success:(result)=>{
        if(result.data.code==1){
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration:1000
          });
          
          wx.switchTab({
            url: '../home/home',
          })
        }else{
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            duration:1000
          });
          this.setData({
            value: ''
          })
        }
      }
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