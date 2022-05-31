<template>
    <div class="mn">
        <v-form class="group">
            <v-text-field v-model="email" @input="isValidEmail" :error-messages="errorMessages1"
                label="Электронная почта" required>
            </v-text-field>
            <v-text-field v-model="pass" @input="isValidPassword" :error-messages="errorMessages2" type="password"
                label="Пароль" required>
            </v-text-field>
            <v-btn color="success" v-on:click="validate2()">войти</v-btn>
            <v-btn color="primary" v-on:click="$router.push({ name: 'signin' })" style="margin-top:10px">Зарегистриваться
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import UserApiService from "@/services/UserApiService"
//ИДБ-20-01
export default {
    name: 'enter-view',
    data: () => ({
        users: [],
        email: '',
        pass: '',
        errorMessages1: 'поле обязательно',
        errorMessages2: 'поле обязательно',
    }),
    methods: {
        async validate2() {
            if (this.errorMessages1 === '' && this.errorMessages2 === '') {
                let check = false;
                const resp = await UserApiService.getUserByEmailPassword(this.email, this.pass)
                this.$store.commit('setUser', resp)
                this.$router.push({ name: 'home' })

            }
        },
        isValidEmail() {
            this.errorMessages1 = ''
            if (this.email.length === 0) {
                this.errorMessages1 = 'поле обязательно'
            }
        },
        isValidPassword() {
            this.errorMessages2 = ''
            if (this.pass.length === 0) {
                this.errorMessages2 = 'поле обязательно'
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
