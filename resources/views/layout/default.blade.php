<?php

use App\Classes\Hook;
use App\Services\DateService;
use App\Services\Helper;

?>
<!DOCTYPE html>
<html lang="en" class="{{ $theme = ( Auth::user()->attribute->theme ?? 'light' ) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! $title ?? __( 'Unamed Page' ) !!}</title>
    <link rel="stylesheet" href="{{ loadcss( 'app.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'css/line-awesome.css' ) }}">
    <link rel="stylesheet" href="{{ loadcss( $theme . '.css' ) }}">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    @yield( 'layout.default.header' )
</head>
<body>
    @yield( 'layout.default.body' )
        @section( 'layout.default.footer' )
    @show
</body>
</html>