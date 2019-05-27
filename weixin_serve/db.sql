#设置客户端连接服务器端使用utf8
SET NAMES UTF8;
#丢弃指定的数据库，如果存在的话
DROP DATABASE IF EXISTS me;
#创建新的数据库设置存储编码为UTF8
CREATE DATABASE me CHARSET=UTF8;
#进入刚刚创建的数据库
USE me;



#创建保存漫画书图片的表
CREATE TABLE me_book(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255)
   
);
INSERT INTO me_book VALUES(null,'t5.jpg','紫罗兰');
INSERT INTO me_book VALUES(null,'t6.jpg','野良神');
INSERT INTO me_book VALUES(null,'t7.jpg','摩卡少女樱');
INSERT INTO me_book VALUES(null,'t8.jpg','摩卡少女樱');
INSERT INTO me_book VALUES(null,'t9.jpg','未来都市');
INSERT INTO me_book VALUES(null,'t10.jpg','元气少女缘结神');
INSERT INTO me_book VALUES(null,'t11.jpg','食戟之灵');
INSERT INTO me_book VALUES(null,'t12.jpg','未来都市');
INSERT INTO me_book VALUES(null,'t13.jpg','元气少女缘结神');

CREATE TABLE me_wjb(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255),
    addr    VARCHAR(255),
    num     VARCHAR(25)
);
INSERT INTO me_wjb  VALUES(null,'t5.jpg','紫罗兰永恒花园','晓佳奈','01');
INSERT INTO me_wjb  VALUES(null,'t9.jpg','未来都市','木乃桧','02');
INSERT INTO me_wjb  VALUES(null,'t6.jpg','野良神','晓佳奈','03');
INSERT INTO me_wjb  VALUES(null,'t13.jpg','元气少女缘结神','铃木JULIETTA','05');
INSERT INTO me_wjb  VALUES(null,'t11.jpg','食戟之灵','晓佳奈','06');
INSERT INTO me_wjb  VALUES(null,'t8.jpg','摩卡少女樱','CLAMP','07');
INSERT INTO me_wjb  VALUES(null,'t5.jpg','紫罗兰永恒花园','晓佳奈','08');
INSERT INTO me_wjb  VALUES(null,'t9.jpg','未来都市','木乃桧','09');
INSERT INTO me_wjb  VALUES(null,'t6.jpg','野良神2','晓佳奈','10');

CREATE TABLE me_mshop(
    pid  INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255),
    title VARCHAR(255),
    price DECIMAL(10,2)
);
INSERT INTO me_mshop VALUES(null,'sh1.jpg',"全职高手文件袋",4.99);
INSERT INTO me_mshop VALUES(null,'sh2.jpg','全职高手夹子',2.00);
INSERT INTO me_mshop VALUES(null,'sh3.jpg','全职高手手工皂',66.00);
INSERT INTO me_mshop VALUES(null,'sh4.jpg','美少女战士项链',32.00);
INSERT INTO me_mshop VALUES(null,'sh5.jpg','魔卡少女樱马克杯',18.00);
INSERT INTO me_mshop VALUES(null,'sh6.jpg','星之杖硅胶弹力挂绳',5.00);

#隐藏的all
CREATE TABLE me_fen(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255),
    addr    VARCHAR(255),
    detail    VARCHAR(255)
);
INSERT INTO me_fen  VALUES(null,'t5.jpg','紫罗兰永恒花园','晓佳奈','某个大陆的、某个时代。大陆南北分割的战争结束了，世界走向了和平。');
INSERT INTO me_fen  VALUES(null,'t6.jpg','野良神','安达渡嘉','一位居无定所的神明的夜斗，需要帮助的人能看到他的留言并给他打电话。');
INSERT INTO me_fen  VALUES(null,'t11.jpg','食戬之灵','佐伯俊','以料理人的父亲为目标，每天坚持磨炼自己的厨艺。');
INSERT INTO me_fen  VALUES(null,'t14.jpg','小木乃伊到我家','空木翔','过着普通生活的男高中生 柏木空，某天突然收到了父亲送来的木乃伊。');
INSERT INTO me_fen  VALUES(null,'t8.jpg','摩卡少女樱','CLAMP','小樱集齐了会给世间带来灾难的库洛牌将它们变成了自己的牌。');
INSERT INTO me_fen  VALUES(null,'t9.jpg','未来都市','木乃桧','这本是一个没有犯罪，没有灾害，也没有疾病的未来都市。然而...');
INSERT INTO me_fen  VALUES(null,'t13.jpg','元气少女缘结神','铃木JULIETTA','欠债的父亲不知去向，阴差阳错之下，女主居然开始了当土地神的生活。');


