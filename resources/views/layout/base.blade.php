<?php

use App\Classes\Hook;
use App\Services\DateService;
use App\Services\Helper;
use Illuminate\Support\Facades\Auth;

$theme  =   Auth::user()->attribute->theme ?? ns()->option->get( 'ns_default_theme', 'light' );
?>
<!DOCTYPE html>
<html lang="en" class="{{ $theme }}">
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
    @yield( 'layout.base.header' )
    <script>
        /**
         * constant where is registered
         * global custom components
         * @param {Object}
         */
        window.nsExtraComponents     =   new Object;

        /**
         * describe a global Labsdel object
         * @param {object} ns
         */
        window.ns =   { nsExtraComponents };

        /**
         * store the server date
         * @param {string}
         */
        window.ns.date                     =   {
            current : '{{ app()->make( DateService::class )->toDateTimeString() }}',
            serverDate : '{{ app()->make( DateService::class )->toDateTimeString() }}',
            timeZone: '{{ ns()->option->get( "ns_datetime_timezone" ) }}',
            format: `{{ ns()->option->get( 'ns_datetime_format' ) }}`
        }

        /**
         * define the current language selected by the user or
         * the language that applies to the system by default.
         */
        window.ns.language     =   '{{ app()->getLocale() }}';
        window.ns.langFiles     =   <?php echo json_encode( Hook::filter( 'ns.langFiles', [
            'Labsdel'   =>  asset( "/lang/" . app()->getLocale() . ".json" ),
        ]));?>
    </script>
    <script src="{{ asset( ns()->isProduction() ? 'js/lang-loader.min.js' : 'js/lang-loader.js' ) }}"></script>
@include( 'common.header-socket' )
</head>
<body>
    @yield( 'layout.base.body' )
    @section( 'layout.base.footer' )
        @include( '../common/footer' )
    @show
</body>
</html>