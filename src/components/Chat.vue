<template>
    <div id="chat">
        <div class="container">
            <div>
                <el-col class="m-3">
                    <el-card shadow="always">
                        <div class="ml-3">
                            <span style="font-size: 20px; cursor: pointer;" @click="goHome();">
                                <i class="el-icon-arrow-left"></i>
                            </span>
                            <span style="font-size: 26px;">
                                與 
                                <span>
                                    {{ chatData.ig_account }}
                                </span> 的對話紀錄
                            </span>
                        </div>
                        <hr>
                        <ul>
                            <li v-for="(item, index) in messages" :key="index" class="mt-3">
                                {{ item.sender }}:
                                <span v-if="item.text" v-text="item.text">
                                </span>
                                <span v-if="!item.text" style="color: red;">
                                    無法顯示
                                </span>
                                {{ item.created_at | timestamp }}
                            </li>
                        </ul>
                    </el-card>
                    
                </el-col>
            </div>
            
        </div>
    </div>
</template>


<script>
import { Loading } from 'element-ui';
export default {
    created(){
        var loadingInstance1 = Loading.service({fullscreen: true});
        setTimeout(() => {
          loadingInstance1 && loadingInstance1.close()
        }, 300)
    },
    methods:{
        goHome() {
            this.$router.push('/');
        }
    },
    computed: {
        chatData(){
            return this.$store.state.chatData;
        },
        messages(){
            const newConversation = this.chatData.messages.conversation.map(function(item, index, array){
                var d = item.created_at;
                var dd = new Date(d).getTime() 
                return {
                    ...item,
                    created_at: dd
                }
            })
            return newConversation.reverse();
        }
    }
}
</script>

<style scoped>

</style>