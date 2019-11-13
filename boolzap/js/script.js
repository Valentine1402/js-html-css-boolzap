//funzione generale jquery
$( document ).ready(function(){

 // Funzione che mi permette di inviare il messaggio dell'utente nel caso si prema il tasto Invio, cambiando anche l'icona vicino all'input
 // invio mess

 $('.message').keydown(function(event){
   if (event.which==13) {
     inviaMessaggioUtente();
   }
   else {
     $('.writing i').addClass("fa-paper-plane");
   }
 });

 // Funzione con cui vado a ricambiare l'icona una volta che la barra perde il focus
 $(".message").focusout(function(){
   $(".writing i").removeClass("fa-paper-plane");
 });


 // azioni che mi permettono di inviare un messaggio sullo schermo
  $(".fa-microphone").click(function(){
  var messaggio = $(".message").val();
  var elmentmsg = $("#template .msgsent").clone();
  elmentmsg.find(".msg").text(messaggio);
  var stampa = $("#verde").append(elmentmsg);
  $(".message").val("");
  //aggiunto piccola animazione sms
  $(".msgsent").animate({
      left: '450px',
      opacity: '0.8',
      height: '40px',
      width: '150px'
    });
    // funzione per generare risposta automatica
    setTimeout(function () {
     var answer = $("#template .sendbyCPU").clone();
     answer.find(".msg").text("Ciao, come stai?");
     $("#bianco").append(answer);
    }, 1000);
  })


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


});
