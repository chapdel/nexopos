<?php

namespace App\Http\Controllers;

use App\Crud\CashFlowHistoryCrud;
use App\Models\CashFlow;

class BankingController extends Controller
{
    public function cashFlowList()
    {
        return CashFlowHistoryCrud::table();
    }

    public function createCashFlow()
    {
        return CashFlowHistoryCrud::form();
    }

    public function editCashFlow( CashFlow $cashFlow )
    {
        return CashFlowHistoryCrud::form( $cashFlow );
    }
}
