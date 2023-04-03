$(document).ready(function () {
      // $("#myForm").submit(function(event) {
  //   event.preventDefault();

  //   var inputValue = $("input[name='myInput']").val();
  //   $("main").append("<p>" + inputValue + "</p>");
  //   $("input[name='myInput']").val("");
  // });

  $( function() {
    $( ".draggable" ).draggable();
} );
    

  var arr = [];

  $(".btn1").submit(function (e) {
      e.preventDefault();
      var btn1 = $('#hid').val();
      $("main").append('<section><h4>' + btn1 + '<input type="button" value=" delete" class="btn btn-light rehedig"></h4></section>');
    //   $("main").append('<section><h4>' + btn1 + '</h4></section>');
     
      arr.push({ 'title': btn1, 'subarr': [] });
      localStorage.setItem('key', JSON.stringify(arr));

      $(document).on("click", ".rehedig", function () {
          $(this).closest("section").remove();
      });

      $(".slct2 Option").remove();
      $(".slct2").append('<option> select </option>');
      $(".slct Option").remove();
      $(".slct").append('<option> select </option>');
      $("main h4").each(function (index, value) {
          $(".slct").append('<option value=' + (index + 1) + '> ' + $(this).text() + '</option>');
          $(".slct2").append('<option value=' + (index + 1) + '> ' + $(this).text() + '</option>');
      });

      $('.btn1').trigger('reset');
      $('#exampleModalCenter1').modal('toggle');
  });


  $("#btn2").submit(function (e) {
      e.preventDefault();

      var btn2 = $('#hid2').val();
      var get_id = $(".slct option:selected").val();
     
       $("main section:nth-child(" + get_id + ")").append('<div><h5>' + btn2 + '<input type="button" value="delete" class="btn btn-light subhed"></h5></div>');
    //    $("main section:nth-child(" + get_id + ")").append('<div><h5>' + btn2 + '</h5></div>');
         
       arr[get_id - 1].subarr.push({ 'subheading': btn2, 'subarr1': [] });
      localStorage.setItem('key', JSON.stringify(arr));
      $(document).on("click", ".subhed", function () {
          $(this).closest("div").remove();
      });

      $('#btn2').trigger("reset");
      $('#exampleModalCenter2').modal('toggle');
  });

  $(".slct2").change(function () {
      var get_id2 = $(".slct2 option:selected").val();
      $(".slct3 Option").remove();
      $(".slct3").append('<option> select </option>');
      $("main section:nth-child(" + get_id2 + ") div h5").each(function (index, value) {
          $(".slct3").append('<option value=' + (index + 1) + '> ' + $(this).text() + '</option>');
      });

  });

  
  $("#btn3").submit(function (e) {
      e.preventDefault();
      var get_id = $(".slct2 option:selected").val();
      var get_id2 = $(".slct3 option:selected").val();
      var get_id3 = $(".slct4 option:selected").val();
      var num = parseInt(get_id)
      var cntintid2 = parseInt(get_id2)
      var classid = $("#classinput").val();
      var labelid = $("#lableinput").val();
      var valueid = $("#valueinput").val();
      var placeholderid = $("#placeholderinput").val();
      var optionid = $("#optioninput").val().split(",");
      var btr = (cntintid2 + 1)
      var disabel = $("#disabled").val();
      var requed = $("#required").val();
      var redony = $("#cekbxredoly").val();

       
       if (get_id3 == "select") {
          var selt = ('<option >' +  (valueid) + '</option>')
          $.each(optionid, function (i, v) {
              selt += ('<option value=' + i + '> ' + v + '</option>')
          });
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + ' aa ' + (disabel) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px">' + (labelid) + '</label><select >' + (selt) + ' aa ' + (disabel) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + ' aa ' + (disabel) + '</select></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + ' aa ' + (requed) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px">' + (labelid) + '</label><select >' + (selt) + ' aa ' + (requed) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + ' aa ' + (requed) + '</select></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid,labelid, valueid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
              $('#' + (classid)).blur(function () {

                  if ($('input:text').is(":empty")) {
                      $(this).parents('p').addClass('warning');
                  }
              });
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px">' + (labelid) + '</label><select >' + (selt) + '</select><input type="button" value="delete" class="btn btn-light seldel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label>' + (labelid) + '</label><select >' + (selt) + '</select></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          $(document).on("click", ".seldel", function () {
              $(this).closest("#selid").remove();

          });
      }
      else if (get_id3 == "checkbox") {
          var chk = ('<label ></label>')
          $(optionid).each(function (i, v) {
            //   chk += ('<br><input type=' + (get_id3) + ' style =" margin-left:180px; font-size:23px">')
              chk += ('<br><input type=' + (get_id3) + '>')
              chk += ('<label value=' + i + '> ' + v + '</label> ')
          });
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid" ><label ' + (disabel) + '>'+ (rdio) + '</div>>' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid" ><label ' + (disabel) + 'style="margin-left:180px; font-size:23px">'+ (rdio) + '</div>>' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid" ><label ' + (disabel) + '>'+ (rdio) + '</div>>' + (labelid) + '</label>' + (chk) + '</span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label' + aa + (requed) + ' >' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label' + aa + (requed) + ' style="margin-left:180px; font-size:23px">' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label' + aa + (requed) + ' >' + (labelid) + '</label>' + (chk) + '</span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label>' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label style="margin-left:180px; font-size:23px">' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light cekdel">' + (chk) + '</span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label >' + (labelid) + '</label>' + (chk) + '</span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, optionid,labelid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          $(document).on("click", ".cekdel", function () {
              $(this).closest("#cekid").remove();

          });
      }
      else if (get_id3 == "radio") {
          var rdio = ('<label></label>')
          $(optionid).each(function (i, v) {
              console.log(i, v);
              rdio += ('<br><input type=' + (get_id3) + ' name="fav_language">')
              rdio += ('<label value=' + i + '> ' + v + '</label> ')
          });
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label ' + (disabel) + ' >' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div>'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label ' + (disabel) + ' >' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div style="margin-left:180px; font-size:23px">'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label ' + (disabel) + ' >' + (labelid) + '</label><div>'+ (rdio) + '</div></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          } 
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label' + aa + (requed) + '>' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div>'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label' + aa + (requed) + '>' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div style="margin-left:180px; font-size:23px">'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label' + aa + (requed) + '>' + (labelid) + '</label><div>'+ (rdio) + '</div></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label style="margin-left:180px; font-size:23px">' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div>'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label style="margin-left:180px; font-size:23px">' + (labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div style="margin-left:180px; font-size:23px">'+ (rdio) + '</div></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label>' + (labelid) + '</label><div>'+ (rdio) + '</div></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          $(document).on("click", ".raddel", function () {
              $(this).closest("#radid").remove();

          });
      }
      else if (get_id3 == "textarea") {
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (disabel) + '>  </textarea><input type="button" value="delete" class="btn btn-light texarea"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (disabel) + 'style = "margin-left:180px; font-size:23px">  </textarea><input type="button" value="delete" class="btn btn-light texarea"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (disabel) + '>  </textarea></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#cekbxredoly').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (redony) + '>  </textarea><input type="button" value="delete" class="btn btn-light texarea"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (redony) + '>  </textarea></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (requed) + '>  </textarea><input type="button" value="delete" class="btn btn-light texarea"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (requed) + '>  </textarea></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
              $('#' + (classid)).blur(function () {
                  if ($('input:text').is(":empty")) {
                      $(this).parents('p').addClass('warning');
                  }
              });
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + '>  </textarea><input type="button" value="delete" class="btn btn-light texarea"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label>' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + '>  </textarea></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          $(document).on("click", ".texarea", function () {
              $(this).closest("#texarid").remove();

          });
      }
      else if (get_id3 == "butten") {
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (disabel) + '><input type="button" value="delete" class="btn btn-light bundel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (disabel) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (requed) + '><input type="button" value="delete" class="btn btn-light bundel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + ' aa ' + (requed) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
              $('#' + (classid)).blur(function () {
                  if ($('input:text').is(":empty")) {
                      $(this).parents('p').addClass('warning');
                  }
              });
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + '><input type="button" value="delete" class="btn btn-light bundel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label>' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' Class=' + (classid) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          $(document).on("click", ".bundel", function () {
              $(this).closest("#butid").remove();

          });
      }
      else {
          if ($('#disabled').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (disabel) + '><input type="button" value="delete" class="btn btn-light aerdel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (disabel) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          if ($('#cekbxredoly').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (redony) + '><input type="button" value="delete" class="btn btn-light aerdel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (redony) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
          }
          else if ($('#required').is(':checked')) {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (requed) + '><input type="button" value="delete" class="btn btn-light aerdel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + '>' + (labelid) + '</label><input type=' + (get_id3) + ' Class=' + (classid) + ' aa ' + (requed) + '></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, optionid,labelid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
              $('#' + (classid)).blur(function () {
                  if ($('input:text').is(":empty")) {
                      $(this).parents('p').addClass('warning');
                  }
              });
          }
          else {
              $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id = "adrid"><label class = ' + (get_id3) + '> ' + (labelid) + ' </label><input type = ' + (get_id3) + '  placeholder = ' + (placeholderid) +  ' Class = ' + (classid) + '><input type = "button" value = "delete" class = "btn btn-light aerdel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id = "adrid"><label class = ' + (get_id3) + ' style = "padding-left:200px"> ' + (labelid) + ' </label><input type = ' + (get_id3) + '  placeholder = ' + (placeholderid) +  ' Class = ' + (classid) + ' style = "padding-left:20px" ><input type = "button" value = "delete" class = "btn btn-light aerdel"></span>');
            //   $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id = "adrid"><label class = ' + (get_id3) + ' > ' + (labelid) + ' </label><input type = ' + (get_id3) + '  placeholder = ' + (placeholderid) +  ' Class = ' + (classid) + ' ></span>');
              arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
              localStorage.setItem('key', JSON.stringify(arr));
      }
          $(document).on("click", ".aerdel", function () {
              $(this).closest("#adrid").remove();
          
          });
      }
      $('#btn3').trigger('reset');
      $('#exampleModalCenter3').modal('toggle');

  });
     
});


