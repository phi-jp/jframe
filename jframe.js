

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
    },

    /**
     * 
     */
    load: function(code) {
      var iframe = document.createElement("iframe");

      this.domElement.innerHTML = "";
      this.domElement.appendChild(iframe);

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

