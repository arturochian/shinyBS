var shinyBS = {inputBindings: {}};

shinyBS.inputBindings.collapse = new Shiny.InputBinding();
$.extend(shinyBS.inputBindings.collapse, {
  find: function(scope) {
    return $(scope).find(".sbs-panel-group");
  },
  getValue: function(el) {
    return $(el).data("sbs-value");
  },
  receiveMessage: function(el, data) {
    var $el = $(el);
    if(data.hasOwnProperty('multiple')) {
      if(data.multiple) {
        $el.find(".collapse").each(function(i) {$(this).collapse({parent: false, toggle: false})});
      } else {
        $el.find(".collapse").each(function(i) {$(this).collapse({parent: "#"+$el.attr("id"), toggle: false})});
      }
    }
    if(data.hasOwnProperty('open')) {
      if(!Array.isArray(data.open)) {
        data.open = [data.open]
      }
      data.open.forEach(function(value, index, array) {
        $el.find("#" + value).collapse("show");
      })
    }
    if(data.hasOwnProperty("close")) {
      if(!Array.isArray(data.close)) {
        data.close = [data.close];
      }
      data.close.forEach(function(value, index, array) {
        $el.find("#" + value).collapse("hide");
      })
    }
  },
  subscribe: function(el, callback) {
    $(el).find(".collapse").on("shown.bs.collapse hidden.bs.collapse", callback);
  },
  initialize: function(el) {
    var $el = $(el);
    var $panels = $el.find(".panel");
    var val = [];
    $panels.each(function(i) {
      if($(this).find("div.panel-collapse.collapse").hasClass("in")) {
        val.push($(this).attr("value"));
      }
    });
    $el.data("sbs-value", val);
    $panels.on("show.bs.collapse", function(event) {
      var val = $el.data("sbs-value");
      val.push($(this).attr("value"));
      $el.data("sbs-value", val)
    });
    $panels.on("hide.bs.collapse", function(event) {
      var val = $el.data("sbs-value");
      var i = val.indexOf($(this).attr("value"))
      if(i != -1) {
        val.splice(i, 1);
        $el.data("sbs-value", val);
      }
    });
  }
})
Shiny.inputBindings.register(shinyBS.inputBindings.collapse);

Shiny.addCustomMessageHandler("createAlert", 
  function(data) {

    var cl = "alert";
    if(data.hasOwnProperty('type')) {
      cl = cl + " alert-" + data.type;
    } else {
      cl = cl + " alert-info";
    };
    if(data.hasOwnProperty('block')) {
      if(data.block == true) {
        cl = cl + " alert-block";
      }
    }
    
    if(data.dismiss == true) {
      cl = cl + " alert-dismissible";
    }
    
    al = "<div class='" + cl + "'"
    
    if(data.hasOwnProperty('alertId')) {
      al = al + " id=" + data.alertId
    }
    
    al = al + ">"
    
    if(data.dismiss == true) {
      al = al + "<button type='button' class='close' data-dismiss='alert'>&times;</button>";
    }
    
    if(data.hasOwnProperty('title')) {
      al = al+"<h4>" + data.title + "</h4>";
    }
    
    al = al + data.message + "</div>";
    
    if(data.append == true) {
      $(al).appendTo("#" + data.id);
    } else {
      $("#" + data.id).html(al);
    }
  
  }
);

Shiny.addCustomMessageHandler("closeAlert",
  function(alertId) {
    $("#"+alertId).alert('close');
  }
);