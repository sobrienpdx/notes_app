var app = new Vue({
  el: '#notes_list',
  delimiters: ['${', '}'],
  data: {
    notes: "Hi",
  },
  http: {
    root: '/api/',
    headers: {},
  },
  methods: {
    get_notes: function(){
      this.$http.get('notes').then((response) => {
        this.notes = response.body;
      });
    },
  },
  mounted: function(){
    this.get_notes();
  },
})