<template>
    <div>
        <div class="header">
            <p class="header-title">個人情報</p>
        </div>
        <div class="profile-icon"></div>
        <hr class="style1">
    </div>
</template>

<script>
export default {}
</script>

<style>
hr.style1{
    margin: 0 auto;
    width:90%;
    border-top:0.5px solid #f1f1f1;
}
.header{
    display: table;
    width:100%;
    height:70px;
    background-color: #F6B352;
}

.header-title{
    display: table-cell;
    vertical-align: middle;
    color: white;
    text-align: center;
    font-weight: bold;
}

.profile-icon{
    width:100%;
    height:110px;
}
</style>
