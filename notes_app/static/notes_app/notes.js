var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    notes: "Hi",
    new_note: "",
  },
  http: {
    root: '',
    headers: {},
  },
  methods: {
    get_notes: function(){
      this.$http.get('/api/notes').then((response) => {
        this.notes = response.body;
      });
    },
    save_new_note: function(){
      this.$http.post('/api/notes/', {text: this.new_note}).then((response) => {
        this.get_notes();
        this.new_note = "";
      })
    },
    toggle_done: function(note_obj){
      console.log("trying to update " + note_obj)
      console.log("note url: " + note_obj.url)
      this.$http.patch(note_obj.url, {text: "we totes edited this"}).then((response) => {
        console.log("we got: " + response.body)
        this.get_notes();
      })
    },
  },
  mounted: function(){
    this.get_notes();
  },
})