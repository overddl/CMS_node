const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({

  title: String, // 文章标题
  stitle: String, // 文章副标题
  categoryId: {type: Schema.Types.ObjectId, ref: 'Categories'}, // 归属分类 父级_id
  tags: String, // 文章标签
  keywords: String, // 文章关键字
  img: String, // 文章图片标题
  description: String, // 简介
  author: String, // 作者
  state: {type: Boolean, default: true}, // 文章状态 true显示 false关闭
  browse: {type: Number, default: 0},
  original: {type: Boolean, default: true}, // 是否原创
  source: String, // 非原创来源
  content: String, // 具体内容
  comments: String // 备注
  
}, {timestamps: true});

module.exports = mongoose.model('Detail', DetailsSchema);