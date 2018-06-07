<template>
  <div class="card border-primary mb-3" style="max-width: 40rem;">
    <div class="card-header">  
        {{ holder.url }}     
        <span class="float-right"  @click="remove()">X</span>
    </div>
    <div class="card-body">   
        <div class="card-text ">
            <div class="form-group">    
                <label>Url</label>
                <div class="form-group">
                    <div class="input-group mb-3">
                    <input type="text" placeholder="Url" class="form-control" v-bind:value="url" @input="updateUrl" >
                    <div class="input-group-append">
                        <span title="Click to copy Login into the Clipboard" class="input-group-text btn" style="min-width: 4rem;">Copy</span>
                    </div>
                    </div>
                </div>
            </div>  

            <div class="form-group">    
                <div class="form-group">
                    <label>Login</label>
                    <div class="input-group mb-3">
                    <input type="text" placeholder="Login" class="form-control" v-bind:value="login" @input="updateLogin">
                    <div class="input-group-append">
                        <span title="Click to copy Login into the Clipboard" class="input-group-text btn" style="min-width: 4rem;">Copy</span>
                    </div>
                    </div>
                </div>
             </div>  

            <div class="form-group">
                <div class="form-group">
                    <label>Password</label>
                    <div class="input-group mb-3">                        
                        <input type="password" placeholder="Password" class="form-control" v-bind:value="password" @input="updatePassword"/>
                        <div class="input-group-append">
                            <span title="Click to copy Password into the Clipboard" class="input-group-text btn" style="min-width: 3rem;">New</span>
                        </div>
                        <div class="input-group-append">
                            <span title="Click to copy Password into the Clipboard" class="input-group-text btn" style="min-width: 4rem;">Copy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IHolder from '../interfaces/Holder';
import ServiceProvider from '../services'

@Component
export default class Holder extends Vue {
    @Prop()
    holder:IHolder;

    private url:string;
    private login:string;
    private password:string;

    created() {
        this.url = this.holder.url;
        this.login = this.holder.login;
        this.password = this.holder.password;
    }

    updateUrl(e:Event): void {
        this.url = (<HTMLInputElement>e.target).value;
    }

    updateLogin(e:Event): void {
        this.login = (<HTMLInputElement>e.target).value;
    }

    updatePassword(e:Event): void {
        this.password = (<HTMLInputElement>e.target).value;
    }

    remove(): void {
        ServiceProvider.getHolderService().remove(this.holder);
    }
}
</script>

<style scoped lang="scss">

</style>
