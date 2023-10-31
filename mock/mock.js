import recommendedList from './data/recommendedList.json' assert { type:'json'}
import newsList from './data/newsList.json' assert { type:'json'}
import newsDetail from './data/newsDetail.json' assert { type:'json'}

console.log("recommendedList",recommendedList)
console.log("newsList",newsList)
console.log("newsDetail",newsDetail)

//模拟延迟时间：随机300~5000毫秒
Mock.setup({
    timeout:'300-5000'
})

/**
 * 构造请求成功数据
 * @param {*} data 数据
 * @param {*} links 分页
 * @returns 请求成功结果
 */
function success (data,links = null){
    let result = {code:200,data};
    links ? result.links = links : result;
    return result;
}

/**
 * 构造请求错误数据
 * @param {*} msg 错误信息
 * @returns 
 */
function fail (msg){
    let err = { code:40000,msg }
    return err;
}

function parseQueryString(url){
    const params = {};
    const queryString = url?.split("?")[1];
    if (!queryString) return params;
    const paramPairs = queryString.split("&");
    for (const pair of paramPairs) {
        const [key, value] = pair.split("=");
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value);
        if (params.hasOwnProperty(decodedKey)) {
        if (Array.isArray(params[decodedKey])) {
            params[decodedKey].push(decodedValue);
        } else {
            params[decodedKey] = [params[decodedKey], decodedValue];
        }
        } else {
        params[decodedKey] = decodedValue;
        }
    }
    return params;
}

Mock.mock('/api/recommended-list', 'get', () => {
    let data = recommendedList ? recommendedList : [];
    return success(data);
})

Mock.mock(/\/api\/news\//, 'get', (options) => {
    console.log("详情",options);
    return {
        code:0,
        data:[1,2,3]
    };
})

Mock.mock(/\/api\/news/, 'get', (options) => {
    console.log("分页",options);
    if(!options || !options.url){
        return fail('错误请求');
    }
    let query = parseQueryString(options.url);
    if(!query || !query.page || Number(query.page) <= 0 || !query.pageSize || Number(query.pageSize) <= 0){
        return fail('请求参数错误');
    }
    let current = Number(query.page);
    let pageSize = Number(pageSize);
    let links = {total:newsList.length,current,pageSize};
    let data = newsList.slice((current-1)*pageSize,);
    return success(data,links);
})

