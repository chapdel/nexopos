<?php

/**
 * Labsdel Controller
 * @since  1.0
**/

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Services\ExpenseService;


class HomeController extends DashboardController
{
    public function welcome()
    {
        return View::make( 'welcome', [
            'title'     =>      sprintf( __( 'Welcome &mdash; Labsdel %s'), config( 'nexopos.version' ) )
        ]);
    }
}