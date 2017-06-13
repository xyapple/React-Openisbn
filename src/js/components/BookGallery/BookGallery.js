import React, {Component} from 'react';
import ReactDom from 'react-dom';

//get book.json Data

let bookDatas = require('json!../data/books.json');

//get the book image
bookDatas = ((bookDatasArr) => {
  for (var i = 0, j = bookDatasArr.length; i < j; i ++){
    let singleBookData = bookDatasArr[i];
    singleBookData.bookURL = require('../../data/books/' + singleBookData.imageUrl);
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

//signal book
class ImageFigure extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    //turn and move to the center
    if(this.props.arrange.isCenter){
      this.props.inverse();

    }else{
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render(){
    var styleObject = {};
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos;
    }
    //如果图片的旋转角度有值并且不为0，添加旋转角度
   if (this.props.arrange.rotate) {
     (['Moz', 'Ms', 'Webkit', '']).forEach((value) => {
       styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
     })
   }
   if (this.props.arrange.isCenter) {
     styleObj.zIndex = 11;
   }

    let imgFigureClassName = 'img-figure';
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse ' : '';

    return (
      <figure className={ imgFigureClassName } style={ styleObj } onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {this.props.data.title}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}