CREATE TABLE me_fen1(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255),
    addr    VARCHAR(255),
    detail    VARCHAR(255)
);
INSERT INTO me_fen1  VALUES(null,'t8.jpg','摩卡少女樱','CLAMP','小樱集齐了会给世间带来灾难的库洛牌将它们变成了自己的牌。');
INSERT INTO me_fen1  VALUES(null,'t9.jpg','未来都市','木乃桧','这本是一个没有犯罪，没有灾害，也没有疾病的未来都市。然而...');
INSERT INTO me_fen1  VALUES(null,'t13.jpg','元气少女缘结神','铃木JULIETTA','欠债的父亲不知去向，阴差阳错之下，女主居然开始了当土地神的生活。');

CREATE TABLE me_fen2(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255),
    addr    VARCHAR(255),
    detail    VARCHAR(255)
);
INSERT INTO me_fen2  VALUES(null,'t9.jpg','未来都市','木乃桧','这本是一个没有犯罪，没有灾害，也没有疾病的未来都市。然而...');
INSERT INTO me_fen2  VALUES(null,'t13.jpg','元气少女缘结神','铃木JULIETTA','欠债的父亲不知去向，阴差阳错之下，女主居然开始了当土地神的生活。');


CREATE TABLE me_fen3(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255),
    addr    VARCHAR(255),
    detail    VARCHAR(255)
);
INSERT INTO me_fen3  VALUES(null,'t6.jpg','野良神','安达渡嘉','一位居无定所的神明的夜斗，需要帮助的人能看到他的留言并给他打电话。');
INSERT INTO me_fen3  VALUES(null,'t11.jpg','食戬之灵','佐伯俊','以料理人的父亲为目标，每天坚持磨炼自己的厨艺。');
INSERT INTO me_fen3  VALUES(null,'t14.jpg','小木乃伊到我家','空木翔','过着普通生活的男高中生 柏木空，某天突然收到了父亲送来的木乃伊。');
INSERT INTO me_fen3  VALUES(null,'t8.jpg','摩卡少女樱','CLAMP','小樱集齐了会给世间带来灾难的库洛牌将它们变成了自己的牌。');
INSERT INTO me_fen3  VALUES(null,'t9.jpg','未来都市','木乃桧','这本是一个没有犯罪，没有灾害，也没有疾病的未来都市。然而...');


#用户登录表
CREATE TABLE me_login(
    id   INT PRIMARY KEY AUTO_INCREMENT,
    uname  VARCHAR(25),
    upwd   VARCHAR(32)
);
#插入数据
INSERT INTO me_login VALUES(null,"tom",md5("123"));
INSERT INTO me_login VALUES(null,'jack',md5('123456'));
INSERT INTO me_login VALUES(null,'lili',md5('244632'));
INSERT INTO me_login VALUES(null,'tom2',md5('123'));

#看漫画页面
CREATE TABLE me_kmh(
    mid  INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(255),
    title   VARCHAR(255)
);
INSERT INTO me_kmh VALUES(null,'k2.jpg','第5话：那个厨师不会笑');
INSERT INTO me_kmh VALUES(null,'k2.jpg','第4话：魔王叙【玉】');
INSERT INTO me_kmh VALUES(null,'k2.jpg','第3话：【变身】生蛋拌饭');
INSERT INTO me_kmh VALUES(null,'k2.jpg','第2话：神之舌');
INSERT INTO me_kmh VALUES(null,'k2.jpg','第1话：无尽的荒野');

CREATE TABLE me_ping(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(255),
    title VARCHAR(255),
    time  VARCHAR(255),
    name  VARCHAR(25),
    uid   INT
);

INSERT INTO me_ping VALUES(null,'tou.jpg','嗯，挺好','2018-02-22','李旭','1');
INSERT INTO me_ping VALUES(null,'tou1.jpg','我不知道','2018-12-04','15784','2');
INSERT INTO me_ping VALUES(null,'tou2.jpg','嗯，挺好','2018-03-04','李旭','3');

#购物车列表mcart
CREATE TABLE me_mcart(
    pid  INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255),
    title VARCHAR(255),
    price DECIMAL(10,2),
    num   INT
);
INSERT INTO me_mcart VALUES(null,'sh1.jpg',"全职高手文件袋",4.99,1);
INSERT INTO me_mcart VALUES(null,'sh2.jpg','全职高手夹子',2.00,2);
INSERT INTO me_mcart VALUES(null,'sh3.jpg','全职高手手工皂',66.00,1);
INSERT INTO me_mcart VALUES(null,'sh6.jpg','星之杖硅胶弹力挂绳',5.00,3);