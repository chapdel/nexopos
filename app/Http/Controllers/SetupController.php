<?php

/**
 * Labsdel Controller
 * @since  1.0
**/

namespace App\Http\Controllers;

use App\Http\Requests\ApplicationConfigRequest;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Services\Setup;
use Illuminate\Support\Facades\Http;

class SetupController extends Controller
{
    public function welcome()
    {
        return view( 'pages.setup.welcome', [
            'title'     =>      __( 'Labsdel Gescom &mdash; Setup Wizard' )
        ]);
    }

    public function checkDatabase( Request $request )
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
        $r = Http::acceptJson()->get(env('LICENSE_ENDPOINT', 'http://license.labsdel.com'), [
            "company" => $request->company,
            "license" => $request->code
        ]);

        if($r->ok()){
            if($r->status() == 200) {
                $setup      =   new Setup;
                 return $setup->runMigration( $request->all() );
            }else {
                $data = $r->object();
                return response()->json([
                    'name'              =>   'hostname',
                    'message'           => $data->message,
                    'status'            =>  'failed'
                ],403) ;
            }
        }else {
            return  response()->json([
                'name'              =>   'hostname',
                'message'           =>  __( 'Unable to reach the license server' ),
                'status'            =>  'failed'
            ],403);
        }
    }
}

