module.exports = (info) =>{
    
    let datan = info.dados.map(res=>(
        `
        <div class="itemInfo">
            <p><span class="label">Item:</span> ${res.it_nome}</p>
            <p><span class="label">Quantidade:</span> ${res.qtd}</p>
            <p><span class="label">Preco: </span>$${res.sh_preco.toFixed(2).replace(".", ",")}</p>
        </div>`
    ));

    let datan2 = `${datan}`.replace(/(,[^,]*),/g,"$1")

    return `
        <!doctype html>
        <html>

            <head>

                <style>
                    *{
                        padding:0;
                        margin:0;
                        font-family: Arial, Helvetica, sans-serif;
                        box-sizing:border-box;
                    }

                    p{
                        font-size:10px;
                    }

                    h1  
                    {
                        text-align:center;
                        margin-bottom:20px;
                    }

                    .itemInfo
                    {
                        display:grid;
                        grid-template-columns:1fr 1fr 1fr;
                        align-items:center;
                        justify-content:center;
                        margin-bottom:10px;
                    }

                    .itemInfo p
                    {
                        display:inline-block;
                        font-size:10px;
                        width:20%;
                    }

                    .itemInfo p:first-child
                    {
                        width:40%;
                    }

                    .cliente 
                    {
                        font-weight:bold;
                    }

                    .label 
                    {
                        font-weight:bold;
                    }

                    .pdf-content
                    {
                        width:80%;
                        margin:20px auto;
                    }

                    .address 
                    {
                        margin:20px 0;
                    }
                </style>
            </head>
            <div class="pdf-content">
                <h1>Nota Fiscal</h1>
                <p><span class="cliente">Cliente:</span> ${info.nomeCliente}</p>
                ${datan2}
                <p><span class="label">Total: </span>${info.total.replace(".", ",")}</p>
                <div class="address">
                    <p><span class="label">Supermercado: </span> ${info.nomeMercado}</p>
                    <p>${info.rua}, ${info.numero}</p>
                    <p>${info.cep}</p>
                </div>
 
                <p><span class="label">Nome Entregador: </span> ${info.nomeEntregador}</p>
                <p><span class="label">Codigo de Compras: </span> ${info.codigoCompras}</p>
                <p><span class="label">Data: </span> ${info.data}</p>
            </div>
        </html>
    `
}