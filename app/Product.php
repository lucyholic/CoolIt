<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        "description",
        "solution_id",
        "link"
    ];

    public function solution()
    {
        return $this->belongsTo(Solution::class);
    }
}
