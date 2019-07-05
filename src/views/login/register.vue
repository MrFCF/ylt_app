<template>
    <div class="register">
        <topHeader :goUrl="urlData">
            <div slot="l" class="l" @click="login">
                <img src="@/assets/icon/back.png" alt="">
            </div>
            <div slot="c" class="c">
            </div>
            <div slot="r" class="r">
            </div>
        </topHeader>
        <el-form :model="registerFrom" :rules="rulesRegister" ref="registerFrom" label-width="100px">
            <el-form-item prop="name">
                <el-input v-model="registerFrom.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'register',
    data() {
        return {
            registerFrom:{
                name:'',
            },
            rulesRegister:{
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>

<style lang='scss'>
</style>