/*
 * 参数：
 * 		box：承载轮播图效果的容器
 * 		w: 容器的宽度
 * 		h: 容器的高度
 * 		data: 轮播图中的内容（数组）
 * 		btnSize: 按钮的宽高
 * 		now: 显示的图片的下标
 * 		ms: 轮播的间隔
 * 		dire: 方向 
 */
class Slide{
	constructor(box, w, h, data, btnSize, now, ms, dire){
		this.box = box;
		this.w = w;
		this.h = h;
		this.data = data;
		this.len = data.length;
		this.btnSize = btnSize;
		this.now = now;
		this.ms = ms;
		this.dire = dire;
		this.createHtml();
		this.tab();
		this.next();		
		this.box.onmouseover = ()=>{
			clearInterval(this.timer);
			startMove(this.p1, {"opacity":100});
			startMove(this.p2, {"opacity":100});
		}
		this.box.onmouseout = ()=>{
			this.next();
			startMove(this.p1, {"opacity":0});
			startMove(this.p2, {"opacity":0});
		}		
	}
	// 创建html结构
	createHtml(){
		var that = this;
		[this.box.style.width, this.box.style.height] = [this.w+"px", this.h+"px"];
		var tmp = document.createDocumentFragment();
		// ul 轮播图图片
		var ul = document.createElement("ul");
		this.ul = ul;
		tmp.appendChild(ul);
		[ul.style.width, ul.style.height] = [((this.len+1)*this.w)+"px", this.h+"px"];
		// 创建ul>li
		this.data.forEach(obj=>{
			var li = document.createElement("li");
			ul.appendChild(li);
			[li.style.width, li.style.height] = [this.w+"px", this.h+"px"];
			var a = document.createElement("a");
			li.appendChild(a);
			a.href = obj.url;
			a.target = "_blank";
			a.title = obj.title;
			var img = document.createElement("img");
			a.appendChild(img);
			[img.style.width, img.style.height] = [this.w+"px", this.h+"px"];
			img.src = obj.img;
		});
		// 无缝滚动，拷贝第一个ul>li
		var li = ul.children[0].cloneNode(true);
		ul.appendChild(li);
		// ol 轮播图按钮
		var ol = document.createElement("ol");
		tmp.appendChild(ol);
		// ol>li
		this.olspan = [];
		this.data.forEach((obj,ind)=>{
			var li = document.createElement("li");
			ol.appendChild(li);
			[li.style.width, li.style.height] = [this.btnSize*1.5+"px", this.btnSize*1.5+"px"];
			var span = document.createElement("span");
			li.appendChild(span);
			this.olspan.push(span);
			span.title = obj.title;
			[span.style.width, span.style.height] = [this.btnSize+"px", this.btnSize+"px"];
			// 当点击ol>li时，图片切换
			li.onclick = function(){
				that.now = ind;
				that.tab();
			}
		});
		// 左箭头
		var p1 = document.createElement("p");
		this.p1 = p1;
		tmp.appendChild(p1);
		p1.innerHTML = "&lt;";
		p1.onclick = ()=>{
			this.toLeft();
		}
		// 右箭头
		var p2 = document.createElement("p");
		this.p2 = p2;
		tmp.appendChild(p2);
		p2.innerHTML = "&gt;";
		p2.onclick = ()=>{
			this.toRight();
		}
		// 箭头样式
		var j = this.btnSize*1.7;
		p1.style.width = p2.style.width = p1.style.height = p2.style.height = j+"px";
		p1.style.lineHeight = p2.style.lineHeight = j+"px";
		p1.style.top = p2.style.top = (this.h-j)/2+"px";
		// 真实DOM
		this.box.appendChild(tmp);
	}
	// 左箭头
	toLeft(){
		this.dire = -1;
		this.now+=this.dire;
		this.tab();
	}
	// 右箭头
	toRight(){
		this.dire = 1;
		this.now+=this.dire;
		this.tab();
	}
	// 当点击按钮时，切换图片
	tab(){
		if( this.now == this.len ){
			this.now = 0;
			startMove(this.ul, {"left":this.len*-this.w}, ()=>{
				this.ul.style.left = "0px";
			});
		}else if( this.now==-1 ){
			this.now = this.len-1;
			this.ul.style.left = this.len*-this.w+"px";
			startMove(this.ul, {"left":this.now*-this.w});
		}else{
			startMove(this.ul, {"left":this.now*-this.w});
		}
		// 按钮样式更新
		var len = this.len;
		var spans = this.olspan;
		for( var i=0; i<len; i++ ){
			spans[i].classList.remove("btnselected");
		}
		spans[this.now].classList.add("btnselected");
	}
	// 自动轮播
	next(){
		this.timer = setInterval(()=>{
			this.now+=this.dire;
			this.tab();
		}, this.ms);		
	}
	
}
