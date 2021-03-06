//funzione generale jquery
$( document ).ready(function(){

 // Funzione che mi permette di inviare il messaggio dell'utente nel caso si prema il tasto Invio, cambiando anche l'icona vicino all'input
 // invio mess

  $('.message').keydown(function(){
   if (event.which==13) {
     sendMsg();
   }
   else {
     $('.writing i').addClass("fa-paper-plane");
   }
 });


 // Funzione con cui vado a ricambiare l'icona una volta che la barra perde il focus
 $(".message").focusout(function(){
   $(".writing i").removeClass("fa-paper-plane");
 });


 // Funzioni che mi permettono di inviare un messaggio sullo schermo
function sendMsg(){
  var messaggio = $(".message").val();
  var elmentmsg = $("#template .msgsent ").clone();
      elmentmsg.find(".msg").text(messaggio);
      elmentmsg.find(".time-message").text(ora);
  var stampa = $(".conversation.is-active").append(elmentmsg);
  $(".message").val("");

  //aggiunto piccola animazione sms
  $(".msgsent").animate({
    left: '480px',
    opacity: '0.8',
    height: '40px',
    width: '150px'
  });
  // funzione per generare risposta automatica
  setTimeout(function () {
    var answer = $("#template .sendbyCPU").clone();
    answer.find(".msg").text("Ciao, come stai?");
    answer.find(".time-message").text(ora);
    $(".conversation.is-active").append(answer);
  }, 1000);
}
  

  


 // Funzione che mi permette di cercare un contatto nella barra dei contatti
 $('.search-bar').keyup(function(event){
   var cercaNome=$(this).val().toLowerCase();

     $('.friends').each(function(){
       var nomeCercato=$(this).find('b').text().toLowerCase();
       if (nomeCercato.includes(cercaNome)) {
         $(this).show();
       }
       else {
         $(this).hide();
       }
   });
 });

  // Creo una variabile che mi permette di avere l'ora e i minuti precisi da mettere nei messaggi
  var time= new Date();
  var hours=aggiungiZero(time.getHours());
  var minutes=aggiungiZero(time.getMinutes());
  var ora= hours+":"+ minutes;
  // Funzione che uso per inserire lo zero davanti al numero nel caso i minuti o le ore siano minori di 10
  function aggiungiZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }


  // Funzione che mi permette di aprire un contatto della barra
  $('.friends').click(function(){
    var foto=$(this).find("img").attr('src');
    var nome=$(this).find("b").text();
    $('.info-utente img').attr('src',foto);
    $('.info-utente p').text(nome);
  });


  // Funzione che mi permette di associare un div ad un altro
  $('.friends').click(function () {

    if (!$(this).hasClass('is-active')) {
      $('.friends').removeClass('is-active');
      $(this).addClass('is-active');

      var $currentDataName = $(this).attr('chat');
      console.log($currentDataName);

      var go = $('.conversation').removeClass('is-active');
      console.log(go);
      var res = $('.conversation[chat="' + $currentDataName + '"]').addClass('is-active');
      console.log(res);
    }
  }); 

  // al click su un messaggio si apre la finestra cancella messaggio


  $(document).on('click', '.msgsent i.fas.fa-angle-down', function() {
   $(this).parents('.msgsent').find('.message-options').toggle();
  })
  //funzione per cancellare messaggio
  $(document).on('click', '.msgsent .delete', function() {
   $(this).parents('.msgsent').fadeOut();
  });


  $(document).on('click', '.sendbyCPU i.fas.fa-angle-down', function() {
   $(this).parents('.sendbyCPU').find('.message-options').toggle();
  })
  //funzione per cancellare messaggio
  $(document).on('click', '.sendbyCPU .delete', function() {
   $(this).parents('.sendbyCPU').fadeOut();
  });


 });
