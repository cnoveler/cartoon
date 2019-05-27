//app.js
//1.加载模块express pool.js
const express=require("express");
const pool=require("./pool");
//2.创建服务器端对象
var app=express();
//3.监听3000
app.listen(3000);
//4.指定静态目录 public
app.use(express.static("public"));
//5.加载跨域访问模块
const cors=require("cors");
//6.配置跨域访问模块 指定允许跨域访问的域名
//脚手架8080 允许
//origin  允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));
//6.1下载express-session 并且配置
const session=require("express-session");
app.use(session({
    secret:"128位随机字符",  //安全字符串
    resave:false,          //每次请求是否都更新数据
    saveUninitialized:true, //初始化时保存数据
    cookie:{
        maxAge:1000 * 60 * 60 * 8
    }
}));
//7.加载第三方模块body-parser
//body-parser针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser=require("body-parser");
//8.配置对特殊json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))

//功能一: home组件轮播图
app.get("/imageList",(req,res)=>{
    //1.将轮播图中所需图片 复制public/img
    //2.查询
    var list=[
        {id:1,img_url:"http://127.0.0.1:3000/img/s1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/s2.jpg"}
    ];
    res.send(list);
});

//推荐列表
app.get("/book",(req,res)=>{
    var sql="SELECT id,pic,title FROM me_book";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
});

// 榜单
app.get("/wjb",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){pno=1;}
    if(!pageSize){pageSize=5;}
    var sql=" SELECT id,pic,title,addr,num  FROM me_wjb LIMIT ?,?";
    
    var offset=(pno-1)*pageSize;
     pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})

//商品页面
app.get("/mshop",(req,res)=>{
    var sql="SELECT pid,img,title,price FROM me_mshop";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})

//分类页面
// 1.全部
app.get("/all",(req,res)=>{
    var sql="SELECT id,pic,title,addr,detail FROM me_fen";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})

//2.恋爱
app.get("/live",(req,res)=>{
    var sql="SELECT id,pic,title,addr,detail FROM me_fen1";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})
//3.冒险
app.get("/adv",(req,res)=>{
    var sql="SELECT id,pic,title,addr,detail FROM me_fen2";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})
//4.搞笑
app.get("/funny",(req,res)=>{
    var sql="SELECT id,pic,title,addr,detail FROM me_fen3";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})

//5.登录
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql=" SELECT id FROM me_login WHERE uname=? AND upwd=md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码错误"});
        }else{
            var id=result[0].id;
            req.session.uid=id;
            res.send({code:1,msg:"登录成功"});
        }
    })
})

//6.看漫画页面
app.get("/watch",(req,res)=>{
    var sql="SELECT mid,pic,title FROM me_kmh";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})


//评论区
app.get("/ping",(req,res)=>{
    var sql="SELECT lid,pic,title,time,name,uid FROM me_ping";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})


app.get("/mcart",(req,res)=>{
    var sql="SELECT pid,img,title,price,num FROM me_mcart";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})
// 查询
app.get("/search",(req,res)=>{
    var sql="SELECT title FROM me_ping";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})