const posts = [
 {      
     title: "Whey-Protein",
        content: "A proteína de soro de leite é uma mistura de proteínas isoladas de soro de leite, o material líquido criado como subproduto da produção de queijo. As proteínas consistem em α-lactalbumina, β-lactoglobulina, albumina sérica e imunoglobulinas."
 },    
 {
     title: "Creatina",
     content: "Creatina é um composto de aminoácidos responsável por trazer diversos benefícios para o corpo humano. Estudos mostram que a creatina pode aumentar a massa muscular, força e desempenho no exercício, além de efeitos positivos em doenças neurológicas e outras doenças crônicas."
 },
 { 
     title: "BCAA",
     content: "O BCAA é uma sigla para Branched-Chain Amino Acids, que, em tradução literal, significa cadeia ramificada de aminoácidos. Ele é um suplemento que funciona como uma fonte de aminoácidos, os quais, por sua vez, são compostos capazes de desempenhar diferentes funções no organismo."
 },   
 {
    title: "Albumina",
    content: "Em linhas gerais, a albumina tem como principal finalidade contribuir para o ganho de massa muscular. Isso se dá justamente pelo elevado valor proteico."
 },
];

const envelope = document.getElementById("posts");

for (var i = 0; i < posts.length; i ++) {
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h2");
    title.classList.add("article-title");

    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement("p");
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    envelope.appendChild(article);

}


