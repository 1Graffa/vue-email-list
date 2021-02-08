var app = new Vue({
  el: '#app',
  data: {
    eMails: []
  },
  mounted() {

    for(let i = 0; i < 10; i++){
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.eMails.push(result.data.response);
        console.log(this.eMails);
      });
    }

  }
});
