var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  http: {
    root: '',
    headers: {},
  },


  data: {
    notes: "Hi",
    new_note: "",
    show_actions_for: "",
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
      this.$http.patch(note_obj.url, {"is_done": !note_obj.is_done}).then((response) => {
        console.log("we got: " + response.body)
        this.get_notes();
      })
    },
    hide_show: function(note){
      if(this.show_actions_for == note.url) {
        this.show_actions_for = "";
      } else {
        this.show_actions_for = note.url;
      }
    },
    delete_note: function(note) {
      this.$http.delete(note.url).then((response) => {
      let filtered = this.notes.filter(function(value, index, arr){
        return value.url != note.url;
      });
      this.notes = filtered;
        //for(i = 0; i < this.notes.length; i++){
        //  if this.notes[i].url ==
        //}
      })
    }
  },
  mounted: function(){
    this.get_notes();
  },
})
