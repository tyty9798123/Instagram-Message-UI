<template>
  <div class="index">
      <div class="container">
        <div class="alert alert-primary mt-3" role="alert">
          IG-Message-UI
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">選擇檔案(messages.json)</span>
          </div>
          <div class="custom-file">
            <input type="file" @change.prevent="onChange" class="custom-file-input" id="file" aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="file">{{ file_name }}</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">輸入對方的IG帳號</span>
          </div>
          <input type="text" class="form-control" v-model="ig_account" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <button type="button" class="btn btn-info w-100" @click.prevent="submit" :class="{'disabled': !is_checked}">確定</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      is_checked : false,
      upload_obj : {},
      file_name: '',
      ig_account: '',
      designation_obj: ''
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
        this.upload_obj = obj;
        this.is_checked = true;
        console.log(obj)

        var fake_path=document.getElementById('file').value;
        this.file_name = fake_path.split("\\").pop();
      }
      catch(e){
        alert('資料格式不正確。')
      }
    },
    submit(){
      if (this.is_checked){
        // send_data_to_chat_by_eventBus
        if (this.check_ig_account()){
          alert(`找到 ${this.designation_obj.conversation.length} 筆對話紀錄！`)
          console.log(this.designation_obj)
          var obj = {
            upload_obj: this.upload_obj,
            ig_account: this.ig_account,
            messages: this.designation_obj
          }
          this.$store.dispatch('updateChatData', obj);
          // change page to chat
          this.$router.push({name: 'Chat'})
        }
        else{
          alert('該使用者不存在於您的對話紀錄內！')
        }
        //this.$bus.$emit('', response.data.message, 'danger')
      }
    },
    check_ig_account(){
      var vm = this;
      for (let i = 0; i < vm.upload_obj.length; i++){
        if (vm.upload_obj[i].participants.includes(vm.ig_account)){
          vm.designation_obj = vm.upload_obj[i]
          return true;
        }
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>