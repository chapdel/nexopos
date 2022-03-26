<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function scopeIsActive($query)
    {
        return $query->where("expires_at", null)->orWhere('expires_at', '>', now());
    }
}
