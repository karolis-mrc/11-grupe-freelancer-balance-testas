renderTable('#stalas', account);
function renderTable ( target, list ) {
    let HTML = '';
   

    for ( let i=0; i<=list.length; i++) {
         table = list[i];

        HTML += `<div class="table-content">
                    <div class="table-row">
                        <div class="cell">1</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">150.00 Eur</div>
                        <div class="cell">-</div>
                        <div class="cell">150.00 Eur</div>
                    </div>`;
    }
       return document.getElementById('stalas').innerHTML = HTML;
       
} 
