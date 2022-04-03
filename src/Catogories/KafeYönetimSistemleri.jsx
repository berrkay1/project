import React, { useContext, useState } from 'react'
import MarsisContext from '../MarsisContexApi';

function KafeYönetimSistemleri() {
    const { valuesKafe } = useContext(MarsisContext);

    const [sepet, setsepet] = useState([]);



    const totalPrice = sepet.reduce((total, item) => (total = total + item.fiyat * item.adet), 0)


    const addItem = (item) => {
        let input = document.getElementById("count");
        const newsepet = [
            ...sepet,
            { id: item.id, ürün: item.ürün, fiyat: item.fiyat, adet: input.value }]
        setsepet(newsepet);


    }

    const deleteItem = (id) => {

        const newsepet = sepet.filter(itemremove => itemremove.id !== id);
        setsepet(newsepet);
    };




    return (
        <div className="catogories">
            <h3>Kafe Yönetim Sistemleri</h3>
            <hr />
            <h4>Ürünler</h4>
            <table className="table table-hover table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col-1">#</th>
                        <th scope="col-5">Ürün</th>
                        <th scope="col-2">Fiyat($)</th>
                        <th scope="col-2">Adet</th>
                        <th scope="col-2">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {valuesKafe.map(item => (
                        <tr>

                            <td >{item.id}</td>
                            <td>{item.ürün}</td>
                            <td>{item.fiyat}</td>
                            <td>
                                <input id='count' type="number" min="1" name='count' />
                            </td>
                            <td>
                                <button type="button"
                                    onClick={() => addItem(item)} className="btn btn-danger">Ekle</button>
                            </td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
            <div>
                <div>
                    <h4>Sepettekiler</h4>
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col-1">#</th>
                                <th scope="col-5">Ürün</th>
                                <th scope="col-2">Fiyat($)</th>
                                <th scope="col-2">Adet</th>
                                <th scope="col-2">İşlem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sepet.map(sepet => (
                                <tr>
                                    <td >{sepet.id}</td>
                                    <td>{sepet.ürün}</td>
                                    <td>{sepet.fiyat}</td>
                                    <td>{sepet.adet}</td>
                                    <td>
                                        <button type="button" onClick={() => deleteItem(sepet.id)} className="btn btn-danger">Çıkar</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <h5>Toplam:{totalPrice}$</h5>
                <hr />
                {/* <button>
                                    <img src="/static/media/downloadexcel.be8b1678006a77f813d1.png" alt="" width="45" height="45"/>Excel Olarak Kaydet
                                </button>
                                <button>
                                    <img src="/static/media/downloadpdf.10fecd68cc62fe539f11.png" alt="" width="45" height="45"/> PDF Olarak Kaydet
                                </button> */}

            </div>
        </div>
    )
}

export default KafeYönetimSistemleri