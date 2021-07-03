<template>
    <div>
        <div class="header">
            <p class="header-title">個人情報</p>
        </div>
        <div class="profile">
            <img src="./b.png" class="profile-icon">
            <div class="username"><span id="sampleOutName">{{ name || "Guest" }}</span></div>
        </div>
        <div class="underline"></div>
        <div class="cp_iptxt">
            <input v-model="name" type="text" placeholder="お名前">
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_ipselect">
            <select class="cp_sl06" required>
                <option value="" hidden disabled selected></option>
                <option value="1">男性</option>
                <option value="2">女性</option>
            </select>
            <span class="cp_sl06_highlight"></span>
            <span class="cp_sl06_selectbar"></span>
            <label class="cp_sl06_selectlabel"><i class="fas fa-transgender fa-lg fa-fw"></i>性別</label>
        </div>
        <div class="cp_iptxt">
            <input type="text" placeholder="生年月日">
            <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:"",
            gender:"",
            birth:""
        }
    }
}
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
	width: 80%;
	margin: 40px auto;
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

.cp_ipselect {
	position: relative;
	width: 80%;
	margin: 2em auto;
	text-align: center;
}
.cp_sl06 {
	position: relative;
	font-family: inherit;
	background-color: transparent;
	width: 100%;
	padding: 10px 10px 10px 0;
	font-size: 18px;
	border-radius: 0;
	border: none;
	border-bottom: 1px solid rgba(0,0,0, 0.3);
}
.cp_sl06:focus {
	outline: none;
	border-bottom: 1px solid rgba(0,0,0, 0);
}
.cp_ipselect .cp_sl06 {
	appearance: none;
	-webkit-appearance:none
}
.cp_ipselect select::-ms-expand {
	display: none;
}
.cp_ipselect:after {
	position: absolute;
	top: 18px;
	right: 10px;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid rgba(0, 0, 0, 0.3);
	pointer-events: none;
}
.cp_sl06_selectlabel {
	color: rgba(0,0,0, 0.5);
	font-size: 15px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 0;
	top: 10px;
	transition: 0.2s ease all;
    width:23%
    
}

.cp_sl06_selectlabel i{
    left: 0;
    padding:9px 5px;
    margin-right:24%;
}
.cp_sl06:focus ~ .cp_sl06_selectlabel, .cp_sl06:valid ~ .cp_sl06_selectlabel {
	color: #da3c41;
	top: -20px;
	transition: 0.2s ease all;
	font-size: 14px;
}
.cp_sl06_selectbar {
	position: relative;
	display: block;
	width: 100%;
}
.cp_sl06_selectbar:before, .cp_sl06_selectbar:after {
	content: '';
	height: 2px;
	width: 0;
	bottom: 1px;
	position: absolute;
	background: #da3c41;
	transition: 0.2s ease all;
}
.cp_sl06_selectbar:before {
	left: 50%;
}
.cp_sl06_selectbar:after {
	right: 50%;
}
.cp_sl06:focus ~ .cp_sl06_selectbar:before, .cp_sl06:focus ~ .cp_sl06_selectbar:after {
	width: 50%;
}
.cp_sl06_highlight {
	position: absolute;
	top: 25%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}
</style>