window.onload = function () {
    wind();
    function wind() {
        var head = localStorage.getItem('key');
        var classid = $("#classinput").val();
        var labelid = $("#lableinput").val();
        var valueid = $("#valueinput").val();
        var placeholderid = $("#placeholderinput").val();
        var optionid = $("#optioninput").val().split(",");
        if (head) {
            var newObj = $.parseJSON(head);

            for (i = 0; i < newObj.length; i++) {
                $("main ").append('<section class=draggable><h4>' + newObj[i].title + '<input type="button" id=delete value=" delete" class="btn btn-light rehedig"></h4></section>');
                // $("main ").append('<section><h4>' + newObj[i].title + '<input type="button" id=delete value="delete" class="btn btn-light rehedig"></h4></section>');
                $("#delete").on('click', function () {
                    var url = localStorage.key('key');
                    localStorage.removeItem(url);
                    $("main").window.onload('refresh');

                });

                for (j = 0; j < newObj[i].subarr.length; j++) {
                   
                    $("main").append('<section class=draggable><h5>' + newObj[i].subarr[j].subheading + '<input type="button" id=delete1 value=" delete" class="btn btn-light rehedig"></h5></section>');
                    // $("main").append('<section><h5>' + newObj[i].subarr[j].subheading + '</h5></section>');
                       $("#delete1").on('click', function () {
                        var ls_data = JSON.parse(localStorage.getItem('key'));
                        var sub = (newObj[i].subarr[j].subheading)
                        
                        console.log(ls_data);
                        const index1 = ls_data.findIndex(item => item.id === ls_data[i]);
                        console.log(index1);
                    });

                    for (k = 0; k < newObj[i].subarr[j].subarr1.length; k++) {
                        if (newObj[i].subarr[j].subarr1[k].inputvalue == "select") {
                            var selt = ('<option>' +  (newObj[i].subarr[j].subarr1[k].valueid) + '</option>')
                            $.each(newObj[i].subarr[j].subarr1[k].optionid, function (i, v) {
                                selt += ('<option value=' + i + '> ' + v + '</option>')
                            });

                            $("main").append(' <span id="selid"><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><select>' + (selt) + '</select><input type="button"  delete2 value="delete" class="btn btn-light numdet"></span><br>');
                            // $("main").append(' <span id="selid"><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><select>' + (selt) + '</select></span><br>');

                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');

                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                            });


                        }

                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "radio") {
                            var rdio = ('<label></label>')
                            $(newObj[i].subarr[j].subarr1[k].optionid).each(function (index, value) {
                                rdio += ('<br><input type= ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + ' name="fav_language">')
                                rdio += ('<label value = ' + index + '> ' + value + '</label>')
                            });
                            $("main ").append('<br><span id="radid" class=draggable><label>' + (newObj[i].subarr[j].subarr1[k].labelid) + '</label><input type="button" value="delete" class="btn btn-light raddel"><div>' + (rdio) + '</div></span>');
                            // $("main ").append('<br><span id="radid"><label>' + (newObj[i].subarr[j].subarr1[k].labelid) + '</label><div>' + (rdio) + '</div></span>');
                        }

                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "checkbox") {
                            var chk = ('<label ></label>')
                            $(newObj[i].subarr[j].subarr1[k].optionid).each(function (g, v) {

                                chk += ('<br><input type = ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + '>')
                                chk += ('<label value=' + g + '> ' + v + '</label>')
                            });
                            $("main").append(' <span id="cekid" class=draggable><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><input type="button"  delete2 value="delete" class="btn btn-light numdet"><div>' + (chk) + '</div></span><br>');
                            // $("main").append(' <span id="cekid"><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><div>' + (chk) + '</div></span><br>');

                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');
                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                            });
                        }
                        else {
                            $("main").append(' <span id="selid" class=draggable><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><input type = ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + ' class = ' + (newObj[i].subarr[j].subarr1[k].classid) + ' placeholder = ' + (newObj[i].subarr[j].subarr1[k].placeholderid) + '><input type="button"  delete2 value="delete" class="btn btn-light numdet"></span><br>');
                            // $("main").append(' <span id="selid"><label>' + newObj[i].subarr[j].subarr1[k].labelid + '</label><input type = ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + ' class = ' + (newObj[i].subarr[j].subarr1[k].classid) + ' placeholder = ' + (newObj[i].subarr[j].subarr1[k].placeholderid) + '></span><br>');
                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');
                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                            });

                        }
                    }
                }
            }
        }
    }
}