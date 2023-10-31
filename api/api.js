const request = axios.create();
request.interceptors.request.use(req=>{
    console.log("拦截req",req);
    return req;
})
request.interceptors.response.use(res => {
    console.log("拦截",res);
    return res.data
  })

export const getRecommendedList = ()=>{
    console.log("utl",request)
    return request.get("/api/recommended-list");
} 
export const getNewsPage = (page=1,pageSize=8)=>{
    return request.get("/api/news",{params:{ page,pageSize }});
}
export const getNesDetail = (id)=>{
    return request.get(`/api/news/${id}`);
}