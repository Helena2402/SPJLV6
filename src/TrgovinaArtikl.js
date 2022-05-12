import React from 'react';
import artikl from './artikli.json';

function Kosarica(props)
{
    return <button type="button" class="btn btn-success" onClick={()=>dostupnaKolicina(props.art)}>Dodaj u kosaricu</button>
}
function Upit()
{
    return <button type="button" class="btn btn-secondary" onClick={nedostupno}>Posalji upit</button>
}

function Artikl(props)
{
    
        const lista = artikl.map(x => 
        <tr key={x.Id}>
        <td>{x.Id}</td>
        <td>{x.Naziv}</td>
        <td>{x.Proizvodac}</td>
        <td>{x.Model}</td>
        <td>{x.Cijena} kn</td>
        <td>{x.Kolicina}</td>
        <td>{(x.Kolicina > 0) ? <Kosarica art={x.Kolicina}/> : <Upit/>}</td>
        </tr>
        )
        
        return (lista);
    
}
export default Artikl;

function dostupnaKolicina(svojstva){
    alert("Dostupno " + svojstva + " proizvoda");

}

function nedostupno(){
    alert ("Proizvod nije dostupan");
}