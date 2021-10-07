<template>
    <div>
        <!-- <iframe src="https://firebasestorage.googleapis.com/v0/b/karute-81f3c.appspot.com/o/sample.pdf?alt=media&token=0b880d6a-5a49-4010-aa08-eec08c86acb9" width="100%" height="100%"></iframe> -->
        <!-- <div class="pdf">
            <object data="https://firebasestorage.googleapis.com/v0/b/karute-81f3c.appspot.com/o/sample.pdf?alt=media&token=0b880d6a-5a49-4010-aa08-eec08c86acb9" height="500" width="1000"></object>
        </div> -->
        <div class="aaa"><a href="https://firebasestorage.googleapis.com/v0/b/karute-81f3c.appspot.com/o/sample.pdf?alt=media&token=0b880d6a-5a49-4010-aa08-eec08c86acb9" class="btn btn--orange">10/7</a></div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
iframe[src$=".pdf"]{
    width:100%;
    height:80vh;
}

.aaa{
    background: chartreuse;
    
}

.btn--orange,
a.btn--orange {
    width:100px;
    height:50px;
  color: #fff;
  background-color: #eb6100;
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #fff;
  background: #f56500;
}

.pdf{
    text-align: center;
}
</style>
