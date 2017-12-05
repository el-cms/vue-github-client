<template>
  <div>
    <h1>Première page VueJS</h1>
  	<pre>{{retoursAPI}}</pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data (){
  	return {
      retoursAPI: {}
  	}
  },
  created (){
  	this.$http.get('https://api.github.com/users/mtancoigne/repos')
  	.then((data) => {
  		this.retoursAPI = data.body
  	})
  }
}
</script>

<style>
  
</style>
