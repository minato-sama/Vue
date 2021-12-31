var app = new Vue({
    el: "#app",
    data: {
      id: 0,
      tasks: [{
        title: "", body: "", time: "", priority: "", status: []},
    ]},

    methods: {

        storeData() {
          this.id = this.tasks.length
          this.tasks.push({ title: "", body: "", time: "", priority: "", status: []});
        },

        getTask(){
          if(this.tasks[this.id]) {
            return this.tasks[this.id];
          } else {
            return "";
          }
        },
    }
});
