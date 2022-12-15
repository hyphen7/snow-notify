const Express = require('express');
const task = require('./task.js');
const app = Express();
const PORT = process.env.PORT || 3000;

//タスク実行認証チェック
app.use((req, res, next) => {
    const EXEC_KEY = process.env.EXEC_KEY;
    const key = req.headers['x-exec-key'];
    if (key == EXEC_KEY) {
        next();
    } else {
        console.log(`Unauthorized Request - ${key}`);
        res.status(401).json({ message: "Unauthorized" });
    }
});

//タスク本処理
app.get('/', (req, res, next) => {
    console.log("Start Task");
    task().then(() => {
        console.log("End Task");
        res.sendStatus(200);
    }).catch(e => {
        next(e);
    });
});

//タスク異常終了時の500エラー
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", details: err });
});

app.listen(PORT, () => {
    console.log("Express is runnning");
});