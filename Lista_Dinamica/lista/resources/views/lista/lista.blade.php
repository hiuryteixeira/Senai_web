<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Livvic&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet">
    <link rel='stylesheet' href="<?php echo asset('css/lista.css') ?>">
    
    
    <title>Lista Dinânica</title>
   
</head>
<body>
    <header>
        <h1>Lista Dinâmica</h1>
    </header>
    <main>
        <div class="form">
            <label>NOME:</label>
            <input id="nome" type="text" placeholder="digite o nome">
            <label>IDADE:</label>
            <input id="idade" type="number" placeholder="digite a idade">
            <label>TELEFONE:</label>
            <input id="telefone" type="number" placeholder="digite o telefone">
            <a href="#" onclick="salvar()">SALVAR</a>
        </div>
        <div class="lista">
            <ul>
                <li>
                    LISTA
                </li>              
                    @foreach($listas as $lista)                   
                <li>
                    Nome: {{$lista -> nome}}                   
                    Idade: {{$lista -> idade}}
                    Telefone: {{$lista -> telefone}}
                </li>
                @endforeach
            </ul>
        </div>
    </main>
    <footer>
        <p>
                &#9400 Copyright -  2019 - Profº Wellington Rocha Santos
        </p>
    </footer>
</body>
<script type="text/javascript" src="<?php echo asset ('js/lista.js') ?>"></script>
</html>