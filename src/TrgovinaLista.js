import React from 'react';
import Artikl from './TrgovinaArtikl';

function Tablica(props)
{
    return(
        <>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Naziv</th>
                    <th>Proizvodac</th>
                    <th>Model</th>
                    <th>Cijena</th>
                    <th>Kolicina</th>
                    <th>Kosarica/upit</th>
                </tr>
            </thead>
            <tbody>
                <Artikl/>
            </tbody>
            </table>
        </>
        )
    
}
export default Tablica;