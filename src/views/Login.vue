<template>
  <div class="container p-5">
    <div class="jumbotron">
        <h1 class="display-3">{{appName}}</h1>
        <form>
          <fieldset>
            <legend>Login</legend>      
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <!-- EMAIL -->
              <input 
                :value="email" 
                @input="updatePropertyEmail" 
                type="email" 
                class="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                autocomplete='email'
              >
              <span class="help-block text-danger" v-if="emailError !== ''">{{this.emailError}}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <!-- PASSWORD -->
              <input 
                :value="password" 
                @input="updatePropertyPassword" 
                type="password" 
                class="form-control" 
                placeholder="Password"
                autocomplete='password'
              >
              <span class="help-block text-danger" v-if="passwordError !== ''">{{this.passwordError}}</span>
            </div>
            <div class="form-group">      
              <button 
                @click="onSubmit" 
                type="submit" 
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <a class="text-primary btn" @click="goToSingin">I do not have an account. Sign In!</a> 
      </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Navigation } from '../router';
import Triggers from '../store/triggers';
import firebase from 'firebase';
import Globals from '../globals';

@Component({
  components: {},
})
export default class Login extends Vue {

  // Data property
  private appName: string = "";
  private email: string = "";
  private emailError: string = "";
  private password: string = "";
  private passwordError: string = "";

  created() {
    this.appName = Globals.APP_NAME;
  }

  updatePropertyEmail(event:Event) {
    this.email = (<HTMLTextAreaElement>event.target).value;
  }
  updatePropertyPassword(event:Event) {
    this.password = (<HTMLTextAreaElement>event.target).value;
  }

  goToSingin(event: Event): void  {
    Navigation.changePage(this, Navigation.PAGE_NAME_SIGNIN);
    event.preventDefault();
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (data)=>{
        alert('SUCCESS'),
        console.log(data);       
      },      
      ({code, message})=>{
        console.log('ERROR ON LOGIN'); 
        console.log('code: '+code+' message: '+message);
        switch(code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            this.emailError = message;
            break;           
          case 'auth/weak-password':
          case 'auth/wrong-password message':
            this.passwordError = message;
            break;
          default:
            alert(message);
            break;
        }
      }
    )     
  }

  onSubmit(event: Event): void {    
      this.login();
      event.preventDefault();    
  }
}
</script>

<style scoped lang="scss">

</style>
