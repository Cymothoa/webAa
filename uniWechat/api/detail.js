import request from "@/utils/request.js";
import service from "@/utils/request.js";

// 商品详情信息
export function prodInfo(data){
	return request({
		url:"/prod/prodInfo",
		method:"get",
		params:data
	})
}

// 根据商品id获取该商品是否在收藏夹中
export function isCollection(data){
	return service({
		url:"/p/user/collection/isCollection",
		method:"get",
		params:data
	})
}

// 返回商品评论数据（好评率 好评数量 中评数 差评数）
export function prodComm(data){
	return service({
		url:"/prodComm/prodCommData",
		method:"get",
		params:data
	})
}