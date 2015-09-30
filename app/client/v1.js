import axios from 'axios'

// Documentacion: https://github.com/mzabriskie/axios

// ## Http Interceptors
axios.interceptors.request.use((config)=>{
    config.headers = {
        'Content-Type': 'application/json',
        'token': '12345'
    }
    return config
})
axios.interceptors.response.use((response)=>{
    console.log(response)
    // Si existe un problema de red, terminar la promesa
    if( response instanceof Error ){
        return Promise.reject(response.message)
    }else{
        return Promise.resolve(response.data)
    }
})

// ## Peticiones, retornar promesas

export let server = {
    getAll: ()=>{
        return axios.get(`/v1/server`)
    }
/*
    get: (serverId)=>{
        return new Promise((resolve, reject)=>{
            request
                .get(`/v1/server/${serverId}`)
                .set('Content-Type', 'application/json')
                .set('token', '12345')
                .end((err, res)=>{
                    if(err){
                        reject(err.message)
                    }else{
                        resolve(res.body)
                    }
                })
        })
    },
    create: (server)=>{
        return new Promise((resolve, reject)=>{
            request
                .post('/v1/server')
                .set('Content-Type', 'application/json')
                .set('token', '12345')
                .send(server)
                .end((err, res)=>{
                    if(err){
                        reject(err.message)
                    }else{
                        resolve(res)
                    }
                })
        })
    },
    update: (server)=>{
        return new Promise((resolve, reject)=>{
            request
                .put(`/v1/server/${server.id}`)
                .set('Content-Type', 'application/json')
                .set('token', '12345')
                .send(server)
                .end((err, res)=>{
                    if(err){
                        reject(err.message)
                    }else{
                        resolve(res)
                    }
                })
        })
    },
    delete: (serverId)=>{
        return new Promise((resolve, reject)=>{
            request
                .del(`/v1/server/${serverId}`)
                .set('Content-Type', 'application/json')
                .set('token', '12345')
                .send(server)
                .end((err, res)=>{
                    if(err){
                        reject(err.message)
                    }else{
                        resolve(res)
                    }
                })
        })
    }
    */
}