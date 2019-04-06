<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thought extends Model
{
    protected $fillable = [
        "description",
        "priority",
        "expiration_date",
        "idea_id"
    ];

    public function idea()
    {
        return $this->belongsTo(Idea::class);
    }

}
