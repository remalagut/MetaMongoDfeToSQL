# MetaMongoDfeToSQL
Script nodejs para geração script SQL Server a partir de backup da coleção ArmazenamentoDFe.


* Exporte o Backup da coleção ArmazenamentoDFe do MongoDB;
* salve o arquivo como ArmazenamentoDFe.json e coloque na mesma pasta do index.js
* com o node instalado execute no terminal node index.js
* será gerado o arquivo scriptFinal.txt com os inserts, se tiver detalhes de aspas simples nos dados adicionais da nota, será necessário tratar no txt para que os comandos sql fiquem válidos, pode ser tratado no notepad++ com "substituir todos" pelo padrão da string inválida

PS: Testado com blocos de até 300mb de ArmazenamentoDFe
