// authMiddleware isidedam prie API routes, kad pries atidarant route, patikrintu cia.

const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '') // Authorization -> bearer token - cia per postman. replace('Bearer', '') -> kad liktu tik token stringas, be zodzio Bearer.

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // decodinam ir galim pasiekti user info FE. i state idedami visa user ir bus visa sukurto tokeno info (ka ten pridejome, ta matysime FE)

        req.user = decoded // galima paskui prie route issimti per req.user backende

        next()
    } catch (error) {
        res.status(400).json(error)
    }
    
}

module.exports = authMiddleware