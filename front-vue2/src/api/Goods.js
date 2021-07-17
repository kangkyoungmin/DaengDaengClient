import { goods } from './index.js';
import { items } from './index.js';
import { user } from './index.js'

function InsertGoods(goodsData) {
  return goods.post('/', goodsData);
}

function updateGoods(reqID,reqData) {
  return goods.put(reqID,reqData);
}

function deleteGoods(reqID) {
  return goods.delete(reqID);
}

function getGoodsList(limit) {
  return goods.get(`/?_limit=${limit}`);
} 


function getUserInfo(id){
	return user.get(`/?id=${id}`)
}

// api 문서에 detail이라는 작명에 맞게 함수명 getGoodsDetail로 설정
function getGoodsDetail(goodsID){
	return items.get(`/?id=${goodsID}`)
}

// category 불러오기 위함
function getGoodsCategory(bigName,midName){
	return items.get(`/?bigCategory=${bigName}&midCategory=${midName}`)
}

// search를 위한 api 함수
function getGoodsSearch(SearchStr){
	return items.get(`/?str=${SearchStr}`)
}



export{
	InsertGoods,
	updateGoods,
	deleteGoods,
	getGoodsList,
	getGoodsDetail,
	getGoodsSearch,
	getGoodsCategory,
	getUserInfo,
};
