const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server chạy tại: http://localhost:${port}`);
});
