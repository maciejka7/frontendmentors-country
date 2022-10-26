import BackButton from './BackButton.vue';
import ArrowLeft from "../../assets/icons/arrow-left.svg"; 

export default {
    title: 'Components/BackButton',
    component: BackButton,
}

const Template = (args:any) => ({
    components: {BackButton},
    setup(){
        return args
    },
    template: '<BackButton :handleBack="()=>{}"/>'
})

export const Main = Template.bind({})