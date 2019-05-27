// pages/wj/wj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pno: 0,
    pageSize: 5,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },

  getList: function () {

    var pno = this.data.pno + 1;
    var pageSize = this.data.pageSize;
    var url = "http://127.0.0.1:3000/wjb? pno=" + pno;

    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: url,
      method: "GET",
      success: (res) => {
        var row = this.data.list.concat(res.data.data);
        console.log(row)
        this.setData({
          list: row,
          pno: pno,

        });
        wx.hideLoading();
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


    this.getList();



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})