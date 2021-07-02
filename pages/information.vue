<template>
    <div>
        <div class="header">
            <p class="header-title">個人情報</p>
        </div>
        <div class="profile">
            <img src="./b.png" class="profile-icon">
            <div class="username">UserName</div>
        </div>
        <div class="underline"></div>
        <div class="cp_iptxt">
	        <input type="text" placeholder="お名前">
	        <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
	        <input type="text" placeholder="E-Mail">
	        <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
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

.profile{
    display: flex;
    width:100%;
    height:130px;
}

.underline{
    border: solid 1px #f2f2f2;
    width: 80%;
    margin: 0 auto;
}

.profile-icon{
    height: 100%;
}

.username{
    font-size: 40px;
    font-weight: 200;
    padding-top: 11%;
}

.cp_iptxt {
	position: relative;
	width: 50%;
	margin: 40px 3%;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	padding-left: 40px;
	letter-spacing: 1px;
	border: 0;
}
.cp_iptxt input[type='text']:focus {
	outline: none;
}
.cp_iptxt input[type='text']:focus::after {
	outline: none;
}
.cp_iptxt i {
	position: absolute;
	top: 0;
	left: 0;
	padding: 9px 5px;
	transition: 0.3s;
	color: #aaaaaa;
}
.cp_iptxt::after {
	display: block;
	width: 100%;
	height: 4px;
	margin-top: -1px;
	content: '';
	border-width: 0 1px 1px 1px;
	border-style: solid;
	border-color: #aaaaaa;
}
</style>
