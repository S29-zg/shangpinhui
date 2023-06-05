import request from "@/api/request";
import ajaxMock from "@/api/ajaxMock";
export const reqCategoryList = request.get(
    '/product/getBaseCategoryList'
)
export const shopListbyCateLevel1=(data)=>request.post('/list',data)


export const banners=ajaxMock.get('/banners')
export const floors=ajaxMock.get('/floors')

