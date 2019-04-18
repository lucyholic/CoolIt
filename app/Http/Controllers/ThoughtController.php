<?php

namespace App\Http\Controllers;

use App\Thought;
use Illuminate\Http\Request;

class ThoughtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $thoughts = Thought::orderBy('expiration_date')->get();
        return response()->json($thoughts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $expiration_date = date('Y-m-d', strtotime("+3 days"));
        $validate = $request->validate([
            'description' => ['required'],
            'priority' => ['required', 'integer', 'between:1,5'], 
        ]);

        $thought = Thought::create([
            'description' => $validate['description'],
            'priority' => $validate['priority'],
            'expiration_date' => $expiration_date
        ]);
        
        return response()->json('Thought added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Thought  $thought
     * @return \Illuminate\Http\Response
     */
    public function show(Thought $thought)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Thought  $thought
     * @return \Illuminate\Http\Response
     */
    public function edit(Thought $thought)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thought  $thought
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thought $thought)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thought  $thought
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thought $thought)
    {
        $thought->delete();
        return response()->json('Thought deleted');
    }
}
