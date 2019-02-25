let con = require("./db_connect");
let md5 = require("md5");

let getToken = (userId) => {
    let userToken = JSON.stringify({
        issc: "xiangyuezhuteam41607b",
        userId: userId,
        data: new Date().getTime() / 1000
    })
    let token = md5(userToken);
    updateToken(token, userId)
    return token;
}

let updateToken = (token, userId) => {
    let sql = `UPDATE user SET token='${token}' WHERE  userId=${userId}`;
    con.sqlHandle(sql).then(res => {
        // console.log(res)
    })
}

//执行注册sql
let registry = (resSql) => {
    con.sqlHandle(resSql).then(res => {})
    return { code: 0, msg: "注册成功" };
}

module.exports = (app) => {
    //登录接口
    app.post("/getLogin", (req, res) => {
        let { phone, pwd } = req.body;
        let sql = `select * from user where userPhone='${phone}' and userPwd='${pwd}'`;
        con.searchHandleNormal(sql).then(data => {
            if (data.length > 0) {
                let userId = data[0].userId;
                let token = getToken(userId);
                data[0].token = token;
                res.json({ code: 0, msg: "登录成功", data: data[0] })
            }
        }).catch(data => {
            res.json({ code: 1, msg: "登陆失败" })
        })
    })

    //注册
    app.post("/getRegistry", (req, res) => {
        let { name, pwd, imgUrl, phone } = req.body;
        let sql = `select * from user where userPhone='${phone}'`;
        //判断用户名是否存在
        con.searchHandle(sql).then(data => {
            //执行注册sql
            let resSql = `INSERT INTO user (userName, userPwd, userImg, userPhone) VALUES ('${name}', '${pwd}', 
            '${imgUrl}', '${phone}')`;
            let obj = registry(resSql);
            res.json({ data: obj })
        }).catch(data => {
            res.json({ code: 2, msg: "注册名已存在" })
        })
    })

    //判断token是否一致
    app.get("/isToken", (req, res) => {
        let { token } = req.query;
        let sql = `select * from user where token='${token}'`;
        con.searchHandleNormal(sql).then(data => {
            if (data.length > 0) {
                res.json({ code: 0, msg: "已登录" })
            }
        })
    })

    //轮播图接口
    app.get("/getBannList", (req, res) => {
        let data = require("./data/bannerList.json");
        res.json({ code: 0, data })
    })

    //热门套餐接口
    app.get("/getHotList", (req, res) => {
        let data = require("./data/hotList.json");
        res.json({ code: 0, data })
    })

    //自由组合接口
    app.get("/getCombination", (req, res) => {
        let data = require("./data/combination.json");
        res.json({ code: 0, data })
    })

    //支付周期接口
    app.get("/getPayData", (req, res) => {
        let data = require("./data/paycycle.json");
        res.json({ code: 0, data })
    })

    //获取用户信息
    app.get("/getUser", (req, res) => {
        let { id } = req.query;
        let sql = `select * from user where userId='${id}'`
        con.query(sql).then(rows => {
            res.json(rows)
        })
    })


    //忘记密码
    app.get("/forgetPwd", (req, res) => {
        let { phone } = req.query;
        console.log(req.query)
        let sql = `select * from user where userPhone='${phone}'`
        con.query(sql).then(rows => {
            res.json({ code: 0, data: rows[0] });
        }).catch(err => {
            res.json({ code: 1, msg: "用户不存在" })
        })
    })

    //修改密码
    app.get("/changePwd", (req, res) => {
        let { pwd, id } = req.query;
        let sql = `UPDATE user SET userPwd='${pwd}' WHERE  userId='${id}'`
        con.query(sql).then(rows => {
            res.json({
                code: 0,
                msg: "修改成功"
            })
        }).catch(res => {
            res.json({
                code: 1,
                msg: "修改失败"
            })
        })
    })

    //修改手机号码
    app.get("/changePhone", (req, res) => {
        let { phone, id } = req.query;
        let sql = `UPDATE user SET userPhone='${phone}' WHERE  userId='${id}'`
        con.query(sql).then(rows => {
            res.json({
                code: 0,
                msg: "修改成功"
            })
        }).catch(res => {
            res.json({
                code: 1,
                msg: "修改失败"
            })
        })
    })

}