let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
        console.log("Brasileira");
        break
    case "argentina":
        console.log("Argentina");
        break
    case "uruguaia":
        console.log("Uruguaia");
        break
    case "chilena":
        console.log("Chilena");
        break
    case "colombiana":
        console.log("Colombiana");
        break
    default:
        console.log("Não existe essa nacionalidade em nossos bancos de dados");
}