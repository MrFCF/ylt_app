import Vue from 'vue'
import topHeader from "@/components/topHeader"

const pluginComponetns = {
    install:function(){
        Vue.component('topHeader',topHeader)
    }
}

export default pluginComponetns;