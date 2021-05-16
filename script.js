$(document).ready(function() {
  
  $("#text")
  .focus(function() {
        if (this.value === this.defaultValue) {
            this.value = '';
        }
  })
  
   $("#text")
  .focus(function() {
            this.value = '';
  })

  

  $("button").click(function() {

    var thetext = $("#text").val();
    var bar = document.getElementById("translitsystem");
    var barvalue = bar.options[bar.selectedIndex].value;
    $("#result").text(thenewtext);
    if (barvalue == "1") {
      var mapObjLIBC = {
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Ё",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Shch",
        Ъ: "\x22;",
        Ь: "'",
        Ы: "Y",
        Э: "E",
        Ю: "Iu",
        Я: "Ia",
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "\x22",
        ы: "y",
        ь: "'",
        э: "e",
        ю: "iu",
        я: "ia",
      };

      var thenewtext = thetext.replace(/А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ш|Щ|Ъ|Ь|Ы|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|ю|я/gi, function(matched) {
        return mapObjLIBC[matched];
      });

     $("#result").text(thenewtext);     
      
      
    }  else if (barvalue == "2") {
      var mapObjLING = {
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Є: "Ie",
        Ж: "Zh",
        И: "Y",
        Ї: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Shch",
        Ь: "'",
        Ю: "Iu",
        Я: "Ia",
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "y",
        ї: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ь: "'",
        ю: "iu",
        я: "ia",
        є: "ie"
      };

      var thenewtext = thetext.replace(/А|Б|В|Г|Д|Е|Є|Ж|З|И|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ш|Щ|Ъ|Ь|Ы|Э|Ю|Я|а|б|в|г|д|е|є|ё|ж|з|и|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|ю|я/gi, function(matched) {
        return mapObjLING[matched];
      });
      
      
    $("#result").text(thenewtext);  
      
      
    } else {
      $("#result").text("choose a value");

    }

  });

});
