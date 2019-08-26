<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="{{ mix('js/app.js') }}" defer></script>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <title>Cool It</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>
        <div id="app">
            <idea-card></idea-card>
        </div>
    </body>
</html>
