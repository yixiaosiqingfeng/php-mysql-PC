/*
Navicat MySQL Data Transfer

Source Server         : h5-1807
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : wfy

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-10-24 19:54:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `gid` int(10) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(255) NOT NULL,
  `jifen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `num` int(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('2', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015092110_28.jpg', '馨之屋水精灵', '强劲去污 加赠电炖锅', '188', '1.88', '1', '2018-10-23 16:15:21');
INSERT INTO `cart` VALUES ('3', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181013220725_13.jpg', '戴森手持吸尘器', '强劲吸力 轻松清洁', '688', '6.88', '1', '2018-10-23 16:14:43');

-- ----------------------------
-- Table structure for ocj
-- ----------------------------
DROP TABLE IF EXISTS `ocj`;
CREATE TABLE `ocj` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET utf8 NOT NULL,
  `gname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(255) NOT NULL,
  `jifen` varchar(255) CHARACTER SET utf8 NOT NULL,
  `num` int(100) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ocj
-- ----------------------------
INSERT INTO `ocj` VALUES ('2', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015092110_28.jpg', '馨之屋水精灵', '强劲去污 加赠电炖锅', '188', '1.88', '0');
INSERT INTO `ocj` VALUES ('3', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181013220725_13.jpg', '戴森手持吸尘器', '强劲吸力 轻松清洁', '688', '6.88', '0');
INSERT INTO `ocj` VALUES ('4', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181009104851_68.jpg', '次玛陀冬虫夏草', '严选那曲虫草 用心看得见', '2299', '22.99', '0');
INSERT INTO `ocj` VALUES ('5', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015092555_28.jpg', '次玛陀冬虫夏草', '源自西藏那曲 礼盒装', '2299', '22.99', '11');
INSERT INTO `ocj` VALUES ('6', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181012091727_78.jpg', '古越龙山花雕酒', '5年陈 12瓶组', '1099', '10.99', '0');
INSERT INTO `ocj` VALUES ('7', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181012092647_36.jpg', '光明米业早软米组', '18秋季新米 赠油5+1.6升', '366', '3.66', '0');
INSERT INTO `ocj` VALUES ('8', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181011164139_49.jpg', '敏杨贴花养味煲', '一锅多用 6L大容量', '349', '3.49', '0');
INSERT INTO `ocj` VALUES ('9', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181009110216_8.jpg', '戴森吹风机', '创新设计 快速干发', '89', '8.9', '0');
INSERT INTO `ocj` VALUES ('10', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015093147_15.jpg', '利茸婚庆用碗筷套装', '剪纸鸳鸯纹 秀幸福时刻', '3999', '39.99', '3');
INSERT INTO `ocj` VALUES ('11', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015093634_92.jpg', '大金直流变频挂壁空调', '舒适相随 享受无需等待', '3199', '31.99', '9');
INSERT INTO `ocj` VALUES ('12', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181010101657_60.jpg', '飞利浦智能液晶电视', '55英寸超清4K 感受曼妙流光', '2799', '27.99', '0');
INSERT INTO `ocj` VALUES ('13', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181011163706_2.jpg', '乐玛仕小白鞋', '柔软舒适 平稳透气', '109', '1.09', '0');
INSERT INTO `ocj` VALUES ('14', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181010103611_97.jpg', '香娜露儿 绵羊油', '摆脱干燥 升级加量组', '40', '0.40', '0');
INSERT INTO `ocj` VALUES ('15', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180930143642_37.jpg', '神象鲜野山参', '新鲜直达 营养不流失', '1100', '11.00', '0');
INSERT INTO `ocj` VALUES ('16', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181010171447_20.jpg', '戴森手持吸尘器V6', '强劲吸力 轻松清洁', '488', '4.88', '0');
INSERT INTO `ocj` VALUES ('17', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181010102138_26.jpg', '斯嘉贝格实木餐桌组', '一桌六椅 现代中式设计', '688', '6.88', '0');
INSERT INTO `ocj` VALUES ('18', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181009110616_67.jpg', '能率恒温热水器', '恒温恒流 畅享沐浴之趣', '999', '9.99', '0');
INSERT INTO `ocj` VALUES ('19', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181010181822_90.jpg', '卫欲无限电动晾衣架', '智能家居 模拟自然风干', '59', '0.59', '0');
INSERT INTO `ocj` VALUES ('20', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20181015094150_17.jpg', '奈士迪羽绒被', '95%白鹅朵朵绒 送法格锅', '288', '2.88', '0');
INSERT INTO `ocj` VALUES ('21', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180930145135_70.jpg', '金加瀛二合一蚕丝被', '精选面料 舒适睡眠', '389', '3.89', '0');
INSERT INTO `ocj` VALUES ('22', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181015092212_97.jpg', '临安团圆人小核桃仁', '香脆可口 咸甜适中', '112', '1.12', '0');
INSERT INTO `ocj` VALUES ('23', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181013220953_49.jpg', '戴森美发造型器 16日预售', '全新护理黑科技 敬请期待', '299', '2.99', '0');
INSERT INTO `ocj` VALUES ('24', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181009104959_14.jpg', '新雅糕点组合', '重阳糕赤豆糕 回味经典', '39', '0.39', '0');
INSERT INTO `ocj` VALUES ('25', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181015092825_11.jpg', '神象冬虫夏草', '虫体饱满 加赠西洋参', '999', '9.99', '0');
INSERT INTO `ocj` VALUES ('26', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181012091925_48.jpg', '掌昕鲜大闸蟹礼券', '阳澄湖直供 以蟹致谢', '199', '1.99', '0');
INSERT INTO `ocj` VALUES ('27', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181012093022_19.jpg', '融氏葡萄籽油', '西班牙原装进口 健康营养', '99', '0.99', '0');
INSERT INTO `ocj` VALUES ('28', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181011164312_90.jpg', '小熊燕窝炖盅', '陶瓷隔水炖 紧锁食材营养', '188', '1.88', '0');
INSERT INTO `ocj` VALUES ('29', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181009104454_67.jpg', '夏普电视 80英寸+50英寸', '4K智能电视 宽宏视界', '2399', '23.99', '0');
INSERT INTO `ocj` VALUES ('30', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181015093321_71.jpg', '欧洛雷不粘铁锅', '无涂层 健康烹饪', '129', '1.29', '0');
INSERT INTO `ocj` VALUES ('31', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181015093756_36.jpg', '西门子滚筒洗衣机', '8公斤大容量 全屏触控', '899', '8.99', '0');
INSERT INTO `ocj` VALUES ('32', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181010101842_30.jpg', '小天鹅净立方洗衣机', '7.2公斤 立体洗护新净界', '1399', '13.99', '0');
INSERT INTO `ocj` VALUES ('33', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181011163835_43.jpg', '简帛休闲女鞋', '优选羊毛 细腻赤足体验', '86', '0.86', '0');
INSERT INTO `ocj` VALUES ('34', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181010103752_4.jpg', '森田药妆 玻尿酸面膜', '补湿锁水 蕴含足量精华', '88', '0.88', '0');
INSERT INTO `ocj` VALUES ('35', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180930143744_12.jpg', '纽仕兰鲜奶粉', '美味鲜吃法 100%原装进口', '377', '3,77', '0');
INSERT INTO `ocj` VALUES ('36', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181010171706_7.jpg', '富培美地板精油组', '洁净滋润地板 一步到位', '355', '3.55', '0');
INSERT INTO `ocj` VALUES ('37', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181010102258_87.jpg', '柏世堂三人沙发床', '头层牛皮 柔软舒适', '999', '9.99', '0');
INSERT INTO `ocj` VALUES ('38', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181009110729_54.jpg', '卫欲无限电动晾衣架', '智能家居力作 模拟自然风干', '119', '1.19', '0');
INSERT INTO `ocj` VALUES ('39', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181010181919_12.jpg', '卫欲无限 淋浴房定制', '宽边设计 豪华气派', '499', '4.99', '0');
INSERT INTO `ocj` VALUES ('40', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20181015094333_9.jpg', '奈士迪子母被', '四季可用 温暖宁静睡眠感受', '299', '2.99', '0');
INSERT INTO `ocj` VALUES ('41', 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180930145343_74.jpg', '山水丝绸子母被', '桑蚕长丝 尊贵时尚', '599', '5.99', '0');

-- ----------------------------
-- Table structure for username
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('25', '13322222222', '11111a');
SET FOREIGN_KEY_CHECKS=1;
