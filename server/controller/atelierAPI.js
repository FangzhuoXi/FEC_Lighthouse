const axios = require('axios');
require('dotenv').config();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311

let getOneProduct = (product_id) => {
  let url = `${process.env.API}products/${product_id}`
  console.log(url);
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getStyles = (product_id) => {
  let url = `${process.env.API}products/${product_id}/styles`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

//==========Q&A============

let getQuestions = (product_id) => {
  let url = `${process.env.API}qa/questions?product_id=${product_id}`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getAnswers = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/answers`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}


let markQAsHelpful = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: {Authorization: process.env.GITHUB}
  });
}

let markQAsReported = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: {Authorization: process.env.GITHUB}
  });
}

let markAAsHelpful = (answer_id) => {
  let url = `${process.env.API}qa/answers/${answer_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: {Authorization: process.env.GITHUB}
  });
}

let markAAsReported = (answer_id) => {
  console.log(answer_id);
  let url = `${process.env.API}qa/answers/${answer_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: {Authorization: process.env.GITHUB}
  });
}


//==========Reviews and Ratings Models============

let getReviews = (product_id) => {
  let url = `${process.env.API}reviews/?product_id=${product_id}`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}});
}

let getReviewMeta = (product_id) => {
  let url = `${process.env.API}reviews/meta/?product_id=${product_id}`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}});
}

let getRelatedProducts = (product_id) => {
  console.log('request atelierAPI for products related to:', product_id);
  let url=`${process.env.API}products/${product_id}/related`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

module.exports = {
  getOneProduct: getOneProduct,
  getStyles: getStyles,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  markQAsHelpful: markQAsHelpful,
  markAAsHelpful: markAAsHelpful,
  markAAsReported: markAAsReported,
  getReviews: getReviews,
  getReviewMeta: getReviewMeta,
  getRelatedProducts: getRelatedProducts
}











// export function to server index.js