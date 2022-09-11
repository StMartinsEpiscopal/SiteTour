// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: stmartins_vce.ggsk
// Generated 2020-05-06T11:06:25

function pano2vrSkin(player,base) {
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('category_follow', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('close_nodes_1', 2, false);
	player.addVariable('category_visible_1', 2, true);
	player.addVariable('open_tag_1', 0, "");
	player.addVariable('close_nodes_2', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._trigger=document.createElement('div');
		el.ggId="trigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 594px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._trigger.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._trigger.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._trigger);
		el=me._code_holder=document.createElement('div');
		el.ggId="code holder";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._code_holder.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_holder.onclick=function (e) {
			ss1(0)
			LaunchFancybox('welcome/welcome.html', 800, 580, 'iframe')
			LaunchFancybox('photos/sample.html', 740, 600, 'iframe')
		}
		me._code_holder.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_holder);
		el=me._hotspots=document.createElement('div');
		el.ggId="hotspots";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspots.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_video=document.createElement('div');
		els=me._marker_video__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NSA1NSI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIHN0eWxlPSJmaWxsOiMwMDI4NTU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNy41IiByPSIyNSIvPgo8L3N2Zz4K';
		me._marker_video__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_video.onclick=function (e) {
			p23(0)
		}
		me._marker_video.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJlbGVtZW50cyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAuMyAxNi44OyIgdmlld0JveD0iMCAwIDIwLjMgMTYuOCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIH'+
			'ZlcnNpb249IjEuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPHBhdGggZD0iTTE3LjEsMEgzLjNDMS41LDAsMCwxLjUsMCwzLjN2MTAuMmMwLDEuOCwxLjUsMy4zLDMuMywzLjNIMTdjMS44LDAsMy4zLTEuNSwzLjMtMy4zVjMuMyYjeGE7JiN4OTtDMjAuNCwxLjUsMTguOSwwLDE3LjEsMHogTTcuMywxMi45VjQuMWw3LjgsNC40TDcuMywxMi45eiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._marker_video.appendChild(me._svg_3);
		me._hotspots.appendChild(me._marker_video);
		el=me._marker_photo=document.createElement('div');
		els=me._marker_photo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NSA1NSI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIHN0eWxlPSJmaWxsOiMwMDI4NTU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNy41IiByPSIyNSIvPgo8L3N2Zz4K';
		me._marker_photo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -86px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_photo.onclick=function (e) {
			p23(0)
		}
		me._marker_photo.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJlbGVtZW50cyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMuMiAxOC40OyIgdmlld0JveD0iMCAwIDIzLjIgMTguNCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIH'+
			'ZlcnNpb249IjEuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmNmY1ZWQ7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPGNpcmNsZSBjeD0iMTEuNCIgY3k9IjEwIiBjbGFzcz0ic3QwIiByPSIzLjEiLz4KIDxwYXRoIGQ9Ik0yMC4yLDIuNWgtMy41YzAtMC4yLTAuMS0wLjQtMC4xLTAuNmMwLTEtMC44LTEuOC0xLjgtMS44SDguNWMtMSwwLTEuOCwwLjgtMS45LDEuOGMwLDAuMiwwLDAuNC0wLjEsMC42SDMmI3hhOyYjeDk7Yy0xLjYsMC0zLDEuNC0zLDN2OS45YzAsMS42LDEuNCwzLDMsM2gxNy4yYzEuNiwwLDMtMS40LDMtM1Y1LjVDMjMuMiwzLjks'+
			'MjEuOSwyLjUsMjAuMiwyLjV6IE0xMS40LDE1Yy0yLjgsMC01LTIuMi01LTVzMi4yLTUsNS01JiN4YTsmI3g5O3M1LDIuMiw1LDVDMTYuNCwxMi43LDE0LjIsMTQuOSwxMS40LDE1eiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._marker_photo.appendChild(me._svg_2);
		me._hotspots.appendChild(me._marker_photo);
		el=me._marker_360=document.createElement('div');
		els=me._marker_360__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NSA1NSI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIHN0eWxlPSJmaWxsOiMwMDI4NTU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNy41IiByPSIyNSIvPgo8L3N2Zz4K';
		me._marker_360__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_360";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -139px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_360.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_360.onclick=function (e) {
			p23(0)
		}
		me._marker_360.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJwaWVjZXMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI2IDIxLjU7IiB2aWV3Qm94PSIwIDAgMjYgMjEuNSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHZlcnNpb2'+
			'49IjEuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmdvPC90aXRsZT4KIDxwYXRoIGQ9Ik0xMy4xLDMuN2MxLjUsMCwyLjksMC41LDQuMSwxLjRsMi42LTIuNmMtNC40LTMuNy0xMS0zLjItMTQuNywxLjNjLTEuNCwxLjctMi4zLDMuOC0yLjQsNkgwbDMuNiw1bDEsMS40JiN4YTsmI3g5O0w2LjgsMTNsMi4zLTMuM0g2LjNDNi43LDYuMyw5LjYsMy43LDEzLjEsMy43eiIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTEzLDE3LjljLTEuNSwwLTIuOS0wLjUtNC4xLTEuNGwtMi42LDIuNmM0LjQsMy43LDExLDMsMTQuNy0xLjRj'+
			'MS40LTEuNywyLjItMy44LDIuNC02SDI2bC0zLjYtNS4xbC0xLTEuNCYjeGE7JiN4OTtsLTIuMiwzLjJMMTcsMTEuOGgyLjhDMTkuNCwxNS4zLDE2LjUsMTcuOSwxMywxNy45eiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._marker_360.appendChild(me._svg_1);
		me._hotspots.appendChild(me._marker_360);
		me.divSkin.appendChild(me._hotspots);
		el=me._directions0=document.createElement('div');
		els=me._directions0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="directions";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d2976.275045209117!2d-73.1924682488121!3d41.75772738081513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e790b63124f4cf%3A0xe8b9c56d31aeb189!2sForman%20School!5e0!3m2!1sen!2sus!4v1584974535317!5m2!1sen!2sus\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"><\/iframe>";
		el.appendChild(els);
		me._directions0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._directions0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._directions0);
		el=me._circlescapes=document.createElement('div');
		els=me._circlescapes__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTM5LjUgNDMuNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cG9seWdvbiBwb2ludHM9Ii0xNy4xNSAtMjQgLTE2LjE1IC0yNCAtMTcuMTUgLTIzIC0xNy4xNSAtMjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iaSI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTE5LjE1IC0yNiAtMjAuMTUgLTI2IC0xOS4xNSAtMjcgLTE5LjE1IC0yNiIgc3R5bGU9ImZpbGw6bm9uZT'+
			'tjbGlwLXBhdGg6dXJsKCNhKSIvPgogIDwvY2xpcFBhdGg+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJqIiB5MT0iLTE3ODYuNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTU1MTcuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU1MDIuMiAtMTc0Ny4zNykgcm90YXRlKDE4MCkiIHkyPSItMTc3MS4wOSIgeDI9Ii01NTE3Ljk1Ij4KICAgPHN0b3Agb2Zmc2V0PSIwLjE1IiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC41NCIgc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC44MSIg'+
			'c3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsIiB5MT0iMzc5NC4zMiIgeGxpbms6aHJlZj0iI2oiIHgxPSItNTQ5My4xMyIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMzc5NC4zMiAtNTQ2OS4yMykgcm90YXRlKC05MCkiIHkyPSIzODA5LjgyIiB4Mj0iLTU0OTMuMTMiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9Im4iIHkxPSItMTgxMi43MiIgeGxpbms6aHJlZj0iI2oiIHgxPSI2My4yMiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZS'+
			'gtMTc4MS42OSAtMzkuNjIpIHJvdGF0ZSg5MCkiIHkyPSItMTc5Ny4yMiIgeDI9IjYzLjIyIi8+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJwIiB5MT0iNDkzNi43OSIgeGxpbms6aHJlZj0iI2oiIHgxPSItMjY5Ni45MSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU3OS4zOSAtNTM4NC45MSkgcm90YXRlKC00NSkiIHkyPSI0OTUyLjI5IiB4Mj0iLTI2OTYuOTEiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9InIiIHkxPSItMjk1NS4wMyIgeGxpbms6aHJlZj0iI2oiIHgxPSItMjczMi44MyIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMzk5NS4zMiAtMTIyLjUpIHJvdGF0ZSgx'+
			'MzUpIiB5Mj0iLTI5MzkuNTMiIHgyPSItMjczMi44MyIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0idCIgeTE9IjEwMDkuMzYiIHhsaW5rOmhyZWY9IiNqIiB4MT0iLTY2NjEuNDQiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0MTkuNSAtMzk2MS43Nikgcm90YXRlKC0xMzUpIiB5Mj0iMTAyNC44NiIgeDI9Ii02NjYxLjQ0Ii8+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJ2IiB5MT0iOTcyLjQiIHhsaW5rOmhyZWY9IiNqIiB4MT0iMTIzMS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU3LjEgLTE1NDUuODQpIHJvdGF0ZSg0NSkiIHkyPSI5ODcuODgiIHgyPSIxMjMxLj'+
			'g1Ii8+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJ4IiB5MT0iMzc2OC4zIiB4bGluazpocmVmPSIjaiIgeDE9Ijg3Ljk1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC03Mi42IC0zNzYwKSIgeTI9IjM3ODMuOCIgeDI9Ijg3Ljk1Ii8+CiA8L2RlZnM+CiA8dGl0bGU+Y2lyY2xlc2NhcGVzMjwvdGl0bGU+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTQzLjMsMjcuMWE1LjQ1LDUuNDUsMCwwLDEtMi4yLjVjLTIsMC0zLjQtMS40LTMuNC0zLjcsMC0yLjEsMS4yLTMuNywzLjUtMy43YTQuMDYsNC4wNiwwLDAsMSwyLjEuNWwuNC0xLjRhNyw3LDAsMCww'+
			'LTIuNS0uNUE1LDUsMCwwLDAsMzUuOSwyNGE0LjY1LDQuNjUsMCwwLDAsNC45LDUsNi43MSw2LjcxLDAsMCwwLDIuOC0uNmwtLjMtMS4zWiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik00Ny41LDI4LjhWMTguOUg0NS43djkuOVptLS45LTEzLjdhMS4xMSwxLjExLDAsMCwwLTEuMSwxLjF2LjFhMS4xLDEuMSwwLDEsMCwyLjIsMEExLjEzLDEuMTMsMCwwLDAsNDYuNiwxNS4xWiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik01MC41LDI4LjhoMS44VjIzLjZhMiwyLDAsMCwxLC4xLS44LDIuNDgsMi40OCwwLD'+
			'AsMSwyLjQtMi4zLDEuMjcsMS4yNywwLDAsMSwuNi4xVjE4LjljLS4yLDAtLjMtLjEtLjUtLjFBMi44MywyLjgzLDAsMCwwLDUyLjIsMjFINTJWMTlINTAuNGEyOS4xMiwyOS4xMiwwLDAsMSwuMSwzLjFaIi8+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTYzLjYsMjcuMWE1LjQ1LDUuNDUsMCwwLDEtMi4yLjVjLTIsMC0zLjQtMS40LTMuNC0zLjcsMC0yLjEsMS4yLTMuNywzLjUtMy43YTQuMDYsNC4wNiwwLDAsMSwyLjEuNWwuNC0xLjRhNyw3LDAsMCwwLTIuNS0uNUE1LDUsMCwwLDAsNTYuMiwyNGE0LjY1LDQuNjUsMCwwLDAsNC45LDUsNi43MSw2Ljcx'+
			'LDAsMCwwLDIuOC0uNmwtLjMtMS4zWiIvPgogPHBvbHlnb24gcG9pbnRzPSI2NiA0My41IDY3LjggNDMuNSA2Ny44IDAgNjYgMCA2NiA0My41IiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik03OC44LDI0LjJjMC0uMy4xLS42LjEtLjgsMC0xLjgtLjktNC42LTQuMS00LjYtMi45LDAtNC42LDIuMy00LjYsNS4zczEuOCw1LDQuOCw1YTkuNiw5LjYsMCwwLDAsMy4zLS42TDc4LDI3LjFhNi40Niw2LjQ2LDAsMCwxLTIuNy41LDMuMTksMy4xOSwwLDAsMS0zLjQtMy40Wm0tNi45LTEuM2MuMS'+
			'0xLjIuOS0yLjksMi43LTIuOSwyLDAsMi41LDEuOCwyLjUsMi45WiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik04MC4yLDI4LjNhNy4xMSw3LjExLDAsMCwwLDMuMi43YzIuOSwwLDQuMy0xLjQsNC4zLTMuMiwwLTEuNS0uOC0yLjQtMi43LTMuMS0xLjItLjQtMS42LS43LTEuNi0xLjFzLjQtLjgsMS4yLS44YTQuMjgsNC4yOCwwLDAsMSwyLjIuNmwuNS0yLjFhNi43MSw2LjcxLDAsMCwwLTIuOC0uNmMtMi41LDAtNCwxLjQtNCwzLjMsMCwxLjIuOCwyLjMsMi44LDMsMS4yLjQsMS41LjYsMS41LDEuMXMtLjQuOC0xLjMuOGE1LjYsNS42LDAsMCwxLTIu'+
			'Ny0uOGwtLjYsMi4yWiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik05Ni43LDI2LjNhNS42Niw1LjY2LDAsMCwxLTEuOC4zLDIuNiwyLjYsMCwwLDEtMi43LTIuOEEyLjYsMi42LDAsMCwxLDk0LjksMjFhNC42Nyw0LjY3LDAsMCwxLDEuNy4zTDk3LDE5YTYuNzIsNi43MiwwLDAsMC0yLjQtLjRDOTEsMTguNiw4OSwyMSw4OSwyMy45LDg5LDI3LDkxLjEsMjksOTQuMywyOWE2LjkyLDYuOTIsMCwwLDAsMi44LS41bC0uNC0yLjJaIi8+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTEwNy4yLDIyLjljMC0yLjMtMS'+
			'4xLTQuMy00LjQtNC4zYTguOTEsOC45MSwwLDAsMC0zLjkuOWwuNiwyYTYuNDksNi40OSwwLDAsMSwyLjctLjhjMS41LDAsMS44LjgsMS44LDEuM3YuMWMtMy41LDAtNS44LDEuMi01LjgsMy44YTMuMDgsMy4wOCwwLDAsMCwzLjIsMy4xLDMuNywzLjcsMCwwLDAsMi45LTEuMmguMWwuMiwxaDIuOGE5LjY2LDkuNjYsMCwwLDEtLjEtMi40bC0uMS0zLjVabS0zLDIuM2EuOS45LDAsMCwxLS4xLjUsMS42MiwxLjYyLDAsMCwxLTEuNiwxLjEsMS4xLDEuMSwwLDAsMS0xLjItMS4yYzAtMS4yLDEuMy0xLjYsMi45LTEuNnYxLjJaIi8+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNp'+
			'dHk6MSIgZD0iTTEwOS42LDMyLjhoMy4xVjI3LjloMGEyLjkyLDIuOTIsMCwwLDAsMi42LDEuMWMyLjIsMCw0LjUtMS43LDQuNS01LjMsMC0zLjItMi01LjEtNC4xLTUuMWEzLjcsMy43LDAsMCwwLTMuMywxLjZoMGwtLjEtMS40aC0yLjdjMCwuOS4xLDIsLjEsMy4zbC0uMSwxMC43Wm0zLjEtOS42YS43NS43NSwwLDAsMSwuMS0uNSwyLDIsMCwwLDEsMS45LTEuNmMxLjQsMCwyLjEsMS4yLDIuMSwyLjhzLS44LDIuOC0yLjEsMi44YTEuODIsMS44MiwwLDAsMS0xLjgtMS41YzAtLjItLjEtLjQtLjEtLjdsLS4xLTEuM1oiLz4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eT'+
			'oxIiBkPSJNMTMwLjYsMjQuOGE0Ljg3LDQuODcsMCwwLDAsLjEtMS4yYzAtMi41LTEuMi01LTQuNC01LTMuNSwwLTUsMi44LTUsNS4zLDAsMy4xLDEuOSw1LjEsNS4zLDUuMWExMC44OCwxMC44OCwwLDAsMCwzLjYtLjZsLS40LTIuMWE4LjQyLDguNDIsMCwwLDEtMi43LjRjLTEuNCwwLTIuNy0uNi0yLjgtMS45Wm0tNi41LTIuMWEyLDIsMCwwLDEsMS45LTIsMS43OCwxLjc4LDAsMCwxLDEuNywyWiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0xMzIsMjguM2E3LjExLDcuMTEsMCwwLDAsMy4yLjdjMi45LDAsNC4zLTEuNCw0LjMtMy4yLDAtMS41LS44'+
			'LTIuNC0yLjctMy4xLTEuMi0uNC0xLjYtLjctMS42LTEuMXMuNC0uOCwxLjItLjhhNC4yOCw0LjI4LDAsMCwxLDIuMi42bC41LTIuMWE2LjcxLDYuNzEsMCwwLDAtMi44LS42Yy0yLjUsMC00LDEuNC00LDMuMywwLDEuMi44LDIuMywyLjgsMywxLjIuNCwxLjUuNiwxLjUsMS4xcy0uNC44LTEuMy44YTUuNiw1LjYsMCwwLDEtMi43LS44bC0uNiwyLjJaIi8+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTcxLjQsNDEuN2EzLjE3LDMuMTcsMCwwLDAsMS42LjRjMS41LDAsMi4zLS45LDIuMy0xLjlhMS42MiwxLjYyLDAsMCwwLTEuNC0xLjZoMGExLjU2LDEuNT'+
			'YsMCwwLDAsMS4yLTEuNWMwLS44LS42LTEuNS0xLjgtMS41YTIuNzcsMi43NywwLDAsMC0xLjYuNWwuMi42YTIsMiwwLDAsMSwxLjMtLjRjLjgsMCwxLjEuNCwxLjEuOSwwLC43LS44LDEuMS0xLjQsMS4xaC0uNXYuNmguNWMuOCwwLDEuNi40LDEuNiwxLjMsMCwuNS0uMywxLjItMS40LDEuMmEyLjMsMi4zLDAsMCwxLTEuNC0uNGwtLjMuN1ptOC41LTYuMWgtLjZhMy4zNywzLjM3LDAsMCwwLTIsLjksNC4zLDQuMywwLDAsMC0xLjEsMi44YzAsMS42LjksMi43LDIuMiwyLjdhMi4xMywyLjEzLDAsMCwwLDIuMS0yLjIsMS44NywxLjg3LDAsMCwwLTEuOS0yLDIsMiwwLDAsMC0xLjUuN2gwYTIuMzcs'+
			'Mi4zNywwLDAsMSwyLjItMi4yaC42di0uN1ptLTEuNCw1LjhjLS45LDAtMS40LS44LTEuNC0xLjhhLjYuNiwwLDAsMSwuMS0uNCwxLjMsMS4zLDAsMCwxLDEuMi0uOCwxLjI0LDEuMjQsMCwwLDEsMS4zLDEuNGMwLDEtLjUsMS42LTEuMiwxLjZabTQuOS01LjhjLTEuMywwLTIuMiwxLjItMi4yLDMuM3MuOCwzLjIsMi4xLDMuMiwyLjItMS4yLDIuMi0zLjMtLjgtMy4yLTIuMS0zLjJabS0uMS43Yy45LDAsMS4zLDEsMS4zLDIuNnMtLjQsMi42LTEuMywyLjZTODIsNDAuNiw4MiwzOC45cy42LTIuNiwxLjMtMi42Wm00LjEtLjlhMS4zMiwxLjMyLDAsMCwwLTEuMywxLjNoMGExLjE2LDEuMTYsMCwwLD'+
			'AsMS4yLDEuMmgwYTEuMzIsMS4zMiwwLDAsMCwxLjMtMS4zaDBhMS4xNiwxLjE2LDAsMCwwLTEuMi0xLjJabTAsLjRhLjc5Ljc5LDAsMCwxLC44Ljh2LjFhLjc3Ljc3LDAsMCwxLS43LjhoMGEuNzEuNzEsMCwwLDEtLjctLjhoMGMtLjItLjUuMS0uOC42LS45Wk05MSwzNy4zLDkyLjgsNDJoLjhsMS44LTQuN2gtLjlsLS45LDIuNmE1LjY0LDUuNjQsMCwwLDAtLjQsMS4yaDBhNS42NCw1LjY0LDAsMCwwLS40LTEuMmwtLjktMi42Wk05Ny4xLDQyVjM3LjNoLS44VjQyWm0tLjQtNi41YS40Ny40NywwLDAsMC0uNS41aDBhLjUuNSwwLDEsMCwuNS0uNVpNOTguNSw0MmguOFYzOS4xYTEuMTgsMS4xOCww'+
			'LDAsMSwxLjEtMS4xaC4zdi0uOGgtLjJhMS4zOCwxLjM4LDAsMCwwLTEuMywxaDB2LS45aC0uN1Y0MloiLz4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIiBkPSJNMTAyLjEsMzYuNXYuOWgtLjdWMzhoLjd2Mi41YTEuOTIsMS45MiwwLDAsMCwuMywxLjIsMS40OSwxLjQ5LDAsMCwwLC45LjQsMi4yLDIuMiwwLDAsMCwuOC0uMXYtLjZjLS4yLDAtLjMuMS0uNS4xLS41LDAtLjYtLjMtLjYtLjlWMzhoMS4ydi0uNkgxMDNWMzYuM2wtLjkuMlptNi45LjhoLS44djIuOWExLjE2LDEuMTYsMCwwLDEtMS4yLDEuMmgwYy0uOCwwLTEtLjYtMS0xLjVWMzcuM2gtMVY0MGMwLD'+
			'EuNi45LDIsMS42LDJhMS45MiwxLjkyLDAsMCwwLDEuNi0uOWgwdi44aC44VjM3LjNabTQuNywxLjhjMC0uOS0uMy0xLjktMS44LTEuOWEyLjYsMi42LDAsMCwwLTEuNS40bC4yLjZhMi42NiwyLjY2LDAsMCwxLDEuMi0uMywxLDEsMCwwLDEsMS4xLDEuMWgwYy0xLjgsMC0yLjguNi0yLjgsMS43YTEuMzIsMS4zMiwwLDAsMCwxLjMsMS4zaC4xYTEuNTEsMS41MSwwLDAsMCwxLjQtLjdoMGwuMS43aC44YTQuMSw0LjEsMCwwLDEtLjEtMS4xVjM5LjFabS0uOSwxLjN2LjNhMS4xNywxLjE3LDAsMCwxLTEuMS44Ljc3Ljc3LDAsMCwxLS44LS43di0uMWMwLS45LDEuMS0xLjEsMi0xbC0uMS43Wk0xMTUs'+
			'NDJoLjlWMzUuMkgxMTVWNDJabTQuNS01LjZ2LjloLS43di42aC43djIuNWExLjkyLDEuOTIsMCwwLDAsLjMsMS4yLDEuNDksMS40OSwwLDAsMCwuOS40LDIuMiwyLjIsMCwwLDAsLjgtLjF2LS42Yy0uMiwwLS4zLjEtLjUuMS0uNSwwLS42LS4zLS42LS45VjM4aDEuMnYtLjZoLTEuMlYzNi4zbC0uOS4xWm01LC44YTIuMjYsMi4yNiwwLDAsMC0yLjMsMi41LDIuMjEsMi4yMSwwLDAsMCwyLjIsMi40LDIuMzEsMi4zMSwwLDAsMCwyLjMtMi41LDIuMTEsMi4xMSwwLDAsMC0yLjItMi40Wm0wLC42YzEsMCwxLjQsMSwxLjQsMS44LDAsMS4xLS42LDEuOC0xLjQsMS44YTEuNjIsMS42MiwwLDAsMS0xLj'+
			'QtMS44LDEuNTMsMS41MywwLDAsMSwxLjQtMS44Wm03LjItLjVoLS44djIuOWEuNi42LDAsMCwxLS4xLjQsMS4xNywxLjE3LDAsMCwxLTEuMS44Yy0uOCwwLTEtLjYtMS0xLjVWMzcuM2gtLjhWNDBjMCwxLjYuOSwyLDEuNiwyYTEuNjUsMS42NSwwLDAsMCwxLjUtLjloMHYuOGguOFY0MC42bC0uMS0zLjNabTEuNCw0LjdoLjhWMzkuMUExLjE4LDEuMTgsMCwwLDEsMTM1LDM4aC4zdi0uOGgtLjJhMS4zOCwxLjM4LDAsMCwwLTEuMywxaDB2LS45aC0uN1Y0MlptMi45LS4yYTMuMDgsMy4wOCwwLDAsMCwxLjMuM2MxLjEsMCwxLjctLjYsMS43LTEuNHMtLjQtMS4xLTEuMi0xLjRjLS42LS4yLS45LS40'+
			'LS45LS44cy4zLS42LjgtLjZhMS45MywxLjkzLDAsMCwxLDEsLjNsLjItLjZhMi4yOCwyLjI4LDAsMCwwLTEuMS0uMywxLjQzLDEuNDMsMCwwLDAtMS42LDEuNGMwLC42LjQsMSwxLjIsMS4zcS45LjMuOS45YzAsLjQtLjMuNy0uOS43YTIsMiwwLDAsMS0xLjEtLjNsLS4zLjVaIi8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOnVybCgjaikiIGQ9Ik0xOC4zNSwzOC43YTYuMjksNi4yOSwwLDAsMS0yLjYuNSw2LjI5LDYuMjksMCwwLDEtMi42LS41bDIuNi0xNSIvPgogPC9nPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5Oj'+
			'EiIGQ9Ik0xOC4zLDM4LjdhNi4yOSw2LjI5LDAsMCwxLTIuNi41LDcuMTEsNy4xMSwwLDAsMS0yLjctLjVsMi42LTE1Ii8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOnVybCgjbCkiIGQ9Ik0uNTUsMjYuNWE2LjI5LDYuMjksMCwwLDEtLjUtMi42LDUuNzUsNS43NSwwLDAsMSwuNS0yLjZsMTUsMi42Ii8+CiA8L2c+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTS41LDI2LjVBNi4yOSw2LjI5LDAsMCwxLDAsMjMuOWE1Ljc1LDUuNzUsMCwwLDEsLjUtMi42bDE1LDIuNiIvPgogPGcgc3R5bGU9ImNsaXAtcGF0'+
			'aDp1cmwoI2kpIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI24pIiBkPSJNMzAuNTUsMjFhNi4yOSw2LjI5LDAsMCwxLC41LDIuNiw1Ljc1LDUuNzUsMCwwLDEtLjUsMi42bC0xNS0yLjYiLz4KIDwvZz4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIiBkPSJNMzAuNSwyMWE2LjI5LDYuMjksMCwwLDEsLjUsMi42LDYuMjksNi4yOSwwLDAsMS0uNSwyLjZsLTE1LTIuNiIvPgogPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2kpIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI3ApIiBkPSJNMywxNS4xYTUuOTMsNS45MywwLDAsMSwxLjUtMi4yLDUuOTMsNS45MywwLD'+
			'AsMSwyLjItMS41bDguOCwxMi40Ii8+CiA8L2c+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTMsMTUuMWE1LjkzLDUuOTMsMCwwLDEsMS41LTIuMiw1LjkzLDUuOTMsMCwwLDEsMi4yLTEuNWw4LjgsMTIuNCIvPgogPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2kpIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI3IpIiBkPSJNMjguMDUsMzIuNGE1LjkzLDUuOTMsMCwwLDEtMS41LDIuMiw1LjkzLDUuOTMsMCwwLDEtMi4yLDEuNWwtOC44LTEyLjQiLz4KIDwvZz4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIiBkPSJNMjgs'+
			'MzIuNGE1LjkzLDUuOTMsMCwwLDEtMS41LDIuMiw1LjkzLDUuOTMsMCwwLDEtMi4yLDEuNUwxNS41LDIzLjciLz4KIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNpKSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCN0KSIgZD0iTTYuNzUsMzYuM2E1LjkzLDUuOTMsMCwwLDEtMi4yLTEuNSw1LjkzLDUuOTMsMCwwLDEtMS41LTIuMmwxMi40LTguOCIvPgogPC9nPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik02LjgsMzYuM2E1LjkzLDUuOTMsMCwwLDEtMi4yLTEuNUE1LjYxLDUuNjEsMCwwLDEsMywzMi42bDEyLjQtOC44Ii8+CiA8ZyBzdHlsZT0iY2xpcC'+
			'1wYXRoOnVybCgjaSkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOnVybCgjdikiIGQ9Ik0yNC4xNSwxMS4zYTUuOTMsNS45MywwLDAsMSwyLjIsMS41LDUuOTMsNS45MywwLDAsMSwxLjUsMi4ybC0xMi40LDguOCIvPgogPC9nPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0yNC4xLDExLjNhNS45Myw1LjkzLDAsMCwxLDIuMiwxLjVBNS45Myw1LjkzLDAsMCwxLDI3LjgsMTVMMTUuNCwyMy44Ii8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOnVybCgjeCkiIGQ9Ik0xMi43NSw4LjhhNi4yOSw2LjI5LDAsMCwxLDIu'+
			'Ni0uNSw1Ljc1LDUuNzUsMCwwLDEsMi42LjVsLTIuNiwxNSIvPgogPC9nPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0xMi44LDguOGE2LjI5LDYuMjksMCwwLDEsMi42LS41LDYuMjksNi4yOSwwLDAsMSwyLjYuNWwtMi42LDE1Ii8+Cjwvc3ZnPgo=';
		me._circlescapes__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="circlescapes";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circlescapes.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._circlescapes.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._circlescapes);
		el=me.__360s=document.createElement('div');
		els=me.__360s__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 863px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 1599px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__360s.ggScrollByX = function(diffX) {
			if(!me.__360s.ggHorScrollVisible || diffX == 0 || me.__360s.ggHPercentVisible >= 1.0) return;
			me.__360s.ggScrollPosX = (me.__360s__horScrollFg.offsetLeft + diffX);
			me.__360s.ggScrollPosX = Math.max(me.__360s.ggScrollPosX, 0);
			me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
			me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
			me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + me.__360s.ggContentLeftOffset + 'px';
			me.__360s.ggScrollPosXPercent = (me.__360s__horScrollFg.offsetLeft / me.__360s__horScrollBg.offsetWidth);
		}
		me.__360s.ggScrollByXSmooth = function(diffX) {
			if(!me.__360s.ggHorScrollVisible || diffX == 0 || me.__360s.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__360s.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__360s.ggScrollPosX >= me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth)) {
					me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__360s.ggScrollPosX <= 0)) {
					me.__360s.ggScrollPosX = Math.max(me.__360s.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
			me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + me.__360s.ggContentLeftOffset + 'px';
			me.__360s.ggScrollPosXPercent = (me.__360s__horScrollFg.offsetLeft / me.__360s__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__360s.ggScrollByY = function(diffY) {
			if(!me.__360s.ggVertScrollVisible || diffY == 0 || me.__360s.ggVPercentVisible >= 1.0) return;
			me.__360s.ggScrollPosY = (me.__360s__vertScrollFg.offsetTop + diffY);
			me.__360s.ggScrollPosY = Math.max(me.__360s.ggScrollPosY, 0);
			me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
			me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
			me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + me.__360s.ggContentTopOffset + 'px';
			me.__360s.ggScrollPosYPercent = (me.__360s__vertScrollFg.offsetTop / me.__360s__vertScrollBg.offsetHeight);
		}
		me.__360s.ggScrollByYSmooth = function(diffY) {
			if(!me.__360s.ggVertScrollVisible || diffY == 0 || me.__360s.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__360s.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__360s.ggScrollPosY >= me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight)) {
					me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__360s.ggScrollPosY <= 0)) {
					me.__360s.ggScrollPosY = Math.max(me.__360s.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
			me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + me.__360s.ggContentTopOffset + 'px';
			me.__360s.ggScrollPosYPercent = (me.__360s__vertScrollFg.offsetTop / me.__360s__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__360s.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__360s.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__360s.ggHPercentVisible);
					me.__360s.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__360s.offsetWidth - (me.__360s.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__360s.offsetWidth - (me.__360s.ggVertScrollVisible ? 15 : 0))) * me.__360s.ggHPercentVisible);
					me.__360s.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__360s.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__360s.ggVPercentVisible);
					me.__360s.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__360s.offsetHeight - (me.__360s.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__360s.offsetHeight - (me.__360s.ggHorScrollVisible ? 15 : 0))) * me.__360s.ggVPercentVisible);
					me.__360s.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me.__360s.ggDragLastX = t[0].clientX;
			me.__360s.ggDragLastY = t[0].clientY;
			me.__360s__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByX(-me.__360s.ggDragInertiaX);
					me.__360s.ggScrollByY(-me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0 && Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me.__360s__content.ontouchend = null;
				me.__360s__content.ontouchmove = null;
			}
			me.__360s__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me.__360s.ggDragLastX;
				var diffY = t[0].clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastX = t[0].clientX;
				me.__360s.ggDragLastY = t[0].clientY;
				me.__360s.ggScrollByX(-diffX);
				me.__360s.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me.__360s__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 2000px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__360s__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2000px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__360s.ggScrollPosX = 0;
		me.__360s.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__360s.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggScrollByX(me.__360s.ggDragInertiaX);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__360s.ggDragLastX;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragLastX = e.clientX;
				me.__360s.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__360s.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggScrollByX(me.__360s.ggDragInertiaX);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me.__360s.ggDragLastX;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragLastX = t[0].clientX;
				me.__360s.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me.__360s.ggScrollWidth;
			if (e.offsetX < me.__360s.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__360s.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__360s__horScrollBg.getBoundingClientRect();
			var diffX = me.__360s.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__360s.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__360s.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__360s.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me.__360s__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 1000px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__360s__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 1000px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__360s.ggScrollPosY = 0;
		me.__360s.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__360s.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByY(me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastY = e.clientY;
				me.__360s.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__360s.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByY(me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastY = t[0].clientY;
				me.__360s.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__360s.ggScrollHeight;
			if (e.offsetY < me.__360s.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__360s.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__360s__vertScrollBg.getBoundingClientRect();
			var diffY = me.__360s.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__360s.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__360s.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__360s.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me.__360s__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="360s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100%  -  90px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 89px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='map';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me.__360s.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360s.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me.__360s__horScrollBg.style.visibility = 'inherit';
					me.__360s__horScrollFg.style.visibility = 'inherit';
					me.__360s.ggHorScrollVisible = true;
				} else {
					me.__360s__horScrollBg.style.visibility = 'hidden';
					me.__360s__horScrollFg.style.visibility = 'hidden';
					me.__360s.ggHorScrollVisible = false;
				}
				if ((me.__360s.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me.__360s.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me.__360s__vertScrollBg.style.visibility = 'inherit';
					me.__360s__vertScrollFg.style.visibility = 'inherit';
					me.__360s.ggVertScrollVisible = true;
					if (!me.__360s.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me.__360s__vertScrollBg.getBoundingClientRect().width)) {
						me.__360s__horScrollBg.style.visibility = 'inherit';
						me.__360s__horScrollFg.style.visibility = 'inherit';
						me.__360s.ggHorScrollVisible = true;
					}
				} else {
					me.__360s__vertScrollBg.style.visibility = 'hidden';
					me.__360s__vertScrollFg.style.visibility = 'hidden';
					me.__360s.ggVertScrollVisible = false;
				}
				if(me.__360s.ggHorScrollVisible) {
					me.__360s.ggAvailableHeight = me.__360s.offsetHeight - 15;
					if (me.__360s.ggVertScrollVisible) {
						me.__360s.ggAvailableWidth = me.__360s.offsetWidth - 15;
						me.__360s.ggAvailableWidthWithScale = me.__360s.getBoundingClientRect().width - me.__360s__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__360s.ggAvailableWidth = me.__360s.offsetWidth;
						me.__360s.ggAvailableWidthWithScale = me.__360s.getBoundingClientRect().width;
					}
					me.__360s__horScrollBg.style.width = me.__360s.ggAvailableWidth + 'px';
					me.__360s.ggHPercentVisible = contentWidth != 0 ? me.__360s.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__360s.ggHPercentVisible > 1.0) me.__360s.ggHPercentVisible = 1.0;
					me.__360s.ggScrollWidth = Math.round(me.__360s__horScrollBg.offsetWidth * me.__360s.ggHPercentVisible);
					me.__360s__horScrollFg.style.width = me.__360s.ggScrollWidth + 'px';
					me.__360s.ggScrollPosX = me.__360s.ggScrollPosXPercent * me.__360s.ggAvailableWidth;
					me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
					me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
					if (me.__360s.ggHPercentVisible < 1.0) {
						me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__360s.ggAvailableHeight = me.__360s.offsetHeight;
					me.__360s.ggScrollPosX = 0;
					me.__360s.ggScrollPosXPercent = 0.0;
					me.__360s__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me.__360s.ggVertScrollVisible) {
					me.__360s.ggAvailableWidth = me.__360s.offsetWidth - 15;
					if (me.__360s.ggHorScrollVisible) {
						me.__360s.ggAvailableHeight = me.__360s.offsetHeight - 15;
						me.__360s.ggAvailableHeightWithScale = me.__360s.getBoundingClientRect().height - me.__360s__vertScrollBg.getBoundingClientRect().width;
						me.__360s__cornerBg.style.visibility = 'inherit';
					} else {
						me.__360s.ggAvailableHeight = me.__360s.offsetHeight;
						me.__360s.ggAvailableHeightWithScale = me.__360s.getBoundingClientRect().height;
						me.__360s__cornerBg.style.visibility = 'hidden';
					}
					me.__360s__vertScrollBg.style.height = me.__360s.ggAvailableHeight + 'px';
					me.__360s.ggVPercentVisible = contentHeight != 0 ? me.__360s.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__360s.ggVPercentVisible > 1.0) me.__360s.ggVPercentVisible = 1.0;
					me.__360s.ggScrollHeight =  Math.round(me.__360s__vertScrollBg.offsetHeight * me.__360s.ggVPercentVisible);
					me.__360s__vertScrollFg.style.height = me.__360s.ggScrollHeight + 'px';
					me.__360s.ggScrollPosY = me.__360s.ggScrollPosYPercent * me.__360s.ggAvailableHeight;
					me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
					me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
					if (me.__360s.ggVPercentVisible < 1.0) {
						me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me.__360s.ggAvailableWidth = me.__360s.offsetWidth;
					me.__360s.ggScrollPosY = 0;
					me.__360s.ggScrollPosYPercent = 0.0;
					me.__360s__content.style.top = this.ggContentTopOffset + 'px';
					me.__360s__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__360s.ggHorScrollVisible || vertScrollWasVisible != me.__360s.ggVertScrollVisible) {
					me.updateSize(me.__360s);
					me.__360s.ggUpdatePosition();
				}
			}
		}
		el=me._campusmap=document.createElement('div');
		els=me._campusmap__img=document.createElement('img');
		els.className='ggskin ggskin_campusmap';
		hs=basePath + 'images/campusmap.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="campusmap";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 864px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._campusmap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._campusmap.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1360px;';
		hs+='position : absolute;';
		hs+='top : 199px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1.onclick=function (e) {
			Van_Slate_House(0)
		}
		me.__1.onmouseover=function (e) {
			me.elementMouseOver['_1']=true;
			me._tooltip11.logicBlock_visible();
			me._ring1.logicBlock_visible();
		}
		me.__1.onmouseout=function (e) {
			me.elementMouseOver['_1']=false;
			me._tooltip11.logicBlock_visible();
			me._ring1.logicBlock_visible();
		}
		me.__1.ontouchend=function (e) {
			me.elementMouseOver['_1']=false;
			me._tooltip11.logicBlock_visible();
			me._ring1.logicBlock_visible();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip11=document.createElement('div');
		els=me._tooltip11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		hs+='text';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Van Slate House";
		el.appendChild(els);
		me._tooltip11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip11.style[domTransition]='';
				if (me._tooltip11.ggCurrentLogicStateVisible == 0) {
					me._tooltip11.style.visibility=(Number(me._tooltip11.style.opacity)>0||!me._tooltip11.style.opacity)?'inherit':'hidden';
					me._tooltip11.ggVisible=true;
				}
				else {
					me._tooltip11.style.visibility="hidden";
					me._tooltip11.ggVisible=false;
				}
			}
		}
		me._tooltip11.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__1.appendChild(me._tooltip11);
		el=me._number11=document.createElement('div');
		els=me._number11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="1";
		el.appendChild(els);
		me._number11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number11.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._number11);
		el=me._ring1=document.createElement('div');
		els=me._ring1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_1'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring1.style[domTransition]='';
				if (me._ring1.ggCurrentLogicStateVisible == 0) {
					me._ring1.style.visibility="hidden";
					me._ring1.ggVisible=false;
				}
				else if (me._ring1.ggCurrentLogicStateVisible == 1) {
					me._ring1.style.visibility=(Number(me._ring1.style.opacity)>0||!me._ring1.style.opacity)?'inherit':'hidden';
					me._ring1.ggVisible=true;
				}
				else {
					me._ring1.style.visibility="hidden";
					me._ring1.ggVisible=false;
				}
			}
		}
		me._ring1.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._ring1);
		me._campusmap.appendChild(me.__1);
		el=me.__2=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1060px;';
		hs+='position : absolute;';
		hs+='top : 129px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2.onclick=function (e) {
			Upper_School(0)
		}
		me.__2.onmouseover=function (e) {
			me.elementMouseOver['_2']=true;
			me._tooltip10.logicBlock_visible();
			me._ring2.logicBlock_visible();
		}
		me.__2.onmouseout=function (e) {
			me.elementMouseOver['_2']=false;
			me._tooltip10.logicBlock_visible();
			me._ring2.logicBlock_visible();
		}
		me.__2.ontouchend=function (e) {
			me.elementMouseOver['_2']=false;
			me._tooltip10.logicBlock_visible();
			me._ring2.logicBlock_visible();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip10=document.createElement('div');
		els=me._tooltip10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Upper School";
		el.appendChild(els);
		me._tooltip10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_2'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip10.style[domTransition]='';
				if (me._tooltip10.ggCurrentLogicStateVisible == 0) {
					me._tooltip10.style.visibility=(Number(me._tooltip10.style.opacity)>0||!me._tooltip10.style.opacity)?'inherit':'hidden';
					me._tooltip10.ggVisible=true;
				}
				else {
					me._tooltip10.style.visibility="hidden";
					me._tooltip10.ggVisible=false;
				}
			}
		}
		me._tooltip10.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__2.appendChild(me._tooltip10);
		el=me._number10=document.createElement('div');
		els=me._number10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="2";
		el.appendChild(els);
		me._number10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number10.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._number10);
		el=me._ring2=document.createElement('div');
		els=me._ring2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_2'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring2.style[domTransition]='';
				if (me._ring2.ggCurrentLogicStateVisible == 0) {
					me._ring2.style.visibility="hidden";
					me._ring2.ggVisible=false;
				}
				else if (me._ring2.ggCurrentLogicStateVisible == 1) {
					me._ring2.style.visibility=(Number(me._ring2.style.opacity)>0||!me._ring2.style.opacity)?'inherit':'hidden';
					me._ring2.ggVisible=true;
				}
				else {
					me._ring2.style.visibility="hidden";
					me._ring2.ggVisible=false;
				}
			}
		}
		me._ring2.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._ring2);
		me._campusmap.appendChild(me.__2);
		el=me.__3=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1129px;';
		hs+='position : absolute;';
		hs+='top : 236px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3.onclick=function (e) {
			Middle_School(0)
		}
		me.__3.onmouseover=function (e) {
			me.elementMouseOver['_3']=true;
			me._tooltip9.logicBlock_visible();
			me._ring3.logicBlock_visible();
		}
		me.__3.onmouseout=function (e) {
			me.elementMouseOver['_3']=false;
			me._tooltip9.logicBlock_visible();
			me._ring3.logicBlock_visible();
		}
		me.__3.ontouchend=function (e) {
			me.elementMouseOver['_3']=false;
			me._tooltip9.logicBlock_visible();
			me._ring3.logicBlock_visible();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip9=document.createElement('div');
		els=me._tooltip9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Middle School";
		el.appendChild(els);
		me._tooltip9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_3'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip9.style[domTransition]='';
				if (me._tooltip9.ggCurrentLogicStateVisible == 0) {
					me._tooltip9.style.visibility=(Number(me._tooltip9.style.opacity)>0||!me._tooltip9.style.opacity)?'inherit':'hidden';
					me._tooltip9.ggVisible=true;
				}
				else {
					me._tooltip9.style.visibility="hidden";
					me._tooltip9.ggVisible=false;
				}
			}
		}
		me._tooltip9.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__3.appendChild(me._tooltip9);
		el=me._number9=document.createElement('div');
		els=me._number9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="3";
		el.appendChild(els);
		me._number9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number9.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._number9);
		el=me._ring3=document.createElement('div');
		els=me._ring3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_3'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring3.style[domTransition]='';
				if (me._ring3.ggCurrentLogicStateVisible == 0) {
					me._ring3.style.visibility="hidden";
					me._ring3.ggVisible=false;
				}
				else if (me._ring3.ggCurrentLogicStateVisible == 1) {
					me._ring3.style.visibility=(Number(me._ring3.style.opacity)>0||!me._ring3.style.opacity)?'inherit':'hidden';
					me._ring3.ggVisible=true;
				}
				else {
					me._ring3.style.visibility="hidden";
					me._ring3.ggVisible=false;
				}
			}
		}
		me._ring3.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._ring3);
		me._campusmap.appendChild(me.__3);
		el=me.__4=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1022px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4.onclick=function (e) {
			Admission_Office(0)
		}
		me.__4.onmouseover=function (e) {
			me.elementMouseOver['_4']=true;
			me._tooltip8.logicBlock_visible();
			me._ring4.logicBlock_visible();
		}
		me.__4.onmouseout=function (e) {
			me.elementMouseOver['_4']=false;
			me._tooltip8.logicBlock_visible();
			me._ring4.logicBlock_visible();
		}
		me.__4.ontouchend=function (e) {
			me.elementMouseOver['_4']=false;
			me._tooltip8.logicBlock_visible();
			me._ring4.logicBlock_visible();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip8=document.createElement('div');
		els=me._tooltip8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Admission Office";
		el.appendChild(els);
		me._tooltip8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_4'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip8.style[domTransition]='';
				if (me._tooltip8.ggCurrentLogicStateVisible == 0) {
					me._tooltip8.style.visibility=(Number(me._tooltip8.style.opacity)>0||!me._tooltip8.style.opacity)?'inherit':'hidden';
					me._tooltip8.ggVisible=true;
				}
				else {
					me._tooltip8.style.visibility="hidden";
					me._tooltip8.ggVisible=false;
				}
			}
		}
		me._tooltip8.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__4.appendChild(me._tooltip8);
		el=me._number8=document.createElement('div');
		els=me._number8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="4";
		el.appendChild(els);
		me._number8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number8.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._number8);
		el=me._ring4=document.createElement('div');
		els=me._ring4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_4'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring4.style[domTransition]='';
				if (me._ring4.ggCurrentLogicStateVisible == 0) {
					me._ring4.style.visibility="hidden";
					me._ring4.ggVisible=false;
				}
				else if (me._ring4.ggCurrentLogicStateVisible == 1) {
					me._ring4.style.visibility=(Number(me._ring4.style.opacity)>0||!me._ring4.style.opacity)?'inherit':'hidden';
					me._ring4.ggVisible=true;
				}
				else {
					me._ring4.style.visibility="hidden";
					me._ring4.ggVisible=false;
				}
			}
		}
		me._ring4.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._ring4);
		me._campusmap.appendChild(me.__4);
		el=me.__5=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 925px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__5.onclick=function (e) {
			Solomon_Theater(0)
		}
		me.__5.onmouseover=function (e) {
			me.elementMouseOver['_5']=true;
			me._tooltip7.logicBlock_visible();
			me._ring5.logicBlock_visible();
		}
		me.__5.onmouseout=function (e) {
			me.elementMouseOver['_5']=false;
			me._tooltip7.logicBlock_visible();
			me._ring5.logicBlock_visible();
		}
		me.__5.ontouchend=function (e) {
			me.elementMouseOver['_5']=false;
			me._tooltip7.logicBlock_visible();
			me._ring5.logicBlock_visible();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip7=document.createElement('div');
		els=me._tooltip7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Solomon Theater";
		el.appendChild(els);
		me._tooltip7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_5'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip7.style[domTransition]='';
				if (me._tooltip7.ggCurrentLogicStateVisible == 0) {
					me._tooltip7.style.visibility=(Number(me._tooltip7.style.opacity)>0||!me._tooltip7.style.opacity)?'inherit':'hidden';
					me._tooltip7.ggVisible=true;
				}
				else {
					me._tooltip7.style.visibility="hidden";
					me._tooltip7.ggVisible=false;
				}
			}
		}
		me._tooltip7.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__5.appendChild(me._tooltip7);
		el=me._number7=document.createElement('div');
		els=me._number7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="5";
		el.appendChild(els);
		me._number7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number7.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._number7);
		el=me._ring5=document.createElement('div');
		els=me._ring5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_5'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring5.style[domTransition]='';
				if (me._ring5.ggCurrentLogicStateVisible == 0) {
					me._ring5.style.visibility="hidden";
					me._ring5.ggVisible=false;
				}
				else if (me._ring5.ggCurrentLogicStateVisible == 1) {
					me._ring5.style.visibility=(Number(me._ring5.style.opacity)>0||!me._ring5.style.opacity)?'inherit':'hidden';
					me._ring5.ggVisible=true;
				}
				else {
					me._ring5.style.visibility="hidden";
					me._ring5.ggVisible=false;
				}
			}
		}
		me._ring5.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._ring5);
		me._campusmap.appendChild(me.__5);
		el=me.__6=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 669px;';
		hs+='position : absolute;';
		hs+='top : 258px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__6.onclick=function (e) {
			Chapel(0)
		}
		me.__6.onmouseover=function (e) {
			me.elementMouseOver['_6']=true;
			me._tooltip6.logicBlock_visible();
			me._ring6.logicBlock_visible();
		}
		me.__6.onmouseout=function (e) {
			me.elementMouseOver['_6']=false;
			me._tooltip6.logicBlock_visible();
			me._ring6.logicBlock_visible();
		}
		me.__6.ontouchend=function (e) {
			me.elementMouseOver['_6']=false;
			me._tooltip6.logicBlock_visible();
			me._ring6.logicBlock_visible();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip6=document.createElement('div');
		els=me._tooltip6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Dan and Frances White Chapel";
		el.appendChild(els);
		me._tooltip6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_6'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip6.style[domTransition]='';
				if (me._tooltip6.ggCurrentLogicStateVisible == 0) {
					me._tooltip6.style.visibility=(Number(me._tooltip6.style.opacity)>0||!me._tooltip6.style.opacity)?'inherit':'hidden';
					me._tooltip6.ggVisible=true;
				}
				else {
					me._tooltip6.style.visibility="hidden";
					me._tooltip6.ggVisible=false;
				}
			}
		}
		me._tooltip6.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__6.appendChild(me._tooltip6);
		el=me._number6=document.createElement('div');
		els=me._number6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="6";
		el.appendChild(els);
		me._number6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number6.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._number6);
		el=me._ring6=document.createElement('div');
		els=me._ring6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_6'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring6.style[domTransition]='';
				if (me._ring6.ggCurrentLogicStateVisible == 0) {
					me._ring6.style.visibility="hidden";
					me._ring6.ggVisible=false;
				}
				else if (me._ring6.ggCurrentLogicStateVisible == 1) {
					me._ring6.style.visibility=(Number(me._ring6.style.opacity)>0||!me._ring6.style.opacity)?'inherit':'hidden';
					me._ring6.ggVisible=true;
				}
				else {
					me._ring6.style.visibility="hidden";
					me._ring6.ggVisible=false;
				}
			}
		}
		me._ring6.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._ring6);
		me._campusmap.appendChild(me.__6);
		el=me.__7=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 814px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__7.onclick=function (e) {
			Saints_Hall(0)
		}
		me.__7.onmouseover=function (e) {
			me.elementMouseOver['_7']=true;
			me._tooltip5.logicBlock_visible();
			me._ring7.logicBlock_visible();
		}
		me.__7.onmouseout=function (e) {
			me.elementMouseOver['_7']=false;
			me._tooltip5.logicBlock_visible();
			me._ring7.logicBlock_visible();
		}
		me.__7.ontouchend=function (e) {
			me.elementMouseOver['_7']=false;
			me._tooltip5.logicBlock_visible();
			me._ring7.logicBlock_visible();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip5=document.createElement('div');
		els=me._tooltip5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Saints Hall";
		el.appendChild(els);
		me._tooltip5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_7'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip5.style[domTransition]='';
				if (me._tooltip5.ggCurrentLogicStateVisible == 0) {
					me._tooltip5.style.visibility=(Number(me._tooltip5.style.opacity)>0||!me._tooltip5.style.opacity)?'inherit':'hidden';
					me._tooltip5.ggVisible=true;
				}
				else {
					me._tooltip5.style.visibility="hidden";
					me._tooltip5.ggVisible=false;
				}
			}
		}
		me._tooltip5.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__7.appendChild(me._tooltip5);
		el=me._number5=document.createElement('div');
		els=me._number5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="7";
		el.appendChild(els);
		me._number5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number5.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._number5);
		el=me._ring7=document.createElement('div');
		els=me._ring7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_7'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring7.style[domTransition]='';
				if (me._ring7.ggCurrentLogicStateVisible == 0) {
					me._ring7.style.visibility="hidden";
					me._ring7.ggVisible=false;
				}
				else if (me._ring7.ggCurrentLogicStateVisible == 1) {
					me._ring7.style.visibility=(Number(me._ring7.style.opacity)>0||!me._ring7.style.opacity)?'inherit':'hidden';
					me._ring7.ggVisible=true;
				}
				else {
					me._ring7.style.visibility="hidden";
					me._ring7.ggVisible=false;
				}
			}
		}
		me._ring7.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._ring7);
		me._campusmap.appendChild(me.__7);
		el=me.__8=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 730px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__8.onclick=function (e) {
			Center_For_Innovation(0)
		}
		me.__8.onmouseover=function (e) {
			me.elementMouseOver['_8']=true;
			me._tooltip4.logicBlock_visible();
			me._ring8.logicBlock_visible();
		}
		me.__8.onmouseout=function (e) {
			me.elementMouseOver['_8']=false;
			me._tooltip4.logicBlock_visible();
			me._ring8.logicBlock_visible();
		}
		me.__8.ontouchend=function (e) {
			me.elementMouseOver['_8']=false;
			me._tooltip4.logicBlock_visible();
			me._ring8.logicBlock_visible();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip4=document.createElement('div');
		els=me._tooltip4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Gibbs Family Center for Innovation + Design";
		el.appendChild(els);
		me._tooltip4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_8'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip4.style[domTransition]='';
				if (me._tooltip4.ggCurrentLogicStateVisible == 0) {
					me._tooltip4.style.visibility=(Number(me._tooltip4.style.opacity)>0||!me._tooltip4.style.opacity)?'inherit':'hidden';
					me._tooltip4.ggVisible=true;
				}
				else {
					me._tooltip4.style.visibility="hidden";
					me._tooltip4.ggVisible=false;
				}
			}
		}
		me._tooltip4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__8.appendChild(me._tooltip4);
		el=me._number4=document.createElement('div');
		els=me._number4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="8";
		el.appendChild(els);
		me._number4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number4.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._number4);
		el=me._ring8=document.createElement('div');
		els=me._ring8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_8'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring8.style[domTransition]='';
				if (me._ring8.ggCurrentLogicStateVisible == 0) {
					me._ring8.style.visibility="hidden";
					me._ring8.ggVisible=false;
				}
				else if (me._ring8.ggCurrentLogicStateVisible == 1) {
					me._ring8.style.visibility=(Number(me._ring8.style.opacity)>0||!me._ring8.style.opacity)?'inherit':'hidden';
					me._ring8.ggVisible=true;
				}
				else {
					me._ring8.style.visibility="hidden";
					me._ring8.ggVisible=false;
				}
			}
		}
		me._ring8.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._ring8);
		me._campusmap.appendChild(me.__8);
		el=me.__9=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 666px;';
		hs+='position : absolute;';
		hs+='top : 133px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__9.onclick=function (e) {
			Fine_Arts(0)
		}
		me.__9.onmouseover=function (e) {
			me.elementMouseOver['_9']=true;
			me._tooltip3.logicBlock_visible();
			me._ring9.logicBlock_visible();
		}
		me.__9.onmouseout=function (e) {
			me.elementMouseOver['_9']=false;
			me._tooltip3.logicBlock_visible();
			me._ring9.logicBlock_visible();
		}
		me.__9.ontouchend=function (e) {
			me.elementMouseOver['_9']=false;
			me._tooltip3.logicBlock_visible();
			me._ring9.logicBlock_visible();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip3=document.createElement('div');
		els=me._tooltip3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Merrick Fine Arts Building";
		el.appendChild(els);
		me._tooltip3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_9'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip3.style[domTransition]='';
				if (me._tooltip3.ggCurrentLogicStateVisible == 0) {
					me._tooltip3.style.visibility=(Number(me._tooltip3.style.opacity)>0||!me._tooltip3.style.opacity)?'inherit':'hidden';
					me._tooltip3.ggVisible=true;
				}
				else {
					me._tooltip3.style.visibility="hidden";
					me._tooltip3.ggVisible=false;
				}
			}
		}
		me._tooltip3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__9.appendChild(me._tooltip3);
		el=me._number3=document.createElement('div');
		els=me._number3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="9";
		el.appendChild(els);
		me._number3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number3.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._number3);
		el=me._ring9=document.createElement('div');
		els=me._ring9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_9'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring9.style[domTransition]='';
				if (me._ring9.ggCurrentLogicStateVisible == 0) {
					me._ring9.style.visibility="hidden";
					me._ring9.ggVisible=false;
				}
				else if (me._ring9.ggCurrentLogicStateVisible == 1) {
					me._ring9.style.visibility=(Number(me._ring9.style.opacity)>0||!me._ring9.style.opacity)?'inherit':'hidden';
					me._ring9.ggVisible=true;
				}
				else {
					me._ring9.style.visibility="hidden";
					me._ring9.ggVisible=false;
				}
			}
		}
		me._ring9.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._ring9);
		me._campusmap.appendChild(me.__9);
		el=me.__10=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 600px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__10.onclick=function (e) {
			George_Cottage(0)
		}
		me.__10.onmouseover=function (e) {
			me.elementMouseOver['_10']=true;
			me._tooltip2.logicBlock_visible();
			me._ring10.logicBlock_visible();
		}
		me.__10.onmouseout=function (e) {
			me.elementMouseOver['_10']=false;
			me._tooltip2.logicBlock_visible();
			me._ring10.logicBlock_visible();
		}
		me.__10.ontouchend=function (e) {
			me.elementMouseOver['_10']=false;
			me._tooltip2.logicBlock_visible();
			me._ring10.logicBlock_visible();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip2=document.createElement('div');
		els=me._tooltip2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="George Cottage";
		el.appendChild(els);
		me._tooltip2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip2.style[domTransition]='';
				if (me._tooltip2.ggCurrentLogicStateVisible == 0) {
					me._tooltip2.style.visibility=(Number(me._tooltip2.style.opacity)>0||!me._tooltip2.style.opacity)?'inherit':'hidden';
					me._tooltip2.ggVisible=true;
				}
				else {
					me._tooltip2.style.visibility="hidden";
					me._tooltip2.ggVisible=false;
				}
			}
		}
		me._tooltip2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__10.appendChild(me._tooltip2);
		el=me._number2=document.createElement('div');
		els=me._number2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="10";
		el.appendChild(els);
		me._number2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number2.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._number2);
		el=me._ring10=document.createElement('div');
		els=me._ring10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_10'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring10.style[domTransition]='';
				if (me._ring10.ggCurrentLogicStateVisible == 0) {
					me._ring10.style.visibility="hidden";
					me._ring10.ggVisible=false;
				}
				else if (me._ring10.ggCurrentLogicStateVisible == 1) {
					me._ring10.style.visibility=(Number(me._ring10.style.opacity)>0||!me._ring10.style.opacity)?'inherit':'hidden';
					me._ring10.ggVisible=true;
				}
				else {
					me._ring10.style.visibility="hidden";
					me._ring10.ggVisible=false;
				}
			}
		}
		me._ring10.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._ring10);
		me._campusmap.appendChild(me.__10);
		el=me.__11=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 472px;';
		hs+='position : absolute;';
		hs+='top : 176px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__11.onclick=function (e) {
			Athletic_Facilities(0)
		}
		me.__11.onmouseover=function (e) {
			me.elementMouseOver['_11']=true;
			me._tooltip1.logicBlock_visible();
			me._ring11.logicBlock_visible();
		}
		me.__11.onmouseout=function (e) {
			me.elementMouseOver['_11']=false;
			me._tooltip1.logicBlock_visible();
			me._ring11.logicBlock_visible();
		}
		me.__11.ontouchend=function (e) {
			me.elementMouseOver['_11']=false;
			me._tooltip1.logicBlock_visible();
			me._ring11.logicBlock_visible();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip1=document.createElement('div');
		els=me._tooltip1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Athletic Facilities";
		el.appendChild(els);
		me._tooltip1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_11'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip1.style[domTransition]='';
				if (me._tooltip1.ggCurrentLogicStateVisible == 0) {
					me._tooltip1.style.visibility=(Number(me._tooltip1.style.opacity)>0||!me._tooltip1.style.opacity)?'inherit':'hidden';
					me._tooltip1.ggVisible=true;
				}
				else {
					me._tooltip1.style.visibility="hidden";
					me._tooltip1.ggVisible=false;
				}
			}
		}
		me._tooltip1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__11.appendChild(me._tooltip1);
		el=me._number1=document.createElement('div');
		els=me._number1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="11";
		el.appendChild(els);
		me._number1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number1.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._number1);
		el=me._ring11=document.createElement('div');
		els=me._ring11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_11'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring11.style[domTransition]='';
				if (me._ring11.ggCurrentLogicStateVisible == 0) {
					me._ring11.style.visibility="hidden";
					me._ring11.ggVisible=false;
				}
				else if (me._ring11.ggCurrentLogicStateVisible == 1) {
					me._ring11.style.visibility=(Number(me._ring11.style.opacity)>0||!me._ring11.style.opacity)?'inherit':'hidden';
					me._ring11.ggVisible=true;
				}
				else {
					me._ring11.style.visibility="hidden";
					me._ring11.ggVisible=false;
				}
			}
		}
		me._ring11.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._ring11);
		me._campusmap.appendChild(me.__11);
		el=me.__12=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 223px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__12.onclick=function (e) {
			Lower_School(0)
		}
		me.__12.onmouseover=function (e) {
			me.elementMouseOver['_12']=true;
			me._tooltip0.logicBlock_visible();
			me._ring12.logicBlock_visible();
		}
		me.__12.onmouseout=function (e) {
			me.elementMouseOver['_12']=false;
			me._tooltip0.logicBlock_visible();
			me._ring12.logicBlock_visible();
		}
		me.__12.ontouchend=function (e) {
			me.elementMouseOver['_12']=false;
			me._tooltip0.logicBlock_visible();
			me._ring12.logicBlock_visible();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip0=document.createElement('div');
		els=me._tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lower School";
		el.appendChild(els);
		me._tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_12'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip0.style[domTransition]='';
				if (me._tooltip0.ggCurrentLogicStateVisible == 0) {
					me._tooltip0.style.visibility=(Number(me._tooltip0.style.opacity)>0||!me._tooltip0.style.opacity)?'inherit':'hidden';
					me._tooltip0.ggVisible=true;
				}
				else {
					me._tooltip0.style.visibility="hidden";
					me._tooltip0.ggVisible=false;
				}
			}
		}
		me._tooltip0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__12.appendChild(me._tooltip0);
		el=me._number0=document.createElement('div');
		els=me._number0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="12";
		el.appendChild(els);
		me._number0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number0.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me._number0);
		el=me._ring12=document.createElement('div');
		els=me._ring12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_12'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring12.style[domTransition]='';
				if (me._ring12.ggCurrentLogicStateVisible == 0) {
					me._ring12.style.visibility="hidden";
					me._ring12.ggVisible=false;
				}
				else if (me._ring12.ggCurrentLogicStateVisible == 1) {
					me._ring12.style.visibility=(Number(me._ring12.style.opacity)>0||!me._ring12.style.opacity)?'inherit':'hidden';
					me._ring12.ggVisible=true;
				}
				else {
					me._ring12.style.visibility="hidden";
					me._ring12.ggVisible=false;
				}
			}
		}
		me._ring12.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me._ring12);
		me._campusmap.appendChild(me.__12);
		el=me.__13=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 345px;';
		hs+='position : absolute;';
		hs+='top : 609px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__13.onclick=function (e) {
			Stadium_Track(0)
		}
		me.__13.onmouseover=function (e) {
			me.elementMouseOver['_13']=true;
			me._tooltip.logicBlock_visible();
			me._ring13.logicBlock_visible();
		}
		me.__13.onmouseout=function (e) {
			me.elementMouseOver['_13']=false;
			me._tooltip.logicBlock_visible();
			me._ring13.logicBlock_visible();
		}
		me.__13.ontouchend=function (e) {
			me.elementMouseOver['_13']=false;
			me._tooltip.logicBlock_visible();
			me._ring13.logicBlock_visible();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(240,239,239,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Tony Porter Stadium and the Latter & Blum Track";
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_13'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip.style[domTransition]='';
				if (me._tooltip.ggCurrentLogicStateVisible == 0) {
					me._tooltip.style.visibility=(Number(me._tooltip.style.opacity)>0||!me._tooltip.style.opacity)?'inherit':'hidden';
					me._tooltip.ggVisible=true;
				}
				else {
					me._tooltip.style.visibility="hidden";
					me._tooltip.ggVisible=false;
				}
			}
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__13.appendChild(me._tooltip);
		el=me._number=document.createElement('div');
		els=me._number__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="13";
		el.appendChild(els);
		me._number.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._number);
		el=me._ring13=document.createElement('div');
		els=me._ring13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzExLjMsNC4yLDIwLDQu'+
			'MiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_13'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring13.style[domTransition]='';
				if (me._ring13.ggCurrentLogicStateVisible == 0) {
					me._ring13.style.visibility="hidden";
					me._ring13.ggVisible=false;
				}
				else if (me._ring13.ggCurrentLogicStateVisible == 1) {
					me._ring13.style.visibility=(Number(me._ring13.style.opacity)>0||!me._ring13.style.opacity)?'inherit':'hidden';
					me._ring13.ggVisible=true;
				}
				else {
					me._ring13.style.visibility="hidden";
					me._ring13.ggVisible=false;
				}
			}
		}
		me._ring13.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._ring13);
		me._campusmap.appendChild(me.__13);
		el=me._scrollertrigger=document.createElement('div');
		el.ggId="scrollertrigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffaaff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 1200px;';
		hs+='position : absolute;';
		hs+='top : 450px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollertrigger.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollertrigger.onclick=function (e) {
			if (me.__360s.ggScrollByX && me.__360s.ggScrollByY) {
				me.__360s.ggScrollByXSmooth(0);
				me.__360s.ggScrollByYSmooth(0);
			}
		}
		me._scrollertrigger.ggUpdatePosition=function (useTransition) {
		}
		me._campusmap.appendChild(me._scrollertrigger);
		me.__360s__content.appendChild(me._campusmap);
		me.divSkin.appendChild(me.__360s);
		el=me._key=document.createElement('div');
		els=me._key__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 644px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 180px;';
		hs+="";
		els.setAttribute('style',hs);
		me._key.ggScrollByX = function(diffX) {
			if(!me._key.ggHorScrollVisible || diffX == 0 || me._key.ggHPercentVisible >= 1.0) return;
			me._key.ggScrollPosX = (me._key__horScrollFg.offsetLeft + diffX);
			me._key.ggScrollPosX = Math.max(me._key.ggScrollPosX, 0);
			me._key.ggScrollPosX = Math.min(me._key.ggScrollPosX, me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth);
			me._key__horScrollFg.style.left = me._key.ggScrollPosX + 'px';
			me._key__content.style.left = -(Math.round(me._key.ggScrollPosX / me._key.ggHPercentVisible)) + me._key.ggContentLeftOffset + 'px';
			me._key.ggScrollPosXPercent = (me._key__horScrollFg.offsetLeft / me._key__horScrollBg.offsetWidth);
		}
		me._key.ggScrollByXSmooth = function(diffX) {
			if(!me._key.ggHorScrollVisible || diffX == 0 || me._key.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._key.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._key.ggScrollPosX >= me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth)) {
					me._key.ggScrollPosX = Math.min(me._key.ggScrollPosX, me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._key.ggScrollPosX <= 0)) {
					me._key.ggScrollPosX = Math.max(me._key.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._key__horScrollFg.style.left = me._key.ggScrollPosX + 'px';
			me._key__content.style.left = -(Math.round(me._key.ggScrollPosX / me._key.ggHPercentVisible)) + me._key.ggContentLeftOffset + 'px';
			me._key.ggScrollPosXPercent = (me._key__horScrollFg.offsetLeft / me._key__horScrollBg.offsetWidth);
			}, 10);
		}
		me._key.ggScrollByY = function(diffY) {
			if(!me._key.ggVertScrollVisible || diffY == 0 || me._key.ggVPercentVisible >= 1.0) return;
			me._key.ggScrollPosY = (me._key__vertScrollFg.offsetTop + diffY);
			me._key.ggScrollPosY = Math.max(me._key.ggScrollPosY, 0);
			me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
			me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
			me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + me._key.ggContentTopOffset + 'px';
			me._key.ggScrollPosYPercent = (me._key__vertScrollFg.offsetTop / me._key__vertScrollBg.offsetHeight);
		}
		me._key.ggScrollByYSmooth = function(diffY) {
			if(!me._key.ggVertScrollVisible || diffY == 0 || me._key.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._key.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._key.ggScrollPosY >= me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight)) {
					me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._key.ggScrollPosY <= 0)) {
					me._key.ggScrollPosY = Math.max(me._key.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
			me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + me._key.ggContentTopOffset + 'px';
			me._key.ggScrollPosYPercent = (me._key__vertScrollFg.offsetTop / me._key__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._key.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._key.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._key.ggHPercentVisible);
					me._key.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._key.offsetWidth - (me._key.ggVertScrollVisible ? 10 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._key.offsetWidth - (me._key.ggVertScrollVisible ? 10 : 0))) * me._key.ggHPercentVisible);
					me._key.ggScrollByXSmooth(diffX);
				}
			}
			if (me._key.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._key.ggVPercentVisible);
					me._key.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._key.offsetHeight - (me._key.ggHorScrollVisible ? 10 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._key.offsetHeight - (me._key.ggHorScrollVisible ? 10 : 0))) * me._key.ggVPercentVisible);
					me._key.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._key.ggDragLastX = t[0].clientX;
			me._key.ggDragLastY = t[0].clientY;
			me._key__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaX *= 0.65;
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByX(-me._key.ggDragInertiaX);
					me._key.ggScrollByY(-me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaX) < 1.0 && Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._key__content.ontouchend = null;
				me._key__content.ontouchmove = null;
			}
			me._key__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._key.ggDragLastX;
				var diffY = t[0].clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaX = diffX;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastX = t[0].clientX;
				me._key.ggDragLastY = t[0].clientY;
				me._key.ggScrollByX(-diffX);
				me._key.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._key__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 10px; height: 841.667px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._key__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 10px; height: 841.667px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._key.ggScrollPosY = 0;
		me._key.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._key.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByY(me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastY = e.clientY;
				me._key.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._key.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByY(me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastY = t[0].clientY;
				me._key.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._key.ggScrollHeight;
			if (e.offsetY < me._key.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._key.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._key__vertScrollBg.getBoundingClientRect();
			var diffY = me._key.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._key.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._key.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._key.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._key__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 10px; height: 10px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="key";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 15px;';
		hs+='height : calc(100%  -  105px);';
		hs+='left : -185px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._key.ggHorScrollVisible && contentHeight > this.offsetHeight - 10) || (!me._key.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._key__vertScrollBg.style.visibility = 'inherit';
					me._key__vertScrollFg.style.visibility = 'inherit';
					me._key.ggVertScrollVisible = true;
				} else {
					me._key__vertScrollBg.style.visibility = 'hidden';
					me._key__vertScrollFg.style.visibility = 'hidden';
					me._key.ggVertScrollVisible = false;
				}
				if(me._key.ggVertScrollVisible) {
					me._key.ggAvailableWidth = me._key.offsetWidth - 10;
					if (me._key.ggHorScrollVisible) {
						me._key.ggAvailableHeight = me._key.offsetHeight - 10;
						me._key.ggAvailableHeightWithScale = me._key.getBoundingClientRect().height - me._key__vertScrollBg.getBoundingClientRect().width;
						me._key__cornerBg.style.visibility = 'inherit';
					} else {
						me._key.ggAvailableHeight = me._key.offsetHeight;
						me._key.ggAvailableHeightWithScale = me._key.getBoundingClientRect().height;
						me._key__cornerBg.style.visibility = 'hidden';
					}
					me._key__vertScrollBg.style.height = me._key.ggAvailableHeight + 'px';
					me._key.ggVPercentVisible = contentHeight != 0 ? me._key.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._key.ggVPercentVisible > 1.0) me._key.ggVPercentVisible = 1.0;
					me._key.ggScrollHeight =  Math.round(me._key__vertScrollBg.offsetHeight * me._key.ggVPercentVisible);
					me._key__vertScrollFg.style.height = me._key.ggScrollHeight + 'px';
					me._key.ggScrollPosY = me._key.ggScrollPosYPercent * me._key.ggAvailableHeight;
					me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
					me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
					if (me._key.ggVPercentVisible < 1.0) {
						me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._key.ggAvailableWidth = me._key.offsetWidth;
					me._key.ggScrollPosY = 0;
					me._key.ggScrollPosYPercent = 0.0;
					me._key__content.style.top = this.ggContentTopOffset + 'px';
					me._key__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._key.ggHorScrollVisible || vertScrollWasVisible != me._key.ggVertScrollVisible) {
					me.updateSize(me._key);
					me._key.ggUpdatePosition();
				}
			}
		}
		el=me._key1=document.createElement('div');
		els=me._key1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">1. Van Slate House<\/span>";
		el.appendChild(els);
		me._key1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key1'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key1__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key1.ggCurrentLogicStateTextColor == 0) {
					me._key1__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key1__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key1.onclick=function (e) {
			me.__1.onclick();
		}
		me._key1.onmouseover=function (e) {
			me.elementMouseOver['key1']=true;
			me._key1.logicBlock_textcolor();
		}
		me._key1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key1__text)
					return;
				}
			}
			me._ring1.style[domTransition]='none';
			me._ring1.style.visibility='hidden';
			me._ring1.ggVisible=false;
			me.elementMouseOver['key1']=false;
			me._key1.logicBlock_textcolor();
		}
		me._key1.ontouchend=function (e) {
			me.elementMouseOver['key1']=false;
			me._key1.logicBlock_textcolor();
		}
		me._key1.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key1);
		el=me._key2=document.createElement('div');
		els=me._key2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">2. Upper School<\/span>";
		el.appendChild(els);
		me._key2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key2'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key2__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key2.ggCurrentLogicStateTextColor == 0) {
					me._key2__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key2__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key2.onclick=function (e) {
			me.__2.onclick();
		}
		me._key2.onmouseover=function (e) {
			me.elementMouseOver['key2']=true;
			me._key2.logicBlock_textcolor();
		}
		me._key2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key2__text)
					return;
				}
			}
			me._ring2.style[domTransition]='none';
			me._ring2.style.visibility='hidden';
			me._ring2.ggVisible=false;
			me.elementMouseOver['key2']=false;
			me._key2.logicBlock_textcolor();
		}
		me._key2.ontouchend=function (e) {
			me.elementMouseOver['key2']=false;
			me._key2.logicBlock_textcolor();
		}
		me._key2.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key2);
		el=me._key3=document.createElement('div');
		els=me._key3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">3. Middle School<\/span>";
		el.appendChild(els);
		me._key3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key3'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key3__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key3.ggCurrentLogicStateTextColor == 0) {
					me._key3__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key3__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key3.onclick=function (e) {
			me.__3.onclick();
		}
		me._key3.onmouseover=function (e) {
			me.elementMouseOver['key3']=true;
			me._key3.logicBlock_textcolor();
		}
		me._key3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key3__text)
					return;
				}
			}
			me._ring3.style[domTransition]='none';
			me._ring3.style.visibility='hidden';
			me._ring3.ggVisible=false;
			me.elementMouseOver['key3']=false;
			me._key3.logicBlock_textcolor();
		}
		me._key3.ontouchend=function (e) {
			me.elementMouseOver['key3']=false;
			me._key3.logicBlock_textcolor();
		}
		me._key3.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key3);
		el=me._key4=document.createElement('div');
		els=me._key4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">4. Admission Office<\/span>";
		el.appendChild(els);
		me._key4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key4'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key4__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key4.ggCurrentLogicStateTextColor == 0) {
					me._key4__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key4__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key4.onclick=function (e) {
			me.__4.onclick();
		}
		me._key4.onmouseover=function (e) {
			me.elementMouseOver['key4']=true;
			me._key4.logicBlock_textcolor();
		}
		me._key4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key4__text)
					return;
				}
			}
			me._ring4.style[domTransition]='none';
			me._ring4.style.visibility='hidden';
			me._ring4.ggVisible=false;
			me.elementMouseOver['key4']=false;
			me._key4.logicBlock_textcolor();
		}
		me._key4.ontouchend=function (e) {
			me.elementMouseOver['key4']=false;
			me._key4.logicBlock_textcolor();
		}
		me._key4.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key4);
		el=me._key5=document.createElement('div');
		els=me._key5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 215px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">5. Solomon Theater<\/span>";
		el.appendChild(els);
		me._key5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key5'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key5__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key5.ggCurrentLogicStateTextColor == 0) {
					me._key5__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key5__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key5.onclick=function (e) {
			me.__5.onclick();
		}
		me._key5.onmouseover=function (e) {
			me.elementMouseOver['key5']=true;
			me._key5.logicBlock_textcolor();
		}
		me._key5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key5__text)
					return;
				}
			}
			me._ring5.style[domTransition]='none';
			me._ring5.style.visibility='hidden';
			me._ring5.ggVisible=false;
			me.elementMouseOver['key5']=false;
			me._key5.logicBlock_textcolor();
		}
		me._key5.ontouchend=function (e) {
			me.elementMouseOver['key5']=false;
			me._key5.logicBlock_textcolor();
		}
		me._key5.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key5);
		el=me._key6=document.createElement('div');
		els=me._key6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 250px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 40px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">6. Dan and Frances White Chapel<\/span>";
		el.appendChild(els);
		me._key6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key6'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key6__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key6.ggCurrentLogicStateTextColor == 0) {
					me._key6__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key6__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key6.onclick=function (e) {
			me.__6.onclick();
		}
		me._key6.onmouseover=function (e) {
			me.elementMouseOver['key6']=true;
			me._key6.logicBlock_textcolor();
		}
		me._key6.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key6__text)
					return;
				}
			}
			me._ring6.style[domTransition]='none';
			me._ring6.style.visibility='hidden';
			me._ring6.ggVisible=false;
			me.elementMouseOver['key6']=false;
			me._key6.logicBlock_textcolor();
		}
		me._key6.ontouchend=function (e) {
			me.elementMouseOver['key6']=false;
			me._key6.logicBlock_textcolor();
		}
		me._key6.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key6);
		el=me._key7=document.createElement('div');
		els=me._key7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">7. Saints Hall<\/span>";
		el.appendChild(els);
		me._key7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key7.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key7'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key7.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key7.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key7__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key7.ggCurrentLogicStateTextColor == 0) {
					me._key7__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key7__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key7.onclick=function (e) {
			me.__7.onclick();
		}
		me._key7.onmouseover=function (e) {
			me.elementMouseOver['key7']=true;
			me._key7.logicBlock_textcolor();
		}
		me._key7.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key7__text)
					return;
				}
			}
			me._ring7.style[domTransition]='none';
			me._ring7.style.visibility='hidden';
			me._ring7.ggVisible=false;
			me.elementMouseOver['key7']=false;
			me._key7.logicBlock_textcolor();
		}
		me._key7.ontouchend=function (e) {
			me.elementMouseOver['key7']=false;
			me._key7.logicBlock_textcolor();
		}
		me._key7.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key7);
		el=me._key8=document.createElement('div');
		els=me._key8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 335px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">8. Gibbs Family Center for Innovation + Design<\/span>";
		el.appendChild(els);
		me._key8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key8.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key8'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key8.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key8.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key8__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key8.ggCurrentLogicStateTextColor == 0) {
					me._key8__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key8__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key8.onclick=function (e) {
			me.__8.onclick();
		}
		me._key8.onmouseover=function (e) {
			me.elementMouseOver['key8']=true;
			me._key8.logicBlock_textcolor();
		}
		me._key8.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key8__text)
					return;
				}
			}
			me._ring8.style[domTransition]='none';
			me._ring8.style.visibility='hidden';
			me._ring8.ggVisible=false;
			me.elementMouseOver['key8']=false;
			me._key8.logicBlock_textcolor();
		}
		me._key8.ontouchend=function (e) {
			me.elementMouseOver['key8']=false;
			me._key8.logicBlock_textcolor();
		}
		me._key8.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key8);
		el=me._key9=document.createElement('div');
		els=me._key9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 420px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 40px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">9. Merrick Fine Arts Building<\/span>";
		el.appendChild(els);
		me._key9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key9.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key9'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key9.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key9.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key9__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key9.ggCurrentLogicStateTextColor == 0) {
					me._key9__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key9__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key9.onclick=function (e) {
			me.__9.onclick();
		}
		me._key9.onmouseover=function (e) {
			me.elementMouseOver['key9']=true;
			me._key9.logicBlock_textcolor();
		}
		me._key9.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key9__text)
					return;
				}
			}
			me._ring9.style[domTransition]='none';
			me._ring9.style.visibility='hidden';
			me._ring9.ggVisible=false;
			me.elementMouseOver['key9']=false;
			me._key9.logicBlock_textcolor();
		}
		me._key9.ontouchend=function (e) {
			me.elementMouseOver['key9']=false;
			me._key9.logicBlock_textcolor();
		}
		me._key9.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key9);
		el=me._key10=document.createElement('div');
		els=me._key10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 470px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">10. George Cottage<\/span>";
		el.appendChild(els);
		me._key10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key10.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key10'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key10.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key10.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key10__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key10.ggCurrentLogicStateTextColor == 0) {
					me._key10__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key10__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key10.onclick=function (e) {
			me.__10.onclick();
		}
		me._key10.onmouseover=function (e) {
			me.elementMouseOver['key10']=true;
			me._key10.logicBlock_textcolor();
		}
		me._key10.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key10__text)
					return;
				}
			}
			me._ring10.style[domTransition]='none';
			me._ring10.style.visibility='hidden';
			me._ring10.ggVisible=false;
			me.elementMouseOver['key10']=false;
			me._key10.logicBlock_textcolor();
		}
		me._key10.ontouchend=function (e) {
			me.elementMouseOver['key10']=false;
			me._key10.logicBlock_textcolor();
		}
		me._key10.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key10);
		el=me._key11=document.createElement('div');
		els=me._key11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 505px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">11. Athletic Facilities<\/span>";
		el.appendChild(els);
		me._key11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key11.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key11'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key11.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key11.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key11__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key11.ggCurrentLogicStateTextColor == 0) {
					me._key11__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key11__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key11.onclick=function (e) {
			me.__11.onclick();
		}
		me._key11.onmouseover=function (e) {
			me.elementMouseOver['key11']=true;
			me._key11.logicBlock_textcolor();
		}
		me._key11.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key11__text)
					return;
				}
			}
			me._ring11.style[domTransition]='none';
			me._ring11.style.visibility='hidden';
			me._ring11.ggVisible=false;
			me.elementMouseOver['key11']=false;
			me._key11.logicBlock_textcolor();
		}
		me._key11.ontouchend=function (e) {
			me.elementMouseOver['key11']=false;
			me._key11.logicBlock_textcolor();
		}
		me._key11.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key11);
		el=me._key12=document.createElement('div');
		els=me._key12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 540px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">12. Lower School<\/span>";
		el.appendChild(els);
		me._key12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key12.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key12'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key12.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key12.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key12__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key12.ggCurrentLogicStateTextColor == 0) {
					me._key12__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key12__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key12.onclick=function (e) {
			me.__12.onclick();
		}
		me._key12.onmouseover=function (e) {
			me.elementMouseOver['key12']=true;
			me._key12.logicBlock_textcolor();
		}
		me._key12.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key12__text)
					return;
				}
			}
			me._ring12.style[domTransition]='none';
			me._ring12.style.visibility='hidden';
			me._ring12.ggVisible=false;
			me.elementMouseOver['key12']=false;
			me._key12.logicBlock_textcolor();
		}
		me._key12.ontouchend=function (e) {
			me.elementMouseOver['key12']=false;
			me._key12.logicBlock_textcolor();
		}
		me._key12.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key12);
		el=me._key13=document.createElement('div');
		els=me._key13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 575px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 70px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">13. Tony Porter Stadium and the Latter & Blum Track<\/span>";
		el.appendChild(els);
		me._key13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key13.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key13'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key13.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key13.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key13__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key13.ggCurrentLogicStateTextColor == 0) {
					me._key13__text.style.color="rgba(154,154,154,1)";
				}
				else {
					me._key13__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key13.onclick=function (e) {
			me.__13.onclick();
		}
		me._key13.onmouseover=function (e) {
			me.elementMouseOver['key13']=true;
			me._key13.logicBlock_textcolor();
		}
		me._key13.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key13__text)
					return;
				}
			}
			me._ring13.style[domTransition]='none';
			me._ring13.style.visibility='hidden';
			me._ring13.ggVisible=false;
			me.elementMouseOver['key13']=false;
			me._key13.logicBlock_textcolor();
		}
		me._key13.ontouchend=function (e) {
			me.elementMouseOver['key13']=false;
			me._key13.logicBlock_textcolor();
		}
		me._key13.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key13);
		el=me._key_title=document.createElement('div');
		els=me._key_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menutitle\">MAP KEY<\/span><br\/><hr width=\"130\">";
		el.appendChild(els);
		me._key_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_title.onclick=function (e) {
			me.__4.onclick();
		}
		me._key_title.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key_title);
		me.divSkin.appendChild(me._key);
		el=me._top_bar=document.createElement('div');
		el.ggId="top bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #002855;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_bar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._top_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._logo__img.setAttribute('src',basePath + 'images/logo.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 48px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 269px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._logo.ggCurrentLogicStateScaling == 0) {
					me._logo.ggParameter.sx = 0.8;
					me._logo.ggParameter.sy = 0.8;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
			}
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me._top_bar.appendChild(me._logo);
		el=me._alt_color=document.createElement('div');
		el.ggId="alt_color";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d50032;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._alt_color.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._alt_color.ggUpdatePosition=function (useTransition) {
		}
		me._top_bar.appendChild(me._alt_color);
		el=me._buttons=document.createElement('div');
		el.ggId="buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 273px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttons.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttons.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttons.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttons.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._buttons.ggCurrentLogicStateScaling == 0) {
					me._buttons.ggParameter.sx = 0.8;
					me._buttons.ggParameter.sy = 0.8;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
				else {
					me._buttons.ggParameter.sx = 1;
					me._buttons.ggParameter.sy = 1;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
			}
		}
		me._buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._schoolinfo=document.createElement('div');
		els=me._schoolinfo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNCAzNDsiIHZpZXdCb3g9IjAgMCAzNCAzNCIgeT0iMHB4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkNTAwMzI7fQoJLnN0MXtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiBjbGFzcz0ic3QwIiByPSIxNiIvPgogPC9nPgogPGc+CiAgPGNpcmNsZSBjeD0iMTciIGN5PSI5LjUiIGNsYXNzPSJzdDEiIHI9IjIuNSIvPgogIDxyZWN0IGNsYXNzPSJzdDEiIHk9IjEzLjgiIHdpZHRoPSI1IiB4PSIxNC41IiBoZWlnaHQ9IjEzLjIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._schoolinfo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="schoolinfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schoolinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._schoolinfo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['schoolinfo'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._schoolinfo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._schoolinfo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._schoolinfo.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._schoolinfo.ggCurrentLogicStateScaling == 0) {
					me._schoolinfo.ggParameter.sx = 1.2;
					me._schoolinfo.ggParameter.sy = 1.2;
					me._schoolinfo.style[domTransform]=parameterToTransform(me._schoolinfo.ggParameter);
				}
				else {
					me._schoolinfo.ggParameter.sx = 1;
					me._schoolinfo.ggParameter.sy = 1;
					me._schoolinfo.style[domTransform]=parameterToTransform(me._schoolinfo.ggParameter);
				}
			}
		}
		me._schoolinfo.onclick=function (e) {
			LaunchFancybox(pano.userdata.information, 750, 540, 'iframe')
		}
		me._schoolinfo.onmouseover=function (e) {
			me.elementMouseOver['schoolinfo']=true;
			me._tt3.logicBlock_visible();
			me._schoolinfo.logicBlock_scaling();
		}
		me._schoolinfo.onmouseout=function (e) {
			me.elementMouseOver['schoolinfo']=false;
			me._tt3.logicBlock_visible();
			me._schoolinfo.logicBlock_scaling();
		}
		me._schoolinfo.ontouchend=function (e) {
			me.elementMouseOver['schoolinfo']=false;
			me._tt3.logicBlock_visible();
			me._schoolinfo.logicBlock_scaling();
		}
		me._schoolinfo.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt3=document.createElement('div');
		els=me._tt3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="About St. Martin\'s";
		el.appendChild(els);
		me._tt3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['schoolinfo'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt3.style[domTransition]='';
				if (me._tt3.ggCurrentLogicStateVisible == 0) {
					me._tt3.style.visibility=(Number(me._tt3.style.opacity)>0||!me._tt3.style.opacity)?'inherit':'hidden';
					me._tt3.ggVisible=true;
				}
				else {
					me._tt3.style.visibility="hidden";
					me._tt3.ggVisible=false;
				}
			}
		}
		me._tt3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._schoolinfo.appendChild(me._tt3);
		me._buttons.appendChild(me._schoolinfo);
		el=me._share=document.createElement('div');
		els=me._share__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNCAzNDsiIHZpZXdCb3g9IjAgMCAzNCAzNCIgeT0iMHB4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkNTAwMzI7fQoJLnN0MXtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiBjbGFzcz0ic3QwIiByPSIxNiIvPgogPC9nPgogPHBhdGggZD0iTTEyLjMsMTcuNGMwLDAuMy0wLjEsMC42LTAuMSwwLjlsNy42LDQuNGMxLjItMS4yLDMuMi0xLjEsNC40LDAuMWMxLjIsMS4yLDEuMSwzLjItMC4xLDQuNHMtMy4yLDEuMS00LjQtMC4xJiN4YTsmI3g5O2MtMC43LTAuNy0xLTEuNy0wLjgtMi43bC03LjgtNC41Yy0xLjMsMS0zLjIsMC44'+
			'LTQuMi0wLjZzLTAuOC0zLjIsMC42LTQuMmMxLjEtMC44LDIuNi0wLjgsMy43LDBsNy44LTQuNWMtMC40LTEuNiwwLjYtMy4zLDIuMy0zLjcmI3hhOyYjeDk7YzEuNi0wLjQsMy4zLDAuNiwzLjcsMi4zYzAuNCwxLjYtMC42LDMuMy0yLjMsMy43Yy0xLDAuMi0yLDAtMi43LTAuN2wtNy43LDQuNUMxMi4yLDE2LjgsMTIuMywxNy4xLDEyLjMsMTcuNHoiIGNsYXNzPSJzdDEiLz4KPC9zdmc+Cg==';
		me._share__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 235px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['share'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._share.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._share.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._share.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._share.ggCurrentLogicStateScaling == 0) {
					me._share.ggParameter.sx = 1.2;
					me._share.ggParameter.sy = 1.2;
					me._share.style[domTransform]=parameterToTransform(me._share.ggParameter);
				}
				else {
					me._share.ggParameter.sx = 1;
					me._share.ggParameter.sy = 1;
					me._share.style[domTransform]=parameterToTransform(me._share.ggParameter);
				}
			}
		}
		me._share.onclick=function (e) {
			LaunchFancybox ('#socialbuttons', 'auto', 'auto', 'inline')
		}
		me._share.onmouseover=function (e) {
			me.elementMouseOver['share']=true;
			me._tt2.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.onmouseout=function (e) {
			me.elementMouseOver['share']=false;
			me._tt2.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.ontouchend=function (e) {
			me.elementMouseOver['share']=false;
			me._tt2.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt2=document.createElement('div');
		els=me._tt2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Share with a friend";
		el.appendChild(els);
		me._tt2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt2.style[domTransition]='';
				if (me._tt2.ggCurrentLogicStateVisible == 0) {
					me._tt2.style.visibility=(Number(me._tt2.style.opacity)>0||!me._tt2.style.opacity)?'inherit':'hidden';
					me._tt2.ggVisible=true;
				}
				else {
					me._tt2.style.visibility="hidden";
					me._tt2.ggVisible=false;
				}
			}
		}
		me._tt2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._share.appendChild(me._tt2);
		me._buttons.appendChild(me._share);
		el=me._directions=document.createElement('div');
		els=me._directions__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8dGl0bGU+Z29kaXJlY3Rpb25zPC90aXRsZT4KIDxjaXJjbGUgY3g9IjE2IiBzdHlsZT0iZmlsbDojZDUwMDMyOyBmaWxsLW9wYWNpdHk6MSIgY3k9IjE2IiByPSIxNiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0yNi43MiwxNC4zNWwtNy01djNIMTIuODdjLTEuNDcsMC0xLjY2LjE5LTEuNjYsMS42NXYxMGg0LjNWMTcuNmMwLTEuMS0uMS0xLDEtMWgzLjJ2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIvPgo8L3N2Zz4K';
		me._directions__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="directions";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._directions.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._directions.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['directions'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._directions.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._directions.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._directions.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._directions.ggCurrentLogicStateScaling == 0) {
					me._directions.ggParameter.sx = 1.2;
					me._directions.ggParameter.sy = 1.2;
					me._directions.style[domTransform]=parameterToTransform(me._directions.ggParameter);
				}
				else {
					me._directions.ggParameter.sx = 1;
					me._directions.ggParameter.sy = 1;
					me._directions.style[domTransform]=parameterToTransform(me._directions.ggParameter);
				}
			}
		}
		me._directions.onclick=function (e) {
			LaunchFancybox('map/map.html', 800, 600, 'iframe')
		}
		me._directions.onmouseover=function (e) {
			me.elementMouseOver['directions']=true;
			me._tt1.logicBlock_visible();
			me._directions.logicBlock_scaling();
		}
		me._directions.onmouseout=function (e) {
			me.elementMouseOver['directions']=false;
			me._tt1.logicBlock_visible();
			me._directions.logicBlock_scaling();
		}
		me._directions.ontouchend=function (e) {
			me.elementMouseOver['directions']=false;
			me._tt1.logicBlock_visible();
			me._directions.logicBlock_scaling();
		}
		me._directions.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt1=document.createElement('div');
		els=me._tt1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Get directions to St. Martin\'s";
		el.appendChild(els);
		me._tt1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['directions'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt1.style[domTransition]='';
				if (me._tt1.ggCurrentLogicStateVisible == 0) {
					me._tt1.style.visibility=(Number(me._tt1.style.opacity)>0||!me._tt1.style.opacity)?'inherit':'hidden';
					me._tt1.ggVisible=true;
				}
				else {
					me._tt1.style.visibility="hidden";
					me._tt1.ggVisible=false;
				}
			}
		}
		me._tt1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._directions.appendChild(me._tt1);
		me._buttons.appendChild(me._directions);
		el=me._form=document.createElement('div');
		els=me._form__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNCAzNDsiIHZpZXdCb3g9IjAgMCAzNCAzNCIgeT0iMHB4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkNTAwMzI7fQoJLnN0MXtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiBjbGFzcz0ic3QwIiByPSIxNiIvPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MzI3IDAuNTUzNyAtMC41NTM3IDAuODMyNyAxMi42MTc2IC01LjkzNTQpIiB5PSIxMC40IiB3aWR0aD0iNC42IiB4PSIxMy44IiBoZWlnaHQ9IjE1Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSIxMy4yLDI2LjUgOS4zLDI0IDguNiwyNS4xIDguOCwy'+
			'Ni4xIDExLjUsMjcuOSAxMi40LDI3LjggJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWdvbiBwb2ludHM9IjIzLDExLjggMTkuMSw5LjMgMjMuOCw2LjQgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._form__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="form";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._form.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._form.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['form'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._form.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._form.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._form.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._form.ggCurrentLogicStateScaling == 0) {
					me._form.ggParameter.sx = 1.2;
					me._form.ggParameter.sy = 1.2;
					me._form.style[domTransform]=parameterToTransform(me._form.ggParameter);
				}
				else {
					me._form.ggParameter.sx = 1;
					me._form.ggParameter.sy = 1;
					me._form.style[domTransform]=parameterToTransform(me._form.ggParameter);
				}
			}
		}
		me._form.onclick=function (e) {
			LaunchFancybox(pano.userdata.source, 550, 500, 'iframe')
		}
		me._form.onmouseover=function (e) {
			me.elementMouseOver['form']=true;
			me._tt0.logicBlock_visible();
			me._form.logicBlock_scaling();
		}
		me._form.onmouseout=function (e) {
			me.elementMouseOver['form']=false;
			me._tt0.logicBlock_visible();
			me._form.logicBlock_scaling();
		}
		me._form.ontouchend=function (e) {
			me.elementMouseOver['form']=false;
			me._tt0.logicBlock_visible();
			me._form.logicBlock_scaling();
		}
		me._form.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt0=document.createElement('div');
		els=me._tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Request information";
		el.appendChild(els);
		me._tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['form'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt0.style[domTransition]='';
				if (me._tt0.ggCurrentLogicStateVisible == 0) {
					me._tt0.style.visibility=(Number(me._tt0.style.opacity)>0||!me._tt0.style.opacity)?'inherit':'hidden';
					me._tt0.ggVisible=true;
				}
				else {
					me._tt0.style.visibility="hidden";
					me._tt0.ggVisible=false;
				}
			}
		}
		me._tt0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._form.appendChild(me._tt0);
		me._buttons.appendChild(me._form);
		el=me._hamburger_on=document.createElement('div');
		els=me._hamburger_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9InBpZWNlcyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0IDM0OyIgdmlld0JveD0iMCAwIDM0IDM0IiB5PSIwcHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS'+
			'4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2Q1MDAzMjt9Cgkuc3Qxe2ZpbGw6I2ZmZmZmZjt9Cjwvc3R5bGU+CiA8dGl0bGU+Z288L3RpdGxlPgogPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgY2xhc3M9InN0MCIgcj0iMTYiLz4KIDxnPgogIDxyZWN0IGNsYXNzPSJzdDEiIHk9IjkuOSIgd2lkdGg9IjE0LjgiIHg9IjkuNiIgaGVpZ2h0PSIzLjUiLz4KICA8cmVjdCBjbGFzcz0ic3QxIiB5PSIxNS41IiB3aWR0aD0iMTQuOCIgeD0iOS42IiBoZWlnaHQ9IjMuNSIvPgogIDxyZWN0IGNsYXNzPSJzdDEiIHk9IjIxLjEiIHdpZHRoPSIxNC44IiB4PSI5LjYiIGhlaWdodD0i'+
			'My41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hamburger_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hamburger_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hamburger_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburger_on.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hamburger_on'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hamburger_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hamburger_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hamburger_on.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hamburger_on.ggCurrentLogicStateScaling == 0) {
					me._hamburger_on.ggParameter.sx = 1.2;
					me._hamburger_on.ggParameter.sy = 1.2;
					me._hamburger_on.style[domTransform]=parameterToTransform(me._hamburger_on.ggParameter);
				}
				else {
					me._hamburger_on.ggParameter.sx = 1;
					me._hamburger_on.ggParameter.sy = 1;
					me._hamburger_on.style[domTransform]=parameterToTransform(me._hamburger_on.ggParameter);
				}
			}
		}
		me._hamburger_on.onclick=function (e) {
			var flag=me._key.ggPositonActive;
			if (player.transitionsDisabled) {
				me._key.style[domTransition]='none';
			} else {
				me._key.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._key.ggParameter.rx=0;me._key.ggParameter.ry=0;
				me._key.style[domTransform]=parameterToTransform(me._key.ggParameter);
			} else {
				me._key.ggParameter.rx=185;me._key.ggParameter.ry=0;
				me._key.style[domTransform]=parameterToTransform(me._key.ggParameter);
			}
			me._key.ggPositonActive=!flag;
		}
		me._hamburger_on.onmouseover=function (e) {
			me.elementMouseOver['hamburger_on']=true;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.onmouseout=function (e) {
			me.elementMouseOver['hamburger_on']=false;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.ontouchend=function (e) {
			me.elementMouseOver['hamburger_on']=false;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt=document.createElement('div');
		els=me._tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="show\/hide map key";
		el.appendChild(els);
		me._tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hamburger_on'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt.style[domTransition]='';
				if (me._tt.ggCurrentLogicStateVisible == 0) {
					me._tt.style.visibility=(Number(me._tt.style.opacity)>0||!me._tt.style.opacity)?'inherit':'hidden';
					me._tt.ggVisible=true;
				}
				else {
					me._tt.style.visibility="hidden";
					me._tt.ggVisible=false;
				}
			}
		}
		me._tt.ggUpdatePosition=function (useTransition) {
		}
		me._hamburger_on.appendChild(me._tt);
		me._buttons.appendChild(me._hamburger_on);
		me._top_bar.appendChild(me._buttons);
		me.divSkin.appendChild(me._top_bar);
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__1);
		me.__1__normal = clonedNormalElement._marker;
		me.__1__normal.style.visibility='inherit';
		me.__1__normal.style.left='0px';
		me.__1__normal.style.top='0px';
		me.__1.ggMarkerNormal=me.__1__normal;
		me.__1.ggMarkerInstances.push(clonedNormalElement);
		me.__1.ggMarkerActive=null;
		me.__1.ggMarkerInstances.push(null);
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__normal,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__normal);
		}
		for (var i = 0; i < me.__1.childNodes.length; i++) {
			me.__1.ggMarkerInstances.push(me.__1.childNodes[i]);
		}
		me.__1.callChildLogicBlocks_configloaded = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_mouseover = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_hastouch = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_configloaded();
		me.__1.callChildLogicBlocks_mouseover();
		me.__1.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__2);
		me.__2__normal = clonedNormalElement._marker;
		me.__2__normal.style.visibility='inherit';
		me.__2__normal.style.left='0px';
		me.__2__normal.style.top='0px';
		me.__2.ggMarkerNormal=me.__2__normal;
		me.__2.ggMarkerInstances.push(clonedNormalElement);
		me.__2.ggMarkerActive=null;
		me.__2.ggMarkerInstances.push(null);
		if (me.__2.firstChild) {
			me.__2.insertBefore(me.__2__normal,me.__2.firstChild);
		} else {
			me.__2.appendChild(me.__2__normal);
		}
		for (var i = 0; i < me.__2.childNodes.length; i++) {
			me.__2.ggMarkerInstances.push(me.__2.childNodes[i]);
		}
		me.__2.callChildLogicBlocks_configloaded = function(){
			if(me.__2.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__2.ggMarkerInstances.length; i++) {
					if((me.__2.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__2)>=0 && i==1) || (activeNodeMarker.indexOf(me.__2)<0 && i==0) || (i>1))) {
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__2.callChildLogicBlocks_mouseover = function(){
			if(me.__2.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__2.ggMarkerInstances.length; i++) {
					if((me.__2.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__2)>=0 && i==1) || (activeNodeMarker.indexOf(me.__2)<0 && i==0) || (i>1))) {
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__2.callChildLogicBlocks_hastouch = function(){
			if(me.__2.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__2.ggMarkerInstances.length; i++) {
					if((me.__2.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__2)>=0 && i==1) || (activeNodeMarker.indexOf(me.__2)<0 && i==0) || (i>1))) {
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__2.ggMarkerInstances[i].logicBlock_visible) {
						me.__2.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__2.callChildLogicBlocks_configloaded();
		me.__2.callChildLogicBlocks_mouseover();
		me.__2.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__3);
		me.__3__normal = clonedNormalElement._marker;
		me.__3__normal.style.visibility='inherit';
		me.__3__normal.style.left='0px';
		me.__3__normal.style.top='0px';
		me.__3.ggMarkerNormal=me.__3__normal;
		me.__3.ggMarkerInstances.push(clonedNormalElement);
		me.__3.ggMarkerActive=null;
		me.__3.ggMarkerInstances.push(null);
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__normal,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__normal);
		}
		for (var i = 0; i < me.__3.childNodes.length; i++) {
			me.__3.ggMarkerInstances.push(me.__3.childNodes[i]);
		}
		me.__3.callChildLogicBlocks_configloaded = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_mouseover = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_hastouch = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_configloaded();
		me.__3.callChildLogicBlocks_mouseover();
		me.__3.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__4);
		me.__4__normal = clonedNormalElement._marker;
		me.__4__normal.style.visibility='inherit';
		me.__4__normal.style.left='0px';
		me.__4__normal.style.top='0px';
		me.__4.ggMarkerNormal=me.__4__normal;
		me.__4.ggMarkerInstances.push(clonedNormalElement);
		me.__4.ggMarkerActive=null;
		me.__4.ggMarkerInstances.push(null);
		if (me.__4.firstChild) {
			me.__4.insertBefore(me.__4__normal,me.__4.firstChild);
		} else {
			me.__4.appendChild(me.__4__normal);
		}
		for (var i = 0; i < me.__4.childNodes.length; i++) {
			me.__4.ggMarkerInstances.push(me.__4.childNodes[i]);
		}
		me.__4.callChildLogicBlocks_configloaded = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_mouseover = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_hastouch = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_configloaded();
		me.__4.callChildLogicBlocks_mouseover();
		me.__4.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__5);
		me.__5__normal = clonedNormalElement._marker;
		me.__5__normal.style.visibility='inherit';
		me.__5__normal.style.left='0px';
		me.__5__normal.style.top='0px';
		me.__5.ggMarkerNormal=me.__5__normal;
		me.__5.ggMarkerInstances.push(clonedNormalElement);
		me.__5.ggMarkerActive=null;
		me.__5.ggMarkerInstances.push(null);
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__normal,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__normal);
		}
		for (var i = 0; i < me.__5.childNodes.length; i++) {
			me.__5.ggMarkerInstances.push(me.__5.childNodes[i]);
		}
		me.__5.callChildLogicBlocks_configloaded = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_mouseover = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_hastouch = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_configloaded();
		me.__5.callChildLogicBlocks_mouseover();
		me.__5.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__6);
		me.__6__normal = clonedNormalElement._marker;
		me.__6__normal.style.visibility='inherit';
		me.__6__normal.style.left='0px';
		me.__6__normal.style.top='0px';
		me.__6.ggMarkerNormal=me.__6__normal;
		me.__6.ggMarkerInstances.push(clonedNormalElement);
		me.__6.ggMarkerActive=null;
		me.__6.ggMarkerInstances.push(null);
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__normal,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__normal);
		}
		for (var i = 0; i < me.__6.childNodes.length; i++) {
			me.__6.ggMarkerInstances.push(me.__6.childNodes[i]);
		}
		me.__6.callChildLogicBlocks_configloaded = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_mouseover = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_hastouch = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_configloaded();
		me.__6.callChildLogicBlocks_mouseover();
		me.__6.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__7);
		me.__7__normal = clonedNormalElement._marker;
		me.__7__normal.style.visibility='inherit';
		me.__7__normal.style.left='0px';
		me.__7__normal.style.top='0px';
		me.__7.ggMarkerNormal=me.__7__normal;
		me.__7.ggMarkerInstances.push(clonedNormalElement);
		me.__7.ggMarkerActive=null;
		me.__7.ggMarkerInstances.push(null);
		if (me.__7.firstChild) {
			me.__7.insertBefore(me.__7__normal,me.__7.firstChild);
		} else {
			me.__7.appendChild(me.__7__normal);
		}
		for (var i = 0; i < me.__7.childNodes.length; i++) {
			me.__7.ggMarkerInstances.push(me.__7.childNodes[i]);
		}
		me.__7.callChildLogicBlocks_configloaded = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_mouseover = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_hastouch = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_configloaded();
		me.__7.callChildLogicBlocks_mouseover();
		me.__7.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__8);
		me.__8__normal = clonedNormalElement._marker;
		me.__8__normal.style.visibility='inherit';
		me.__8__normal.style.left='0px';
		me.__8__normal.style.top='0px';
		me.__8.ggMarkerNormal=me.__8__normal;
		me.__8.ggMarkerInstances.push(clonedNormalElement);
		me.__8.ggMarkerActive=null;
		me.__8.ggMarkerInstances.push(null);
		if (me.__8.firstChild) {
			me.__8.insertBefore(me.__8__normal,me.__8.firstChild);
		} else {
			me.__8.appendChild(me.__8__normal);
		}
		for (var i = 0; i < me.__8.childNodes.length; i++) {
			me.__8.ggMarkerInstances.push(me.__8.childNodes[i]);
		}
		me.__8.callChildLogicBlocks_configloaded = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_mouseover = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_hastouch = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_configloaded();
		me.__8.callChildLogicBlocks_mouseover();
		me.__8.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__9);
		me.__9__normal = clonedNormalElement._marker;
		me.__9__normal.style.visibility='inherit';
		me.__9__normal.style.left='0px';
		me.__9__normal.style.top='0px';
		me.__9.ggMarkerNormal=me.__9__normal;
		me.__9.ggMarkerInstances.push(clonedNormalElement);
		me.__9.ggMarkerActive=null;
		me.__9.ggMarkerInstances.push(null);
		if (me.__9.firstChild) {
			me.__9.insertBefore(me.__9__normal,me.__9.firstChild);
		} else {
			me.__9.appendChild(me.__9__normal);
		}
		for (var i = 0; i < me.__9.childNodes.length; i++) {
			me.__9.ggMarkerInstances.push(me.__9.childNodes[i]);
		}
		me.__9.callChildLogicBlocks_configloaded = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_mouseover = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_hastouch = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_configloaded();
		me.__9.callChildLogicBlocks_mouseover();
		me.__9.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__10);
		me.__10__normal = clonedNormalElement._marker;
		me.__10__normal.style.visibility='inherit';
		me.__10__normal.style.left='0px';
		me.__10__normal.style.top='0px';
		me.__10.ggMarkerNormal=me.__10__normal;
		me.__10.ggMarkerInstances.push(clonedNormalElement);
		me.__10.ggMarkerActive=null;
		me.__10.ggMarkerInstances.push(null);
		if (me.__10.firstChild) {
			me.__10.insertBefore(me.__10__normal,me.__10.firstChild);
		} else {
			me.__10.appendChild(me.__10__normal);
		}
		for (var i = 0; i < me.__10.childNodes.length; i++) {
			me.__10.ggMarkerInstances.push(me.__10.childNodes[i]);
		}
		me.__10.callChildLogicBlocks_configloaded = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_mouseover = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_hastouch = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_configloaded();
		me.__10.callChildLogicBlocks_mouseover();
		me.__10.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__11);
		me.__11__normal = clonedNormalElement._marker;
		me.__11__normal.style.visibility='inherit';
		me.__11__normal.style.left='0px';
		me.__11__normal.style.top='0px';
		me.__11.ggMarkerNormal=me.__11__normal;
		me.__11.ggMarkerInstances.push(clonedNormalElement);
		me.__11.ggMarkerActive=null;
		me.__11.ggMarkerInstances.push(null);
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__normal,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__normal);
		}
		for (var i = 0; i < me.__11.childNodes.length; i++) {
			me.__11.ggMarkerInstances.push(me.__11.childNodes[i]);
		}
		me.__11.callChildLogicBlocks_configloaded = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_mouseover = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_hastouch = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_configloaded();
		me.__11.callChildLogicBlocks_mouseover();
		me.__11.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__12);
		me.__12__normal = clonedNormalElement._marker;
		me.__12__normal.style.visibility='inherit';
		me.__12__normal.style.left='0px';
		me.__12__normal.style.top='0px';
		me.__12.ggMarkerNormal=me.__12__normal;
		me.__12.ggMarkerInstances.push(clonedNormalElement);
		me.__12.ggMarkerActive=null;
		me.__12.ggMarkerInstances.push(null);
		if (me.__12.firstChild) {
			me.__12.insertBefore(me.__12__normal,me.__12.firstChild);
		} else {
			me.__12.appendChild(me.__12__normal);
		}
		for (var i = 0; i < me.__12.childNodes.length; i++) {
			me.__12.ggMarkerInstances.push(me.__12.childNodes[i]);
		}
		me.__12.callChildLogicBlocks_configloaded = function(){
			if(me.__12.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__12.ggMarkerInstances.length; i++) {
					if((me.__12.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__12)>=0 && i==1) || (activeNodeMarker.indexOf(me.__12)<0 && i==0) || (i>1))) {
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__12.callChildLogicBlocks_mouseover = function(){
			if(me.__12.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__12.ggMarkerInstances.length; i++) {
					if((me.__12.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__12)>=0 && i==1) || (activeNodeMarker.indexOf(me.__12)<0 && i==0) || (i>1))) {
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__12.callChildLogicBlocks_hastouch = function(){
			if(me.__12.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__12.ggMarkerInstances.length; i++) {
					if((me.__12.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__12)>=0 && i==1) || (activeNodeMarker.indexOf(me.__12)<0 && i==0) || (i>1))) {
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__12.ggMarkerInstances[i].logicBlock_visible) {
						me.__12.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__12.callChildLogicBlocks_configloaded();
		me.__12.callChildLogicBlocks_mouseover();
		me.__12.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__13);
		me.__13__normal = clonedNormalElement._marker;
		me.__13__normal.style.visibility='inherit';
		me.__13__normal.style.left='0px';
		me.__13__normal.style.top='0px';
		me.__13.ggMarkerNormal=me.__13__normal;
		me.__13.ggMarkerInstances.push(clonedNormalElement);
		me.__13.ggMarkerActive=null;
		me.__13.ggMarkerInstances.push(null);
		if (me.__13.firstChild) {
			me.__13.insertBefore(me.__13__normal,me.__13.firstChild);
		} else {
			me.__13.appendChild(me.__13__normal);
		}
		for (var i = 0; i < me.__13.childNodes.length; i++) {
			me.__13.ggMarkerInstances.push(me.__13.childNodes[i]);
		}
		me.__13.callChildLogicBlocks_configloaded = function(){
			if(me.__13.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__13.ggMarkerInstances.length; i++) {
					if((me.__13.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__13)>=0 && i==1) || (activeNodeMarker.indexOf(me.__13)<0 && i==0) || (i>1))) {
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__13.callChildLogicBlocks_mouseover = function(){
			if(me.__13.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__13.ggMarkerInstances.length; i++) {
					if((me.__13.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__13)>=0 && i==1) || (activeNodeMarker.indexOf(me.__13)<0 && i==0) || (i>1))) {
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__13.callChildLogicBlocks_hastouch = function(){
			if(me.__13.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__13.ggMarkerInstances.length; i++) {
					if((me.__13.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__13)>=0 && i==1) || (activeNodeMarker.indexOf(me.__13)<0 && i==0) || (i>1))) {
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					if (me.__13.ggMarkerInstances[i].logicBlock_visible) {
						me.__13.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__13.callChildLogicBlocks_configloaded();
		me.__13.callChildLogicBlocks_mouseover();
		me.__13.callChildLogicBlocks_hastouch();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._hamburger_on.onclick();
		});
		player.addListener('imagesready', function() {
			player.stopAutorotate();
			me.__360s.ggUpdatePosition();
			me._key.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['key1']) {
			me._ring1.style[domTransition]='none';
			me._ring1.style.visibility=(Number(me._ring1.style.opacity)>0||!me._ring1.style.opacity)?'inherit':'hidden';
			me._ring1.ggVisible=true;
			var scrollOffX = me.__1.offsetLeft;
			var scrollOffY = me.__1.offsetTop;
			var domRect = me.__1.getBoundingClientRect();
			var parentEl = me.__1.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key2']) {
			me._ring2.style[domTransition]='none';
			me._ring2.style.visibility=(Number(me._ring2.style.opacity)>0||!me._ring2.style.opacity)?'inherit':'hidden';
			me._ring2.ggVisible=true;
			var scrollOffX = me.__2.offsetLeft;
			var scrollOffY = me.__2.offsetTop;
			var domRect = me.__2.getBoundingClientRect();
			var parentEl = me.__2.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key3']) {
			me._ring3.style[domTransition]='none';
			me._ring3.style.visibility=(Number(me._ring3.style.opacity)>0||!me._ring3.style.opacity)?'inherit':'hidden';
			me._ring3.ggVisible=true;
			var scrollOffX = me.__3.offsetLeft;
			var scrollOffY = me.__3.offsetTop;
			var domRect = me.__3.getBoundingClientRect();
			var parentEl = me.__3.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key4']) {
			me._ring4.style[domTransition]='none';
			me._ring4.style.visibility=(Number(me._ring4.style.opacity)>0||!me._ring4.style.opacity)?'inherit':'hidden';
			me._ring4.ggVisible=true;
			var scrollOffX = me.__4.offsetLeft;
			var scrollOffY = me.__4.offsetTop;
			var domRect = me.__4.getBoundingClientRect();
			var parentEl = me.__4.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key5']) {
			me._ring5.style[domTransition]='none';
			me._ring5.style.visibility=(Number(me._ring5.style.opacity)>0||!me._ring5.style.opacity)?'inherit':'hidden';
			me._ring5.ggVisible=true;
			var scrollOffX = me.__5.offsetLeft;
			var scrollOffY = me.__5.offsetTop;
			var domRect = me.__5.getBoundingClientRect();
			var parentEl = me.__5.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key6']) {
			me._ring6.style[domTransition]='none';
			me._ring6.style.visibility=(Number(me._ring6.style.opacity)>0||!me._ring6.style.opacity)?'inherit':'hidden';
			me._ring6.ggVisible=true;
			var scrollOffX = me.__6.offsetLeft;
			var scrollOffY = me.__6.offsetTop;
			var domRect = me.__6.getBoundingClientRect();
			var parentEl = me.__6.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key7']) {
			me._ring7.style[domTransition]='none';
			me._ring7.style.visibility=(Number(me._ring7.style.opacity)>0||!me._ring7.style.opacity)?'inherit':'hidden';
			me._ring7.ggVisible=true;
			var scrollOffX = me.__7.offsetLeft;
			var scrollOffY = me.__7.offsetTop;
			var domRect = me.__7.getBoundingClientRect();
			var parentEl = me.__7.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key8']) {
			me._ring8.style[domTransition]='none';
			me._ring8.style.visibility=(Number(me._ring8.style.opacity)>0||!me._ring8.style.opacity)?'inherit':'hidden';
			me._ring8.ggVisible=true;
			var scrollOffX = me.__8.offsetLeft;
			var scrollOffY = me.__8.offsetTop;
			var domRect = me.__8.getBoundingClientRect();
			var parentEl = me.__8.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key9']) {
			me._ring9.style[domTransition]='none';
			me._ring9.style.visibility=(Number(me._ring9.style.opacity)>0||!me._ring9.style.opacity)?'inherit':'hidden';
			me._ring9.ggVisible=true;
			var scrollOffX = me.__9.offsetLeft;
			var scrollOffY = me.__9.offsetTop;
			var domRect = me.__9.getBoundingClientRect();
			var parentEl = me.__9.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key10']) {
			me._ring10.style[domTransition]='none';
			me._ring10.style.visibility=(Number(me._ring10.style.opacity)>0||!me._ring10.style.opacity)?'inherit':'hidden';
			me._ring10.ggVisible=true;
			var scrollOffX = me.__10.offsetLeft;
			var scrollOffY = me.__10.offsetTop;
			var domRect = me.__10.getBoundingClientRect();
			var parentEl = me.__10.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key11']) {
			me._ring11.style[domTransition]='none';
			me._ring11.style.visibility=(Number(me._ring11.style.opacity)>0||!me._ring11.style.opacity)?'inherit':'hidden';
			me._ring11.ggVisible=true;
			var scrollOffX = me.__11.offsetLeft;
			var scrollOffY = me.__11.offsetTop;
			var domRect = me.__11.getBoundingClientRect();
			var parentEl = me.__11.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key12']) {
			me._ring12.style[domTransition]='none';
			me._ring12.style.visibility=(Number(me._ring12.style.opacity)>0||!me._ring12.style.opacity)?'inherit':'hidden';
			me._ring12.ggVisible=true;
			var scrollOffX = me.__12.offsetLeft;
			var scrollOffY = me.__12.offsetTop;
			var domRect = me.__12.getBoundingClientRect();
			var parentEl = me.__12.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key13']) {
			me._ring13.style[domTransition]='none';
			me._ring13.style.visibility=(Number(me._ring13.style.opacity)>0||!me._ring13.style.opacity)?'inherit':'hidden';
			me._ring13.ggVisible=true;
			var scrollOffX = me.__13.offsetLeft;
			var scrollOffY = me.__13.offsetTop;
			var domRect = me.__13.getBoundingClientRect();
			var parentEl = me.__13.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinElement_marker_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker=document.createElement('div');
		els=me._marker__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NSA1NSI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIHN0eWxlPSJmaWxsOiNkNTAwMzI7c3Ryb2tlOiMwMDI4NTU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNy41IiByPSIyNSIvPgo8L3N2Zz4K';
		me._marker__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker.onclick=function (e) {
			p23(0)
		}
		me._marker.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin {font-family: "Open Sans", sans-serif;}'));
	document.head.appendChild(style);
	me._logo.logicBlock_scaling();
	me._buttons.logicBlock_scaling();
	me._tooltip11.logicBlock_visible();
	me._ring1.logicBlock_visible();
	me._tooltip10.logicBlock_visible();
	me._ring2.logicBlock_visible();
	me._tooltip9.logicBlock_visible();
	me._ring3.logicBlock_visible();
	me._tooltip8.logicBlock_visible();
	me._ring4.logicBlock_visible();
	me._tooltip7.logicBlock_visible();
	me._ring5.logicBlock_visible();
	me._tooltip6.logicBlock_visible();
	me._ring6.logicBlock_visible();
	me._tooltip5.logicBlock_visible();
	me._ring7.logicBlock_visible();
	me._tooltip4.logicBlock_visible();
	me._ring8.logicBlock_visible();
	me._tooltip3.logicBlock_visible();
	me._ring9.logicBlock_visible();
	me._tooltip2.logicBlock_visible();
	me._ring10.logicBlock_visible();
	me._tooltip1.logicBlock_visible();
	me._ring11.logicBlock_visible();
	me._tooltip0.logicBlock_visible();
	me._ring12.logicBlock_visible();
	me._tooltip.logicBlock_visible();
	me._ring13.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._logo.logicBlock_scaling();me._buttons.logicBlock_scaling(); });
	player.addListener('configloaded', function(args) { me._tooltip11.logicBlock_visible();me._ring1.logicBlock_visible();me._tooltip10.logicBlock_visible();me._ring2.logicBlock_visible();me._tooltip9.logicBlock_visible();me._ring3.logicBlock_visible();me._tooltip8.logicBlock_visible();me._ring4.logicBlock_visible();me._tooltip7.logicBlock_visible();me._ring5.logicBlock_visible();me._tooltip6.logicBlock_visible();me._ring6.logicBlock_visible();me._tooltip5.logicBlock_visible();me._ring7.logicBlock_visible();me._tooltip4.logicBlock_visible();me._ring8.logicBlock_visible();me._tooltip3.logicBlock_visible();me._ring9.logicBlock_visible();me._tooltip2.logicBlock_visible();me._ring10.logicBlock_visible();me._tooltip1.logicBlock_visible();me._ring11.logicBlock_visible();me._tooltip0.logicBlock_visible();me._ring12.logicBlock_visible();me._tooltip.logicBlock_visible();me._ring13.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tooltip11.logicBlock_visible();me._ring1.logicBlock_visible();me._tooltip10.logicBlock_visible();me._ring2.logicBlock_visible();me._tooltip9.logicBlock_visible();me._ring3.logicBlock_visible();me._tooltip8.logicBlock_visible();me._ring4.logicBlock_visible();me._tooltip7.logicBlock_visible();me._ring5.logicBlock_visible();me._tooltip6.logicBlock_visible();me._ring6.logicBlock_visible();me._tooltip5.logicBlock_visible();me._ring7.logicBlock_visible();me._tooltip4.logicBlock_visible();me._ring8.logicBlock_visible();me._tooltip3.logicBlock_visible();me._ring9.logicBlock_visible();me._tooltip2.logicBlock_visible();me._ring10.logicBlock_visible();me._tooltip1.logicBlock_visible();me._ring11.logicBlock_visible();me._tooltip0.logicBlock_visible();me._ring12.logicBlock_visible();me._tooltip.logicBlock_visible();me._ring13.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me.__1.callChildLogicBlocks_configloaded();me.__2.callChildLogicBlocks_configloaded();me.__3.callChildLogicBlocks_configloaded();me.__4.callChildLogicBlocks_configloaded();me.__5.callChildLogicBlocks_configloaded();me.__6.callChildLogicBlocks_configloaded();me.__7.callChildLogicBlocks_configloaded();me.__8.callChildLogicBlocks_configloaded();me.__9.callChildLogicBlocks_configloaded();me.__10.callChildLogicBlocks_configloaded();me.__11.callChildLogicBlocks_configloaded();me.__12.callChildLogicBlocks_configloaded();me.__13.callChildLogicBlocks_configloaded(); });
	player.addListener('mouseover', function(args) { me.__1.callChildLogicBlocks_mouseover();me.__2.callChildLogicBlocks_mouseover();me.__3.callChildLogicBlocks_mouseover();me.__4.callChildLogicBlocks_mouseover();me.__5.callChildLogicBlocks_mouseover();me.__6.callChildLogicBlocks_mouseover();me.__7.callChildLogicBlocks_mouseover();me.__8.callChildLogicBlocks_mouseover();me.__9.callChildLogicBlocks_mouseover();me.__10.callChildLogicBlocks_mouseover();me.__11.callChildLogicBlocks_mouseover();me.__12.callChildLogicBlocks_mouseover();me.__13.callChildLogicBlocks_mouseover(); });
	player.addListener('hastouch', function(args) { me.__1.callChildLogicBlocks_hastouch();me.__2.callChildLogicBlocks_hastouch();me.__3.callChildLogicBlocks_hastouch();me.__4.callChildLogicBlocks_hastouch();me.__5.callChildLogicBlocks_hastouch();me.__6.callChildLogicBlocks_hastouch();me.__7.callChildLogicBlocks_hastouch();me.__8.callChildLogicBlocks_hastouch();me.__9.callChildLogicBlocks_hastouch();me.__10.callChildLogicBlocks_hastouch();me.__11.callChildLogicBlocks_hastouch();me.__12.callChildLogicBlocks_hastouch();me.__13.callChildLogicBlocks_hastouch(); });
	me.skinTimerEvent();
};