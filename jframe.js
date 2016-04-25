/* 
 * jframe 0.0.4
 * jframe
 * MIT Licensed
 * 
 * Copyright (C) 2016 phi, http://phiary.me
 */


'use strict';



;(function(global) {
  
  /**
   * 
   */
  var jframe = function(query) {
    this.init(query);
    return this;
  };

  jframe.prototype = {

    /**
     * 
     */
    init: function(query) {
      this.domElement = document.querySelector(query);
      this.domElement.classList.add('jframe');
      this.load('');

      this.attributes = {};
    },

    attr: function(key, value) {
      this.attributes[key] = value;
    },

    /**
     * 
     */
    load: function(code) {
      var iframe = document.createElement("iframe");

      for (var key in this.attributes) {
        var v = this.attributes[key];
        iframe.setAttribute(key, v);
      }

      this.domElement.innerHTML = "";
      this.domElement.appendChild(iframe);

      // for safari(first value becomes 0 for some reason)
      iframe.contentWindow.innerWidth = window.innerWidth;
      iframe.contentWindow.innerHeight = window.innerHeight;

      // フレーム
      var idoc = iframe.contentDocument;
      idoc.open();
      idoc.write(code);
      idoc.close();

      return this;
    },

    /**
     * 
     */
    reload: function() {
      var iframe = this.domElement.querySelector("iframe");

      iframe.contentWindow.location.reload();

      return this;
    },

    getFrame: function() {
      return this.domElement.children[0];
    },

    getDocument: function() {
      return this.getFrame().contentDocument;
    },
  };

  global.jframe = function(q) {
    return new jframe(q);
  };

})(this);

