/* 
 * jframe 0.0.4
 * runstant の iframe 部分だけ切り出してみた
 * MIT Licensed
 * 
 * Copyright (C) 2016 phi, http://phiary.me
 */


'use strict';

!function(t){var e=function(t){return this.init(t),this};e.prototype={init:function(t){this.domElement=document.querySelector(t),this.domElement.classList.add("jframe"),this.load(""),this.attributes={}},attr:function(t,e){this.attributes[t]=e},load:function(t){var e=document.createElement("iframe");for(var n in this.attributes){var i=this.attributes[n];e.setAttribute(n,i)}this.domElement.innerHTML="",this.domElement.appendChild(e),e.contentWindow.innerWidth=window.innerWidth,e.contentWindow.innerHeight=window.innerHeight;var r=e.contentDocument;return r.open(),r.write(t),r.close(),this},reload:function(){var t=this.domElement.querySelector("iframe");return t.contentWindow.location.reload(),this},getFrame:function(){return this.domElement.children[0]},getDocument:function(){return this.getFrame().contentDocument}},t.jframe=function(t){return new e(t)}}(this);