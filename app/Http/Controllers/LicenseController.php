<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LicenseController extends Controller
{
    public function show()
    {
        return view( 'pages.setup.welcome', [
            'title'     =>      __( 'Labsdel Gescom &mdash; License Wizard' )
        ]);
    }

    /* public function checkDatabase( Request $request )
    {
        $setup      =   new Setup;
        return $setup->saveDatabaseSettings( $request );
    }

    public function checkDbConfigDefined( Request $request )
    {
        $setup      =   new Setup;
        return $setup->testDBConnexion();
    }

    public function saveConfiguration( ApplicationConfigRequest $request )
    {
        $setup      =   new Setup;
        return $setup->runMigration( $request->all() );
    } */
}
