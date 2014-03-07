function $$$(name) {
    var b = {
        Version: .1,
        Author: "Viktor Zherdev",
        Created: "Spring 2014",
        Updated: "06 March 2014"
    };
    if (name) {
        if (window === this) {
            return new $$$(name)
        }

        this.e = document.getElementsByClassName(name);

        return this;
    } else {
        return b
    }
}


$$$.prototype = {

    // click event, interface: $$$("Class Name").click(function() {});
    click: function (callback) {

        for (var i = 0; i < this.e.length; i++) {

            this.e[i].addEventListener("click", callback, false);

        }

    },

    // inserting data in DOM, interface: $$$("Class Name").insdata(number of symbol after that data is inserted, data - string or number);

    insdata: function (a, b) {
        for (var i = 0; i < this.e.length; i++) {

            this.e[i].lastChild.insertData(a, b);



        }
    },

    // the method insert puts HTML elements  before an element - beforeBegin, 
    //inside of an element in very beginning - afterBegin, 
    //inside of an element in very ending -  beforeEnd,
    // after an element afterEnd
    // interface: $$$("Class Name").insert('afterEnd', '<p>insert-check</p>');

    insert: function (position, text) {
        for (var i = 0; i < this.e.length; i++) {

            this.e[i].insertAdjacentHTML(position, text);
        }
    },

    // getting text, interface: $$$("Class Name").gettext();
    gettext: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].textContent;
            
        }
    },

    // setting DOM, interface: $$$("Class Name").sethtml('DOM');
    sethtml: function (a) {
        for (var i = 0; i < this.e.length; i++) {

            this.e[i].innerHTML = a;
        }
    },
    // getting html, interface: $$$("Class Name").gethtml();
    gethtml: function () {
        for (var i = 0; i < this.e.length; i++) {

            this.e[i].innerHTML;
        }
    },

    // getting value, interface: $$$("Class Name").getval();
    getval: function () {
        for (var i = 0; i < this.e.length; i++) {
            //document.write(JSON.stringify(this.e[i].valueOf()));
            this.e[i].valueOf();
        }
    },

    // setting value, interface: $$$("Class Name").setval(value - number or string);
    setval: function (a) {
        for (var i = 0; i < this.e.length; i++) {

            this.e[i].value = a;

        }

        return this
    },

    // hiding elements , interface: $$$("Class Name").hide();
    hide: function () {

        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.display = "none";

        }

        return this
    },

    // showing elements, interface: $$$("Class Name").show();
    show: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.display = "inherit";

        }
        return this
    },

    // setting background colour, interface: $$$("Class Name").bgcolor("colour");

    bgcolor: function (a) {
      
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.background = a;

        }
        return this
    },
  
    // toggling elements, interface: $$$("Class Name").toggle();
    toggle: function () {
      
             for (var i = 0; i < this.e.length; i++) {

            this.e[i].style.display = (this.e[i].style.display != 'none' ? 'none' : '');

        }

        return this
    },

    // setting size of elements, interface: $$$("Class Name").setsize(height size - number, width size - number);
    setsize: function (a, b) {

            for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.height = a + "px";
            this.e[i].style.width = b + "px";

        }

        return this
    },
}