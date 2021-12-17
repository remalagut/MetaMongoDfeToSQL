const fs = require('fs');

let scriptFinal = ``;
let rawData = fs.readFileSync('ArmazenamentoDFe.json', 'utf8');
let documentos = JSON.parse(rawData);
const _prefix = 'INSERT INTO [Fiscal.DFe].ArmazenamentoDFe (IdEmpresa,IdUltimoUsuario,IdDocumentoFiscal,IdDestinatario,TipoDocumento,ModeloDocumento,StatusDocumento,ChaveAcesso,Serie,Numero,DataMovimentacao, ValorDocumento,XmlProcessado,XmlCancelamento,XmlCartaCorrecao,XmlInutilizacaoEnvio,XmlInutilizacaoRetorno,NumeroInicialInutilizacao, NumeroFinalInutilizacao, IdUsuarioCancelamento, UsuarioCancelamento, XmlEncerramentoMDFe, XmlCancelamentoEnvEvento,XmlCancelamentoRetEnvEvento,XmlCancelamentoProcEvento) VALUES (';
const _sufix = `);\n`;
for (const documento of documentos) {
    let IdEmpresa = documento.IdEmpresa,
IdUltimoUsuario = documento.IdUltimoUsuario,
IdDocumentoFiscal = documento.IdDocumentoFiscal,
IdDestinatario = documento.IdDestinatario,
TipoDocumento = documento.TipoDocumento,
ModeloDocumento = documento.ModeloDocumento,
StatusDocumento = documento.StatusDocumento,
ChaveAcesso = documento.ChaveAcesso,
Serie = documento.Serie,
Numero = documento.Numero,
DataMovimentacao = documento.DataMovimentacao,
 ValorDocumento = documento.ValorDocumento,
 XmlProcessado = documento.XmlProcessado,
 XmlCancelamento = documento.XmlCancelamento,
 XmlCartaCorrecao = documento.XmlCartaCorrecao,
 XmlInutilizacaoEnvio = documento.XmlInutilizacaoEnvio,
 XmlInutilizacaoRetorno = documento.XmlInutilizacaoRetorno,
 NumeroInicialInutilizacao = documento.NumeroInicialInutilizacao,
 NumeroFinalInutilizacao = documento.NumeroFinalInutilizacao,
  IdUsuarioCancelamento = documento.IdUsuarioCancelamento,
   UsuarioCancelamento = documento.UsuarioCancelamento,
    XmlEncerramentoMDFe = documento.XmlEncerramentoMDFe,
     XmlCancelamentoEnvEvento = documento.XmlCancelamentoEnvEvento,
     XmlCancelamentoRetEnvEvento = documento.XmlCancelamentoRetEnvEvento,
     XmlCancelamentoProcEvento  = documento.XmlCancelamentoProcEvento;
     
let insertDadosDocumento = [
    getParameterValueOrNull(IdEmpresa,false),
    getParameterValueOrNull(IdUltimoUsuario,false),
    getParameterValueOrNull(IdDocumentoFiscal,false),
    getParameterValueOrNull(IdDestinatario,false),
    getParameterValueOrNull(TipoDocumento,false),
    getParameterValueOrNull(ModeloDocumento,false),
    getParameterValueOrNull(StatusDocumento,false),
    getParameterValueOrNull(ChaveAcesso),
    getParameterValueOrNull(Serie),
    getParameterValueOrNull(Numero),
    getParameterValueOrNull(DataMovimentacao.$date),
    getParameterValueOrNull(ValorDocumento,false),
    getParameterValueOrNull(XmlProcessado),
    getParameterValueOrNull(XmlCancelamento),
    getParameterValueOrNull(XmlCartaCorrecao),
    getParameterValueOrNull(XmlInutilizacaoEnvio),
    getParameterValueOrNull(XmlInutilizacaoRetorno),
    getParameterValueOrNull(NumeroInicialInutilizacao),
    getParameterValueOrNull(NumeroFinalInutilizacao),
    getParameterValueOrNull(IdUsuarioCancelamento),
    getParameterValueOrNull(UsuarioCancelamento),
    getParameterValueOrNull(XmlEncerramentoMDFe), 
    getParameterValueOrNull(XmlCancelamentoEnvEvento),
    getParameterValueOrNull(XmlCancelamentoRetEnvEvento),
    getParameterValueOrNull(XmlCancelamentoProcEvento)
].join(`,`);
let insertDocumento = _prefix + insertDadosDocumento + _sufix;
    scriptFinal += insertDocumento;
    console.log('Adicionado documento id ' + IdDocumentoFiscal + ".");
}



fs.writeFileSync('./finalScript.txt', scriptFinal);

function getParameterValueOrNull(val, string = true) {
    let surrounder = "'";
    if(val) {
        if(string === true) {
            return `'`+ val +`'`;
        } else {
            return val;
        }
    } else {
    return "null";
}

}
