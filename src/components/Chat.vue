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
                        <div>
                            <div v-for="(item, index) in messages" :key="index" class="mt-3">
                                <div v-if="item.sender == chatData.ig_account">
                                    <el-tag type="info" v-if="item.text" style="word-break: break-all;">
                                        {{ item.text }} <br />
                                        {{ item.created_at | timestamp }}
                                    </el-tag>
                                    <el-tag type="danger" v-if="!item.text">
                                        無法顯示<br>
                                        {{ item.created_at | timestamp }}
                                    </el-tag>
                                </div>
                                <div v-if="item.sender != chatData.ig_account" class="text-right">
                                    <el-tag type="success" v-if="item.text" style=" max-width:300px;">
                                        
                                        <span style="word-break: break-all;">
                                            {{ item.text }}
                                        </span> <br />
                                        {{ item.created_at | timestamp }}
                                    </el-tag>
                                    <el-tag type="danger" v-if="!item.text">
                                        無法顯示<br>
                                        {{ item.created_at | timestamp }}
                                    </el-tag>
                                </div>

                            </div>
                        </div>
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