<?php

/**
 * Labsdel Controller
 * @since  1.0
**/

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\View;

// use Tendoo\Core\Services\Page;

class OrdersProductsController extends DashboardController
{
    /**
     * Index Controller Page
     * @return  view
     * @since  1.0
    **/
    public function index()
    {
        Page::setTitle( __( 'Unammed Page' ) );
        return View::make( 'NexoPOS::index' );
    }
}

