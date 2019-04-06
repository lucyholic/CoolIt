<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    protected $fillable = [
        "description",
        "priority",
        "expiration_date",
        "solution_id"
    ];

    public function thoughts()
    {
        return $this->hasMany(Thought::class);
    }

    public function solution()
    {
        return $this->belongsTo(Solution::class);
    }
}
