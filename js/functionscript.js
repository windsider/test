 
$(document).ready(function () 
{
    var dt;
    //array for connection with a date
     //var dts = dt.toString(); 			
    	 var weekday =new Array();
    weekday[0] ="Monday";
    weekday[1] ="Tuesday";
    weekday[2] ="Wednesday";
    weekday[3] ="Thursday";
    weekday[4] ="Friday";
    weekday[5] ="Saturday";
    weekday[6] ="Sunday";
    var dts =new Array();
    dts[0] ="09:00 - 10:00";
    dts[1] ="10:00 - 11:00";
    dts[2] ="11:00 - 12:00";
    dts[3] ="12:00 - 13:00";
    dts[4] ="13:00 - 14:00";
    dts[5] ="14:00 - 15:00";
    dts[6] ="15:00 - 16:00";
    dts[7] ="16:00 - 17:00";
    dts[8] ="17:00 - 18:00";
    dts[9] ="18:00 - 19:00";
    // creating timetable #1 
     
    var table =$('<table><th colspan=4><form><p>Select a date in the datepicker or a weekday on the right <span class="glyphicon-arrow-right:before"></span></p></form></th></table>');
    var i =-1;
    $(dts).each(function()
    {
        i++;
        var row =$("<tr><td>available</td></tr>");
        $('<td><input type="button" value ="select"></td><td><input type="button" value ="reset"></td>').appendTo(row);
        $('<td><form></form></td>').append(dts[i]).prependTo(row);
        row.appendTo(table);
    });
    $(table).appendTo('#timetable');
    // click events of timetable #1: button select
     
    $("#timetable table tr input:even").on("click", function () 
    {
        $(this).parent('td').prev().text('selected');
        $(this).parent('td').prevAll().css("color", '#FF8247');
    });
    // click events of timetable #1: button reset
     
    $("#timetable table tr input:odd").on("click", function () 
    {
        $(this).closest('tr').children('td:nth-child(2)').text('available');
        $(this).parent('td').prevAll().css("color", 'black');
    });
    // buttons book and cancel of timetable #1
    $('<tr><td colspan=2><input id ="book" type="submit" value="book"></td><td colspan=2><input id ="cnl" type="reset" value="cancel"></td></tr>').appendTo(table);
    // click events of buttons book and cancel
    //book button event
    	$("#book").on("click", function () 
    {
        var sld=$("td:nth-child(2):contains('selected')");
        $(sld).text("booked").css("color", '#CD0000').prev().css("color", '#CD0000');
        if (!(sld).length &&!$(dt).length)
        {
            alert ("Please, make OPTION(s) and a DATE selected");
             return false;
        }
        if ((sld).length &&$(dt).length) 
        {
            alert ("Your order is BOOKED. We thank you for the use of our service");
             /* go to db*/
        }
        if (!$(dt).length) 
        {
            alert ("Please, make a DATE selected");
        }
        if (!(sld).length) 
        {
            alert ("Please, make OPTION(s) selected");
        }
    });
    //cancel button event
    			
    $("#cnl").on("click", function () 
    {
        $("#timetable table").find('td:nth-child(2)').each(function()
        {
            if ($(this).text() =="booked" ||$(this).text() =="selected")
            {
                $(this).text("available");
                $('td').css("color", 'black');
            }
        });
    });
    // adding class to buttons
     $('input').addClass('btn');
    // adding class to tr
     $('#timetable table tr').addClass('tr');
    // adding id to th to get a date from datepicker
     $('#timetable table p').attr('id','date');
    //Table #2 for booking according to weekdays
    	
    var wtable =$('<table><th><p>Select a day for periodic booking</p></th></table>');
    var wselect =$('<select id="select" size="6" name="week[]" multiple></select>');
    var k =-1;
    $(weekday).each(function()
    {
        k++;
        $('<option> </option>').append(weekday[k]).appendTo(wselect);
    });
    (wselect).wrap('<td></td>').wrap('<tr></tr>').appendTo(wtable);
    var wtr =$('<span id="wbtn"></span>');
    // buttons of table #2 selection according to a weekday
    $('<input type="button" id="sel" class="btn" value ="select">').wrap('<td></td>').prependTo(wtr);
    $('<input type="button" id="res" class="btn" value="reset">').wrap('<td></td>').appendTo(wtr);
    (wtr).appendTo(wtable);
    (wtable).appendTo("#wtable");
    // button events of table #2 selection according to a weekday
    	// select button 
     $("#sel").click(function () 
    {
	// this resets selections
	$("#timetable table").find('td:nth-child(2)').each(function()
            {
                if ($(this).text() =="booked" ||$(this).text() =="selected")
                $(this).text("available");
                $('td').css("color", 'black');
            });
			
        var wday =$("#select option:selected").text();
        $("#date").text(wday);
        if (!(wday).length)
        {
            alert ("Please, make WEEKDAY(s) selected");
        }
		
		
		
    });
    // reset button 
     $("#res").click(function () 
    {
        var sel =document.getElementById('date');
        sel.innerHTML =null;
        return true;
    });
    // jQuery UI datepicker
     $('#calendar').datepicker({
        inline: true
        , showWeek: true
        , selectDay: true
        , minDate: 0
        , maxDate: "+36M +30D"
        , dateFormat: 'DD, dd / mm / yy'
        , firstDay: 1
        , showOtherMonths: true
        , dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        , onSelect: function (dateText, inst) 
        {
            // now this resets selections, later here should be call to db or creating new timetable
             $("#timetable table").find('td:nth-child(2)').each(function()
            {
                if ($(this).text() =="booked" ||$(this).text() =="selected")
                $(this).text("available");
                $('td').css("color", 'black');
            });
            var date =$(this).datepicker('getDate');
            // for table header and book button
             dt =$('#date').text(dateText);
            // attempt to select multiple date
             /*var weekDay = [];
 var doc = date.getUTCDay();
 weekDay.push(weekday[date.getUTCDay()]); 
 var day = $('#date').text(weekday[date.getUTCDay()]); */ 
            // getting saved doc from server
             /*var doc = $("<table></table>").load("template.html #template");
 $('#schedule').append(doc); 
 
 moment(dt);*/
        }
    });
});
