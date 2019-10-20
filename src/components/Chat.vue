<template>
    <div id="chat">
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
    </div>
</template>


<script>
export default {
    created(){
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