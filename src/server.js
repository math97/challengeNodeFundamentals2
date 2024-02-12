import http from 'http'

const PORT='3333'

const server = http.createServer(async (req,res)=>{
    return res.end('hello world')
})

server.listen(PORT)