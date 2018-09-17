  window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1XEzWBDSDvxPBOZ5Fgh6JnaGFiz92y5rIj3GkbTvP--U/pubhtml';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + data[i].name_ + "</td>");
      tr.append("<td>" + data[i].age_ + "</td>");
      tr.append("<td>" + data[i].score_ + "</td>");
      tr.append("<td>" + data[i].fav_colour_ + "</td>");
      tr.append("<td><img style = 'width:30px; height:30px;'src='" + data[i].link_ + "'></img></td>");
      $('#table1').append(tr);
    }
    console.log(data);
  }