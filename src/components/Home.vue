<template>
  <div>
    <div class="container">
      <div class="text-center">
        <h1>Home</h1>
        <button type="button" class="btn btn-primary btn-lg" @click="goAdd">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
        </button>
      </div>
      <div class="row">
        <div class="col-sm" v-for="item in list" :key="item.id">
          <div class="card" style="width: 18rem;height: 18rem; margin:auto; margin-top:5px">
            <img class="card-img-top" :src="item.url" :alt="item.title">
            <div class="card-body">
              <p class="card-text">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const API_URL = 'http://localhost:5000/photos'
  export default {
    name: "Home",
    data: function () {
      return {
        list: []
      }
    },
    methods: {
      goAdd: function () {
        this.$router.push("/add");
      },
      loadDate: function () {
        this.$http.get(API_URL)
          .then(response => {
            console.log(response)
            this.list = response.body
          }, () => {
            this.list = []
          })
      }
    },
    created: function () {
      this.loadDate()
    }
  };

</script>
