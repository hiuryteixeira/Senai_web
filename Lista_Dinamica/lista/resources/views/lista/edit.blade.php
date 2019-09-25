<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
        <div>
            @if($errors->any())
                <div>
                     <ul>
                        @foreach($errors->all() as $erro)                        
                        <li>    
                            {{$erro}}
                        </li>
                        @endforeach        
                     </ul>               
                </div>
            @endif
        </div>
        <form action="{{ route('lista_dinamica.update', [$item -> id] ) }}" class="form"  method="POST">
            
            <input type="hidden" name="_method" value="PUT">

            {{ csrf_field() }}
            <label>NOME:</label>
            <input id="nome" name="nome"type="text" value="{{ old('item', $item -> nome) }}">
            <label>IDADE:</label>
            <input id="idade" name="idade" type="number" value="{{ old('item', $item -> idade) }}">
            <label>TELEFONE:</label>
            <input id="telefone" name="telefone" type="number" value="{{ old('item', $item -> telefone) }}">
            <button type="submit">Atualizar</button>
        </form>
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
                    <a href="{{ route('lista_dinamica.edit', [$lista -> id]) }}">Editar</a>                   
                    <a href="{{ route('lista_dinamica.destroy', [$lista -> id]) }}">Excluir</a>
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
<script></script>
</html>