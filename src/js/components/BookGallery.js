import React, {Component} from 'react';
import ReactDom from 'react-dom';

//get book.json Data

let bookDatas = require('json!../data/books.json');

//get the book image
bookDatas = ((bookDatasArr) => {
  for (var i = 0, j = bookDatasArr.length; i < j; i ++){
    let singleBookData = bookDatasArr[i];
    singleBookData.bookURL = require('../data' + singleBookData.imageUrl);
    bookDatasArr[i] = singleBookData;
  }
  return bookDatasArr;
})(bookDatas);

var getRangeRandom = (low, high) => Math.floor(Math.random() * (high - low)+low)

var get30DegreeRandom =() =>{
  let deg ='';
  deg = (Math.random() > 0.5)? '+': '-';
  return deg + Math.ceil(Math.random() * 30);
}
