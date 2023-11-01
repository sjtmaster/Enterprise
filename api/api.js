const request = axios.create();
request.interceptors.response.use(res => {
    if(res.data && res.data.code == 4000){
        console.log("错误信息",res.data);
    }
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