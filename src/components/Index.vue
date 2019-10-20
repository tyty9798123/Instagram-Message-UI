<template>
  <div class="index">
      <div class="container">
        <h1>IG-Message-UI</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">選擇檔案(messages.json)</span>
          </div>
          <div class="custom-file">
            <input type="file" @change.prevent="onChange" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01"></label>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">輸入對方的IG帳號</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onChange(event) {
        var reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(event.target.files[0]);
    },
    onReaderLoad(event){
      try{
        var obj = JSON.parse(event.target.result);
        console.log(obj)
      }
      catch(e){
        alert('資料格式並不正確。')
      }
    }
  }
}
</script>

<style scoped>

</style>