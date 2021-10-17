<template>
    <div>
        <div class="loader-wrap"  v-if="isLoading === true">
            <div class="loader">Loading...</div>
        </div>
        <div class="noData" v-else-if="items.length===0">
            <img class="data_img" src="./nodata.png">
            <div class="data_text">データがありません。</div>
        </div>
        <div class="datas" v-else>
            <div class="header">カルテ閲覧ページ</div>
            <ul class="table">
              <li>
                <button v-for="(item, index) of items" :key="`item-${index}`">
                    <a :href="item.pdf"><div>{{ item.date }}</div></a>
                </button>
              </li>
            </ul>
            <div class="hooter">
              <a class= "back" href="main">戻る</a>
              <a class="home" href="main">ホーム</a>
              <a class="next">次へ</a>
            </div>
        </div>
        <!-- <iframe src="https://firebasestorage.googleapis.com/v0/b/karute-81f3c.appspot.com/o/sample.pdf?alt=media&token=0b880d6a-5a49-4010-aa08-eec08c86acb9" width="100%" height="100%"></iframe> -->
        <!-- <div class="pdf">
            <object data="https://firebasestorage.googleapis.com/v0/b/karute-81f3c.appspot.com/o/sample.pdf?alt=media&token=0b880d6a-5a49-4010-aa08-eec08c86acb9" height="500" width="1000"></object>
        </div> -->
    </div>
</template>

<script>
export default {
    data (){
        return {
            x: 0,
            items: [],
            isLoading:true,
        }
    },

    async mounted(){
       console.log(this) 
       const message = await this.$fire.firestore.collection('items').get()
       console.log(message)
       const items = []
       for (const item of message.docs) {
           console.log(item)
           const data = item.data()
           console.log(data)
           items.push(data)
       }
       this.items = items
       console.log(222, this.items)
       this.isLoading = false
    }
}
</script>

<style>
/* iframe[src$=".pdf"]{
    width:100%;
    height:80vh;
} */

.table a {
  color: black;
  text-decoration: none;
}

.hooter a{
  color:white;
  text-decoration: none;
}

/* ローディング画面 */
.loader-wrap {
	position: fixed;
	display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #F6B352;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* No Data */
.noData{
    margin-top: 30%;
    text-align: center;
}

.datas .data_img{
  width:70%;
}

.data_text{
    font-size: 25px;
    font-weight: bold;
}

/* カルテ閲覧 */
.datas{
}

.header{
    background-color: #F6B352;
    text-align: center;
    padding-top:15px;
    padding-bottom: 15px;
    color:white;
    font-weight: bold;
    font-size: 20px;
}

.datas .hooter{
    position: fixed;
    display: flex;
    bottom: 0;
    background-color: #F6B352;
    padding: 15px 15px 15px 15px;
    width: 100%;
    color:white;
    font-weight: bold;
    font-size: 20px;
}

.hooter .back{
}

.hooter .home{
  margin: 0 auto;
}

.hooter .next{
  
}

.table{
  width:100%;
}

ul, li{
  text-align: left;
  display: inline-block;
  list-style: none;
  padding-left: 0;
}

.table button{
  width:100%;
      padding-top:15px;
    padding-bottom: 15px;
    font-size: 20px;
  background-color:white;
  border:solid 1px #f5f5f5;
}
</style>
