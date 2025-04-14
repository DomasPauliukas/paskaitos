
module.exports = function(...allowedRoles) {

    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).send({message: 'Failed to log in the page'})
        }

        next()
    }
}
// i allowedRoles paduodam roles, galima tiek kiek reikia




// function test (...param) {
//     console.log(param) ---> [1, 2, 3]
// }

// test(1, 2, 3)

// (...param) -> tokiu budu galima kiek norime paduoti i funkcija parametru, juos sudes i masyva
// (n1, n2, ...param) => pirmi du parametrai atskiri, visi sekantys jau sudeti bus i masyva


