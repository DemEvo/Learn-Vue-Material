/**
 * Created by Master on 2019-02-23.
 */

export  default {

    testMC(){
        return axios.get('/api/v2/market/menu?v=1&full=true&parent-uuid=ec6f9b90-dca1-bba0-26de-1facaffd5583')
    },
}
