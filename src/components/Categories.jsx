import React from 'react'

function Categories() {
    return (
        <table class="table table-hover table-striped">
            <thead class="table-dark">
                <tr><th scope="col-1">#</th>
                    <th scope="col-5">Ürün</th>
                    <th scope="col-2">Fiyat($)</th>
                    <th scope="col-2">Adet</th>
                    <th scope="col-2">İşlem</th>
                </tr>
            </thead>
            <tbody>
                <tr
                ><td scope="row">QvMUzFSDPkIjTcnj4x53</td>
                    <td>DC Şarj İstasyonu</td><td>18000</td>
                    <td>
                        <input type="number" min="1" value="1" style="text-align: center; max-width: 80px;" />
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger">Ekle</button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">gFX2Chj0YDxKUuwjt8vv</td>
                    <td>AC Şarj İstasyonu Advanced</td>
                    <td>1290</td>
                    <td>
                        <input type="number" min="1" value="1" style="text-align: center; max-width: 80px;" />
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger">Ekle</button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">hdO8r6z1czcVwf115EW1</td>
                    <td>AC Şarj İstasyonu Basic</td><td>890</td>
                    <td>
                        <input type="number" min="1" value="1" style="text-align: center; max-width: 80px;" />
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger">Ekle</button>
                    </td>
                </tr>
            </tbody></table>
    )
}

export default Categories