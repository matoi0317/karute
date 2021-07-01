<template>
    <div class="aaa">
        <div class="contents">
            <div class="img-sample1">
                <img src="./sample.png" class="sample1">
            </div>
            <div class="title">Welcome to Karute</div>
            <div class="buttons">
                <button class="button1">カルテを見る</button>
                <a href="information"><button class="button2">個人情報</button></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.aaa {
    padding-top:5%;
}
img.sample1{
    width:200px;
}
.img-sample1{
    padding-top: 60px;
    text-align: center;
}

.title{
    text-align: center;
    font-weight: 200;
    font-size: 30px;
    color:#F68655;
    margin-top: -10px;
}
.buttons{
    text-align: center;
}
button.button1{
    margin-top:110px;
    margin-bottom: 30px;
    background-color: #F6B352;
    border:#FC913A;
    border-radius: 15px;
    width:75%;
    height: 30px;
    color:white;
}

button.button2{
    margin-bottom: 50px;
    background-color: #FC913A;
    border:#F68655;
    border-radius: 15px;
    width:75%;
    height: 30px;
    color:white;
}
</style>
