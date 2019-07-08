import topHeaderComponent from "@/components/topHeader.vue"

const pluginComponetns = {
    install:function(Vue){
        Vue.component('top-header',topHeaderComponent)
    }
}

export default pluginComponetns;
