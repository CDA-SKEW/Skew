const a = 10, b = 20, c = 30;
function calc(banane, kakawait) {
    return banane + kakawait
}
console.log('calc1', calc(a, b))
console.log('calc2', calc(c, b))

class UserModel {
    create(body) {
        const { name, email } = body
        db.query(`insert into user (name, email) VALUES ("${name}", "${email}") `)
        return 'Item créé'
    }
}

class UserController {
    postUser(req, res) {
        UserModel.create(req.body, (err, data) => {
            console.log(data)
        })
    }
}

let req, res;
req.body = {
    name: 'Bruno', email: "bru@no.fr"
}

const user1 = new UserController(req, res).postUser
console.log('user1', user1)