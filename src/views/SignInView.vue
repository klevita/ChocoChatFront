<template>
    <div class="mn">
        <v-form class="group">
            <v-text-field v-model="email" @input="isValidEmail" :error-messages="errorMessages1" label="Электронная почта" required>
            </v-text-field>
            <v-text-field v-model="nick" @input="isValidNick" :error-messages="errorMessages2" label="Никнейм" required>
            </v-text-field>
            <v-text-field v-model="pass" @input="isValidPassword" :error-messages="errorMessages3" type="password"
                label="Пароль" required>
            </v-text-field>
            <v-text-field v-model="passConfirmation" @input="isValidConfirmation" :error-messages="errorMessages4"
                type="password" label="Подтверждение пароля" required>
            </v-text-field>
            <v-btn color="success" v-on:click="validate2()">Зарегистриваться</v-btn>
        </v-form>
        
    </div>
</template>

<script>
import UserApiService from "@/services/UserApiService"
//ИДБ-20-01
export default {
    name: 'enter-view',
    data: () => ({
        users:[],
        email: '',
        nick: '',
        pass: '',
        passConfirmation: '',
        errorMessages1: 'поле обязательно',
        errorMessages2: 'поле обязательно',
        errorMessages3: 'поле обязательно',
        errorMessages4: 'поле обязательно',
        //v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Неправильная почта"

        //v => v && (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(v)) || "Слабоват пароль"

        //v => v && this.password === this.passConfirmation || "Пароли не совпадают"

    }),
    components: {

    },
    async mounted() {
        const users = await UserApiService.getAll();
        this.users = users;
        
    },
    methods: {
        async validate2(){
            if(this.errorMessages1 === '' && this.errorMessages2 === '' && this.errorMessages3 === '' && this.errorMessages4 === ''){
                const resp = await UserApiService.createUser(this.nick,this.email,this.pass).then(reason=>{
                    alert("Пользователь создан!")
                    this.$router.push({name:'login'})
                },reason=>{
                    alert(reason)
                });
            }
        },
        isValidEmail() {
            if (this.email.length === 0) {
                this.errorMessages1 = 'поле обязательно'
            } else {
                this.errorMessages1 = ''
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
                    this.errorMessages1 = 'неверная почта'
                }else{
                    this.users.map(user=>{
                    if(user.email===this.email){
                        this.errorMessages1 = 'такая почта уже зарегистрирована'
                        return 0
                    }
                })
                }
            }

        },
        isValidNick() {
            if (this.nick.length === 0) {
                this.errorMessages2 = 'поле обязательно'
            } else {
                this.errorMessages2 = ''
                this.users.map(user=>{
                    
                    if(user.nickName===this.nick){
                        this.errorMessages2 = 'такой ник уже существует'
                        return 0
                    }
                })
                
            }

        },
        isValidPassword() {
            if (this.passConfirmation === this.pass) {
                this.errorMessages4 = ''
            }
            if (this.pass.length === 0) {
                this.errorMessages3 = 'поле обязательно'
            } else {
                if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.pass))) {
                    this.errorMessages3 = 'без спец. символов, буквы большие и маленькие, цифры, длина>7'
                }else{
                    this.errorMessages3 = ''
                }
            }

        },
        isValidConfirmation() {
            if (this.passConfirmation !== this.pass) {
                this.errorMessages4 = 'пароли не совпадают'
            }else{
                this.errorMessages4 = ''
            }

        },
    },
}
</script>
<style scoped lang="scss">
.mn {
    margin: 10px 5px 5px 5px;
    border-radius: 3%;
    background-color: white;
}

.group {
    padding: 10px;
    display: flex;
    flex-direction: column;
}
</style>
