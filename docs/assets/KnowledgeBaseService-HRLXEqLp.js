import{A as t}from"./index-sFzf4xgK.js";async function r(){return t.fetchData({url:"/knowledge-base/categories",method:"get"})}async function c(e){return t.fetchData({url:"/knowledge-base/articles-query",method:"post",data:e})}async function i(e){return t.fetchData({url:"/knowledge-base/article",method:"get",params:e})}async function n(e){return t.fetchData({url:"/knowledge-base/article",method:"post",data:e})}async function o(){return t.fetchData({url:"/knowledge-base/categorized-articles",method:"get"})}export{r as a,c as b,o as c,i as d,n as e};