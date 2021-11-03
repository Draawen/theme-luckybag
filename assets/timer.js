(function () {
  if (window.location.href.indexOf("product") > -1) {
      return;
    }
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  var displayTime = new Date().getHours();
  //   let birthday = "Jun 22, 2022 15:00:00",
  var today = new Date();
  var active = true;
  //Hours of expiration
  let birthday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 0, 0);

  countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    

    // Hours to Display 
    if (displayTime >= 8 && displayTime < 16 && today.getDay() && today.getDay() != 6) {

      active = true;
      
      let now = new Date().getTime(),
          distance = countDown - now;

//       document.getElementById("days").innerText = (Math.floor(distance / (day))),
        document.getElementById("hours").innerText = (Math.floor((distance % (day)) / (hour))),
        document.getElementById("minutes").innerText = (Math.floor((distance % (hour)) / (minute))),
        document.getElementById("seconds").innerText = (Math.floor((distance % (minute)) / second));

      //do something later when date is reached
      if (distance < 0 && active) {
        document.getElementById("countdown").style.display = "none";
        clearInterval(x);
        active = false;
      }
    }
    else
      if (active) {
        document.getElementById("countdown").style.display = "none";
        active = false;
      }
    //seconds
  }, 0)
}());

/*
Use of this code is hereby granted to anyone. No attribution is required.
********************************************************
Usage Sample:

<script language="JavaScript">
TargetDate = "12/31/2020 5:00 AM";
BackColor = "palegreen";
ForeColor = "navy";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
FinishMessage = "It is finally here!";
</script>
*/

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  if (LeadingZero && s.length < 2)
    s = "0" + s;
  return "<b>" + s + "</b>";
}

function CountBack(secs) {
  if (secs < 0) {
    document.getElementById("cntdwn").innerHTML = FinishMessage;
    return;
  }
  DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
  DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
  DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
  DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));

  document.getElementById("cntdwn").innerHTML = DisplayStr;
  if (CountActive)
    setTimeout("CountBack(" + (secs+CountStepper) + ")", SetTimeOutPeriod);
}

function putspan(backcolor, forecolor) {
 document.write("<span id='cntdwn' style='background-color:" + backcolor +
                "; color:" + forecolor + "'></span>");
}

var d = new Date();
d.setHours(24,0,0,0);
//TargetDate = "01/02/2020 00:00 AM";
TargetDate = d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear()+" 12:00 AM";
BackColor = false;
ForeColor = "#e53a3a";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
// DisplayFormat = "%%H%%h %%M%%m %%S%%s";
DisplayFormat = "%%M%%:%%S%%";

// FinishMessage = " FIN DE L'OFFRE ! ";
FinishMessage = " quelques ";


if (typeof(BackColor)=="undefined")
  BackColor = "white";
if (typeof(ForeColor)=="undefined")
  ForeColor= "black";
if (typeof(TargetDate)=="undefined")
  TargetDate = "12/31/2020 5:00 AM";
if (typeof(DisplayFormat)=="undefined")
  DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
if (typeof(CountActive)=="undefined")
  CountActive = true;
if (typeof(FinishMessage)=="undefined")
  FinishMessage = "";
if (typeof(CountStepper)!="number")
  CountStepper = -1;
if (typeof(LeadingZero)=="undefined")
  LeadingZero = true;


CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
  CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
putspan(BackColor, ForeColor);
var dthen = new Date(TargetDate);
var dnow = new Date();
if(CountStepper>0)
  ddiff = new Date(dnow-dthen);
else
  ddiff = new Date(dthen-dnow);
gsecs = Math.floor(ddiff.valueOf()/1000);
// CountBack(gsecs);

CountBack(600);
