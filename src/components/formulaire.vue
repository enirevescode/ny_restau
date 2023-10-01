 <template>
  <v-sheet class="formulaire">
   
   <v-row>
   <v-col
   cols="6"
   class="d-flex flex-column"
   max-width="300"
   order="first"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21764.740399184175!2d-2.2511616!3d47.00897279999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1693502779991!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></v-col>

   <v-col
   cols="5"
   class="d-flex flex-column"
   max-width="200"
   >
   <div class="text-h4">Send Us a Message</div>
   <div class="text-h5 text-caption">Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</div>
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-text-field
        v-model="Name"
        :rules="rules"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="text"
        :rules="rules"
        label="Your message here*"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">SEND MESSAGE</v-btn>
    </v-form>
    </v-col>
   </v-row>
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      firstName: '',
      Name: '',
      text: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
    }),
  }
</script>
<style scoped>
.formulaire {
   margin-top: 100px;
   margin-left: 50px;
   margin-right: 50px;
}
</style>