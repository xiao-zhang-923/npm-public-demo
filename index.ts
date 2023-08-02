import Vue3Step  from "./components/Step.vue";

export { Vue3Step } //实现按需引入*


const components = [Vue3Step];
const install = function(App:any) {
    components.forEach((component) => {
        App.component(component.name,component);
    });
};
export default { install }