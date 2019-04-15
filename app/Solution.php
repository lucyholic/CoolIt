<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $fillable = [
        'description'
    ];

    public function product() {
        return $this->hasOne(Product::class);
    }

    public function ideas() {
        return $this->hasMany(Idea::class);
    }
}
