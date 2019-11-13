//funzione generale jquery
$( document ).ready(function(){

 //agganciamo al click sul bottone la funzione di callbnack
  $(".fa-microphone").click(function(){

  //ci salviamo il valore dell'input inserito dall'utente
  var messaggio = $(".message").val();
  console.log(messaggio);


  // cloniamo il div che sta dentro template
  var elmentmsg = $("#template .msgsent").clone();

  // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
  elmentmsg.find(".msg").text(messaggio);

  // appendiamo una copia con testo valorizzato del div "msgsent"
  var stampa = $("#verde").append(elmentmsg);

  // ripuliamo il contenuto dell'input, per UX
  $(".message").val("");

//aggiunto piccola animazione sms
  $(".msgsent").animate({
      left: '450px',
      opacity: '0.8',
      height: '50px',
      width: '150px'
    });

  })

  // Funzione che mi permette di cercare un contatto nella barra dei contatti
  $('.search-bar').keyup(function(event){
    var cerca_Nome=$(this).val().toLowerCase();

      $('.friends').each(function(){
        var nomeCercato=$(this).find('b').text().toLowerCase();
        if (nomeCercato.includes(cerca_Nome)) {
          $(this).show();
        }
        else {
          $(this).hide();
        }
      });

  });







 });
