// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    totalPrice:0,
    selectAll:false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.list();
  },
  list:function(){
    var url="http://127.0.0.1:3000/mcart"
    wx.request({
      url: url,
      success:(res)=>{
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  // 单选
  selectList:function(e){
    const index=e.currentTarget.dataset.index;
    var list=this.data.list;
    const selected=list[index].selected;
    list[index].selected=!selected;
    this.setData({
      list:list
    });
    this.getTotalPrice();
  },
  // 全选
  selectAll:function(e){
    var selectAll=this.data.selectAll;
    selectAll=!selectAll;
    var list=this.data.list;
    for(var i=0;i<list.length;i++){
      list[i].selected=selectAll;
      
      }
      
      this.setData({
        selectAll:selectAll,
        list:list
      });
      this.getTotalPrice();
    
  },
  // 总价
  getTotalPrice:function(){
    var list=this.data.list;
    var total=0;
    for( var i=0;i<list.length;i++){
      if(list[i].selected){
        total+=list[i].num*list[i].price;
      }
    }
    this.setData({
      list:list,
      totalPrice:total.toFixed(2)
    })
  },
  // 数量增加
  add:function(e){
    const index=e.currentTarget.dataset.index;
    var list=this.data.list;
    var num=list[index].num;
    num+=1;
    list[index].num=num;
    this.setData({
      list:list
    });
    this.getTotalPrice();
  },
  // 数量减少
  rec:function(e){
    const index=e.currentTarget.dataset.index;
    var list=this.data.list;
    var num=list[index].num;
    if(num<=1){
      return false;
    }
    num=num-1;
    list[index].num=num;
    this.setData({
      list:list
    });
    this.getTotalPrice();
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