$(document).ready(function() { $(window).bind('pageshow', function(event) { if (event.originalEvent.persisted) { $('.t-records').addClass('t-records_visible'); /* window.location.reload(); */ } }); $("#rec418484201").attr('data-animationappear','off'); $("#rec418484201").css('opacity','1'); $('.t-records').addClass('t-records_animated'); setTimeout(function( ){ $('.t-records').addClass('t-records_visible'); }, 200); }); 