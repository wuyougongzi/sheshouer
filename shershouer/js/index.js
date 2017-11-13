
var app =  new Vue({
		  el: '#maincontent',
		  data: {
		    message: 'Hello Vue.js!',
			trips:[
		  	 {name: '百步穿杨', url: 'http://127.0.0.1:8020/shershouer/technology.html?'},
		  	 {name: '粗茶淡饭', url: 'http://127.0.0.1:8020/shershouer/normalshow.html?'},
		  	 {name: '月镜于心', url: 'http://127.0.0.1:8020/shershouer/livefeels.html?'},
		  	 {name: '聚沙成塔', url: 'http://127.0.0.1:8020/shershouer/commucation.html?'},
		  	 {name: '糖果泡泡', url: 'http://127.0.0.1:8020/shershouer/sugarbubbles.html?'}
		  ]},
		  methods:{
		  	jumpToType: function(name, url){
		  		//alert(name);
		  		window.location = url;
		  	}
		  }
		})