

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
        },

        /**
         * 
         */
        run: function(code) {
            var iframe = document.createElement("iframe");
            var pre    = document.createElement("pre");

            this.domElement.innerHTML = "";
            this.domElement.appendChild(iframe);
            this.domElement.appendChild(pre);

            // フレーム
            iframe.classList.add('frame');
            var idoc = iframe.contentDocument;
            idoc.open();
            idoc.write(code);
            idoc.close();

            // コンソール
            pre.classList.add('console');

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
    };

    global.jframe = function(q) {
        return new jframe(q);
    };
})(this);

