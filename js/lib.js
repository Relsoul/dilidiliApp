
window.conf={
	server:"http://dilidili.relsoul.com/"
}



// 获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	} else {
		return null;
	}
}

// Vue模板方法
function VueInit() {

}

VueInit.prototype = {
	isPlus: function() {
		throw new Error("子类必须复写isPlus");
	},
	isWin: function() {
		throw new Error("子类必须复写isWin");
	},
	start:function(){
		var that=this;
		if(window.plus) {
			mui.plusReady(function() {
				that.isPlus();
				that.init()
			})
		} else {
			that.isWin();
			that.init();
		}
	},
	init: function() {
		throw new Error("子类必须复写init");
	}
}