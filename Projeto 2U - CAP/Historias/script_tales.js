//Variaveis:
let dados_usuario = {
    nome: sessionStorage.getItem('Nome'),
    senha: sessionStorage.getItem('Senha'),
    tema_atual: sessionStorage.getItem('Tema')
}


//Função global para todas as paginas, na qual analisa os dados da sessão para saber se um tema já foi escolhido
window.onload = function (event) {
    document.querySelector(':root').classList.toggle(sessionStorage.getItem('Tema'))

    if (dados_usuario.nome != "" && dados_usuario.senha != "") {
        document.getElementById('userbar').innerHTML = `<p class="username" onclick="SideShow()">${dados_usuario.nome}</p>`
        document.getElementById('username').innerHTML = dados_usuario.nome;
        document.getElementById('userpassword').innerHTML = dados_usuario.senha;
    }
}



//Funções:
//Função responsavel por tonar o menu suspenso visivel, através da atribuição da classe (.show)
function ShowThemes() {
    document.getElementById('dropthemes').classList.toggle('show');
}

//Codigo responsavel por identificar quando o menu suspenso está visivel ou não.
window.onclick = function (event) {
    if (!event.target.matches('.themes')) {
        var dropthemes = document.getElementsByClassName('dropdown_content');
        var i;
        
        for (i = 0; i < dropthemes.length; i++) {
            var openDropdown = dropthemes[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Funções responsáveis por definir o tema escolhido:

//Temas padrões (escuro e claro respectivamente):
function TurnDefaultD() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('dark-theme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('dark-theme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

function TurnDefaultL() {
    if (dados_usuario.tema_atual == "") {
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

//Temas escuros (ensolarado, flamingo, marino respectivamente):
function TurnEnsoD() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('ensolarado-darktheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('ensolarado-darktheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

function TurnFlamD() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('flamingo-darktheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('flamingo-darktheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

function TurnMariD() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('marino-darktheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('marino-darktheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

//Temas claros (ensolarado, flamingo, marino respectivamente):
function TurnEnsoL() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('ensolarado-lighttheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('ensolarado-lighttheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

function TurnFlamL() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('flamingo-lighttheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('flamingo-lighttheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

function TurnMariL() {
    if (dados_usuario.tema_atual == "") {
        document.querySelector(':root').classList.toggle('marino-lighttheme')
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
    else {
        document.querySelector(':root').classList.remove(dados_usuario.tema_atual);
        document.querySelector(':root').classList.toggle('marino-lighttheme');
        dados_usuario.tema_atual = document.querySelector(':root').className;
        sessionStorage.setItem('Tema', dados_usuario.tema_atual);
    }
}

//Fução que abre e fecha o menu lateral (respectivamente):
function SideShow() {
    document.getElementById('sidebar').style.width = "250px";
}

function SideClose() {
    document.getElementById('sidebar').style.width = "0px";
}