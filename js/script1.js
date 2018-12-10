$.getJSON("form_data.json", function(data){
      var items = [];

      $.each(data, function(key, val){
        items.push("<tr>");
        items.push("<td id='"+key+"'>"+val.name+"</td>");
        items.push("<td id='"+key+"''>"+val.degree+"</td>");
        items.push("<td id='"+key+"''>"+val.gender+"</td>");
        items.push("<td id='"+key+"''>"+val.phone+"</td>");
        items.push("<td id='"+key+"''>"+val.mail+"</td>");
        items.push("<td id='"+key+"''>"+val.password+"</td>");
        items.push("</tr>");
      }); 
      $("<tbody/>", {html: items.join("")}).appendTo("table");

    });
