Vue.component('home-top-bar-small', {

  template :
  `<div>

      <counter><counter>




  </div>`


});


Vue.component('chips', {

  template : `
  <div class="chips-background">


      <h2 >Uncinetto</h2>


    <div>
      <div>
      <div style="position: relative;width: 18px;height: 18px;left: 80px;top: 4px;background: #FFFFFF;border-radius: 50px;">
      <img alt="del" src="./assets/images/baseline_close_black_48dp.png" style="position: absolute;width: 12px;height: 12px;left: 83px;top: 7px;">
      </div>
    </div>

  </div>`

});



Vue.component('card-carrello', {

  template : `

  <div class="card-background">

    <div>
      <img src="Immagine Prodotto">
    </div>
    <div>
      <h2>Uncinetto Acciaio<h2>
      <br>
      <h2>misura: 0,75 mm</h2>
    </div>

    <div>
        <h1>Quantità</h1>
    </div>

    <div>
        <counter></counter>
    </div>

    <div>
        <button style="display: flex;flex-direction: row;padding: 3px 8px;position: absolute;width: 122px;height: 24px;left: 139px;top: 114px;background: #F7A48B;border-radius: 3px;">
          <h2 Elimina Articolo
            </h2>
        </button>
    </div>

  </div>`

});

Vue.component('card-categorie', {

  template : `

  <div class="card-background">

    <div>
      <h1>Nome Categoria</h1>
    </div>

    <div>
      <img src="Immagine categoria">
    </div>


  </div>`

});


Vue.component('card-categorie-estesa', {

  template : `

  <div class="card-background">

    <div>
      <h1>Nome Categoria</h1>
    </div>

    <div>
      <img src="Immagine categoria">
    </div>

    <div>
      <input type="checkbox" id="materiale1" name="materiale1" value="Materiale">
      <label for="materiale1"> Materiale 1</label><br>
      <input type="checkbox" id="materiale2" name="materiale2" value="Materiale">
      <label for="materiale2"> Materiale 2</label><br>
      <input type="checkbox" id="materiale3" name="materiale3" value="Materiale">
      <label for="materiale3"> Materiale 3</label><br>
    </div>
<br>
    <div>
        <button>
          <h2>Vai</h2>
        </button>
    </div>

  </div>`

});





















Vue.component('prod-attivo', {

  template : `

  <div class="card-background">

    <div>
      <h2>Uncinetto Acciaio<h2>
      <br>
      <h2>misura: 0,75 mm</h2>
    </div>

    <div>
        <h1>prezzo</h1>
    </div>

    <div>
        <h1>info</h1>
    </div>

    <div>
        <h1>icona cuore</h1>
    </div>

    <div>
        <counter></counter>
    </div>

    <div>
    <button style="display: flex;flex-direction: row;padding: 3px 8px;position: absolute;width: 104px;height: 18px;left: 16px;top: 3px;background: #F7A48B;border-radius: 3px;">
      <h2 Aggiungi
      </h2>
    </button>

    </div>

  </div>`

});







Vue.component('prod-disattivo', {

  template : `

  <div class="card-background">

    <div>
      <h2>Uncinetto Acciaio<h2>
      <br>
      <h2>misura: 0,75 mm</h2>
    </div>

    <div>
        <h1>prezzo</h1>
    </div>

    <div>
        <h1>info</h1>
    </div>

    <div>
        <h1>icona cuore</h1>
    </div>

    <div>
    <button style="display: flex;flex-direction: row;padding: 3px 8px;position: absolute;width: 104px;height: 18px;left: 16px;top: 3px;background: rgba(247, 164, 139, 0.5);border-radius: 3px;">
      <h2 Non disponibile
      </h2>
    </button>

    </div>

  </div>`

});





Vue.component('prod-scontato', {

  template : `

  <div class="card-background">

    <div>
      <h2>Uncinetto Acciaio<h2>
      <h4>prezzo scontato<h4>
      <br>
      <h2>misura: 0,75 mm</h2>
    </div>

    <div>
        <h1>prezzo</h1>
    </div>

    <div>
        <h1>info</h1>
    </div>

    <div>
        <h1>icona cuore</h1>
    </div>

    <div>
        <counter></counter>
    </div>

    <div>
    <button style="display: flex;flex-direction: row;padding: 3px 8px;position: absolute;width: 104px;height: 18px;left: 16px;top: 3px;background: #F7A48B;border-radius: 3px;">
      <h2 Aggiungi
      </h2>
    </button>

    </div>

  </div>`

});








Vue.component('icona-utente', {

  template : `
  <div class="color:white">

    <div>
      <h2>vector<h2>
    </div>
        <div>
          <div style="position: absolute;left: 88.89%;right: 4.44%;top: 6.25%;bottom: 90%;background: #FFFFFF;">
          <img alt="file:///C:/Users/AURI/Downloads/perm_identity-24px%20(2).svg" src="." style="width:24px;height:24px;">
          </div>
    <div>
      <
    </div>

  </div>`

});







Vue.component('counter', {

  template:`
  <div>
    <button v-on:click="remove()"><img src="./assets/images/baseline_remove_black_48dp 1.png" alt=""></button>
    <h1> {{count}} </h1>
    <button v-on:click="count++"><img src="./assets/images/baseline_add_black_48dp 1.png" alt=""></button>
  </div>
`,
data: function () {
    return {
      count: 0
    }
  },
  methods: {
    remove: function(){
      while (this.count > 0) {
        return this.count--
      }
    }
  }


});

















new Vue({
  el  : '#vue-app',

});
