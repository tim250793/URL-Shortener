# URL-Shortener
## 介紹
「短網址產生器」
## 畫面預覽

![](https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.15752-9/298266905_765621918192868_8107676386541391154_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZL-Dt2Ta2fEAX_bG-mf&_nc_ht=scontent.ftpe4-1.fna&oh=03_AVJEweVHgJK5a8ENX3zEw2TS-Vfs5g9U6_6gemnp4Fzd3g&oe=6322FFFB "root")
## 功能
* 輸入網址自動生成短網址
* 瀏覽短網址生成記錄
* 透過短網址轉址到原網址

## 使用方法
1. 安裝 node.js 與 npm
1. 將專案 clone 到本地
1. 在本地開啟之後，透過終端機進入資料夾，輸入
```
npm install
```
4. 安裝 nodemon 套件
```
npm install -g nodemon
```
5. 安裝完畢後，繼續輸入：
```
nodemon app.js
```
6. 設定環境變數
```
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```
7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址：
```
App is running on http://localhost:3000
```
## 開發工具
* dotenv: 16.0.1
* ejs: 3.1.8
* express: 4.18.1
* mongoose: 6.3.5
* nodemon: 2.0.16
* shortid: 2.2.16
